export type BlogBodyChildren = {
  marks: string[];
  text: string;
  _key: string;
};

export type BlogBody = {
  children: BlogBodyChildren[];
  style: "normal" | "h4";
  _key: string;
  _type: "block" | "span";
};

export type Blog = {
  author: {
    _type: string;
    _ref: string;
    name?: string;
    image: { asset: { url: string } };
  };
  body: BlogBody[];
  slug: Record<string, string>;
  title: string;
  _createdAt: string;
  _updatedAt: string;
  _id: string;
  mainImage: {
    asset: { url: string };
  };
  categories: {
    title: string;
  }[];
};

export type Service = {
  title: string;
  imgSrc: string;
  url: string;
};

export type TeamInfo = {
  id: number;
  name: string;
  position: string;
  imgSrc: string;
};

export type Achievement = {
  id: number;
  title: string;
  subTitle: string;
  imgSrc: string;
};

export type WorkProcess = {
  step: number;
  title: string;
  imgSrc: string;
  description: string;
};

export type About = {
  mobileText: {
    text: string;
    style: "normal";
  }[];
  desktopText: {
    text: string;
    style: "normal";
  }[];
};

export type ContactFormInputProps = {
  name: string;
  phoneNumber: any;
  description: string;
};
