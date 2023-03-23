import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Digital Marketing",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Game Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developed and deployed a range of websites for small businesses, including a web development and marketing agency of my own.",
        "Worked closely with clients to understand their needs and ensure timely delivery of projects, resulting in repeat business and positive reviews.",
        "Experienced in debugging and troubleshooting complex issues, with a track record of finding effective solutions for difficult technical challenges.",
        "Regularly attend workshops and conferences to stay up-to-date with the latest trends and technologies in web development.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Experienced in mobile app development, utilizing technologies such as React Native, Swift, and Kotlin.",
        "Built indie apps and managed end-to-end development.",
        "Implemented and maintained integrations with third-party API",
        "Developed and maintained back-end infrastructure for mobile apps, ensuring optimal performance and scalability.",
      ],
    },
    {
      title: "Game Developer",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developed 2D games using game engines such as Unreal Engine and Unity, gaining experience with programming languages like C# and C++.",
        "Designed and created indie games that have yet to be published, practicing game development concepts and gaining experience with the development pipeline.",
        "Worked on 2D game projects, collaborating with other team members to develop mechanics and design levels.",
        "Continuously learning through online resources and taking courses, staying up-to-date on the latest trends and techniques in game development.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Ballaleshwar Joshi",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Anup Sonawane",
      designation: "COO",
      company: "DEF Corp",
      image: "",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Mayuresh Shinde",
      designation: "CTO",
      company: "456 Enterprises",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Bettle Media",
      description:
        "A web development and marketing agency, which provides a variety of services including Social media marketing, Digital Marketing, Web designing and development.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Java Script",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://dev-bettlemedia.pantheonsite.io/",
    },
    {
      name: "Job Finder Application",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "",
    },
    {
      name: "Bettle Media",
      description:
        "Another Website for the same company Bettle Media, A web development and marketing agency, which provides variety of services related to web development and marketing.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Wordpress",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://bettlemedia.typedream.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };