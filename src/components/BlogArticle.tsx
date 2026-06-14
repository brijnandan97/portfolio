"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPost } from "@/data/blog";

export default function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto"
    >
      <Link
        href="/blog"
        className="text-neon-blue text-sm font-medium hover:underline"
      >
        &larr; All Posts
      </Link>

      <header className="mt-6 mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span
            className="text-xs px-3 py-1 rounded-full border"
            style={{
              borderColor: "var(--border-input)",
              color: "var(--text-muted)",
            }}
          >
            {post.category}
          </span>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            {post.readTime}
          </span>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
          style={{ color: "var(--text-heading)" }}
        >
          {post.title}
        </h1>
        <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
          {post.description}
        </p>
      </header>

      <div
        className="prose prose-lg max-w-none"
        style={{ color: "var(--text-primary)" }}
      >
        {post.content.split("\n\n").map((block, i) => {
          if (block.startsWith("## ")) {
            return (
              <h2
                key={i}
                className="text-2xl font-bold mt-10 mb-4"
                style={{ color: "var(--text-heading)" }}
              >
                {block.replace("## ", "")}
              </h2>
            );
          }
          if (block.startsWith("### ")) {
            return (
              <h3
                key={i}
                className="text-xl font-semibold mt-8 mb-3"
                style={{ color: "var(--text-heading)" }}
              >
                {block.replace("### ", "")}
              </h3>
            );
          }
          if (block.startsWith("```")) {
            const code = block.replace(/```\w*\n?/, "").replace(/```$/, "");
            return (
              <pre
                key={i}
                className="rounded-xl p-5 overflow-x-auto text-sm my-6 border"
                style={{
                  background: "var(--bg-tertiary)",
                  borderColor: "var(--border-subtle)",
                  color: "var(--text-primary)",
                }}
              >
                <code>{code}</code>
              </pre>
            );
          }
          if (block.startsWith("- ")) {
            const items = block.split("\n").filter((l) => l.startsWith("- "));
            return (
              <ul key={i} className="list-disc pl-6 space-y-2 my-4">
                {items.map((item, j) => (
                  <li
                    key={j}
                    className="text-base leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.replace(/^- /, "").replace(/\*\*(.*?)\*\*/g, "$1")}
                  </li>
                ))}
              </ul>
            );
          }
          if (block.startsWith("- [ ]")) {
            const items = block.split("\n").filter((l) => l.startsWith("- [ ]"));
            return (
              <ul key={i} className="space-y-2 my-4 pl-2">
                {items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-base"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span className="w-4 h-4 mt-1 border rounded flex-shrink-0" style={{ borderColor: "var(--border-input)" }} />
                    {item.replace(/^- \[ \] /, "")}
                  </li>
                ))}
              </ul>
            );
          }
          if (block.match(/^\d+\./)) {
            const items = block.split("\n").filter((l) => l.match(/^\d+\./));
            return (
              <ol key={i} className="list-decimal pl-6 space-y-2 my-4">
                {items.map((item, j) => (
                  <li
                    key={j}
                    className="text-base leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.replace(/^\d+\.\s*/, "").replace(/\*\*(.*?)\*\*/g, "$1")}
                  </li>
                ))}
              </ol>
            );
          }
          return (
            <p
              key={i}
              className="text-base leading-relaxed my-4"
              style={{ color: "var(--text-secondary)" }}
            >
              {block}
            </p>
          );
        })}
      </div>

      <div
        className="mt-12 p-6 sm:p-8 rounded-2xl border"
        style={{
          background: "var(--bg-card)",
          borderColor: "var(--border-subtle)",
        }}
      >
        <p
          className="text-lg font-semibold mb-2"
          style={{ color: "var(--text-heading)" }}
        >
          Need help with your project?
        </p>
        <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
          I help businesses build scalable, high-performance web applications.
          Let&apos;s discuss your needs.
        </p>
        <Link href="/#contact" className="btn-primary text-sm inline-block">
          Get in Touch
        </Link>
      </div>
    </motion.article>
  );
}
