export interface BlogPost {
    id: string
    title: string
    slug: string
    content: string
    image: string
    author: string
    date: Date
    excerpt?: string
}

// Generate slug from title
export function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim()
}

// Generate random date between Jan 6, 2026 and Jan 1, 2021
function randomDate(): Date {
    const start = new Date("2021-01-01").getTime()
    const end = new Date("2026-01-06").getTime()
    const randomTime = start + Math.random() * (end - start)
    return new Date(randomTime)
}

// Authors
const authors = ["Antonio Guijarro", "Mishel Sparsov", "Tatjana Svetlova"]

// Get random author
function getRandomAuthor(): string {
    return authors[Math.floor(Math.random() * authors.length)]
}

// Generate excerpt from content
function generateExcerpt(content: string, maxLength: number = 150): string {
    const text = content.replace(/[#*`]/g, "").trim()
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength).trim() + "..."
}

// Sample blog posts data
export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "The Future of Digital Marketing in 2026",
        slug: generateSlug("The Future of Digital Marketing in 2026"),
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
        author: getRandomAuthor(),
        content: `# The Future of Digital Marketing in 2026

Digital marketing continues to evolve at a rapid pace. As we move into 2026, several key trends are shaping the landscape of how businesses connect with their audiences.

## AI-Powered Personalization

Artificial intelligence is revolutionizing how marketers understand and engage with customers. Machine learning algorithms can now analyze vast amounts of data to create highly personalized experiences that resonate with individual consumers.

## Voice Search Optimization

With the increasing adoption of smart speakers and voice assistants, optimizing for voice search has become crucial. Marketers need to adapt their SEO strategies to account for conversational queries and natural language patterns.

## Video Content Dominance

Video content continues to dominate social media and marketing channels. Short-form videos, live streaming, and interactive video experiences are becoming essential tools for engaging modern audiences.

## Sustainability and Authenticity

Consumers are increasingly drawn to brands that demonstrate genuine commitment to sustainability and social responsibility. Authentic storytelling and transparent communication are more important than ever.

## Conclusion

The future of digital marketing lies in creating authentic, personalized experiences that resonate with consumers while leveraging cutting-edge technology to deliver value.`,
        date: randomDate()
    },
    {
        id: "2",
        title: "Understanding SEO Best Practices for Modern Websites",
        slug: generateSlug(
            "Understanding SEO Best Practices for Modern Websites"
        ),
        image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c92e?w=1200&h=600&fit=crop",
        author: getRandomAuthor(),
        content: `# Understanding SEO Best Practices for Modern Websites

Search engine optimization remains one of the most critical aspects of digital marketing. Here's what you need to know about modern SEO practices.

## Technical SEO Fundamentals

Technical SEO forms the foundation of any successful SEO strategy. This includes optimizing site speed, ensuring mobile responsiveness, implementing proper schema markup, and maintaining clean URL structures.

## Content Quality and Relevance

Search engines prioritize high-quality, relevant content that provides value to users. Focus on creating comprehensive, well-researched content that answers user queries effectively.

## User Experience Signals

Google and other search engines increasingly consider user experience metrics like bounce rate, time on site, and pages per session when ranking websites. A great user experience is essential for SEO success.

## Link Building Strategies

While link building remains important, the focus has shifted toward earning high-quality, relevant links through exceptional content and genuine relationships rather than manipulative tactics.

## Local SEO Considerations

For businesses serving local markets, optimizing for local search is crucial. This includes maintaining accurate business listings, collecting positive reviews, and creating location-specific content.`,
        date: randomDate()
    },
    {
        id: "3",
        title: "Building Effective E-commerce Strategies",
        slug: generateSlug("Building Effective E-commerce Strategies"),
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
        author: getRandomAuthor(),
        content: `# Building Effective E-commerce Strategies

E-commerce continues to grow, and businesses need robust strategies to succeed in the competitive online marketplace.

## Customer Journey Mapping

Understanding the complete customer journey from awareness to purchase is essential. Map out each touchpoint and optimize the experience at every stage.

## Mobile Commerce Optimization

With mobile commerce accounting for an increasing share of online sales, ensuring your e-commerce platform is fully optimized for mobile devices is non-negotiable.

## Personalization and Recommendations

Implementing intelligent product recommendations and personalized shopping experiences can significantly increase conversion rates and average order values.

## Payment and Checkout Optimization

Streamlining the checkout process and offering multiple payment options reduces cart abandonment and improves the overall shopping experience.

## Customer Retention Strategies

Acquiring new customers is expensive. Focus on retention through loyalty programs, personalized communications, and exceptional post-purchase experiences.`,
        date: randomDate()
    },
    {
        id: "4",
        title: "Social Media Marketing Trends to Watch",
        slug: generateSlug("Social Media Marketing Trends to Watch"),
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop",
        author: getRandomAuthor(),
        content: `# Social Media Marketing Trends to Watch

Social media platforms continue to evolve, and marketers must stay ahead of the curve to effectively engage audiences.

## Short-Form Video Content

Platforms like TikTok and Instagram Reels have made short-form video content essential. Brands need to create engaging, authentic video content that captures attention quickly.

## Social Commerce Integration

Social media platforms are increasingly becoming shopping destinations. Integrating e-commerce directly into social media experiences is becoming standard practice.

## Community Building

Building genuine communities around brands rather than just broadcasting messages creates stronger connections and more engaged audiences.

## Influencer Partnerships

Strategic influencer partnerships remain valuable, but authenticity and alignment with brand values are more important than follower counts.

## Privacy and Data Considerations

As privacy regulations evolve, marketers must adapt their social media strategies to respect user privacy while still delivering personalized experiences.`,
        date: randomDate()
    },
    {
        id: "5",
        title: "Content Marketing: Creating Value-Driven Content",
        slug: generateSlug("Content Marketing: Creating Value-Driven Content"),
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop",
        author: getRandomAuthor(),
        content: `# Content Marketing: Creating Value-Driven Content

Content marketing is about creating and distributing valuable, relevant content to attract and engage a clearly defined audience.

## Understanding Your Audience

Deep audience research is the foundation of effective content marketing. Understand your audience's pain points, interests, and content consumption preferences.

## Content Formats and Channels

Diversify your content formats across blog posts, videos, podcasts, infographics, and more. Choose channels that align with where your audience spends time.

## Content Planning and Consistency

Develop a content calendar that ensures consistent publishing while maintaining quality. Balance evergreen content with timely, trending topics.

## Measuring Content Performance

Track metrics like engagement, shares, time on page, and conversions to understand what content resonates with your audience and drives business results.

## Storytelling and Brand Voice

Develop a consistent brand voice and use storytelling techniques to make your content more engaging and memorable.`,
        date: randomDate()
    },
    {
        id: "6",
        title: "The Role of Analytics in Business Growth",
        slug: generateSlug("The Role of Analytics in Business Growth"),
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
        author: getRandomAuthor(),
        content: `# The Role of Analytics in Business Growth

Data-driven decision making is essential for modern business growth. Here's how to leverage analytics effectively.

## Setting Up Proper Tracking

Implement comprehensive tracking across all your digital channels. Ensure you're capturing meaningful data that aligns with your business objectives.

## Key Performance Indicators

Identify and track KPIs that directly relate to your business goals. Focus on metrics that matter rather than vanity metrics.

## Data Analysis and Insights

Regularly analyze your data to uncover insights about customer behavior, marketing performance, and business trends. Look for patterns and opportunities.

## Reporting and Communication

Create clear, actionable reports that stakeholders can understand and act upon. Visualize data in ways that tell a story.

## Continuous Optimization

Use analytics to continuously test, optimize, and improve your marketing efforts and business processes.`,
        date: randomDate()
    },
    {
        id: "7",
        title: "Email Marketing Best Practices for 2026",
        slug: generateSlug("Email Marketing Best Practices for 2026"),
        image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=1200&h=600&fit=crop",
        author: getRandomAuthor(),
        content: `# Email Marketing Best Practices for 2026

Email marketing remains one of the most effective channels for reaching and engaging customers. Here are best practices for success.

## List Building and Segmentation

Build your email list organically and segment subscribers based on their interests, behavior, and preferences for more targeted campaigns.

## Personalization and Automation

Use automation to deliver personalized messages at scale. Welcome series, abandoned cart emails, and behavioral triggers can significantly improve engagement.

## Mobile Optimization

With most emails opened on mobile devices, ensure your emails are fully optimized for mobile viewing and interaction.

## A/B Testing

Continuously test subject lines, content, send times, and design elements to improve open rates, click-through rates, and conversions.

## Compliance and Deliverability

Stay compliant with email regulations like GDPR and CAN-SPAM, and maintain good sender reputation to ensure your emails reach inboxes.`,
        date: randomDate()
    },
    {
        id: "8",
        title: "Web Development Trends: What's Next",
        slug: generateSlug("Web Development Trends: What's Next"),
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop",
        author: getRandomAuthor(),
        content: `# Web Development Trends: What's Next

The web development landscape continues to evolve with new technologies and approaches shaping the future of the web.

## Performance Optimization

Web performance remains critical. Techniques like code splitting, lazy loading, and modern image formats help create faster, more efficient websites.

## Progressive Web Apps

PWAs combine the best of web and mobile apps, offering offline functionality, push notifications, and app-like experiences.

## Serverless Architecture

Serverless computing is changing how developers build and deploy applications, offering scalability and cost efficiency.

## Modern JavaScript Frameworks

Frameworks like React, Next.js, and Vue continue to evolve, making it easier to build complex, interactive web applications.

## Accessibility and Inclusive Design

Building accessible websites that work for everyone is not just ethical but also makes good business sense.`,
        date: randomDate()
    },
    {
        id: "9",
        title: "Brand Identity and Visual Design Principles",
        slug: generateSlug("Brand Identity and Visual Design Principles"),
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
        author: getRandomAuthor(),
        content: `# Brand Identity and Visual Design Principles

A strong brand identity helps businesses stand out and connect with their target audience on an emotional level.

## Defining Brand Values

Start by clearly defining your brand's core values, mission, and personality. These elements should guide all design decisions.

## Visual Consistency

Maintain visual consistency across all touchpoints. This includes colors, typography, imagery style, and overall aesthetic.

## Logo and Brand Assets

Your logo is often the first impression. Ensure it's versatile, memorable, and works across various applications and sizes.

## Typography and Color Psychology

Choose typography and colors that align with your brand personality and evoke the right emotions in your audience.

## Application Across Channels

Ensure your brand identity translates effectively across digital and physical channels, maintaining recognition and consistency.`,
        date: randomDate()
    },
    {
        id: "10",
        title: "Conversion Rate Optimization Strategies",
        slug: generateSlug("Conversion Rate Optimization Strategies"),
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
        author: getRandomAuthor(),
        content: `# Conversion Rate Optimization Strategies

Improving conversion rates can have a significant impact on business revenue without increasing traffic or ad spend.

## Understanding User Behavior

Use analytics and user research to understand how visitors interact with your website and identify barriers to conversion.

## A/B Testing Methodology

Implement systematic A/B testing to validate hypotheses and make data-driven improvements to your conversion funnel.

## Landing Page Optimization

Optimize landing pages for specific campaigns and audiences. Clear value propositions, compelling CTAs, and trust signals are essential.

## Form Optimization

Simplify forms and reduce friction in the conversion process. Only ask for essential information and make the process as easy as possible.

## Trust and Credibility

Build trust through customer testimonials, security badges, clear policies, and professional design.`,
        date: randomDate()
    },
    {
        id: "11",
        title: "Mobile App Development: Key Considerations",
        slug: generateSlug("Mobile App Development: Key Considerations"),
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop",
        author: getRandomAuthor(),
        content: `# Mobile App Development: Key Considerations

Mobile apps offer unique opportunities to engage users, but successful app development requires careful planning and execution.

## Platform Selection

Decide between native, hybrid, or cross-platform development based on your requirements, budget, and timeline.

## User Experience Design

Mobile UX differs significantly from web UX. Design for touch interactions, limited screen space, and mobile-specific use cases.

## Performance and Optimization

Mobile apps must be fast and efficient. Optimize for battery life, data usage, and performance across different devices.

## App Store Optimization

ASO is crucial for discoverability. Optimize your app title, description, keywords, and visuals to improve visibility in app stores.

## User Onboarding and Retention

Create smooth onboarding experiences and implement features that encourage regular use and long-term engagement.`,
        date: randomDate()
    },
    {
        id: "12",
        title: "Customer Experience: The New Competitive Advantage",
        slug: generateSlug(
            "Customer Experience: The New Competitive Advantage"
        ),
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
        author: getRandomAuthor(),
        content: `# Customer Experience: The New Competitive Advantage

Exceptional customer experience has become a key differentiator in today's competitive marketplace.

## Mapping the Customer Journey

Understand every touchpoint in the customer journey and identify opportunities to create positive experiences.

## Personalization at Scale

Leverage technology to deliver personalized experiences that make customers feel valued and understood.

## Omnichannel Consistency

Ensure consistent experiences across all channels, whether customers interact online, in-store, or through customer service.

## Feedback and Continuous Improvement

Regularly collect and act on customer feedback to continuously improve the experience you deliver.

## Employee Experience

Happy, engaged employees deliver better customer experiences. Invest in your team to improve customer satisfaction.`,
        date: randomDate()
    },
    {
        id: "13",
        title: "Paid Advertising: Maximizing ROI",
        slug: generateSlug("Paid Advertising: Maximizing ROI"),
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
        author: getRandomAuthor(),
        content: `# Paid Advertising: Maximizing ROI

Effective paid advertising requires strategic planning, continuous optimization, and a focus on return on investment.

## Platform Selection

Choose advertising platforms that align with your target audience and business objectives. Consider Google Ads, social media advertising, and display networks.

## Audience Targeting

Use advanced targeting options to reach the right people with the right message at the right time.

## Ad Creative and Copy

Create compelling ad creative and copy that grabs attention, communicates value, and drives action.

## Landing Page Alignment

Ensure your landing pages align with your ad messaging and provide a seamless experience from click to conversion.

## Budget Management and Bidding

Optimize your bidding strategies and budget allocation to maximize ROI while maintaining campaign performance.`,
        date: randomDate()
    },
    {
        id: "14",
        title: "Building a Strong Online Presence",
        slug: generateSlug("Building a Strong Online Presence"),
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop",
        author: getRandomAuthor(),
        content: `# Building a Strong Online Presence

A strong online presence is essential for modern businesses to connect with customers and grow their brand.

## Website as Foundation

Your website is the foundation of your online presence. Ensure it's professional, fast, mobile-friendly, and optimized for search engines.

## Social Media Strategy

Develop a consistent social media presence across platforms relevant to your audience. Engage authentically and provide value.

## Content Marketing

Create valuable content that establishes your expertise, helps your audience, and improves your search visibility.

## Online Reviews and Reputation

Manage your online reputation through excellent customer service and proactive review management.

## Local SEO and Listings

For local businesses, maintain accurate listings across directories and optimize for local search visibility.`,
        date: randomDate()
    },
    {
        id: "15",
        title: "E-commerce Payment Solutions and Security",
        slug: generateSlug("E-commerce Payment Solutions and Security"),
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop",
        author: getRandomAuthor(),
        content: `# E-commerce Payment Solutions and Security

Secure, convenient payment options are crucial for e-commerce success and customer trust.

## Payment Gateway Selection

Choose payment gateways that offer the payment methods your customers prefer while maintaining security and reliability.

## Security Best Practices

Implement SSL certificates, PCI compliance, and fraud prevention measures to protect customer data and build trust.

## Mobile Payment Options

Offer mobile payment options like Apple Pay and Google Pay to streamline checkout on mobile devices.

## International Payment Methods

For global businesses, offer payment methods popular in your target markets to reduce friction and increase conversions.

## Payment Processing Optimization

Optimize your payment processing to reduce declined transactions and improve the overall checkout experience.`,
        date: randomDate()
    },
    {
        id: "16",
        title: "Video Marketing: Creating Engaging Content",
        slug: generateSlug("Video Marketing: Creating Engaging Content"),
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=600&fit=crop",
        author: getRandomAuthor(),
        content: `# Video Marketing: Creating Engaging Content

Video content is one of the most engaging forms of content marketing, but creating effective videos requires strategy and skill.

## Video Content Types

Diversify your video content across tutorials, behind-the-scenes, testimonials, product demos, and live streams.

## Production Quality

While professional production can help, authenticity often matters more than perfect production quality. Focus on value over polish.

## Platform Optimization

Optimize videos for each platform's specifications and audience preferences. What works on YouTube may not work on TikTok.

## Storytelling and Engagement

Use storytelling techniques to create emotional connections and keep viewers engaged throughout your videos.

## Measuring Video Performance

Track metrics like views, watch time, engagement, and conversions to understand what video content resonates with your audience.`,
        date: randomDate()
    },
    {
        id: "17",
        title: "Data Privacy and GDPR Compliance",
        slug: generateSlug("Data Privacy and GDPR Compliance"),
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop",
        author: getRandomAuthor(),
        content: `# Data Privacy and GDPR Compliance

Data privacy regulations like GDPR require businesses to handle customer data responsibly and transparently.

## Understanding Regulations

Stay informed about data privacy regulations that apply to your business, including GDPR, CCPA, and other regional laws.

## Data Collection Practices

Only collect data that's necessary for your business purposes and be transparent about how you use customer data.

## Consent Management

Implement clear consent mechanisms that allow users to understand and control how their data is used.

## Data Security Measures

Implement robust security measures to protect customer data from breaches and unauthorized access.

## Privacy Policies and Transparency

Maintain clear, accessible privacy policies that explain your data practices in plain language.`,
        date: randomDate()
    },
    {
        id: "18",
        title: "Building Effective Landing Pages",
        slug: generateSlug("Building Effective Landing Pages"),
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop",
        author: getRandomAuthor(),
        content: `# Building Effective Landing Pages

Landing pages are critical for converting visitors into leads or customers. Here's how to create effective landing pages.

## Clear Value Proposition

Communicate your value proposition clearly and immediately. Visitors should understand what you offer within seconds.

## Compelling Headlines

Write headlines that grab attention and communicate the benefit of your offer. Test different variations to find what works best.

## Social Proof

Include testimonials, reviews, case studies, or usage statistics to build trust and credibility.

## Strong Call-to-Action

Make your CTA prominent, action-oriented, and aligned with your value proposition. Use contrasting colors and clear language.

## Mobile Optimization

Ensure your landing pages are fully optimized for mobile devices, as many visitors will access them on smartphones.`,
        date: randomDate()
    },
    {
        id: "19",
        title: "Marketing Automation: Streamlining Your Workflow",
        slug: generateSlug("Marketing Automation: Streamlining Your Workflow"),
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
        author: getRandomAuthor(),
        content: `# Marketing Automation: Streamlining Your Workflow

Marketing automation can help you scale your marketing efforts while delivering personalized experiences to your audience.

## Automation Platform Selection

Choose automation platforms that integrate with your existing tools and support your marketing workflows.

## Lead Nurturing Campaigns

Set up automated email sequences to nurture leads through the sales funnel, providing value at each stage.

## Behavioral Triggers

Use behavioral triggers to send relevant messages based on user actions, such as website visits, content downloads, or purchases.

## Segmentation and Personalization

Leverage automation to segment your audience and deliver personalized content and offers based on their interests and behavior.

## Performance Tracking

Monitor automation performance and continuously optimize your workflows to improve engagement and conversion rates.`,
        date: randomDate()
    },
    {
        id: "20",
        title: "The Importance of Website Speed and Performance",
        slug: generateSlug("The Importance of Website Speed and Performance"),
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
        author: getRandomAuthor(),
        content: `# The Importance of Website Speed and Performance

Website speed and performance directly impact user experience, search rankings, and business results.

## Core Web Vitals

Google's Core Web Vitals measure real-world user experience. Focus on improving LCP, FID, and CLS scores.

## Image Optimization

Optimize images by using modern formats, proper sizing, lazy loading, and compression to reduce load times.

## Code Optimization

Minimize and compress CSS and JavaScript, remove unused code, and leverage browser caching to improve performance.

## Hosting and CDN

Choose reliable hosting and consider using a CDN to serve content from locations closer to your users.

## Performance Monitoring

Regularly monitor your website's performance using tools like Google PageSpeed Insights and make continuous improvements.`,
        date: randomDate()
    }
].map((post) => ({
    ...post,
    excerpt: generateExcerpt(post.content)
}))

// Get all blog posts sorted by date (newest first)
export function getAllBlogPosts(): BlogPost[] {
    return [...blogPosts].sort((a, b) => b.date.getTime() - a.date.getTime())
}

// Get blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug)
}

// Get related posts (excluding current post)
export function getRelatedPosts(
    currentPostSlug: string,
    count: number = 3
): BlogPost[] {
    const currentPost = getBlogPostBySlug(currentPostSlug)
    if (!currentPost) return []

    const otherPosts = blogPosts.filter((post) => post.slug !== currentPostSlug)
    // Shuffle and take random posts
    const shuffled = [...otherPosts].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, count)
}
