"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface KnowledgeEntry {
  keywords: string[];
  response: string;
}

const knowledge: KnowledgeEntry[] = [
  {
    keywords: ["hi", "hello", "hey", "greet", "howdy", "sup"],
    response:
      "Hey there! 👋 I'm Brij's AI assistant. I can tell you about his skills, services, pricing, experience, or how to get in touch. What would you like to know?",
  },
  {
    keywords: ["skill", "tech", "technology", "stack", "language", "framework", "tool"],
    response:
      "Brij's tech stack includes:\n\n• Frontend: React, Next.js, Angular, TypeScript, Tailwind CSS, Framer Motion\n• Backend: Node.js, Express, Python\n• Other: REST APIs, Database Design, Authentication, CI/CD, Testing (85%+ coverage)\n\nHe specializes in building high-performance, scalable web applications.",
  },
  {
    keywords: ["experience", "work", "company", "career", "job", "year"],
    response:
      "Brij has 6+ years of professional experience:\n\n• Currently at Majid Al Futtaim — Managing the Seller Portal for Carrefour\n• Previously at ZS Associates, Infosys, and London Stock Exchange Group\n• Led teams of 7+ engineers\n• Delivered 50+ projects impacting 10K+ users\n\nHe brings enterprise-grade engineering practices to every project.",
  },
  {
    keywords: ["service", "offer", "do", "provide", "help", "build"],
    response:
      "Brij offers these services:\n\n• Web Application Development (React, Next.js, Angular)\n• E-Commerce Solutions (storefronts, payments, dashboards)\n• Responsive UI/UX (mobile-first, animations, accessibility)\n• Performance Optimization (load time, SEO, bundles)\n• API Development (REST, databases, auth)\n• Technical Consulting (code reviews, architecture, mentorship)\n\nWant details on any specific service?",
  },
  {
    keywords: ["price", "pricing", "cost", "charge", "rate", "budget", "afford", "pay", "package"],
    response:
      "Brij offers flexible pricing:\n\n• Starter Package — Landing pages & small websites\n• Professional Package — Full web applications\n• Enterprise Package — Large-scale platforms\n\nAll packages include source code, documentation, deployment support, responsive design, basic SEO, and 30 days post-launch support. For exact quotes, reach out via the contact form or WhatsApp!",
  },
  {
    keywords: ["contact", "reach", "email", "phone", "whatsapp", "message", "talk", "call", "hire"],
    response:
      "You can reach Brij through:\n\n• WhatsApp: +91 7018289620\n• Contact form on this website (scroll down to the Contact section)\n\nHe responds quickly and is happy to discuss your project requirements!",
  },
  {
    keywords: ["timeline", "time", "long", "duration", "deadline", "delivery", "fast"],
    response:
      "Typical timelines:\n\n• Landing page: 1-2 weeks\n• Full web application: 3-8 weeks\n• Complex platform: 8+ weeks\n\nBrij provides detailed timelines after an initial discovery call. He's known for clear communication and timely delivery.",
  },
  {
    keywords: ["freelance", "available", "availability", "remote", "location", "where", "based", "timezone"],
    response:
      "Brij is currently available for freelance projects! He's based between Gurugram, India and Dubai, UAE but works with clients globally. He's comfortable with different time zones and uses async communication tools effectively.",
  },
  {
    keywords: ["react", "next", "nextjs", "angular", "frontend", "front-end"],
    response:
      "Brij is a frontend specialist with deep expertise in:\n\n• React & Next.js — His go-to for most projects, especially with TypeScript\n• Angular — Enterprise-level applications\n• Performance — Reduced load times by 45% and bundle sizes by 40%\n• UI/UX — Pixel-perfect implementations with smooth animations\n\nHe can build SPAs, PWAs, and server-rendered applications.",
  },
  {
    keywords: ["backend", "back-end", "node", "api", "server", "database", "python"],
    response:
      "On the backend, Brij works with:\n\n• Node.js & Express for REST APIs\n• Python for data-intensive applications\n• Database design and optimization\n• Authentication and security\n• Third-party integrations\n\nHe provides full-stack, end-to-end development.",
  },
  {
    keywords: ["project", "portfolio", "example", "previous", "past", "case"],
    response:
      "Brij has delivered 50+ projects including:\n\n• Enterprise platforms serving 10K+ users\n• E-commerce solutions with Carrefour's Seller Portal\n• High-performance web apps with 45% load time improvement\n• Applications at companies like ZS Associates & Majid Al Futtaim\n\nCheck out the Projects section on this page for featured work!",
  },
  {
    keywords: ["maintenance", "support", "bug", "fix", "update", "after"],
    response:
      "Every project includes 30 days of free post-launch support. After that, Brij offers monthly maintenance plans for:\n\n• Bug fixes and updates\n• Feature additions\n• Performance monitoring\n• Security patches\n\nNo hidden fees — everything is discussed upfront.",
  },
  {
    keywords: ["team", "collaborate", "work with", "existing", "integrate"],
    response:
      "Absolutely! Brij has extensive experience working with teams:\n\n• Led teams of 7+ engineers\n• Mentored developers at London Stock Exchange Group\n• Integrates well into existing workflows\n• Adapts to your team's processes and tools\n\nHe can work as a dedicated resource or augment your existing team.",
  },
  {
    keywords: ["performance", "speed", "optimize", "fast", "slow", "core web", "seo"],
    response:
      "Performance is Brij's specialty:\n\n• Reduced load times by 45%\n• Reduced bundle sizes by 40%\n• Core Web Vitals optimization\n• Code splitting & lazy loading\n• Caching strategies\n• SEO optimization\n\nHe can audit and speed up your existing applications too!",
  },
  {
    keywords: ["thank", "thanks", "bye", "goodbye", "see you", "great"],
    response:
      "You're welcome! 😊 If you have more questions later, I'm always here. Feel free to reach out to Brij directly via WhatsApp or the contact form when you're ready to discuss your project. Have a great day!",
  },
];

const fallbackResponses = [
  "That's a great question! For detailed discussions, I'd recommend reaching out to Brij directly via WhatsApp (+91 7018289620) or the contact form below. Is there anything else about his services, skills, or experience I can help with?",
  "I'm not sure I have the specific answer to that, but Brij would be happy to discuss it with you! You can reach him via the contact form or WhatsApp. Meanwhile, I can tell you about his services, pricing, tech stack, or experience.",
  "Hmm, I'd love to help more with that! For specific project inquiries, the best route is to contact Brij directly. I can help you with questions about his skills, services, pricing, or availability though!",
];

function getResponse(input: string): string {
  const normalized = input.toLowerCase().trim();

  let bestMatch: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of knowledge) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (normalized.includes(keyword)) {
        score += keyword.length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch && bestScore > 0) {
    return bestMatch.response;
  }

  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! 👋 I'm Brij's AI assistant. Ask me anything about his skills, services, pricing, or how he can help with your project!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) throw new Error("API failed");

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
    } catch {
      const fallback = getResponse(userMessage.content);
      setMessages((prev) => [...prev, { role: "assistant", content: fallback }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickQuestions = [
    "What services do you offer?",
    "What's your tech stack?",
    "How can I contact you?",
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-20 left-4 sm:bottom-24 sm:left-6 z-[60] w-[calc(100vw-2rem)] sm:w-[380px] max-h-[500px] flex flex-col rounded-2xl overflow-hidden border"
            style={{
              background: "var(--bg-glass)",
              backdropFilter: "blur(20px)",
              borderColor: "var(--border-subtle)",
              boxShadow:
                "0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 212, 255, 0.1)",
            }}
          >
            <div
              className="flex items-center justify-between px-5 py-4 border-b"
              style={{
                borderColor: "var(--border-color)",
                background: "var(--bg-secondary)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-br from-neon-blue to-neon-purple">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-neon-green rounded-full border-2" style={{ borderColor: "var(--bg-secondary)" }} />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-heading)" }}
                  >
                    AI Assistant
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    Ask me about Brij
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-[300px] max-h-[350px]"
              style={{ scrollbarWidth: "thin" }}
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                      msg.role === "user" ? "rounded-br-md" : "rounded-bl-md"
                    }`}
                    style={
                      msg.role === "user"
                        ? {
                            background:
                              "linear-gradient(135deg, #00d4ff, #b84dff)",
                            color: "white",
                          }
                        : {
                            background: "var(--bg-tertiary)",
                            color: "var(--text-primary)",
                            border: "1px solid var(--border-subtle)",
                          }
                    }
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div
                    className="rounded-2xl rounded-bl-md px-4 py-3 border"
                    style={{
                      background: "var(--bg-tertiary)",
                      borderColor: "var(--border-subtle)",
                    }}
                  >
                    <div className="flex gap-1.5">
                      <span
                        className="w-2 h-2 rounded-full bg-neon-blue animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="w-2 h-2 rounded-full bg-neon-purple animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="w-2 h-2 rounded-full bg-neon-pink animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {messages.length === 1 && !isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-2 pt-2"
                >
                  {quickQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => {
                        setInput(q);
                        setTimeout(() => {
                          setInput("");
                          const userMsg: Message = { role: "user", content: q };
                          setMessages((prev) => [...prev, userMsg]);
                          setIsTyping(true);
                          setTimeout(() => {
                            const response = getResponse(q);
                            setMessages((prev) => [
                              ...prev,
                              { role: "assistant", content: response },
                            ]);
                            setIsTyping(false);
                          }, 500);
                        }, 0);
                      }}
                      className="text-xs px-3 py-1.5 rounded-full border transition-colors"
                      style={{
                        borderColor: "var(--border-input)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {q}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div
              className="px-4 py-3 border-t"
              style={{ borderColor: "var(--border-color)" }}
            >
              <div
                className="flex items-center gap-2 rounded-xl px-4 py-2 border"
                style={{
                  background: "var(--bg-input)",
                  borderColor: "var(--border-input)",
                }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about services, pricing..."
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-[var(--text-muted)]"
                  style={{ color: "var(--text-primary)" }}
                  disabled={isTyping}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isTyping}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all disabled:opacity-30"
                  style={{
                    background: input.trim()
                      ? "linear-gradient(135deg, #00d4ff, #b84dff)"
                      : "transparent",
                  }}
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19V5m0 0l-7 7m7-7l7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[60] w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg transition-shadow"
        style={{
          background: "linear-gradient(135deg, #00d4ff, #b84dff)",
          boxShadow: "0 8px 30px rgba(0, 212, 255, 0.3)",
        }}
        aria-label="Chat with AI assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="bot"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
