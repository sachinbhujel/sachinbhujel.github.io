import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
        remarkPlugins: [
            remarkFrontmatter, // Parse frontmatter
            remarkMdxFrontmatter, // Make frontmatter available as variables
        ],
    },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
