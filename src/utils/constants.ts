type Service = {
  title: string;
  imgSrc: string;
  url: string;
};

export const services: Service[] = [
  {
    title: "Social media management",
    imgSrc: "/assets/service1.jpg",
    url: "",
  },
  {
    title: "Search Engine Optimization (SEO) ",
    imgSrc: "/assets/service2.png",
    url: "",
  },
  {
    title: " Content Marketing",
    imgSrc: "/assets/service3.png",
    url: "",
  },
];

export const workProcess = [
  {
    step: 1,
    title: "Research and Searching",
    description:
      "We begin by diving into your brand's essence and goals.Through detailed analysis and data-driven insights, we identify opportunities and gather valuable information essential to tailor effective strategies for your brand's success",
    imgSrc: "/assets/work1.png",
  },
  {
    step: 2,
    title: "Plan and strategize",
    description:
      "Next, we craft bespoke strategies aligned with your objectives. Leveraging market insights and innovative approaches, we develop comprehensive plans encompassing various digital channels to maximize your brand's impact",
    imgSrc: "/assets/work2.png",
  },
  {
    step: 3,
    title: "Execute and implement",
    description:
      "With strategies in place, we meticulously execute campaigns and initiatives. Our team implements, monitors, and fine-tunes the approach, ensuring every aspect aligns with your brand identity while delivering measurable results and adapting to market dynamics.",
    imgSrc: "/assets/work3.png",
  },
];

type Blog = {
  id: number;
  publishedDate: string;
  title: string;
  author: string;
  imgSrc: string;
};

export const blogs: Blog[] = [
  {
    id: 1,
    publishedDate: "2022/12/12",
    title: "AI-Powered Marketing reshaping industry norms",
    author: "Sharad guragain",
    imgSrc: "/assets/blog-pic1.png",
  },
  {
    id: 2,
    publishedDate: "2022/12/12",
    title: "AI-Powered Marketing reshaping industry norms",
    author: "Sharad guragain",
    imgSrc: "/assets/blog-pic1.png",
  },
  {
    id: 3,
    publishedDate: "2022/12/12",
    title: "AI-Powered Marketing reshaping industry norms",
    author: "Sharad guragain",
    imgSrc: "/assets/blog-pic1.png",
  },
  {
    id: 4,
    publishedDate: "2022/12/12",
    title: "AI-Powered Marketing reshaping industry norms",
    author: "Sharad guragain",
    imgSrc: "/assets/blog-pic1.png",
  },
  {
    id: 5,
    publishedDate: "2022/12/12",
    title: "AI-Powered Marketing reshaping industry norms",
    author: "Sharad guragain",
    imgSrc: "/assets/blog-pic1.png",
  },
  {
    id: 6,
    publishedDate: "2022/12/12",
    title: "AI-Powered Marketing reshaping industry norms",
    author: "Sharad guragain",
    imgSrc: "/assets/blog-pic1.png",
  },
];

type TeamInfo = {
  id: number;
  name: string;
  position: string;
  imgSrc: string;
};

export const teamInfo: TeamInfo[] = [
  {
    id: 1,
    name: "Sumit Yadav",
    position: "C.E.O. / Co-founder",
    imgSrc: "/assets/sumit_yadav.jpg",
  },
  {
    id: 2,
    name: "Prajwol Jung Kuwar",
    position: "C.T.O",
    imgSrc: "/assets/pratik_jung.jpg",
  },
  {
    id: 3,
    name: "Hritik Raj Karn",
    position: "Project Lead",
    imgSrc: "/assets/hrithik_karn.jpg",
  },
  {
    id: 4,
    name: "Ayusha Duwal",
    position: "Human Resource",
    imgSrc: "/assets/ayusha.jpg",
  },
  {
    id: 5,
    name: "Sharad Guragain",
    position: "UI/UX designer",
    imgSrc: "/assets/sharad_gn.jpg",
  },
  {
    id: 6,
    name: "Shivam Karn",
    position: "Lead Mobile developer",
    imgSrc: "/assets/shiwam_karn.jpg",
  },
  {
    id: 7,
    name: "Sunil Shah",
    position: "Frontend Engineer",
    imgSrc: "/assets/sunil_shah.jpg",
  },
  {
    id: 8,
    name: "Ravi Roshan Jha",
    position: "Flutter Developer",
    imgSrc: "/assets/ravi_jha.png",
  },
  {
    id: 9,
    name: "Bibek Gautam",
    position: "Head backend developer",
    imgSrc: "/assets/member-pic.png",
  },
];

type Achievement = {
  id: number;
  title: string;
  subTitle: string;
  imgSrc: string;
  description: string;
};

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Kalodhunga Creations",
    subTitle: "Software Company",
    description: "",
    imgSrc: "/assets/kalodhunga_thumbnail.png",
  },
  {
    id: 2,
    title: "Bonewa Web",
    subTitle: "Audiobook, Books App",
    description: "",
    imgSrc: "/assets/bonewa_thumbnail.png",
  },
];
