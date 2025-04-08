const Img = Array(8).fill({ image: "/PartnersImg/image 1.png" });

export const PartnersImg = Img.map((_, index) => ({
  image: `/PartnersImg/image ${index + 1}.png`,
  delay: `0.${index}`,
}));

export const BusinessCardData = [
  {
    Businessimg: "businessImg/businessImg1.png",
    Businesstitle: "Digitalization",
    delay: 0.3,
  },
  {
    Businessimg: "businessImg/businessImg2.png",
    Businesstitle: "Smart Society",
    delay: 0.4,
  },
  {
    Businessimg: "businessImg/businessImg3.png",
    Businesstitle: "Sustainability ",
    delay: 0.5,
  },
];

export const ProgramCardData = [
  {
    ProgramImg: "ProgramImg/Image (3).png",
    Programtilte: "IT Training",
    text: "Read More",
    delay: 0.2,
  },
  {
    ProgramImg: "ProgramImg/Image (4).png",
    Programtilte: "Japanese Language Training",
    text: "Read More",
    delay: 0.3,
  },
  {
    ProgramImg: "ProgramImg/Image (6).png",
    Programtilte: "RISO Program",
    text: "Read More",
    delay: 0.4,
  },
];

export const pages = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  {
    name: "Service",
    path: "/service",
    subPages: [
      { name: "Web Development", path: "/service/web-development" },
      { name: "App Development", path: "/service/app-development" },
    ],
  },
  { name: "Recruit", path: "/recruit" },
  { name: "Get in Touch", path: "/contactus" },
];

export const RemarkText = [
  {
    img: "correctIcon.svg",
    title: "Customer-Centric Culture",
    text: "We prioritize our clients’ needs and work tirelessly to provide personalized and impactful solutions.",
    delay: 0.2,
  },
  {
    img: "correctIcon.svg",
    title: "Competitive Value Proposition",
    text: "By combining expertise, efficiency and innovation we deliver outstanding results that enhance your business performance.",
    delay: 0.3,
  },
  {
    img: "correctIcon.svg",
    title: "Young And Energetic Professionals",
    text: "Our team of dynamic and motivated professionals brings fresh perspectives and cutting-edge skills to every project.",
    delay: 0.4,
  },
  {
    img: "correctIcon.svg",
    title: "Continuous Education and Quality Assurance",
    text: "We emphasize ongoing learning and rigorous quality checks to ensure that our services exceed industry standards and client expectations.",
    delay: 0.4,
  },
];

export const DirectorsContent = [
  {
    img: "/AboutUsPageImg/Photo (1).png",
    name: "Mr. Hisayuki Kimata",
    text: "President",
  },
  {
    img: "/AboutUsPageImg/Photo (2).png",
    name: "Mr. Htun Tauk Zaw",
    text: "Vice President",
  },
  {
    img: "/AboutUsPageImg/Photo.png",
    name: "Mr. Zaw Moe Thant",
    text: "Executive Director",
  },
  {
    img: "/AboutUsPageImg/Photo (1).png",
    name: "Mr. Myo Lin Soe",
    text: "Executive Director",
  },
];

export const techImg = [
  "/TechSkill/css.png",
  "/TechSkill/js.png",
  "/TechSkill/ruby.png",
  "/TechSkill/mixpanel.png",
  "/TechSkill/framer.png",
];
export const techSkills = [
  { img: "/TechSkill/html.png", tech: "HTML5" },
  { img: "/TechSkill/css.png", tech: "CSS 3" },
  { img: "/TechSkill/js.png", tech: "JavaScript" },
  { img: "/TechSkill/ruby.png", tech: "Ruby" },
  { img: "/TechSkill/mixpanel.png", tech: "Mixpanel" },
  { img: "/TechSkill/framer.png", tech: "Framer" },
];

export const GroupDevelopment = [
  {
    img: "correctIcon.svg",
    title: "RISO Innovation Lab",
    text: "We prioritize our clients’ needs and work tirelessly to provide personalized and impactful solutions.",
    delay: 0.2,
  },
  {
    img: "correctIcon.svg",
    title: "Sprint Light Training Center",
    text: "By combining expertise, efficiency and innovation we deliver outstanding results that enhance your business performance.",
    delay: 0.3,
  },
  {
    img: "correctIcon.svg",
    title: "SPS Training Center",
    text: "Our team of dynamic and motivated professionals brings fresh perspectives and cutting-edge skills to every project.",
    delay: 0.4,
  },
  {
    img: "correctIcon.svg",
    title: "ACE Inspiration Training Center",
    text: "We emphasize ongoing learning and rigorous quality checks to ensure that our services exceed industry standards and client expectations.",
    delay: 0.4,
  },
];

export const Experience = [
  {
    img: "correctIcon.svg",
    title: "10 Years Experiance",
    text: "We dispatched IT consultants and system engineers to Hitachi Ltd, Hitachi Solutions Ltd and Fujitsu Ltd for large-scale system development and upgrade projects for major Japanese banks.",
    delay: 0.2,
  },
];
