import { blogs } from "@/utils/constants";
import Image from "next/image";

const headingStyle = "text-[28px] leading-[34px] text-white";

function PopularBlogs() {
  return (
    <aside className="bg-lightBackground rounded-lg px-6 py-8 w-[40%] mt-[180px]">
      {/* search bar ----------------  */}
      <form className="flex gap-3 text-lg">
        <input
          type="text"
          className="w-full text-gray-600 rounded-md py-2.5 px-4"
          placeholder="Search for blogs"
        />
        <button
          type="submit"
          className="bg-primary py-1.5 px-6 text-white rounded-md hover:bg-primary/80"
        >
          Search
        </button>
      </form>

      {/* popular blogs and news --------------------  */}
      <main className="mt-6">
        <h4 className={headingStyle}>Popular blogs and news</h4>

        <div className="flex flex-col gap-4 mt-6">
          {blogs
            .filter((_, id) => id < 3)
            .map((blog) => (
              <div
                key={blog.id}
                className="bg-background text-white flex gap-4 rounded-lg p-4"
              >
                <Image
                  src={blog.imgSrc}
                  alt="blog poster"
                  width={150}
                  height={160}
                  className="rounded-lg"
                />

                <div className=" flex flex-col justify-between">
                  <h4 className={headingStyle}>{blog.title}</h4>

                  <div className=" flex justify-between text-tertiary">
                    <span>{blog.publishedDate}</span>
                    <p>{blog.author}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
    </aside>
  );
}
export default PopularBlogs;
