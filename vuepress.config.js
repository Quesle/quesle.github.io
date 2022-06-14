const { defaultTheme } = require("@vuepress/theme-default");

module.exports = {
  lang: "zh-CN",
  title: "张小慕的博客",
  description: "这是我的第一个 VuePress 站点",
  theme: defaultTheme({
    sidebar: [
      {
        text: "使用 Github Pages 搭建 Blog",
        link: "/blog/",
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
