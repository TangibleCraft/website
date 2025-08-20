import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "堂瞰工艺 TangibleCraft",
  description: "一个 Minecraft 城建服务器",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
