import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "CodeSnap",
  description: "CodeSnap is a pure Rust tool for generating beautiful code snapshots, available as a CLI tool or library. It supports customization, multiple formats, and clipboard integration. More info: [GitHub Repo](https://github.com/mistricky/CodeSnap).",
  vite: {
    server : {
      allowedHosts: true,
    }
  },
  base: '/docs/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Introduction and Features', link: '/' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Configuration and Examples', link: '/configuration-and-examples' },
          { text: 'Tutorial', link: '/tutorial' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/codesnap-rs/codesnap' }
    ],
    search: {
      provider: 'local'
    }
  }
})