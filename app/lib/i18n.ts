export type Language = "en" | "zh"

export const translations = {
    en: {
        nav: {
            home: "Home",
            reports: "Reports",
            insights: "Insights",
            contact: "Contact"
        },
        topBar: {
            callUs: "Call us:",
            email: "Email:",
            wechat: "Contact on WeChat",
            languageLabel: "Language"
        },
        hero: {
            tag: "Overseas Buyer Growth",
            title: "We help Chinese manufacturers win overseas buyers.",
            description:
                "Reach customers in Europe, North America, the Middle East, and beyond.",
            subtext:
                "Bilingual, diverse team (Chinese, European, American) with Western buyer insight for ads, Amazon listings, and conversion-focused websites.",
            ctas: {
                primary: "Explore Services",
                secondary: "Add Our WeChat"
            },
            highlights: [
                "Amazon PPC & Marketplace Growth",
                "Shopify",
                "Leads",
                "Paid social ads (Meta, Instagram, TikTok)",
                "SEO for export buyers",
                "Conversion-first website redesign"
            ],
            form: {
                badge: "Project Brief",
                title: "Tell us about your export goals",
                placeholders: {
                    name: "Your Name *",
                    service: "What do you need help with?",
                    product: "Product category / Industry",
                    targetMarket: "Target market",
                    salesChannels: "Current sales channels",
                    challenge: "Main challenge (optional)",
                    contact: "Email / WeChat ID / Phone Number *"
                },
                serviceOptions: [
                    "Amazon Ads & Optimization",
                    "Social Media Ads (Facebook, Instagram, TikTok)",
                    "SEO & Organic Growth",
                    "Website Redesign",
                    "Social Media Management",
                    "Multiple Services"
                ],
                targetMarkets: [
                    "Europe",
                    "North America",
                    "Middle East",
                    "Multiple Regions",
                    "Other"
                ],
                submit: {
                    idle: "Submit Brief",
                    sending: "Submitting..."
                },
                errors: {
                    missingFields: "Name and contact information are required.",
                    generic: "An error occurred. Please try again later."
                },
                success:
                    "Thank you! Your project brief has been submitted successfully."
            },
            imageAlt: "Digital strategy team reviewing product roadmap"
        },
        heroHighlights: [
            "Amazon Ads",
            "Social Ads and Growth",
            "SEO for Export",
            "Shopify",
            "Website Redesign",
            "Leads"
        ],
        about: {
            statsLabel: "Factories Served",
            kicker: "Built for Manufacturers",
            title: {
                lead: "A bilingual diverse team bridging",
                highlightPrimary: "Chinese manufacturing",
                middle: "with",
                highlightSecondary: "global markets"
            },
            copy: "We are a bilingual, diverse team (Chinese, European, American) that understands both factory realities and Western buyer mind and expectations. That makes our ad creative, Amazon strategy, and websites convert much better.",
            bullets: [
                "Western buyer mindset applied to ads and listings",
                "Amazon, paid social, Shopify, and SEO execution in-house",
                "Conversion-focused website redesign"
            ],
            cta: "Contact Us",
            imageAlts: {
                strategist: "Strategist at desk",
                meeting: "Team meeting",
                collaboration: "Office collaboration"
            }
        },
        specialization: {
            kicker: "Why Factories Choose Us",
            title: "Built for Chinese manufacturers selling overseas",
            subtitle: "We understand Chinese manufacturing and overseas buyers.",
            copy: "We specialize in turning factory strengths into clear, buyer-friendly offers. Our foreign-led, mixed team builds the ad creative and storefronts that Western customers trust.",
            pillars: [
                {
                    title: "Mixed, bilingual team",
                    text: "Chinese, European, and American strategists align factory reality with Western buyer expectations."
                },
                {
                    title: "Ad-first demand generation",
                    text: "Amazon PPC, Meta, Instagram, and TikTok campaigns tuned for export buyers."
                },
                {
                    title: "SEO and social growth",
                    text: "Long-term visibility through export-focused SEO and consistent social channel growth."
                },
                {
                    title: "Conversion-ready websites",
                    text: "Modern redesigns that highlight MOQ, certifications, and lead-time to earn trust fast."
                }
            ],
            imageAlt: "Global marketing team planning export campaigns"
        },
        section4: {
            kicker: "How It Works",
            title: "We help manufacturers win overseas buyers with a focused growth system",
            copy: "Every step is built around factory realities and Western buyer expectations, from ad creative to conversion-ready websites.",
            steps: [
                {
                    number: "01",
                    title: "Factory intake",
                    description: "MOQ, capacity, certifications, and export readiness.",
                    icon: "/icons/1.png"
                },
                {
                    number: "02",
                    title: "Buyer targeting",
                    description:
                        "Amazon PPC, paid social, SEO, and outreach to qualified buyers.",
                    icon: "/icons/2.png"
                },
                {
                    number: "03",
                    title: "Conversion system",
                    description:
                        "Modern website redesign and bilingual assets that convert.",
                    icon: "/icons/3.png"
                }
            ]
        },
        services: {
            kicker: "Growth Services",
            title: "Everything needed to reach overseas buyers",
            cards: [
                {
                    title: "Amazon PPC & Marketplace",
                    text: "Optimize listings, run Amazon ads, and improve conversion rates for factory-owned stores.",
                    image: "/images/service-1.jpg"
                },
                {
                    title: "Paid Social Advertising",
                    text: "Meta, Instagram, and TikTok campaigns built for overseas buyers and lead quality.",
                    image: "/images/service-3.jpg"
                },
                {
                    title: "SEO & Organic Growth",
                    text: "Get found by buyers searching for your products. We optimize your website and content to rank higher in Google searches across your target markets, driving qualified leads organically.",
                    image: "/images/service-2.jpg"
                },
                {
                    title: "Social Media Growth",
                    text: "Build your brand presence on international platforms. We create content that speaks to Western customers, manage your accounts, and grow your following with engaged buyers.",
                    image: "/images/service-5.jpg"
                },
                {
                    title: "Modern Website Redesign",
                    text: "Your website is often the first impression. We redesign with proven conversion principles, bilingual support, and trust-building elements that Western buyers expect. Higher conversion rates guaranteed.",
                    image: "/images/service-4.jpg"
                },
                {
                    title: "Lead generation",
                    text: "We find and vet qualified leads suitable for your products and business.",
                    image: "/images/service-6.jpg"
                }
            ],
            readMore: "Read More",
            cta: "Book a Strategy Call"
        },
        readyToTalk: {
            leftTitle: "Ready to Talk?",
            leftCopy:
                "Connect with us via WeChat. Our bilingual team is ready to discuss how we can help your factory reach international buyers through Amazon, social media, SEO, and modern website design.",
            rightTitle: "Or prefer to Contact Us through Our Form?",
            rightCopy:
                "Tell us about your export goals, target markets, sales channels and challenges. We'll respond quickly with a strategy tailored to help you win international customers. You can also email us at",
            form: {
                name: "Your Name",
                email: "Email Address",
                wechat: "WeChat ID",
                message: "Message",
                submit: "Submit",
                sending: "Sending...",
                success: "Thank you! Your message has been sent successfully.",
                error: "An error occurred. Please try again later."
            }
        },
        wechat: {
            contactLine: "For enquiries contact",
            heroMessage:
                "Get a suggested fix to your problem in 5 minutes. We're available 24/7.",
            qrAlt: "QR Code for Contact"
        },
        founders: {
            kicker: "Meet the Founders",
            title: "Team Leaders",
            based: "Based:"
        },
        locations: {
            kicker: "Our Locations",
            title: "Meet us in Shanghai and Munich",
            shanghaiTitle: "Meet us in Shanghai",
            shanghaiAddress: [
                "WeWork China (West Nanjing Road Community)",
                "West Nanjing Road, Jing'an District",
                "Shanghai, China 200040",
                "WeWork中国（南京西路社区店）"
            ],
            munichTitle: "Meet us in Munich",
            munichAddress: [
                "Maximilianstrasse 35, 3rd Floor",
                "Altstadt-Lehel, Munich 80539",
                "Bavaria, Germany"
            ],
            tel: "Tel:"
        },
        footer: {
            title: "Your Foreign Growth Partner in China",
            cta: "Contact Us",
            servicesTitle: "Services",
            services: [
                "AI Automation",
                "SEO Growth",
                "Paid Ads",
                "App development",
                "Consulting",
                "Custom Solutions"
            ],
            newsletter:
                "Subscribe to our Monthly Newsletter and enjoy exclusive content about the Chinese Digital Ecosystem.",
            subscribe: "Subscribe Here"
        },
        contactPage: {
            title: "Get in Touch",
            subtitle:
                "We'd love to hear from you. Choose your preferred way to reach us."
        },
        insights: {
            title: "Insights for China Export Teams",
            highlight: "China Export",
            subtitle:
                "Practical guidance for Chinese manufacturers and overseas sellers to grow in global markets with localization, trust, and conversion-focused strategy.",
            loadMore: "Load More Posts",
            empty: "No blog posts available yet."
        },
        blog: {
            backToInsights: "Back to Insights",
            writtenBy: "Written by",
            relatedPosts: "Related Posts",
            readMore: "Read More",
            contactFooter: {
                title: "Contact us on 📞",
                wechat: "Wechat",
                phone: "Phone",
                email: "Email",
                web: "Web"
            }
        }
    },
    zh: {
        nav: {
            home: "首页",
            reports: "报告",
            insights: "洞察",
            contact: "联系我们"
        },
        topBar: {
            callUs: "电话:",
            email: "邮箱:",
            wechat: "微信联系",
            languageLabel: "语言"
        },
        hero: {
            tag: "海外买家增长",
            title: "我们帮助中国制造商赢得海外买家。",
            description: "触达欧洲、北美、中东等全球客户。",
            subtext:
                "中英双语、多元团队（中国、欧洲、美国）了解西方买家洞察，支持广告、亚马逊Listing与高转化网站。",
            ctas: {
                primary: "查看服务",
                secondary: "添加我们的微信"
            },
            highlights: [
                "亚马逊PPC与平台招商增长",
                "Shopify",
                "获客线索",
                "社交媒体广告（Meta/Instagram/TikTok）",
                "外贸SEO",
                "转化优先的网站改版"
            ],
            form: {
                badge: "项目简报",
                title: "告诉我们您的出海目标",
                placeholders: {
                    name: "您的姓名 *",
                    service: "需要我们在哪方面提供帮助？",
                    product: "产品类别 / 行业",
                    targetMarket: "目标市场",
                    salesChannels: "当前销售渠道",
                    challenge: "主要挑战（可选）",
                    contact: "邮箱 / 微信 / 电话 *"
                },
                serviceOptions: [
                    "亚马逊广告与优化",
                    "社媒广告（Facebook/Instagram/TikTok）",
                    "SEO与自然增长",
                    "网站改版",
                    "社媒运营",
                    "多项服务"
                ],
                targetMarkets: [
                    "欧洲",
                    "北美",
                    "中东",
                    "多个地区",
                    "其他"
                ],
                submit: {
                    idle: "提交简报",
                    sending: "提交中..."
                },
                errors: {
                    missingFields: "请填写姓名和联系方式。",
                    generic: "发生错误，请稍后再试。"
                },
                success: "感谢！您的项目简报已提交成功。"
            },
            imageAlt: "数字策略团队查看产品路线图"
        },
        heroHighlights: [
            "亚马逊广告",
            "社媒广告与增长",
            "外贸SEO",
            "Shopify",
            "网站改版",
            "获客线索"
        ],
        about: {
            statsLabel: "服务工厂",
            kicker: "为制造商打造",
            title: {
                lead: "双语多元团队，连接",
                highlightPrimary: "中国制造",
                middle: "与",
                highlightSecondary: "全球市场"
            },
            copy: "我们是中英双语、多元背景的团队（中国、欧洲、美国），理解工厂现实与西方买家思维，使我们的广告创意、亚马逊策略与网站更易转化。",
            bullets: [
                "将西方买家思维应用于广告和Listing",
                "亚马逊、社媒投放、Shopify与SEO全流程自执行",
                "以转化为核心的网站改版"
            ],
            cta: "联系我们",
            imageAlts: {
                strategist: "策略师在办公",
                meeting: "团队会议",
                collaboration: "协作讨论"
            }
        },
        specialization: {
            kicker: "为什么工厂选择我们",
            title: "为中国制造出海而生",
            subtitle: "懂中国制造，也懂海外买家。",
            copy: "我们擅长把工厂优势转化为清晰、买家友好的价值表达。由外籍主导的混合团队打造广告创意与店铺，让西方客户更信任。",
            pillars: [
                {
                    title: "中外混合的双语团队",
                    text: "中欧美策略师将工厂现实与西方买家预期对齐。"
                },
                {
                    title: "广告驱动的需求增长",
                    text: "亚马逊PPC、Meta、Instagram与TikTok投放聚焦外贸买家。"
                },
                {
                    title: "SEO与社媒增长",
                    text: "通过外贸SEO与持续的社媒运营建立长期可见度。"
                },
                {
                    title: "可转化的网站",
                    text: "现代化改版突出MOQ、认证与交期，快速建立信任。"
                }
            ],
            imageAlt: "全球营销团队规划出海活动"
        },
        section4: {
            kicker: "如何合作",
            title: "我们以专注的增长系统帮助制造商赢得海外买家",
            copy: "每一步都围绕工厂现实与西方买家预期，从广告创意到转化型网站。",
            steps: [
                {
                    number: "01",
                    title: "工厂信息梳理",
                    description: "MOQ、产能、认证与出海准备情况。",
                    icon: "/icons/1.png"
                },
                {
                    number: "02",
                    title: "买家定位",
                    description: "亚马逊PPC、社媒投放、SEO与精准触达。",
                    icon: "/icons/2.png"
                },
                {
                    number: "03",
                    title: "转化体系",
                    description: "现代化网站改版与可转化的双语素材。",
                    icon: "/icons/3.png"
                }
            ]
        },
        services: {
            kicker: "增长服务",
            title: "触达海外买家所需的一切",
            cards: [
                {
                    title: "亚马逊PPC与平台招商",
                    text: "优化Listing，投放亚马逊广告，提升工厂自营店铺转化率。",
                    image: "/images/service-1.jpg"
                },
                {
                    title: "社交媒体广告",
                    text: "Meta、Instagram与TikTok投放，面向海外买家并提升线索质量。",
                    image: "/images/service-3.jpg"
                },
                {
                    title: "SEO与自然增长",
                    text: "让寻找产品的买家更容易发现你。我们优化网站与内容，提升目标市场的Google排名，获取高质量线索。",
                    image: "/images/service-2.jpg"
                },
                {
                    title: "社媒增长",
                    text: "打造国际平台品牌影响力。我们产出面向西方客户的内容，运营账号并提升粉丝质量。",
                    image: "/images/service-5.jpg"
                },
                {
                    title: "现代化网站改版",
                    text: "网站往往是第一印象。我们基于高转化原则进行改版，提供双语支持与信任元素，提升转化率。",
                    image: "/images/service-4.jpg"
                },
                {
                    title: "线索获取",
                    text: "为您的产品与业务筛选并获取高质量线索。",
                    image: "/images/service-6.jpg"
                }
            ],
            readMore: "了解更多",
            cta: "预约策略通话"
        },
        readyToTalk: {
            leftTitle: "准备好聊聊了吗？",
            leftCopy:
                "通过微信与我们联系。我们的双语团队随时准备讨论如何通过亚马逊、社媒、SEO与现代化网站帮助您触达国际买家。",
            rightTitle: "更想通过表单联系我们？",
            rightCopy:
                "告诉我们您的出海目标、目标市场、销售渠道与挑战。我们将快速回复并提供量身定制的策略。您也可以直接邮件联系我们",
            form: {
                name: "姓名",
                email: "邮箱",
                wechat: "微信号",
                message: "留言",
                submit: "提交",
                sending: "发送中...",
                success: "感谢！您的消息已成功发送。",
                error: "发生错误，请稍后再试。"
            }
        },
        wechat: {
            contactLine: "咨询请联系",
            heroMessage: "5分钟内给您建议方案，全天24/7在线。",
            qrAlt: "联系二维码"
        },
        founders: {
            kicker: "认识创始人",
            title: "团队领导",
            based: "所在地:"
        },
        locations: {
            kicker: "我们的办公地点",
            title: "在上海和慕尼黑与我们见面",
            shanghaiTitle: "上海办公室",
            shanghaiAddress: [
                "WeWork 中国（南京西路社区店）",
                "南京西路，静安区",
                "中国上海 200040",
                "WeWork中国（南京西路社区店）"
            ],
            munichTitle: "慕尼黑办公室",
            munichAddress: [
                "马克西米利安大街 35 号，3 楼",
                "老城区-莱赫尔，慕尼黑 80539",
                "德国巴伐利亚州"
            ],
            tel: "电话:"
        },
        footer: {
            title: "您在中国的海外增长伙伴",
            cta: "联系我们",
            servicesTitle: "服务",
            services: [
                "AI自动化",
                "SEO增长",
                "付费广告",
                "应用开发",
                "咨询",
                "定制方案"
            ],
            newsletter: "订阅我们的月度通讯，获取关于中国数字生态的独家内容。",
            subscribe: "点击订阅"
        },
        contactPage: {
            title: "取得联系",
            subtitle: "我们很乐意听到您的消息。请选择您偏好的联系方式。"
        },
        insights: {
            title: "中国出海团队洞察",
            highlight: "中国出海",
            subtitle:
                "为中国制造商与海外卖家提供实用建议，通过本地化、信任与转化策略在全球市场增长。",
            loadMore: "加载更多文章",
            empty: "暂无文章"
        },
        blog: {
            backToInsights: "返回洞察",
            writtenBy: "作者",
            relatedPosts: "相关文章",
            readMore: "阅读全文",
            contactFooter: {
                title: "联系我们 📞",
                wechat: "微信",
                phone: "电话",
                email: "邮箱",
                web: "官网"
            }
        }
    }
} as const
