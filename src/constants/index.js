import todo from "../assets/projects/todo.png";
import converter from "../assets/projects/converter.png";
import portfolio from "../assets/projects/portfolio.png";
import blog from "../assets/projects/blog.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front-end developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Next.js, and Node.js. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "Dec 2021 - Present",
    role: "Software Engineer",
    company: "Capgemini",
    description: `Designed and developed user interfaces for web applications using React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
];

export const PROJECTS = [
  {
    title: "Todo Application",
    image: todo,
    description:
      "This is a simple Todo app built with React, Context API, Redux, and Tailwind CSS. It allows users to add, remove, and mark tasks as completed. The app uses local storage to persist tasks between sessions.",

    technologies: ["HTML", "TailwindCSS", "React", "Redux", "Context API"],
    redirectUrl: "https://todo-updater.vercel.app/",
  },
  {
    title: "Currency Converter",
    image: converter,
    description:
      "The currency converter is a web application that allows users to convert an amount from one currency to another. Users can select two currencies, Currency 1 and Currency 2, and enter an amount to convert.The currency values are fetched from an API call, ensuring that the conversion rates are up-to-date and accurate. ",
    technologies: ["HTML", "CSS", "JavaScript", "React", "API"],
    redirectUrl: "https://currency-calculator-app.vercel.app",
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    redirectUrl: "https://md-ummar-portfolio.vercel.app/",
  },
  {
    title: "Blogging Platform",
    image: blog,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    redirectUrl: "https://www.google.com",
  },
];

//To add contact details if required
// export const CONTACT = {
//   address: "767 Fifth Avenue, New York, NY 10153 ",
//   phoneNo: "+12 4555 666 00 ",
//   email: "me@example.com",
// };
