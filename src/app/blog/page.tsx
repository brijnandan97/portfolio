import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import BlogList from "@/components/BlogList";

export const metadata: Metadata = {
  title: "Blog | Brij Singla - Web Development Insights & Tips",
  description:
    "Practical web development articles on React, Next.js, performance optimization, and building successful web applications. By Brij Singla, Senior Full-Stack Developer.",
  openGraph: {
    title: "Blog | Brij Singla - Web Development Insights",
    description:
      "Practical web development articles on React, Next.js, performance, and freelancing.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <Link
            href="/"
            className="text-neon-blue text-sm font-medium hover:underline"
          >
            &larr; Back to Home
          </Link>
          <h1
            className="text-4xl sm:text-5xl font-bold mt-6 mb-4"
            style={{ color: "var(--text-heading)" }}
          >
            Blog & <span className="text-gradient">Insights</span>
          </h1>
          <p
            className="text-lg max-w-2xl"
            style={{ color: "var(--text-secondary)" }}
          >
            Practical tips on web development, performance optimization, and
            building successful digital products.
          </p>
        </div>
        <BlogList posts={blogPosts} />
      </div>
    </main>
  );
}
