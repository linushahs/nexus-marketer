import { convertDateFormat } from "@/utils/helpers";
import { Blog } from "@/utils/interface";
import Image from "next/image";

const authorAndDateStyle = "capitalize text-lg sm:text-xl  lg:text-[1.5vw]";

function BlogHeader({ blogDesc }: { blogDesc: Blog | null }) {
  if (!blogDesc) {
    return <div>loading...</div>;
  }

  const { title, author, mainImage, _createdAt } = blogDesc;

  return (
    <header>
      <h4 className="text-[30px] leading-[36px] sm:text-[40px] sm:leading-[45px] lg:text-[3.6vw] lg:leading-[3.8vw] tracking-wide text-secondary capitalize">
        {title}
      </h4>

      {/* blog header ------------  */}
      <header className="text-white flex justify-between items-center mt-6 lg:mt-10">
        <span className="flex gap-6 items-center">
          <Image
            src={author.image.asset.url}
            alt="user profile picture"
            width={100}
            height={100}
            loading="lazy"
            className="w-[60px] aspect-square rounded-full object-cover"
          />
          <h3 className={authorAndDateStyle}>By {author.name}</h3>
        </span>

        <h3 className={authorAndDateStyle}> {convertDateFormat(_createdAt)}</h3>
      </header>

      <Image
        src={mainImage.asset.url}
        alt="blog poster"
        width={1000}
        height={1200}
        className="mt-8 w-full aspect-video object-cover rounded-lg"
      />
    </header>
  );
}

export default BlogHeader;
