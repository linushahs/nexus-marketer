import { BlogBodyChildren } from "@/utils/interface";

const articleDescStyle = "text-gray-400 mt-4 ";

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
