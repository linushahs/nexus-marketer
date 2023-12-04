import { BlogBodyChildren } from "@/utils/interface";

const articleHeadingStyle =
  "text-white font-medium text-[24px] leading-[30px] mt-8";

function Heading({ children }: { children: BlogBodyChildren[] }) {
  return <h4 className={articleHeadingStyle}>{children[0].text}</h4>;
}

export default Heading;
