"use client";

import { Blog, BlogBody, BlogDescriptionProps } from "@/utils/interface";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { twMerge } from "tailwind-merge";

function BlogDescription({ blogDesc, className }: BlogDescriptionProps) {
  const formatTextBlock = (body: BlogBody) => {
    if (body._type === "block") {
      if (body.style === "normal") {
        return <Paragraph key={body._key} blogbodyChildren={body.children} />;
      } else if (body.style === "h4") {
        return <Heading key={body._key} blogbodyChildren={body.children} />;
      }
    }
  };

  if (!blogDesc) {
    return <div>loading...</div>;
  }

  let { body, categories } = blogDesc;

  return (
    <article className={twMerge("flex-1", className)}>
      <div className="mt-8">{body.map((b) => formatTextBlock(b))}</div>

      {/* tags ------------------  */}
      <div className="mt-8 flex flex-wrap gap-4">
        {categories.map((category) => (
          <span
            key={category.title}
            className="rounded-full bg-[#353535] text-secondary py-1.5 px-6 text-xl"
          >
            {category.title}
          </span>
        ))}
      </div>
    </article>
  );
}

export default BlogDescription;
