import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "加入我们",
      link: "/join-us/",
      prefix: "/join-us/",
      icon: "material-symbols:join",
      children: [
        "notice",
        "check",
      ],
    },
    {
      text: "文档",
      link: "/docs/",
      prefix: "/docs/",
      icon: "material-symbols:docs",
      children: [
        "",
      ],
    },
    {
      text: "团队",
      prefix: "/",
      icon: "material-symbols:group",
      children: [
        "about",
      ],
    },
    {
      text: "政策与协议",
      link: "/policy/",
      prefix: "/policy/",
      icon: "material-symbols:policy",
      children: [
        "privacystatement",
        "resource-pack",
      ],
    },
  ],
});
