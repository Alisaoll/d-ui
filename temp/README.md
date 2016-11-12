# 爱邦忙静态页面项目

[d- UI框架文档](docs/)

## 配置开发工作环境

1 去[下载]( https://nodejs.org/en/) node.js LTS 版本并安装

2 window 下需要去[下载](https://www.visualstudio.com/post-download-vs/?sku=community&clcid=0x804&telem=ga) vs2015 并安装 c++ 模块

3 在项目根目录执行 `npm --registry=https://registry.npm.taobao.org install` 命令安装依赖

## 跑起开发工作流

`npm start`

此时会在 dist 目录下生成开发环境的 js 和 css 单文件，并生成对应的 map

## 生成生产环境代码

`npm run build`

此时会在 dist 目录下生成生产环境的 js 和 css 压缩过的单文件，可直接用于生产环境

## note

1 开发目录 `src`，生产目录 `dist`

2 开发目录 js 代码支持 es6 stage-4 和 stage-3 的 rest object
