import {
  About,
  Achievement,
  Service,
  TeamInfo,
  WorkProcess,
} from "./interface";

const about: About = {
  mobileText: [
    {
      text: "Ready to elevate your online presence, maximize your business reach, or outshine all your competitors? Our dream team is here to ensure, each step of your business journey marks excellence.",
      style: "normal",
    },
    {
      text: "We provide you with an exceptional experience through transparent efforts and our motto of affordability without compromise. Feel free to check out our services section for more information.",
      style: "normal",
    },
  ],
  desktopText: [
    {
      text: "Ready to elevate your online presence, maximize your business reach, or outshine all your competitors? We have got you covered. Our dream team, a powerhouse of experts from all professions, is on a mission to take your business to new heights. We understand the difficult journey toward a successful online business. But hey, who says everything needs to be complex because your journey can surely be much more exciting.",
      style: "normal",
    },
    {
      text: "Being a business ourselves, we prioritize client trust and satisfaction over everything else. Thus, we keep our efforts transparent, prices affordable, and results outstanding. Feel free to look forward to an amazing experience with us. Our motto of affordability without comprise seeks to help businesses like yours stand out in the digital landscape. Also, check out our services section for a more comprehensive description.",
      style: "normal",
    },
  ],
};

const blogs = [
  {
    id: 1,
    title: "Where Curiosity Meets Clarity: Navi gating the World of Ideas",
    publishedDate: "2022.12.12",
    author: "Sunil Shah",
    imgSrc: "/service1.png",
    thumbnailSrc: "/service1.png",
  },
  {
    id: 2,
    title: "Where Curiosity Meets Clarity: Navi gating the World of Ideas",
    publishedDate: "2022.12.12",
    author: "Sunil Shah",
    imgSrc: "/service1.png",
    thumbnailSrc: "/service1.png",
  },
  {
    id: 3,
    title: "Where Curiosity Meets Clarity: Navi gating the World of Ideas",
    publishedDate: "2022.12.12",
    author: "Sunil Shah",
    imgSrc: "/service1.png",
    thumbnailSrc: "/service1.png",
  },
  {
    id: 4,
    title: "Where Curiosity Meets Clarity: Navi gating the World of Ideas",
    publishedDate: "2022.12.12",
    author: "Sunil Shah",
    imgSrc: "/service1.png",
    thumbnailSrc: "/service1.png",
  },
];

const services: Service[] = [
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

const workProcess: WorkProcess[] = [
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

const teamInfo: TeamInfo[] = [
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
    imgSrc: "/assets/bibek_gautam.jpg",
  },
];

const achievements: Achievement[] = [
  {
    id: 1,
    title:
      "Kalodhunga Creations: <i class='italic'>Shaping The World</i> With A Diverse IT Approach",
    subTitle: "Software Service Company",
    imgSrc: "/assets/kalodhunga_thumbnail.png",
  },
  {
    id: 2,
    title:
      "Bonewa Web: <i class='italic'>A Readers Hub</i> For Engaging Book Summaries",
    subTitle: "Book/Audiobook Summary Platform",

    imgSrc: "/assets/bonewa_thumbnail.png",
  },
];

const footerContent =
  "Nexus Marketers, your premier marketing agency, is dedicated to        transforming your online presence. With expertise in crafting          compelling websites, pioneering innovative strategies, and          implementing advanced SEO tactics, we are committed to elevating your          brand&apos;s visibility and driving sustainable growth.";

export { footerContent, about, services, workProcess, teamInfo, achievements };
