import {Product} from "@/lib/types";

export const BASE_URL = process.env.NODE_ENV === "production"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` ?? 'https://thecode.dev'
    : 'http://localhost:3000';

export const APP_NAME = 'Product Code';
export const X_CREATOR = '@tm_taiyo';
export const PRODUCTS = [
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
                name: "Framework",
                values: ["Next.js"]
            },
            {
                name: "UseCase",
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
                name: "Framework",
                values: ["Next.js"]
            },
            {
                name: "UseCase",
                values: ["AI", "Authentication"],
            },
            {
                name: "CSS",
                values: ["Tailwind"],
            },
            {
                name: "DataBase",
                values: ["Vercel KV"],
            },
            {
                name: 'Auth',
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
                name: "Framework",
                values: ["Next.js"]
            },
            {
                name: "UseCase",
                values: ["Documentation"],
            },
            {
                name: "CSS",
                values: ["Tailwind"]
            }
        ]
    },
] as Product[];