import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Présentation",
  description: "Notes de cours",
  base: "/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/index' },
      { text: 'Cours', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Notes de cours', link: '/markdown-examples' },
          { text: 'À propos', link: '/A_propos' }
        ]
      }
    ],

    outlineTitle: 'Sur cette page',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Christopher-Garneau/Presentation' }
    ],

    head: [
      ['link', { rel: 'stylesheet', href: '/styles.css' }]
    ],
  }
})
