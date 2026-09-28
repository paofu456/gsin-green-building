export const siteConfig = {
  language: "zh-CN",
  locale: "zh_CN",
  siteUrl: undefined as string | undefined,
  siteMode: "local" as "local" | "production",
  contentStatus: "ready" as "demo" | "draft" | "ready",
  navigation: [
    { label: "首页", href: "/" },
    { label: "公司实力", href: "/about/" },
    { label: "钢结构工程", href: "/products/steel-structure-engineering/" },
    { label: "装配式建筑", href: "/products/prefabricated-steel-buildings/" },
    { label: "金鑫乡墅", href: "/products/jinxin-country-houses/" },
    { label: "技术研究", href: "/technology/" },
    { label: "项目案例", href: "/projects/" },
    { label: "联系询盘", href: "/contact/" },
  ],
};
