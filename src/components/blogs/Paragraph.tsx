import { BlogBodyChildren } from "@/utils/interface";

const articleDescStyle = "text-gray-400 mt-4 ";

function Paragraph({ children }: { children: BlogBodyChildren[] }) {
  return (
    <p className={articleDescStyle}>
      {children.map((obj) => (
        <span>{obj.text}</span>
      ))}
    </p>
  );
}

export default Paragraph;
