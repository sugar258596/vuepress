---
home: true
title: 首页
actions:
  - text: 快速上手
    link: /guide/getting-started.html
    type: primary
  - text: 项目简介
    link: guide/configuration.html
    type: secondary
features:
  - title: 标题1
    details: 简介1
  - title: 标题2
    details: 简介2
  - title: 标题3
    details: 简介3
  - title: 标题4
    details: 简介4
  - title: 标题5
    details: 简介5
  - title: 标题6
    details: 简介6
footer: MIT Licensed | Copyright © 2023-present sugar258596
---

### 像数 1, 2, 3 一样容易

```shell
git clone https://github.com/sugar258596/vuepress
```


<ToggleColorModeButton/>

## 运行 打包
<CodeGroup>
  <CodeGroupItem title="PNPM" active>

```bash
# 安装依赖
pnpm install 

# 启动
pnpm run dev

# 打包
pnpm run build

# 发布
pnpm run deploy

```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash
# 安装依赖
yarn install 

# 启动
yarn dev

# 打包
yarn  build

# 发布
yarn deploy

```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
# 安装依赖
npm install 

# 启动
npm run dev

# 打包
npm run build

# 发布
npm run deploy

```

  </CodeGroupItem>
</CodeGroup>






<script>
  import ToggleColorModeButton from '@theme/ToggleColorModeButton.vue'
  export default {
     components:{
      ToggleColorModeButton
     }
  }
</script>
