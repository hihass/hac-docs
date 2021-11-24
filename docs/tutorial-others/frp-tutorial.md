---
sidebar_position: 1
---
# frp使用教程
## 目录
1. [安装](#安装)
    - [frps安装及任务配置](#frps安装及任务配置)
    - [frpc安装及任务配置](#frpc安装及任务配置)
    - [systemctl管理服务](#systemctl管理服务)
2. [配置](#配置)
    - [frps配置](#frps配置)
    - [frpc配置](#frpc配置)
    - [nginx代理配置](#nginx代理配置)

## 安装

### frps安装及任务配置
配置systemctl来控制frps  
创建frps.service
```
sudo vim /lib/systemd/system/frps.service
```
在frps.service里添加以下内容
```
[Unit]
Description=frps service
After=network.target syslog.target net-work-online.target
Wants=network.target

[Service]
Type=simple
ExecStart=/usr/local/frps/frps -c /usr/local/frps/frps.ini
Restart=on-failure
RestartSec=15s

[Install]
WantedBy=multi-user.target
```
***注意"ExecStart="之后的路径为frps实际安装路径(本文以安装到/usr/local/为例)***  
***此处直接运行systemctl命令会提示需要重载，使用`systemctl daemon-reload`命令重载后再进行操作。***

### frpc安装及任务配置
创建frpc.service
```
sudo vim /lib/systemd/system/frpc.service
```
在frpc.service里添加以下内容
```
[Unit]
Description=frps service
After=network.target syslog.target net-work-online.target
Wants=network.target

[Service]
Type=simple
ExecStart=/usr/local/frpc/frpc -c /usr/local/frpc/frpc.ini
Restart=on-failure
RestartSec=15s

[Install]
WantedBy=multi-user.target
```
***注意"ExecStart="之后的路径为frpc实际安装路径(本文以安装到/usr/local/为例)***  
***此处直接运行systemctl命令会提示需要重载，使用`systemctl daemon-reload`命令重载后再进行操作。***

### systemctl管理服务
启动
```
sudo systemctl start frpc  
```
关闭
```
sudo systemctl stop frpc  
```
重启
```
sudo systemctl restart frpc  
```
查看状态
```
sudo systemctl status frpc  
```
设置开机自动启动
```
sudo systemctl enable frpc  
```
***其中`frpc`是创建的开启启动服务的名称，将`frpc`替换为`frps`则可以完成对frp服务器服务的管理。（本文将frp服务器的服务命名为frps，将frp客户端的服务命名为frpc）***


## 配置

### frps配置

为了实现通过自定义域名访问内网服务，需要使用http穿透，在设置中指定`vhost_http_port = 8080`，设置访问http服务的端口，参数`subdomain_host = hicube.top`指定访问http服务的一级域名。则最终的http服务访问路径为`http://{subdomain}.{subdomain_host}:{vhost_http_port}`,其中subdomain由frpc中的subdomain值指定。

***在frp的整个设置过程中只使用http对外暴露内部的服务，不实用https进行暴露，主要的原因是使用https进行暴露的话需要在frpc中指定证书，为了使用ftps提供统一的证书，https服务由nginx的反向代理服务提供。具体配置参见[nginx代理配置](#nginx代理配置)。***

目前 frpc 和 frps 之间支持两种身份验证方式，token 和 oidc，默认为 token。

通过 frpc.ini 和 frps.ini 的 [common] 段落中配置 authentication_method 来指定要使用的身份验证方式。

只有通过身份验证的客户端(frpc)才能成功连接 frps。

Token  
基于 Token 的身份验证方式比较简单，需要在 frpc 和 frps 的 [common] 段落中配置上相同的 token 参数即可。

OIDC  
OIDC 是 OpenID Connect 的简称，验证流程参考 [Client Credentials Grant](https://datatracker.ietf.org/doc/html/rfc6749#section-4.4)。

启用这一验证方式，参考配置如下：
```
# frps.ini
[common]
authentication_method = oidc
oidc_issuer = https://example-oidc-issuer.com/
oidc_audience = https://oidc-audience.com/.default 
```
```
# frpc.ini
[common]
authentication_method = oidc
oidc_client_id = 98692467-37de-409a-9fac-bb2585826f18 # Replace with OIDC client ID
oidc_client_secret = oidc_secret
oidc_audience = https://oidc-audience.com/.default
oidc_token_endpoint_url = https://example-oidc-endpoint.com/oauth2/v2.0/token
```

使用的frps.ini配置
```
[common]
bind_port = 33289
token = DBE6F6883EC76EF9F4A986BD981052BDB83AD3AB

vhost_http_port = 8080
#vhost_https_port = 443

# authentication_method 指定frpc使用什么身份认证方法与frps进行身份认证。
# If "token" is specified - token will be read into login message.
# If "oidc" is specified - OIDC (Open ID Connect) token will be issued using OIDC settings. 默认值为"token".
authentication_method = token

# if subdomain_host is not empty, you can set subdomain when type is http or https in frpc's configure file
# when subdomain is test, the host used by routing is test.frps.com
subdomain_host = hicube.top

# tls_only specifies whether to only accept TLS-encrypted connections. By default, the value is false.
tls_only = false

# only allow frpc to bind ports you list, if you set nothing, there won't be any limit
allow_ports = 2000-3000,3001,3003,4000-50000

# tls_cert_file = server.crt
# tls_key_file = server.key
# tls_trusted_ca_file = ca.crt

# 日志的记录级别，分为debug, info, warn, error四级，日志保存的天数，默认3天
log_file = /usr/local/frp/frps/frps.log
log_level = debug
log_max_days = 3
```

### frpc配置

使用的frpc.ini配置文件
```
[common]
#服务器参数
#frps服务器地址
server_addr = hicube.top
#frps服务器链接端口
server_port = 33289

#认证配置
#认证token
token = DBE6F6883EC76EF9F4A986BD981052BDB83AD3AB

# 如果tls_enable为true, frpc 启用tls加密链接
tls_enable = true

#服务配置
[web]
type = http
local_port = 3000
subdomain = xcode
#开启frps和frpc之间的通信内容加密和压缩
use_encryption = true
use_compression = true
```

### nginx代理配置

为了对外使用https暴露服务，同时由frps提供统一的证书，考虑借助nginx的反向代理来提供https服务。

二级子域名
```
server_name   ~^(?<subdomain>.+).hicube.top$;  
```

proxy_pass设置
```
proxy_pass http://127.0.0.1:8080;
proxy_set_header Host  $host;  
```
***直接使用`proxy_pass http://$host:8080`会导致nginx505的报错，需要使用`proxy_pass http://127.0.0.1:8080`才可以正常工作，但是为了得到frps的正确响应，需要使用proxy_set_header将标头中的Host替换为实际请求的host值。***  
