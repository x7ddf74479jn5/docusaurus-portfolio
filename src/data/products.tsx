import React from 'react';

const siteMyProducts = [
  {
    productName: 'Pandashark Uses',
    description: (<span style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>使っている機材や<wbr />ツールを<wbr />紹介している。<wbr />Astroと<wbr />Tailwind CSSで<wbr />作成。</span>),
    imageUrl: 'img/my-products/pandashark-uses.webp',
    url: 'https://pandashark-uses.vercel.app/',
    githubUrl: 'https://github.com/x7ddf74479jn5/pandashark-uses/',
  },
  {
    productName: 'Homepage',
    description: (<span style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>情報発信場所を<wbr />エンジニアリング以外の<wbr />用途で<wbr />切り分けたかった<wbr />ため<wbr />制作。</span>),
    imageUrl: 'img/my-products/three-homepage.webp',
    url: 'https://three-homepage.vercel.app/',
    githubUrl: 'https://github.com/x7ddf74479jn5/three-hompage/',
  },
  {
    productName: 'Food Blog',
    description: (
      <span style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
        Next.jsと<wbr />microCMSで<wbr />作った<wbr />レシピブログの<wbr />サンプル。<wbr />Core Web Vitalsを<wbr />意識した<wbr />SEO、<wbr />構造化データ定義、
        <wbr />PWA、<wbr />RSSなど<wbr />メディアサイトと<wbr />して<wbr />十分な<wbr />機能を<wbr />実装している。
      </span>
    ),
    imageUrl: 'img/my-products/food-blog_screenshot.webp',
    url: 'https://food-blog-chi.vercel.app/',
    githubUrl: 'https://github.com/x7ddf74479jn5/food-blog/',
  },
];

const oneShotProducts = [
  {
    productName: 'My Favorite Gear',
    description:(<span style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>自分の<wbr />お気に<wbr />入りの<wbr />アイテムを<wbr />8つ<wbr />選んで<wbr />Twitterに<wbr />投稿できる。<wbr />Twitterアカウントが<wbr />必要。<wbr />React V18, webpack-&gt;Viteの<wbr />構成で<wbr />改修済み。</span>),
    imageUrl: 'img/my-products/my-favorite-gear_screenshot.webp',
    url: 'https://my-favorite-gear.firebaseapp.com/',
    githubUrl: 'https://github.com/x7ddf74479jn5/my-favorite-gear/',
  },
  {
    productName: 'Cryptocurrency Tracker',
    description: (<span style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>暗号資産ダッシュボード。<wbr />リアルタイムの<wbr />価格、<wbr />過去の<wbr />スパークラインチャートを<wbr />表示できます。</span>),
    imageUrl: 'img/my-products/cryptocurrency-tracker.webp',
    url: 'https://cryptocurrency-tracker-ab5d9.web.app/',
    githubUrl: 'https://github.com/x7ddf74479jn5/cryptocurrency-tracker',
  },
  {
    productName: 'Simple Kanban Planner',
    description: (<span style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>Trelloライクな<wbr />カンバン型タスク管理アプリ。</span>),
    imageUrl: 'img/my-products/simple-Kanban-planner.webp',
    url: 'https://simple-kanban-planner.web.app/',
    githubUrl: 'https://github.com/x7ddf74479jn5/simple-kanban-planner/',
  },
]

const otherProducts = [
  {
    productName: 'Old Portfolio Site',
    description: '旧ポートフォリオサイト。',
    imageUrl: 'img/my-products/portfolio-eyecatch.webp',
    url: 'https://next-portfolio-livid.vercel.app/',
    githubUrl: 'https://github.com/x7ddf74479jn5/next-portfolio/',
  },
]

const devTools = [
  {
    productName: 'PSUI',
    description: (
      <>
        コンポーネントライブラリ。
        <br />
        React / Radix UI / Tailwind CSS / Storybook
      </>
    ),
    imageUrl: 'img/my-products/psui_logo.webp',
    url: '',
    githubUrl: 'https://github.com/x7ddf74479jn5/psui',
  },
  {
    productName: 'google-form-notification',
    description:(
      <>
        Google Formの回答をSlackとメールに通知できます。
        <br/>
        clasp / TypeScript / esbuild
      </>),
    imageUrl: 'img/my-products/no_image.webp',
    url: '',
    githubUrl: 'https://github.com/x7ddf74479jn5/google-form-notification',
  },
];



const webSite = { siteMyProducts,oneShotProducts,otherProducts };

export { webSite, devTools };
