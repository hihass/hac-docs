---
sidebar_position: 1
---

# 安装说明
Home Assistant支持的安装形式很多，不同的安装形式可能会导致功能的差异。对于不知道如何选择的用户我们建议使用推荐的安装方式进行安装。

## 推荐的安装形式
使用Raspberry Pi安装Home Assistant Operating System的形式是我们（同时也是HA官方）推荐的方式。

## Home Assistant可用的安装方式
Home Assistant提供了四种不同的安装方式，下面两种方式是官方推荐的：
- Home Assistant Operating System: 专门为Home Assistant打造的一个最小化的造作系统。系统内置Supervisor来管理 Home Assistant Core和插件（Add-ons）。 是最为推荐的安装方式。
- Home Assistant Container: 独立的基于容器的Home Assistant Core安装方式 (例如：Docker容器)。

对于有经验的用户来说还有另外另种安装方式可以选择:
- Home Assistant Supervised: 手动安装Supervisor。
- Home Assistant Core: 使用Python虚拟环境手动安装HA Core。

下表列出了上述四种安装方式下所支持的功能的差异：

|  | OS | Container |  Core | Supervised | 
| :---: | :---: | :---: | :---: | :---: |  
| **自动化控制** | Yes | Yes | Yes | Yes |
| **Lovelace前端** | Yes | Yes | Yes | Yes |
| **集成接入** | Yes | Yes | Yes | Yes |
| **蓝图功能** | Yes | Yes | Yes | Yes |
| 使用监督者（Supervisor）管理 | Yes | - | - | Yes |
| 支持插件（Add-ons） | Yes | - | - | Yes |
| 备份功能 | Yes | - | - | Yes |
| 管理宿主系统 | Yes | - | - | 。 |
| 容器内运行 | Yes | Yes | - | Yes |

:::tip 说明一

**自动化控制**、**Lovelace前端**、**集成接入**和**蓝图功能**是HA Core的主要功能，也可以说Home Assistant家庭自动化系统主要就是实现上述几个方面的功能，所以无论何种安装方式都可以完整使用上述功能。

:::

:::tip 说明二

**监督者(Supervisor)**是HASS项目开发的一套基于容器的系统，可以管理HA Core的安装、升级和备份等。同时基于容器实现了对HA插件（Add-ons）扩展功能的支持。也就是说可以将一些特殊功能软件打包成单独的容器，以插件的方式发布，由监督者(Supervisor)统一管理（包括安装、升级和备份）。同时可以对宿主操作系统进行一定的管理。所以在使用***`OS`***及***`Supervised`***两种方式安装时均会带来由**监督者（Supervisor）**支持的功能，包括**支持插件（Add-ons）**、**备份功能**以及对于**宿主操作系统的管理**（按照官方的说法即使在***`Supervised`***的安装方式下监督者(Supervisor)依然会对宿主操作系统环境带来修改，所以即使HASS官方在其[安装介绍](https://www.home-assistant.io/installation/#compare-installation-methods)中标明***`Supervised`***安装不会带来对宿主系统的管理功能，但是我们认为这是不准确或者存在误导的，起码会带来对宿主操作系统环境的修改，当然这一点在HASS的安装脚本中进行了说明）。

:::

## 常见安装环境及安装方式
下面列出了常见的安装环境及支持的安装方式。

### [树莓派](pi-ha-installation.md)
- [Home Assistant OS](pi-ha-installation.md#安装home-assistant-os)
- [Home Assistant Container](pi-ha-installation.md#通过容器安装)
- [Home Assistant Core](pi-ha-installation.md#Python虚拟环境安装Core)

### [通用x86环境](x86-ha-installation.md)
- [Home Assistant OS](x86-ha-installation.md#安装home-assistant-os)
- [Home Assistant Container](x86-ha-installation.md#通过容器安装)
- [Home Assistant Core](x86-ha-installation.md#Python虚拟环境安装Core)

### [Windows和macOS](win-macos-ha-installation.md)
- [Home Assistant OS（VM）](win-macos-ha-installation#安装home-assistant-os)
- [Home Assistant Container](win-macos-ha-installation.md#通过容器安装)
- [Home Assistant Core](win-macos-ha-installation.md虚拟环境安装Core)

### [Linux](linux-ha-installation.md)
- [Home Assistant OS（VM）](linux-ha-installation.md#安装home-assistant-os)
- [Home Assistant Container](linux-ha-installation.md#通过容器安装)
- [Home Assistant Core](linux-ha-installation.md#Python虚拟环境安装Core)
- [Home Assistant Supervised](linux-ha-installation.md#Supervised安装)

### [其他选择](alter-ha-installation.md)
- [使用Home Assistant OS虚拟镜像安装](alter-ha-installation.md#虚拟镜像安装)
- [群晖NAS通过Docker镜像安装](alter-ha-installation.md#群晖NAS通过Docker镜像安装)