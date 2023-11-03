import Image from "next/image";

const articleHeadingStyle =
  "text-white font-medium text-[36px] leading-[40px] mt-8";
const articleDescStyle = "text-gray-400 mt-4 ";

function BlogDescription() {
  return (
    <main className="w-[60%] ">
      <h4 className="text-[60px] leading-[68px] tracking-wide text-secondary capitalize">
        Groundbreaking marketing strategy unveiled: redefining digital success
      </h4>

      {/* blog header ------------  */}
      <header className="text-white flex justify-between items-center mt-10">
        <span className="flex gap-6 items-center">
          <Image
            src="/assets/member-pic.png"
            alt="user profile picture"
            width={100}
            height={100}
            className="w-[60px] aspect-square rounded-full object-cover"
          />
          <h3>By nexus marketers</h3>
        </span>

        <h3>2022.12.12</h3>
      </header>

      <Image
        src="/assets/work2.png"
        alt="blog poster"
        width={1000}
        height={1200}
        className="mt-8 w-full aspect-video object-cover rounded-lg"
      />

      <article className="mt-8">
        <h4 className={articleHeadingStyle}>
          The Shift To Customer-Centricity
        </h4>
        <p className={articleDescStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquid
          blanditiis pariatur minima omnis vitae corrupti voluptatem eum,
          molestiae autem rem iusto deleniti fugit excepturi animi molestias
          aspernatur cumque quod!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vero aliquid blanditiis pariatur minima omnis vitae
          corrupti voluptatem eum, molestiae autem rem iusto deleniti fugit
          excepturi animi molestias aspernatur cumque quod!
        </p>
        <h4 className={articleHeadingStyle}>
          The Shift To Customer-Centricity
        </h4>
        <p className={articleDescStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquid
          blanditiis pariatur minima omnis vitae corrupti voluptatem eum,
          molestiae autem rem iusto deleniti fugit excepturi animi molestias
          aspernatur cumque quod!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vero aliquid blanditiis pariatur minima omnis vitae
          corrupti voluptatem eum, molestiae autem rem iusto deleniti fugit
          excepturi animi molestias aspernatur cumque quod!
        </p>
        <h4 className={articleHeadingStyle}>
          The Shift To Customer-Centricity
        </h4>
        <p className={articleDescStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquid
          blanditiis pariatur minima omnis vitae corrupti voluptatem eum,
          molestiae autem rem iusto deleniti fugit excepturi animi molestias
          aspernatur cumque quod!
        </p>
        <h4 className={articleHeadingStyle}>Conclusion</h4>
        <p className={articleDescStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquid
          blanditiis pariatur minima omnis vitae corrupti voluptatem eum,
          molestiae autem rem iusto deleniti fugit excepturi animi molestias
          aspernatur cumque quod!
        </p>
      </article>

      {/* tags ------------------  */}
      <div className="mt-8 flex gap-4">
        {["Marketing", "Tech", "AI", "Science"].map((tag) => (
          <span className="rounded-full bg-[#353535] text-secondary py-1.5 px-6 text-xl">
            {tag}
          </span>
        ))}
      </div>
    </main>
  );
}

export default BlogDescription;
