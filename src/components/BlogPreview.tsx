"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export default function BlogPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-neon-green text-sm font-mono tracking-wider uppercase">
            Blog
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-6"
            style={{ color: "var(--text-heading)" }}
          >
            Latest{" "}
            <span className="text-gradient">Insights</span>
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Practical tips on web development, performance, and building
            successful digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="glass-card rounded-2xl p-6 group flex flex-col h-full"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs px-2.5 py-0.5 rounded-full border"
                    style={{
                      borderColor: "var(--border-input)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {post.category}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {post.readTime}
                  </span>
                </div>
                <h3
                  className="text-lg font-semibold mb-2 group-hover:text-neon-blue transition-colors leading-snug"
                  style={{ color: "var(--text-heading)" }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {post.description}
                </p>
                <span className="text-neon-blue text-sm font-medium mt-4 inline-block">
                  Read more &rarr;
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            href="/blog"
            className="btn-secondary text-sm inline-block"
          >
            View All Posts
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
