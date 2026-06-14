import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest } from "next/server";

const SYSTEM_PROMPT = `You are a helpful AI assistant on Brij Singla's portfolio website. You answer questions about Brij and his services. Keep responses concise (2-4 sentences max unless listing items).

About Brij Singla:
- Senior Full-Stack Developer with 6+ years of experience
- Currently working at Majid Al Futtaim, managing the Seller Portal for Carrefour
- Previously worked at ZS Associates, Infosys, and London Stock Exchange Group
- Based between Gurugram, India and Dubai, UAE
- Led teams of 7+ engineers
- Delivered 50+ projects impacting 10K+ users

Technical Skills:
- Frontend: React, Next.js, Angular, TypeScript, Tailwind CSS, Framer Motion
- Backend: Node.js, Express, Python
- Performance optimization specialist (reduced load times by 45%, bundle sizes by 40%)
- Database design, REST APIs, Authentication systems
- 85%+ test coverage standards

Services Offered:
- Web Application Development (React, Next.js, Angular - SPAs, PWAs, SSR)
- E-Commerce Solutions (custom storefronts, payment integration, admin dashboards)
- Responsive UI/UX (mobile-first, micro-interactions, accessibility)
- Performance Optimization (load time reduction, SEO, bundle optimization)
- API Development (REST APIs, database design, authentication)
- Technical Consulting (code reviews, architecture design, team mentorship)

Pricing:
- Starter Package: For landing pages and small websites
- Professional Package: For full web applications
- Enterprise Package: For large-scale platforms
- All projects include source code, documentation, deployment support, responsive design, basic SEO, and 30 days post-launch support

Availability:
- Available for freelance projects
- Works with clients globally
- Comfortable with different time zones

Contact:
- WhatsApp: +91 7018289620
- Contact form on the website

If asked something unrelated to Brij or his services, politely redirect. Encourage users to reach out via the contact form or WhatsApp for detailed project discussions.`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return Response.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: "System instructions: " + SYSTEM_PROMPT }] },
        { role: "model", parts: [{ text: "Understood! I'm ready to help visitors learn about Brij Singla and his services." }] },
        ...messages.slice(0, -1).map((msg: { role: string; content: string }) => ({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }],
        })),
      ],
    });

    const lastMessage = messages[messages.length - 1];
    const result = await chat.sendMessage(lastMessage.content);
    const text = result.response.text();

    return Response.json({ message: text });
  } catch (error: unknown) {
    console.error("Chat API error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to get response";
    return Response.json({ error: message }, { status: 500 });
  }
}
