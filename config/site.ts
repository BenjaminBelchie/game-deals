export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Game Deals",
  description:
    "Find games at prices you love.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Browse",
      href: "/deals/browse",
    },
    {
      title: "Search",
      href: "/deals/search",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
