import { blogs } from "@/utils/constants";
import Image from "next/image";

const headingStyle =
  "text-xl sm:text-2xl lg:text-[1.6vw] lg:leading-[2vw] text-white";

function PopularBlogs() {
  return (
    <aside className="bg-transparent lg:bg-blogBackground rounded-lg md:w-[45%] lg:w-full lg:px-6 py-8   lg:mt-[180px]">
      {/* search bar ----------------  */}
      <div className="flex flex-col-reverse lg:flex-col gap-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex gap-3 text-lg"
        >
          <input
            type="text"
            className="w-full text-gray-600 rounded-md py-2.5 px-4"
            placeholder="Search for blogs"
          />
          <button
            type="submit"
            className="bg-blogSearch py-1.5 px-5 text-white rounded-md hover:bg-blogSearch/80"
          >
            Search
          </button>
        </form>
        <h4 className={headingStyle}>Popular blogs and news</h4>
      </div>

      {/* popular blogs and news --------------------  */}
      <main className="mt-6">
        <div className="flex flex-col gap-4 mt-6">
          {blogs
            .filter((_, id) => id < 3)
            .map((blog) => (
              <div
                key={blog.id}
                className="bg-blogBackground lg:bg-background text-white flex gap-4 rounded-lg p-4"
              >
                <Image
                  src={"/assets/service1.jpg"}
                  alt="blog poster"
                  width={150}
                  height={160}
                  className="rounded-lg w-1/3 sm:w-1/4 aspect-square object-cover"
                />

                <div className=" flex flex-col justify-between">
                  <h4 className={`${headingStyle}block md:hidden lg:block`}>
                    {blog.title}
                  </h4>
                  <h4 className={`${headingStyle} hidden md:block lg:hidden`}>
                    {blog.title.substring(0, 20)}...
                  </h4>

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
