const { defaultTheme } = require("@vuepress/theme-default");

module.exports = {
  lang: "zh-CN",
  title: "张小慕的博客",
  description: "这是我的第一个 VuePress 站点",
  theme: defaultTheme({
    contributors: false,
    lastUpdated: false,
    collapsible: true,
    sidebarDepth: 0,
    openInNewWindow: "在新窗口打开",
    toggleColorMode: "切换颜色模式",
    toggleSidebar: "切换侧边栏",
    sidebar: [
      {
        text: "深入学习React",
        link: "/react/",
        collapsible: true,
        children: [
          "/react/01.virtual_dom.md",
          "/react/02.virtual_dom_and_mvvm.md",
          "/react/03.automatic_batching.md",
          "/react/05.fiber.md",
        ],
      },
      {
        text: "深入理解HTTP",
        link: "/http/",
        collapsible: true,
        children: ["/http/01.http_cache.md"],
      },
      {
        text: "使用 Github Pages 搭建 Blog",
        link: "/blog/",
        collapsible: true,
        children: [
          "/blog/01.create_github_pages.md",
          "/blog/02.create_blog_by_vuepress.md",
          "/blog/03.config_vuepress.md",
        ],
      },
      "/log",
    ],
  }),
  dest: "./docs",
};
