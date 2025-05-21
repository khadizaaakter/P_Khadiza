import { label } from "three/tsl";

const navLinks = [
  {
    name: "About",
    link: "#about",
  },  
  {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    // {
    //   name: "Testimonials",
    //   link: "#testimonials",
    // },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 1, suffix: "+", label: "Years of Experience" },
    { value: 2, suffix: "+", label: "Office Project" },
    { value: 6, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
  ];


  
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "PHP",
      imgPath: "/images/logos/file-type-php.svg",
    },
    {
      name: "Laravel",
      imgPath: "/images/logos/laravel (2).svg",
    },
    {
      name: "JavaScript",
      imgPath: "/images/logos/javascript-js.svg",
    },
    {
      name: "VUE JS",
      imgPath: "/images/logos/vue.svg",
    },
    {
      name: "SQL",
      imgPath: "/images/logos/sql-database-generic.svg",
    },
    {
      name: "Bootstrap",
      imgPath: "/images/logos/bootstrap.svg",
    },
    {
      name: "SCSS",
      imgPath: "/images/logos/file-type-scss.svg",
    },
    {
      name: "CSS",
      imgPath: "/images/logos/file-type-css.svg",
    },
    {
      name: "Tailwind CSS",
      imgPath: "/images/logos/tailwind-css.svg",
    },
    {
      name: "HTML",
      imgPath: "/images/logos/file-type-html.svg",
    },
    {
      name: "Git",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      review: "Khadiza works with our database systems and consistently delivers accurate, efficient results. A reliable and valuable team member.",
      imgPath: "/images/exp1.png",
      // logoPath: "/images/logo1.png",
      title: "Technical Support Engineer",
      date: "August 2024 - Present  |   ACI LIMITED",
      responsibilities: [
        "Currently working at ACI Limited, specializing in Laravel, Vue.js, and SQL.",
        "Managing and optimizing complex databases, and providing support for Shwapno’s database — a leading retail business in Bangladesh.",
        "Maintaining project documentation, including requirement notes and clear documents for smooth development and effective knowledge sharing.",
      ],
    },
    {
      review: "Khadiza was dedicated, quick to learn, and solved problems effectively. I highly recommend her and am confident she’ll succeed in any role she takes on.",
      imgPath: "/images/exp2.png",
      logoPath: "/images/logo2.png",
      title: "Software Engineer Intern",
      date: "March 2024 - June 2024",
      responsibilities: [
        "Successfully delivered a complete project from start to finish.",
        "Provided valuable support to my supervisor in daily technical tasks.",
        "Assisted with Excel operations and database management responsibilities.",
      ],
    },
    // {
    //   review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    //   imgPath: "/images/exp3.png",
    //   logoPath: "/images/logo3.png",
    //   title: "React Native Developer",
    //   date: "March 2019 - May 2020",
    //   responsibilities: [
    //     "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
    //     "Improved app performance and user experience through code optimization and testing.",
    //     "Coordinated with the product team to implement features based on feedback.",
    //   ],
    // },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "/images/client3.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Marvin McKinney",
      mentions: "@marvinmckinney",
      review:
        "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "/images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "/images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      imgPath: "/images/insta.png",
    },
    {
      name: "fb",
      imgPath: "/images/fb.png",
    },
    {
      name: "x",
      imgPath: "/images/x.png",
    },
    {
      name: "linkedin",
      imgPath: "/images/linkedin.png",
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };