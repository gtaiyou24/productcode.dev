import {FilterListItem, Product} from "@/lib/types";

export const BASE_URL = process.env.NODE_ENV === "production"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` ?? 'https://productcode.dev'
    : 'http://localhost:3000';

export const APP_NAME = 'Product Code';
export const X_CREATOR = '@tm_taiyo';
export const PRODUCTS: Product[] = [
    {
        id: '1',
        name: "Image Gallery Starter",
        description: "Next.jsとCloudinaryで構築された画像ギャラリー",
        featuredImage: {
            url: 'https://images.ctfassets.net/e5382hct74si/3PkqiHFN4mAmCpexoBvb2B/e52a778e2b4320220665c73a3b8a498a/CleanShot_2022-12-02_at_10.42.14_2x.png'
        },
        sourceUrl: "https://github.com/vercel/next.js/tree/canary/examples/with-cloudinary",
        demoUrl: "https://nextjsconf-pics.vercel.app/",
        tags: [
            {
                name: "フレームワーク",
                values: ["Next.js"]
            },
            {
                name: "カテゴリ",
                values: ["Starter"]
            },
            {
                name: "CSS",
                values: ["Tailwind"]
            }
        ]
    },
    {
        id: '2',
        name: "Next.js AI Chatbot",
        description: "Vercelが構築したオープンソースのフル機能のNext.js AIチャットボット",
        featuredImage: {
            url: 'https://images.ctfassets.net/e5382hct74si/4aVPvWuTmBvzM5cEdRdqeW/e364651987fbe4117b63dbe46985c7ef/Next.js_AI_Chatbot_2.0_Light-1.png',
        },
        sourceUrl: "https://github.com/vercel/ai-chatbot",
        demoUrl: "https://chat.vercel.ai/",
        tags: [
            {
                name: "フレームワーク",
                values: ["Next.js"]
            },
            {
                name: "カテゴリ",
                values: ["AI", "Authentication"],
            },
            {
                name: "CSS",
                values: ["Tailwind"],
            },
            {
                name: "データベース",
                values: ["Vercel KV"],
            },
            {
                name: '認証',
                values: ["NextAuth.js"],
            }
        ]
    },
    {
        id: '3',
        name: "Nextra: Docs Starter Kit",
        description: "シンプル、パワフル、フレキシブルなマークダウン・ドキュメント・サイト。 Next.jsで構築されています",
        featuredImage: {
            url: "https://images.ctfassets.net/e5382hct74si/5RZetTd7rd1mQtoZt2fajA/747eabb89b6378ecfc0ef433f5e47a01/CleanShot_2022-12-02_at_12.07.44.png"
        },
        sourceUrl: "https://github.com/shuding/nextra-docs-template",
        demoUrl: "https://nextra-docs-template.vercel.app/",
        tags: [
            {
                name: "フレームワーク",
                values: ["Next.js"]
            },
            {
                name: "カテゴリ",
                values: ["Documentation"],
            },
            {
                name: "CSS",
                values: ["Tailwind"]
            }
        ]
    },
    {
        id: '4',
        name: "Admin Dashboard Template",
        description: "Tailwind CSS、Postgres、Authでセットアップしたダッシュボード",
        featuredImage: {
            url: "https://images.ctfassets.net/e5382hct74si/fmmsa0AREAIvMGl9PzGew/c3b4fd4674140be0813c0aa21007c381/CleanShot_2024-07-07_at_23.45.58_2x.png"
        },
        sourceUrl: "https://github.com/vercel/nextjs-postgres-nextauth-tailwindcss-template",
        demoUrl: "https://next-admin-dash.vercel.app/",
        tags: [
            {
                name: "フレームワーク",
                values: ["Next.js"]
            },
            {
                name: "カテゴリ",
                values: ["Starter", "Authentication"]
            },
            {
                name: "CSS",
                values: ["Tailwind"]
            },
            {
                name: "データベース",
                values: ["Vercel Postgres"]
            },
            {
                name: "認証",
                values: ["NextAuth.js"]
            }
        ]
    },
    {
        id: '5',
        name: "Hume AI - Empathic Voice Interface Starter",
        description: "このテンプレートは、Hume AIのEmpathic Voice Interfaceを使って音声チャットを作成します",
        featuredImage: {
            url: "https://images.ctfassets.net/e5382hct74si/4Cn2WWmBMqU3OsPHsWKfab/9963cf136b430d071947df923cefb4e9/hume.png"
        },
        sourceUrl: "https://github.com/humeai/hume-evi-next-js-starter",
        demoUrl: "https://hume-evi-next-js-starter.vercel.app/",
        tags: [
            {
                name: "フレームワーク",
                values: ["Next.js"]
            },
            {
                name: "カテゴリ",
                values: ["AI"]
            },
            {
                name: "CSS",
                values: ["Tailwind"]
            }
        ]
    },
    {
        id: '6',
        name: "Next.js Commerce",
        description: "Shopifyで高性能コマースを実現するスターターキット",
        featuredImage: {
            url: "https://images.ctfassets.net/e5382hct74si/1RzhtOHEvW7xyn9qAsdr5E/85331c32482b7d022585c39ddb3ae9f2/CleanShot_2023-07-24_at_21.37.15_2x.png"
        },
        sourceUrl: "https://github.com/vercel/commerce",
        demoUrl: "https://demo.vercel.store/",
        tags: [
            {
                name: "フレームワーク",
                values: ["Next.js"]
            },
            {
                name: "カテゴリ",
                values: ["ECサイト"]
            },
            {
                name: "CSS",
                values: ["Tailwind"]
            }
        ]
    },
    {
        id: '7',
        name: "Next.js App Router Playground",
        description: "Vercel 公式の Next.js App Router 機能の例",
        featuredImage: {
            url: "https://images.ctfassets.net/e5382hct74si/k9BYNIi5HwkHop568SjEI/cfb7e8215a11667d32265b34c43b4b5b/CleanShot_2022-10-25_at_14.38.59_2x.png"
        },
        sourceUrl: "https://github.com/vercel/next-app-router-playground",
        demoUrl: "https://app-router.vercel.app/",
        tags: [
            {
                name: "フレームワーク",
                values: ["Next.js"]
            },
            {
                name: "カテゴリ",
                values: ["Starter"]
            },
            {
                name: "CSS",
                values: ["Tailwind"]
            }
        ]
    }
];


export const filterList: FilterListItem[] = [
    { handle: 'usecase', name: 'カテゴリ', options: [
        'AI', 'Starter', 'Ecommerce', 'Blog', 'Edge Functions', 'Edge Middleware', 'Edge Config', 'Portfolio', 'SaaS',
        'CMS', 'Cron', 'Multi-tenant apps', 'Realtime Apps', 'Documentation', 'Virtual Event', 'Monorepos'
    ] },
    { handle: 'framework', name: 'フレームワーク', options: [
        "Next.js", "Svelte", "React", "Python", "Vue", "Nuxt", "Remix", "Qwik", "Astro", "Solid", "Preact", "Gatsby",
        "Angular", "Hugo", "Other"
    ] },
    { handle: 'language', name: 'プログラミング言語', options: [
        "Vue", "React", "Python", "Astro", "Go", "Ruby", "PHP"
    ] },
    { handle: 'css', name: 'CSS', options: [
        "Tailwind", "Chakra", "Radix UI", "CSS Modules", "CSS-in-JSX", "Material UI", "Styled Components", "Vanilla CSS",
        "Pinceau"
    ] },
    { handle: 'database', name: 'データベース', options: [
        "MySQL", "Postgresql", "Cassandra", "Dynamodb", "Redis", "BigTable"
    ] },
    { handle: 'authentication', name: '認証', options: [
        "NextAuth.js", "Auth0", "Fauna Auth", "Supabase Auth", "Whop Auth"
    ] },
];