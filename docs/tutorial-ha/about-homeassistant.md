---
sidebar_position: 1
---

# Home Assistant简介

## Home Assistant是什么？
Home Assistant是一个开源的家庭自动化控制系统，其将本地化控制和隐私保护作为产品首要考虑的内容。由来自全世界的开发者和DIY爱好者组成的社区提供支持。十分适合在树莓派（Raspberry Pi ）或者本地服务器中运行。

## 优势
整个系统采用模块化的方式构建，所以很容易实现对不同设备和动作（action）的支持。更多有关内容可以参见系统架构部分。

借助模块构建的优势在社区和爱好者的支持下实现了对不同种类、不同品牌传感器和设备的支持。你也可以自己构建自己的组件。

## 局限性

不过由于自带的DIY属性（或者叫精神？）的原因，导致其使用门槛比较高，你可能需要自己烧录镜像、自己修改Yaml配置（是的！你可能需要自己修改纯文本的配置文件！）。所以当前的HA不是一个开箱即用的系统。

配置文件大概长这样：
```yml title="configuration.yaml"
# Configure a default setup of Home Assistant (frontend, api, etc)
default_config:
frontend:
  themes: !include_dir_merge_named themes #包含主题文件内所有的主题，该文件夹为HACS安装主题的默认路径

# Text to speech
tts:
  - platform: google_translate
    time_memory: 60
    base_url: http://192.168.31.178:8123
    service_name: google_say
    language: "zh-cn"
group: !include groups.yaml
remote: !include_dir_merge_list custom_config/remote
climate: !include_dir_merge_list custom_config/climate #空调
sensor: !include_dir_merge_list custom_config/sensor
```
:::tip 说明

HA也一直在向着易用化的方向努力，当前很大一部分的配置都可以通过图形界面完成。不过可以预见的是这需要时间，特别是对于非英语用户来说更是如此。

:::

## 为什么是Home Assistant？

在市场上有众多的家庭自动化系统方案可供选择，很多都是由大型企业提供的成熟产品。在使用和体验上可能还是优于Home Assistant系统的，为何我们要舍近求远的再去使用一个不是那么成熟的系统？

如同HA对自己的介绍中所说的，本地化运行和隐私保护才是HA最为关注的。我们不能说那些成熟商业产品就不注重保护隐私，但我们相信只有自己的数据掌握在自己的手中才是最可靠的。

绝大部分商业家庭自动化产品都依赖于云端服务，一旦离开了互联网其大概率会罢工。

其对于云端服务的强依赖也让说明了系统数据的流向，我们的任何数据都毫无保留的流向了我们无法探知和控制的云端。它们也将长期（甚至是永久）的存储在那里。

本地化运行可以让所有的操作控制、数据存储都在本地，我们可以在不依赖互联网的情况下控制设备，可以决定怎么处理这些数据。

虽然还没有一个完美本地化运行的家庭自动化系统，但是Home Assistant以及在向前走。为了一些东西我们愿意包容其不足。

如果你需要一个最省心的家庭自动化系统那Home Assistant不一定适合你！

最后我们想要解释一下***`家庭自动化`***这个词，我们将现阶段的所有这类系统都统称为***`家庭自动化`***，而不是***`智能家居`***，因为在我们的认识中当前这个阶段所有这些系统均只能提供电子化控制和简单的预测分析功能，而不能作为独立的智能化控制中枢使用，所以将其定义为***`智能家居`***为时尚早。

我们认为***`智能家居`***控制中枢的最终形态应该是能够独立于接入层（也就是不再关注设备的接入和控制）使用感知数据完成自主决策，以较高智能水平服务家庭生活的智慧化助手。

:::danger 声明

对Home Assistant项目组的观察让我们没有绝对的信心认为Home Assistant会一直向着稳定化前进，Home Assistant项目组对于产品功能的添加和舍弃没有广泛社区的考察流程，一切都依赖于项目组的决定。同时Home Assistant项目组对于提高产品稳定性的努力不足，Home Assistant Core内部也不断的被加入与其定位不足的内容。 可预见的是其稳定性很难得到坚实的保证，产品在未来也会变得臃肿。

:::

## HASS项目

Home Assistant是一系列项目，最为核心的是Home Assistant Core。但是Home Assistant Core只提供了核心功能，要通过界面访问Home Assistant Core则需要图形化支持，Home Assistant Frontend是基于浏览器的图形访问界面。

### HA Core

Home Assistant Core提供核心功能，通过API与外部进行交互。

### HA Frontend

Home Assistant Frontend是基于浏览器的图形访问界面。

### HA OS

Home Assistant OS是专门为Home Assistant开发的一个最小化的操作系统。

## 更多参考

- [HAC社区官方网站](https://hihass.com/).
- [Home Assistant官方网站](https://www.home-assistant.io/).
- [Home Assistant开发者指南](https://developers.home-assistant.io/)
- [Home Assistant开源仓库](https://github.com/home-assistant)
