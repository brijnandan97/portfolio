"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPost } from "@/data/blog";

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="space-y-6">
      {posts.map((post, i) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="block glass-card rounded-2xl p-6 sm:p-8 group"
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
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
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <h2
              className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-neon-blue transition-colors"
              style={{ color: "var(--text-heading)" }}
            >
              {post.title}
            </h2>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              {post.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded bg-neon-blue/10 text-neon-blue"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
