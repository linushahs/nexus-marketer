import { BlogBodyChildren } from "@/utils/interface";

const articleDescStyle =
  "sm:text-lg xl:text-xl tracking-wide text-gray-400 mt-4 ";

function Paragraph({
  blogbodyChildren,
}: {
  blogbodyChildren: BlogBodyChildren[];
}) {
  return (
    <p className={articleDescStyle}>
      {blogbodyChildren.map((obj, id) => (
        <span key={id}>{obj.text}</span>
      ))}
    </p>
  );
}

export default Paragraph;
