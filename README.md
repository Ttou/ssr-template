# SSR Template

## 简介

SSR Template 是一个开源的服务端渲染模版。

## 特性

- **技术栈**：使用 Vue3/Nuxt3 等前端前沿技术开发
- **TypeScript**：应用程序级 JavaScript 的语言
- **特性**：使用 Vue 编写组件

## 准备

- [Node](http://nodejs.org/) 和 [Git](https://git-scm.com/)
- [Vue3](https://v3.cn.vuejs.org/guide/introduction.html)
- [Nuxt3](https://v3.nuxtjs.org/guide/concepts/introduction)

## 安装使用

- 获取项目代码

```bash
git clone https://gitee.com/jh_shot/ssr-template.git
```

- 安装依赖

```bash
npm i
```

- 运行

```bash
npm run dev
```

- 打包

```bash
npm run build
```

## 注意事项

- 装上 volar 插件后更好的支持模板开发
- 禁用 vscode 的内置 typescript 语言插件，以便 volar 接管
- 不要使用 TSX 编写组件，总会出现奇奇怪怪的问题
- 升级 Nuxt 版本需要先删除 node_modules 和依赖锁定文件
- Node 版本需要 18 及以上

## 待解决
