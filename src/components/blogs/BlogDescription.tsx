"use client";

import sanityClient from "@/utils/sanityClient";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { convertDateFormat } from "@/utils/helpers";
import { Blog, BlogBody } from "@/utils/interface";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { postSlugGroq } from "@/utils/groq";

function BlogDescription() {
  const [blogDesc, setBlogDesc] = useState<Blog | null>(null);
  const { slug } = useParams();

  const formatTextBlock = (body: BlogBody) => {
    if (body._type === "block") {
      if (body.style === "normal") {
        return <Paragraph key={body._key} children={body.children} />;
      } else if (body.style === "h4") {
        return <Heading key={body._key} children={body.children} />;
      }
    }
  };

  useEffect(() => {
    sanityClient.fetch(postSlugGroq(slug)).then((res) => {
      setBlogDesc(res[0]);
    });
  }, []);

  if (!blogDesc) {
    return <div>loading...</div>;
  }

  let { title, author, mainImage, _createdAt, body, categories } = blogDesc;

  console.log(categories);

  return (
    <main className="w-[60%] ">
      <h4 className=" text-[60px] leading-[68px] tracking-wide text-secondary capitalize">
        {title}
      </h4>

      {/* blog header ------------  */}
      <header className="text-white flex justify-between items-center mt-10">
        <span className="flex gap-6 items-center">
          <Image
            src={author.image.asset.url}
            alt="user profile picture"
            width={100}
            height={100}
            loading="lazy"
            className="w-[60px] aspect-square rounded-full object-cover"
          />
          <h3>By {author.name}</h3>
        </span>

        <h3> {convertDateFormat(_createdAt)}</h3>
      </header>

      <Image
        src={mainImage.asset.url}
        alt="blog poster"
        width={1000}
        height={1200}
        className="mt-8 w-full aspect-video object-cover rounded-lg"
      />

      <article className="mt-8">{body.map((b) => formatTextBlock(b))}</article>

      {/* tags ------------------  */}
      <div className="mt-8 flex gap-4">
        {categories.map((category) => (
          <span
            key={category.title}
            className="rounded-full bg-[#353535] text-secondary py-1.5 px-6 text-xl"
          >
            {category.title}
          </span>
        ))}
      </div>
    </main>
  );
}

export default BlogDescription;
