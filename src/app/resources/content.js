import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Jan",
  lastName: "Eggenberger",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer & Photographer",
  avatar: "/images/avatar.jpg",
  location: "Switzerland | Argovia", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["German", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/FEDIT-JE",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jan-eggenberger-903517179",
  },
  {
    name: "X",
    icon: "x",
    link: "https://www.x.com/jxn_code",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:jan@eggenberger.biz",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer</>,
  subline: (
    <>
      I'm Jan, a Software Engineer at <InlineCode>Federer Informatik AG</InlineCode>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com/jan-eggenberger-orh0hu/15min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Jan is a 23-year-old software engineer from Switzerland, deeply passionate about coding and the continuous pursuit of knowledge. 
        His focus is on staying at the forefront of technology by learning new languages, frameworks, and tools to refine my skill set and deliver efficient, scalable solutions. 
        He's always eager to take on new challenges that push the boundaries of his expertise.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Federer Informatik AG",
        timeframe: "2021 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Building and maintaining web- and desktop applications with Blazor and WPF. 
          </>,
          <>
            Train and mentor apprentices to improve their coding skills and understanding of software architecture.
          </>,
          <>
            Support customers with technical issues and implement customer specific changes.
          </>,
        ],
        images: [
        ],
      },
      {
        company: "Raiffeisen Switzerland",
        timeframe: "2017 - 2021",
        role: "Apprenticeship as a Software Developer", 
        achievements: [
          <>
            Learning the craft of software development by working on various projects and collaborating with experienced developers.
          </>,
          <>
            Leading the development of a new internal tool that improved the efficiency of the team by 20%.
          </>,
          <>
            Gaining experienc in scrum and agile methodologies.
          </>,
        ],
        images: [],
      },
    ],
  },

  sidework: {
    display: true, // set to false to hide this section
    title: "Personal Projects",
    experiences: [
      {
        company: "CVolution GmbH", 
        timeframe: "2025 - Present",
        role: "CTO | Software Engineer",
        achievements: [
          <>
            Building web applications with Next.js, Supabase and Stripe.
          </>,
          <>
            Creating the best user experience possible.
          </>,
          <>
            Developing a unique and modern design.
          </>,
        ],
        images: [
        ],
      },
      {
        company: "LE NOIR",
        timeframe: "2024 - Present",
        role: "Founder | Web Developer",
        achievements: [
          <>
            Developing websites for small businesses.
          </>,
          <>
            Making your online presence stand out.
          </>,
          <>
            Creating a unique user experience for your customers.
          </>,
        ],
        images: [
        ],
      },
      {
        company: "JXN.VISUALZZ",
        timeframe: "2022 - Present",
        role: "Photographer",
        achievements: [
          <>
            Capturing the most valuable moments of your life.
          </>,
          <>
            Documenting your wedding day in a unique way.
          </>,
          <>
            Turning your events into memories.
          </>,
        ],
        images: [
        ],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "C#",
        description: <>Building web- and desktop applications</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
      {
        title: "Blazor",
        description: <>Implementing stunning web applications</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "WPF",
        description: <>Building desktop applications</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "SQL",
        description: <>Working with databases</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "xBase ++",
        description: <>Maintaining an existent ERP application</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Lightroom",
        description: <>Editing photos and creating presets</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      }
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Building, Learning, and Growing in Tech & Engineering",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Projects",
  title: "My projects",
  description: `Design and engineering projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/img01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img06.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img08.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img09.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img10.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img11.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img07.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
