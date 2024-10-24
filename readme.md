# 性能测试

> 写了一个很坏的使用示例, [App.tsx](./examples/with-antd5//src/App.tsx)，但是同样的代码， v4 性能比 v5 好很多。

v5 使用了 CSSinJS, 通过审查 [@ant-design/cssinjs](https://github.com/ant-design/cssinjs) 代码不难发现 antd 做了很多优化，但还是逃不过 React 限制。

## 启动

1. 安装依赖
   
```bash
pnpm install # 会执行 package build
```

2. 启动

```bash
npm run start
```
