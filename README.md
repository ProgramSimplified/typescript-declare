# Typescript declare .d.ts demo

- node_modules/my-lib/index.cjs.d.ts
- node_modules/my-lib/index.es.d.ts

---

`my-lib` 库为 ESM 编写的 `.js` 文件, 为其编写 `.d.ts` 声明文件.

项目根目录下执行 `tsc` 即可生成 esm 的 `index.js` 文件.

> 可以参考 `@types/express` .
