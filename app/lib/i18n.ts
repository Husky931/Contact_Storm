export type Language = "en" | "zh"

export const translations = {
    en: {
        nav: {
            home: "Home",
            brochure: "Brochure",
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
                "Western buyer insight for ads, Amazon listings, and conversion-focused websites.",
            ctas: {
                primary: "Our Services",
                secondary: "Our WeChat"
            },
            servicesPopup: {
                kicker: "Full-service growth partner",
                title: "What we do and who we help",
                subtitle:
                    "Focused on export-ready growth for factories, sellers, and ecommerce teams.",
                servicesTitle: "Our services",
                clientsTitle: "Our clients",
                services: [
                    "Lead generation",
                    "Amazon PPC & Marketplace",
                    "Paid Social Advertising",
                    "SEO & Organic Growth",
                    "Social Media Growth",
                    "Modern Website Redesign"
                ],
                clients: [
                    "Factories",
                    "Sellers",
                    "Ecommerce shop owners",
                    "Export teams"
                ]
            },
            highlights: [
                "Lead generation",
                "Amazon PPC & Marketplace",
                "Shopify",
                "Website optimization for AI search engines",
                "Paid social ads (Meta, Instagram, TikTok)",
                "SEO & AEO",
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
            "Leads",
            "Social Ads and Growth",
            "SEO & AEO",
            "Shopify",
            "Website Redesign",
            "AI search optimization"
        ],
        about: {
            statsLabel: "Sellers Served",
            kicker: "Built for Sellers",
            title: {
                lead: "Foreigners with native experience lead team bridging",
                highlightPrimary: "Chinese sellers",
                middle: "with",
                highlightSecondary: "global markets"
            },
            copy: "We are a foreigners with native experience lead team (Chinese, European, American) that understands both factory realities and Western buyer mind and expectations. That makes our ad creative, Amazon strategy, and websites convert much better.",
            bullets: [
                "Lead Generation in-house software",
                "Western buyer mindset applied to ads and listings",
                "Amazon, paid social, Shopify, and SEO execution in-house",
                "Conversion-focused website redesign"
            ],
            cta: "WeChat",
            imageAlts: {
                strategist: "Strategist at desk",
                meeting: "Team meeting",
                collaboration: "Office collaboration"
            }
        },
        specialization: {
            kicker: "Why Factories Choose Us",
            title: "Built for Chinese manufacturers selling overseas",
            subtitle:
                "We understand Chinese manufacturing and overseas buyers.",
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
            title: {
                part1: "We help ",
                highlight1: "manufacturers",
                part2: " win ",
                highlight2: "overseas buyers",
                part3: " with a focused ",
                highlight3: "growth system"
            },
            copy: "Every step is built around factory realities and Western buyer expectations, from ad creative to conversion-ready websites.",
            steps: [
                {
                    number: "01",
                    title: "Seller intake",
                    description: "Campaign goals and targets",
                    icon: "/icons/1.png"
                },
                {
                    number: "02",
                    title: "Buyer targeting",
                    description:
                        "Amazon PPC, paid social, SEO, ai website optimization and outreach",
                    icon: "/icons/2.png"
                },
                {
                    number: "03",
                    title: "Conversion system",
                    description: "Ultimate goal to increase sales",
                    icon: "/icons/3.png"
                }
            ]
        },
        aiSearchOptimization: {
            sectionTitle:
                "Rank for the current LLMs (ChatGPT, Gemini, Grok and rest",
            title: "AI Search Website Optimization",
            subtitle:
                "Are you keeping up with the times? People are now using AI to find results",
            sellerText: {
                paragraphs: [
                    `The digital landscape has hit a tipping point. We are no longer just in the era of "Search Engines"; we are in the era of AU Generative Search.`,
                    {
                        lead: "As of early 2026, ",
                        highlight: "57%",
                        tail: " of consumers now intentionally use AI-powered search engines (like ",
                        highlightTail: "ChatGPT, Perplexity, and Google Gemini",
                        end: ") to make buying decisions."
                    },
                    {
                        lead: "Statistics show that AI-driven traffic is ",
                        highlight: "23x more valuable",
                        tail: ". The user already feels prequalified from the AI answer and has a ",
                        highlightTail: "23x more conversation rate",
                        end: "."
                    },
                    {
                        lead: "Be smart and ",
                        highlight: "move ahead of the curve",
                        tail: ". We are help to help you transition and evolve with the times."
                    }
                ]
            },
            callout: {
                lead: "Stop relying on ",
                strike: "Alibaba",
                tail: " for ALL your sales and DIVERSIFY your earning channels"
            }
        },
        howWeHelp: {
            kicker: "How Can We Help Your Company",
            title: "Who are we and how we can help you",
            servicesTitle: "Our Services",
            services: [
                "Amazon PPC & Marketplace – Optimize listings and run ads to boost visibility",
                "Paid Social Advertising – Meta, Instagram, TikTok campaigns for qualified leads",
                "Website optimization for AI search engines",
                "SEO & Organic Growth – Rank higher in Google for your target export markets",
                "Social Media Growth – Build brand presence that Western buyers trust",
                "Modern Website Redesign – Conversion-focused sites with bilingual support",
                "Lead Generation – Find and vet qualified buyers for your products"
            ],
            aboutTitle: "Who We Are",
            aboutText1:
                "We are a team of foreign professionals who have lived in China for over 10 years, specializing in increasing sales, brand awareness, and generating leads for Chinese sellers and manufacturers.",
            aboutText2:
                "Our professional background and extensive working experience have given us unique insights into both Chinese manufacturing excellence and Western buyer expectations. We bridge these two worlds to help your business succeed internationally.",
            aboutText3:
                "We pride ourselves on delivering exceptional work, and when you work with us, success is guaranteed.",
            cta: "Contact Us on WeChat"
        },
        services: {
            kicker: "Growth Services",
            title: {
                part1: "Everything needed to ",
                highlight1: "reach",
                part2: " overseas buyers"
            },
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
            cta: "Add our WeChat"
        },
        readyToTalk: {
            leftTitle: {
                part1: "Ready to ",
                highlight1: "Talk?"
            },
            leftCopy:
                "Connect with us via WeChat. Our bilingual team is ready to discuss how we can help your factory reach international buyers through Amazon, social media, SEO, and modern website design.",
            rightTitle: {
                part1: "Or prefer to ",
                highlight1: "Contact Us",
                part2: " through Our Form?"
            },
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
            qrAlt: "QR Code for Contact",
            floatingButton: {
                text: "Let's fix this",
                message: () =>
                    `Talk to Gligor, let's perfect your website and elevate your business by getting new overseas customers.`
            }
        },
        founders: {
            kicker: "Meet the Founders",
            title: {
                part1: "Team ",
                highlight1: "Leaders"
            },
            based: "Based:"
        },
        locations: {
            kicker: "Our Locations",
            title: {
                part1: "Meet us in ",
                highlight1: "Shanghai",
                part2: " and Munich"
            },
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
            audit: {
                title: "Free Audit (SEO + Website AI Optimization)",
                subtext:
                    "Share your email and we’ll send a quick audit of your website’s SEO and AI optimization opportunities.",
                cta: "Send My Audit",
                sending: "Sending...",
                note: "We reply within 24 hours.",
                placeholder: "Your email",
                websitePlaceholder: "Your website URL",
                formName: "Footer Audit Request",
                message: "Free audit request (SEO + Website AI Optimization).",
                success: "Thanks! We'll send your audit to your email soon.",
                errors: {
                    missingEmail: "Please enter a valid email and website.",
                    cooldown:
                        "Please wait a few minutes before requesting another audit.",
                    generic: "An error occurred. Please try again later."
                }
            }
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
        },
        slide7: {
            title: "Website & Shopify",
            subtitle: "Modern websites that signal professionalism and convert visitors into inquiries",
            services: [
                {
                    title: "Modern Visual Trust",
                    body: "Clean, professional design that signals credibility and builds instant confidence with potential clients. Your site becomes a conversion engine that turns visitors into leads and customers."
                },
                {
                    title: "Frictionless UX",
                    body: "Lightning-fast loading speeds and intuitive navigation that reduce bounce rates by up to 50%. Every second counts when users decide to stay or leave—we make sure they stay."
                },
                {
                    title: "A/B Testing & Optimization",
                    body: "Switch between landing page templates to identify optimal layouts for maximum user engagement. Data drives every decision so we double down on what works and drop what doesn’t."
                },
                {
                    title: "User Tracking & Retention",
                    body: "Monitor returning visitors for retargeting marketing and personalized experiences. Turn anonymous visitors into repeat customers and build loyalty over time."
                },
                {
                    title: "Social Proof Integration",
                    body: "Stylishly integrated case studies and testimonials to give instant user trust. Let your best results speak for you and show prospects why they should choose you."
                },
                {
                    title: "Strong Call To Action",
                    body: "Strategically placed CTAs that strongly urge users to make an inquiry. Clear next steps mean more leads and a smoother path from visitor to customer."
                }
            ]
        },
        slide8: {
            title: "Paid Social Ads",
            subtitle: "Paid social ads for Meta, Instagram, and TikTok that deliver qualified leads and build brand trust",
            services: [
                {
                    title: "Ad Creative & Copy",
                    body: "Culturally-aware ad design that resonates with Western audiences. We craft visuals and messaging that grab attention and drive clicks from the right buyers."
                },
                {
                    title: "Targeting & Optimization",
                    body: "Precision audience targeting to maximize your ad spend. We continuously monitor and adjust campaigns to reach the most relevant and high-intent buyers."
                },
                {
                    title: "Lead Filtering",
                    body: "Smart lead forms that pre-qualify inquiries and filter out noise. Save time and focus on leads that match your ideal customer profile."
                },
                {
                    title: "Content Funnels",
                    body: "Strategic content that nurtures leads from awareness to conversion. We guide prospects through a journey that builds trust and primes them for purchase."
                },
                {
                    title: "Bilingual Ad Management",
                    body: "Seamlessly manage campaigns in both English and Chinese. Our team ensures your messaging is consistent and effective across all languages and platforms."
                },
                {
                    title: "A/B Testing",
                    body: "Data-driven testing of ad creative, copy, and targeting. We identify what works best and optimize for higher conversion rates and lower cost-per-lead."
                }
            ]
        },
        slide9: {
            title: "SEO & ASO",
            subtitle: "Long-term organic growth through Search Engine Optimization and App Store Optimization that drives targeted traffic",
            services: [
                {
                    title: "Keyword Research",
                    body: "In-depth keyword analysis to uncover high-intent search terms. We target keywords that your ideal customers are using to find products like yours."
                },
                {
                    title: "On-Page SEO",
                    body: "Website and content optimization that boosts search rankings. We improve your site’s structure, content, and technical SEO to attract more organic traffic."
                },
                {
                    title: "Content Marketing",
                    body: "Valuable content that attracts, engages, and converts. We create blog posts, articles, and guides that establish your authority and drive inbound leads."
                },
                {
                    title: "Link Building",
                    body: "High-quality backlinks that build your site’s authority and trust. We earn links from reputable sources to improve your search engine rankings."
                },
                {
                    title: "App Store Optimization",
                    body: "Improve your app’s visibility in the app stores. We optimize your app’s title, description, and keywords to increase downloads and user acquisition."
                },
                {
                    title: "Analytics & Reporting",
                    body: "Transparent reporting on key SEO and ASO metrics. We track your progress and provide actionable insights to continuously improve your organic performance."
                }
            ]
        },
        slide10: {
            title: "Lead Generation Software",
            subtitle: "Proprietary software that identifies and qualifies overseas buyers, delivering high-quality leads directly to your sales team",
            services: [
                {
                    title: "Buyer Persona Modeling",
                    body: "Define your ideal customer profile to find the most relevant leads. Our software targets buyers based on industry, company size, location, and more."
                },
                {
                    title: "Lead Scoring & Grading",
                    body: "Automatically score and grade leads to prioritize follow-up. We ensure your sales team focuses on the most promising opportunities."
                },
                {
                    title: "Data Enrichment",
                    body: "Append contact and company data to your leads. Get a complete picture of your prospects to personalize your outreach and increase conversion rates."
                },
                {
                    title: "Automated Outreach",
                    body: "Set up and manage automated email campaigns to nurture leads. We help you stay top-of-mind with prospects and move them through the sales funnel."
                },
                {
                    title: "CRM Integration",
                    body: "Seamlessly sync leads and data with your CRM. Keep your sales and marketing teams aligned and working from a single source of truth."
                },
                {
                    title: "Real-Time Alerts",
                    body: "Get notified in real-time when a lead shows buying intent. Never miss an opportunity to connect with a hot lead."
                }
            ]
        },
        slide11: {
            title: "AI Search Optimization",
            subtitle: "Optimize your online presence for the AI-powered search era. We help you rank in generative search engines and conversational AI platforms.",
            services: [
                {
                    title: "Generative SEO",
                    body: "Optimize your website and content for generative search engines. We help you appear in the answers that AI models provide to users."
                },
                {
                    title: "Conversational AI Marketing",
                    body: "Engage with customers through conversational AI platforms. We build chatbots and voice assistants that provide instant support and drive sales."
                },
                {
                    title: "AI Content Creation",
                    body: "Leverage AI to create high-quality content at scale. We use AI-powered tools to generate blog posts, social media updates, and more."
                },
                {
                    title: "AI-Powered Analytics",
                    body: "Gain deeper insights into your customers and campaigns. We use AI to analyze data and uncover opportunities for growth."
                },
                {
                    title: "AI Ad Targeting",
                    body: "Improve ad performance with AI-powered targeting. We use machine learning to identify and reach your ideal customers with precision."
                },
                {
                    title: "AI Personalization",
                    body: "Deliver personalized experiences that drive engagement and loyalty. We use AI to tailor your website, content, and offers to each user."
                }
            ]
        },
        slide14: {
            title: "We find overseas buyers for Chinese manufacturers",
            subtitle: "Our foreign-led team bridges the gap between your factory and Western markets, using a growth system that’s been proven to deliver results.",
            bullets: [
                "In-house lead generation software for precise targeting",
                "Ad creative and copy that speaks to Western buyers",
                "Full-funnel management from first click to final sale",
                "Bilingual team for seamless communication"
            ],
            cta: "Get a Free Consultation"
        }
    },
    zh: {
        nav: {
            home: "首页",
            brochure: "手册",
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
            subtext: "西方买家洞察，支持广告、亚马逊Listing与高转化网站。",
            ctas: {
                primary: "我们的服务",
                secondary: "我们的微信"
            },
            servicesPopup: {
                kicker: "全链路增长伙伴",
                title: "我们提供什么服务，服务谁",
                subtitle: "专注外贸增长，服务工厂、卖家与电商团队。",
                servicesTitle: "我们的服务",
                clientsTitle: "我们的客户",
                services: [
                    "线索获取",
                    "亚马逊PPC与平台招商",
                    "社交媒体广告",
                    "SEO与自然增长",
                    "社媒增长",
                    "现代化网站改版"
                ],
                clients: ["工厂", "卖家", "电商店主", "出海团队"]
            },
            highlights: [
                "线索获取",
                "亚马逊PPC与平台招商",
                "Shopify",
                "针对 AI 搜索引擎的的网站优化",
                "社交媒体广告（Meta/Instagram/TikTok）",
                "SEO & AEO",
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
                targetMarkets: ["欧洲", "北美", "中东", "多个地区", "其他"],
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
            "AI 搜索优化",
            "社媒广告与增长",
            "SEO & AEO",
            "Shopify",
            "网站改版",
            "获客线索"
        ],
        about: {
            statsLabel: "服务卖家",
            kicker: "为制造商打造",
            title: {
                lead: "具有本土经验的外籍人士领导团队，连接",
                highlightPrimary: "中国卖家",
                middle: "与",
                highlightSecondary: "全球市场"
            },
            copy: "我们是中英双语、多元背景的团队（中国、欧洲、美国），理解工厂现实与西方买家思维，使我们的广告创意、亚马逊策略与网站更易转化。",
            bullets: [
                "潜客生成自研软件",
                "将西方买家思维应用于广告和Listing",
                "亚马逊、社媒投放、Shopify与SEO全流程自执行",
                "以转化为核心的网站改版"
            ],
            cta: "微信",
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
            title: {
                part1: "我们以专注的",
                highlight1: "增长系统",
                part2: "帮助",
                highlight2: "制造商",
                part3: "赢得",
                highlight3: "海外买家"
            },
            copy: "每一步都围绕工厂现实与西方买家预期，从广告创意到转化型网站。",
            steps: [
                {
                    number: "01",
                    title: "卖家入驻",
                    description: "竞选目标和指标",
                    icon: "/icons/1.png"
                },
                {
                    number: "02",
                    title: "买家定位",
                    description:
                        "亚马逊PPC广告、付费社交媒体推广、搜索引擎优化、人工智能网站优化和外联推广",
                    icon: "/icons/2.png"
                },
                {
                    number: "03",
                    title: "转化体系",
                    description: "最终目标是增加销售额",
                    icon: "/icons/3.png"
                }
            ]
        },
        aiSearchOptimization: {
            sectionTitle: "当前LLM（ChatGPT、Gemini、Grok及其他）的排名",
            title: "AI 搜索网站优化",
            subtitle: "你还跟得上时代吗？人们正在用 AI 来寻找结果",
            sellerText: {
                paragraphs: [
                    "数字化环境已经到达转折点。我们不再只是处于“搜索引擎”时代；我们进入了 AU 生成式搜索的时代。",
                    {
                        lead: "截至 2026 年初，",
                        highlight: "57%",
                        tail: " 的消费者现在会有意识地使用 AI 搜索引擎（如 ",
                        highlightTail: "ChatGPT、Perplexity、Google Gemini",
                        end: "）来做购买决策。"
                    },
                    {
                        lead: "数据显示，AI 驱动的流量价值高达 ",
                        highlight: "23 倍",
                        tail: "。用户从 AI 答案中已经被预筛选，并拥有 ",
                        highlightTail: "23 倍更高的咨询转化率",
                        end: "。"
                    },
                    {
                        lead: "保持聪明，",
                        highlight: "走在曲线之前",
                        tail: "。我们帮助你顺应时代完成转型与进化。"
                    }
                ]
            },
            callout: {
                lead: "不要只依赖 ",
                strike: "Alibaba",
                tail: " 获得全部销售，去多元化你的盈利渠道"
            }
        },
        howWeHelp: {
            kicker: "我们如何帮助您的公司",
            title: "我们是谁以及如何帮助您",
            servicesTitle: "我们的服务",
            services: [
                "亚马逊PPC与平台招商 – 优化Listing并投放广告提升可见度",
                "社交媒体广告 – Meta、Instagram、TikTok投放获取优质线索",
                "针对 AI 搜索引擎的的网站优化",
                "SEO与自然增长 – 在目标出口市场的Google排名中提升",
                "社媒增长 – 建立西方买家信任的品牌影响力",
                "现代化网站改版 – 以转化为核心的双语网站",
                "线索,获取 – 为您的产品寻找并筛选合格买家"
            ],
            aboutTitle: "我们是谁",
            aboutText1:
                "我们是一支在中国生活超过10年的外籍专业团队，专注于为中国卖家和制造商提升销量、品牌知名度和获取优质线索。",
            aboutText2:
                "我们的专业背景和多年工作经验让我们对中国制造的优势和西方买家的期望都有独特的洞察。我们连接这两个世界，帮助您的业务在国际市场取得成功。",
            aboutText3: "我们以优质的工作为傲，与我们合作，成功有保障。",
            cta: "微信联系我们"
        },
        services: {
            kicker: "增长服务",
            title: {
                part1: "",
                highlight1: "触达",
                part2: "海外买家所需的一切"
            },
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
            cta: "添加我们的微信"
        },
        readyToTalk: {
            leftTitle: {
                part1: "准备好",
                highlight1: "聊聊"
            },
            leftCopy:
                "通过微信与我们联系。我们的双语团队随时准备讨论如何通过亚马逊、社媒、SEO与现代化网站帮助您触达国际买家。",
            rightTitle: {
                part1: "更想通过表单",
                highlight1: "联系我们",
                part2: "?"
            },
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
            qrAlt: "联系二维码",
            floatingButton: {
                text: "让我们来修复",
                message: () =>
                    `与Gligor聊聊，让我们完善您的网站，通过获取新的海外客户来提升您的业务。`
            }
        },
        founders: {
            kicker: "认识创始人",
            title: {
                part1: "团队",
                highlight1: "领导"
            },
            based: "所在地:"
        },
        locations: {
            kicker: "我们的办公地点",
            title: {
                part1: "在",
                highlight1: "上海",
                part2: "和慕尼黑与我们见面"
            },
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
            audit: {
                title: "免费审计（SEO + 网站 AI 优化）",
                subtext:
                    "留下邮箱，我们会发送一份网站 SEO 与 AI 优化机会的快速审计。",
                cta: "发送我的审计",
                sending: "发送中...",
                note: "我们将在24小时内回复。",
                placeholder: "邮箱",
                websitePlaceholder: "网站链接",
                formName: "页脚审计申请",
                message: "页脚免费审计申请（SEO + 网站 AI 优化）。",
                success: "感谢！我们会将审计发送到您的邮箱。",
                errors: {
                    missingEmail: "请输入有效的邮箱和网站。",
                    cooldown: "请稍等几分钟再提交新的审计申请。",
                    generic: "发送失败，请稍后再试。"
                }
            }
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
        },
        slide7: {
            title: "网站与Shopify",
            subtitle: "现代化网站，彰显专业性，将访客转化为询盘",
            services: [
                {
                    title: "现代视觉信任",
                    body: "简洁专业的设计，传递信誉，瞬间建立潜在客户的信心。您的网站将成为转化引擎，将访客变为潜在客户和顾客。"
                },
                {
                    title: "无摩擦用户体验",
                    body: "闪电般的加载速度和直观的导航，可将跳出率降低高达50%。当用户决定去留时，每一秒都至关重要——我们确保他们留下。"
                },
                {
                    title: "A/B测试与优化",
                    body: "在不同着陆页模板间切换，以确定实现最大用户参与度的最佳布局。数据驱动每一项决策，因此我们加倍投入有效的方法，放弃无效的方法。"
                },
                {
                    title: "用户跟踪与保留",
                    body: "监控回访用户，进行再营销和个性化体验。将匿名访客转变为回头客，并随着时间的推移建立忠诚度。"
                },
                {
                    title: "社会认同整合",
                    body: "以时尚的方式整合案例研究和推荐，以赢得即时用户信任。让您最佳的成果为您代言，向潜在客户展示他们为什么应该选择您。"
                },
                {
                    title: "强有力的行动号召",
                    body: "策略性地放置行动号召，强烈促使用户进行查询。清晰的后续步骤意味着更多的潜在客户，以及从访客到顾客的更顺畅的路径。"
                }
            ]
        },
        slide8: {
            title: "付费社交广告",
            subtitle: "为Meta、Instagram和TikTok制作的付费社交广告，可带来合格的潜在客户并建立品牌信任",
            services: [
                {
                    title: "广告创意与文案",
                    body: "具有文化意识的广告设计，能与西方受众产生共鸣。我们制作的视觉效果和信息能吸引注意力，并吸引合适的买家点击。"
                },
                {
                    title: "目标定位与优化",
                    body: "精准的受众定位，最大化您的广告支出。我们持续监控和调整广告活动，以触及最相关和高意向的买家。"
                },
                {
                    title: "潜在客户筛选",
                    body: "智能潜在客户表单，可预先筛选查询并过滤掉噪音。节省时间，专注于符合您理想客户画像的潜在客户。"
                },
                {
                    title: "内容漏斗",
                    body: "战略性内容，可将潜在客户从认知阶段培养至转化阶段。我们引导潜在客户完成建立信任并促使其购买的旅程。"
                },
                {
                    title: "双语广告管理",
                    body: "无缝管理英语和中文广告活动。我们的团队确保您的信息在所有语言和平台上保持一致和有效。"
                },
                {
                    title: "A/B测试",
                    body: "对广告创意、文案和目标定位进行数据驱动的测试。我们确定最有效的方法，并进行优化，以提高转化率和降低单位潜在客户成本。"
                }
            ]
        },
        slide9: {
            title: "SEO与ASO",
            subtitle: "通过搜索引擎优化和应用商店优化实现长期有机增长，从而带来有针对性的流量",
            services: [
                {
                    title: "关键词研究",
                    body: "深入的关键词分析，以发现高意向的搜索词。我们针对您理想客户用来查找像您这样的产品的关键词。"
                },
                {
                    title: "页面搜索引擎优化",
                    body: "优化网站和内容，提升搜索排名。我们改善您网站的结构、内容和技术性SEO，以吸引更多自然流量。"
                },
                {
                    title: "内容营销",
                    body: "有价值的内容，能吸引、吸引并转化客户。我们创作博客文章、文章和指南，以树立您的权威并带来入站潜在客户。"
                },
                {
                    title: "链接建设",
                    body: "高质量的反向链接，可建立您网站的权威和信任。我们从信誉良好的来源获得链接，以提高您的搜索引擎排名。"
                },
                {
                    title: "应用商店优化",
                    body: "提高您的应用在应用商店中的可见度。我们优化您应用的标题、描述和关键词，以增加下载量和用户获取。"
                },
                {
                    title: "分析与报告",
                    body: "关于关键SEO和ASO指标的透明报告。我们跟踪您的进展，并提供可操作的见解，以持续改善您的自然表现。"
                }
            ]
        },
        slide10: {
            title: "潜在客户开发软件",
            subtitle: "专有软件，可识别和筛选海外买家，直接为您的销售团队提供高质量的潜在客户",
            services: [
                {
                    title: "买家画像建模",
                    body: "定义您的理想客户画像，以找到最相关的潜在客户。我们的软件根据行业、公司规模、地理位置等对买家进行定位。"
                },
                {
                    title: "潜在客户评分和分级",
                    body: "自动对潜在客户进行评分和分级，以确定跟进的优先顺序。我们确保您的销售团队专注于最有希望的机会。"
                },
                {
                    title: "数据丰富",
                    body: "为您的潜在客户附加联系人和公司数据。全面了解您的潜在客户，以个性化您的外联并提高转化率。"
                },
                {
                    title: "自动化外联",
                    body: "设置和管理自动化电子邮件活动，以培养潜在客户。我们帮助您在潜在客户中保持首要位置，并推动他们通过销售漏斗。"
                },
                {
                    title: "CRM集成",
                    body: "将潜在客户和数据与您的CRM无缝同步。使您的销售和营销团队保持一致，并从单一的真实来源进行工作。"
                },
                {
                    title: "实时警报",
                    body: "当潜在客户表现出购买意向时，实时获得通知。绝不错过与热门潜在客户联系的机会。"
                }
            ]
        },
        slide11: {
            title: "AI搜索优化",
            subtitle: "为AI驱动的搜索时代优化您的在线形象。我们帮助您在生成式搜索引擎和对话式AI平台中排名。",
            services: [
                {
                    title: "生成式SEO",
                    body: "为生成式搜索引擎优化您的网站和内容。我们帮助您出现在AI模型为用户提供的答案中。"
                },
                {
                    title: "对话式AI营销",
                    body: "通过对话式AI平台与客户互动。我们构建聊天机器人和语音助手，提供即时支持并推动销售。"
                },
                {
                    title: "AI内容创作",
                    body: "利用AI大规模创建高质量内容。我们使用AI驱动的工具生成博客文章、社交媒体更新等。"
                },
                {
                    title: "AI驱动的分析",
                    body: "更深入地了解您的客户和广告活动。我们使用AI分析数据，发现增长机会。"
                },
                {
                    title: "AI广告定位",
                    body: "利用AI驱动的定位提高广告效果。我们使用机器学习来精确识别和触及您的理想客户。"
                },
                {
                    title: "AI个性化",
                    body: "提供个性化体验，提高参与度和忠诚度。我们使用AI根据每个用户量身定制您的网站、内容和优惠。"
                }
            ]
        },
        slide14: {
            title: "我们为中国制造商寻找海外买家",
            subtitle: "我们的外籍领导团队为您弥合工厂与西方市场之间的差距，采用经证明行之有效的增长体系。",
            bullets: [
                "内部潜在客户开发软件，实现精准定位",
                "能与西方买家产生共鸣的广告创意和文案",
                "从首次点击到最终销售的全漏斗管理",
                "双语团队，实现无缝沟通"
            ],
            cta: "获得免费咨询"
        }
    }
} as const
