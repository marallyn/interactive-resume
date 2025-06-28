export const resumeData = {
  name: "Jeff Martin",
  title: "Senior Full Stack Software Engineer",
  contact: {
    phone: "970.726.8326",
    email: "thedogmartins@gmail.com",
    linkedin: "linkedin.com/in/dog-jeff",
    github: "github.com/marallyn",
    location: "Lagrange, GA",
  },
  summary:
    "Senior Software Engineer with a strong background in full-stack development and team leadership. Proven track record of success in developing and maintaining complex e-commerce platforms, with expertise in writing efficient, scalable backend PHP code and optimizing MySQL database performance. Skilled in PHP, React, MySQL, AWS, Docker, third-party APIs, and refactoring legacy code. My entrepreneurial background includes building cloud based CMS, POS and a reservation systems. Adept at leading remote engineering teams, modernizing legacy systems (PHP 7.4 to 8.3, React class to functional components), and translating complex challenges into bottom-line results. Actively developing personal projects utilizing AI and LLMs to create innovative workflow automations. Also, I've driven 7,303 dog sleds loaded with excited customers – talk about full-stack, literally!",

  skills: [
    {
      name: "PHP",
      versions: ["7.4", "8.3"],
      years: { start: 1996, end: null },
      description:
        "Seasoned in PHP, with a knack for modernizing legacy systems and making old code sing a new tune.",
      relatedExperienceIds: ["rsc", "arctic", "dsrwp", "mdo", "drink-gifter"],
    },
    {
      name: "JavaScript",
      versions: [],
      years: { start: 1996, end: null },
      description:
        "My digital paintbrush for crafting dynamic and interactive user interfaces.",
      relatedExperienceIds: ["rsc", "arctic", "dsrwp", "mdo", "drink-gifter"],
    },
    {
      name: "MySQL",
      versions: ["5.x", "8"],
      years: { start: 1996, end: null },
      description:
        "Fluent in the language of databases, making queries perform like they've had a triple espresso.",
      relatedExperienceIds: ["rsc", "arctic", "dsrwp", "mdo", "drink-gifter"],
    },
    {
      name: "Bash",
      versions: [],
      years: { start: 1996, end: null },
      description:
        "My trusty sidekick for automating tasks and making the command line my playground.",
      relatedExperienceIds: ["rsc", "arctic", "dsrwp", "mdo"],
    },
    {
      name: "Golang",
      versions: ["1.18 - 1.24"],
      years: { start: 2020, end: 2025 },
      description:
        "We had a couple services written in Go while I was at Research Square, but the primary application was written in PHP",
      relatedExperienceIds: ["rsc"],
    },
    // {
    //   name: "TypeScript",
    //   versions: [],
    //   description:
    //     "Bringing type safety and clarity to JavaScript, making my code less prone to unexpected surprises.",
    // },
    {
      name: "Python",
      versions: [],
      years: { start: 2025, end: 2025 },
      description:
        "I primarily use Python for one-off scripts to keep my skills sharp. AirBuddy was my first project where I used Python for more than a CLI tool.",
      relatedExperienceIds: ["air-buddy"],
    },
    {
      name: "React",
      versions: ["15 - 19"],
      years: { start: 2019, end: null },
      description:
        "Definitely my favorite frontend library. I've used it with webpack, create-react-app and vite.",
      relatedExperienceIds: ["rsc", "arctic", "resume"],
    },
    {
      name: "Redux",
      versions: [],
      years: { start: 2020, end: 2024 },
      description:
        "I didn't like it at first, and the learning curve was a little rough. I don't use it personal projects in favor of React's useContext and useReducer hooks.",
      relatedExperienceIds: ["rsc"],
    },
    {
      name: "Laminas",
      versions: [],
      years: { start: 2020, end: 2024 },
      description:
        "Laminas is the new name for the old Zend framework. Definitely not my first choice for frameworks, and I would never choose to work with it again on purpose. Switching from the enormous community and robust documentation of Laravel to Laminas was nothing short of a nightmare.",
      relatedExperienceIds: ["rsc"],
    },
    {
      name: "Symfony",
      versions: [],
      years: { start: 2022, end: 2024 },
      description:
        "I've used Symfony for a couple personal REST API projects. My professional experience is limited to Symfony Console applications.",
      relatedExperienceIds: ["rsc"],
    },
    {
      name: "Laravel",
      versions: ["5", "6", "7"],
      years: { start: 2019, end: 2020 },
      description:
        "All of my PHP experience before working on Arctic Coliseum was with a personal framework that I developed over time.",
      relatedExperienceIds: ["arctic"],
    },
    {
      name: "Flask",
      versions: [],
      years: { start: 2025, end: 2025 },
      description:
        "I have only used python in personal projects. If the project requires a frontend, I use Flask.",
      relatedExperienceIds: ["air-buddy"],
    },
    {
      name: "Bootstrap",
      versions: ["4", "5"],
      years: { start: 2019, end: 2025 },
      description:
        "Before using Bootstrap, all of my projects were hand rolled CSS solutions. Switching to Bootstrap made a huge difference in the UX fo my work.",
      relatedExperienceIds: ["rsc", "arctic"],
    },
    {
      name: "Tailwind",
      years: { start: 2025, end: 2025 },
      description:
        "I don't have professional work experience with Tailwind, but I use it for personal projects like this one. Not sure if I love it yet.",
      relatedExperienceIds: ["resume"],
    },
    {
      name: "Doctrine ORM",
      versions: [],
      years: { start: 2020, end: 2024 },
      relatedExperienceIds: ["rsc"],
    },
    {
      name: "Linux",
      versions: ["Ubuntu 14 - Ubuntu 24"],
      years: { start: 2003, end: null },
      description: "My preferred operating system for development.",
      relatedExperienceIds: [
        "rsc",
        "arctic",
        "dsrwp",
        "mdo",
        "drink-gifter",
        "air-buddy",
        "resume",
      ],
    },
    {
      name: "Docker",
      years: { start: 2019, end: null },
      description:
        "Packaging applications and their dependencies into portable containers, so they run anywhere, anytime.",
      relatedExperienceIds: ["rsc", "arctic"],
    },
    {
      name: "AWS",
      versions: [],
      years: { start: 2020, end: 2024 },
      description:
        "At Research Square we had SRE's but we were expected to make a lot of the required changes to AWS ourselves. Plus, it was much faster than waiting for a Jira ticket to flow through their system. Some of the AWS services I've used are: SQS, ECS, ECR, CloudWatch, and Route53.",
      relatedExperienceIds: ["rsc"],
    },
    {
      name: "CI/CD",
      versions: ["GitHub Actions"],
      years: { start: 2020, end: null },
      description:
        "Setting up automated pipelines for continuous integration and continuous delivery, making deployments less of a white-knuckle ride.",
      relatedExperienceIds: ["rsc"],
    },
    {
      name: "Google Cloud Platform",
      versions: [],
      years: { start: 2025, end: null },
      description:
        "Exploring Google's cloud ecosystem for various infrastructure needs.",
      relatedExperienceIds: ["air-buddy", "resume"],
    },
    {
      name: "Git",
      years: { start: 2005, end: null },
      description: "My version control system of choice.",
      relatedExperienceIds: [
        "rsc",
        "arctic",
        "dsrwp",
        "mdo",
        "air-buddy",
        "resume",
      ],
    },
    {
      name: "GitHub Actions",
      versions: ["Automated Workflows"],
      years: { start: 2020, end: null },
      description:
        "Automating builds, tests, and deployments directly from my GitHub repositories.",
      relatedExperienceIds: ["rsc", "air-buddy", "resume"],
    },
    {
      name: "Jira",
      years: { start: 2020, end: 2024 },
      description:
        "Keeping projects on track and tasks organized, because chaos is for abstract art, not software.",
      relatedExperienceIds: ["rsc"],
    },
    {
      name: "Slack",
      years: { start: 2020, end: 2023 },
      description:
        "I really liked using Slack. Like most things, I didn't appreciate it as much as I should have, and really missed it when we switched to Teams.",
      relatedExperienceIds: ["rsc"],
    },
    {
      name: "Airbrake",
      versions: [],
      years: { start: 2020, end: 2025 },
      description:
        "Catching bugs before they bite, ensuring my applications stay healthy.",
      relatedExperienceIds: ["rsc", "air-buddy"],
    },
    {
      name: "phpMyAdmin",
      years: { start: 2000, end: null },
      description: "Managing MySQL databases with a user-friendly interface.",
      relatedExperienceIds: ["rsc", "arctic", "dsrwp", "mdo", "drink-gifter"],
    },
    {
      name: "Gemini",
      versions: [],
      years: { start: 2024, end: null },
      description:
        "Gemini is the LLM that I pay for, so I use it for many tasks. The most common way I use it is to identify a task that can benefit from an LLM, refine a master prompt for that task, turn that master propmpt into a new gem.",
      relatedExperienceIds: ["rsc", "air-buddy"],
    },
    {
      name: "Gemini API",
      years: { start: 2025, end: null },
      description:
        "The most common use case for me with Gemini is the Gemini website, but I will occasionally have a use case where using the API makes more sense. In these cases I have used the google.genai python module.",
      relatedExperienceIds: ["air-buddy"],
    },
    {
      name: "Figma",
      years: { start: 2023, end: 2024 },
      description:
        "Collaborating with designers to translate beautiful mockups into functional UIs.",
      relatedExperienceIds: ["rsc"],
    },
    {
      name: "Mentoring",
      years: { start: 2022, end: 2025 },
      description:
        "Guiding the next generation of engineers, sharing knowledge, and helping them avoid my past debugging nightmares.",
      relatedExperienceIds: ["rsc"],
    },
    {
      name: "Code Review",
      years: { start: 2021, end: 2025 },
      description:
        "Polishing code, catching potential issues, and ensuring maintainable, high-quality solutions.",
      relatedExperienceIds: ["rsc"],
    },
    {
      name: "Pair Programming",
      years: { start: 2024, end: 2025 },
      description:
        "Tackling complex challenges side-by-side, two minds are always better than one (especially when one's thinking about pizza).",
      relatedExperienceIds: ["rsc"],
    },
    {
      name: "Full-Stack Development",
      years: { start: 1996, end: null },
      description:
        "Building complete applications from the database to the user interface, no stone left unturned.",
      relatedExperienceIds: [
        "rsc",
        "arctic",
        "dsrwp",
        "mdo",
        "drink-gifter",
        "air-buddy",
      ],
    },
    {
      name: "Legacy Code Refactoring",
      years: { start: 2019, end: null },
      description:
        "Breathing new life into old code, making it more secure, performant, and delightful to work with.",
      relatedExperienceIds: ["rsc"],
    },
    {
      name: "API Integration",
      versions: [],
      years: { start: 2008, end: null },
      description:
        "Connected applications to third party services using API documentation and in some cases an SDK. Third party services included: various Google services, Zoho Books, Zoho Desk, Zendesk, Salesforce, HubSpot, PayPal, Facebook etc",
      relatedExperienceIds: [
        "rsc",
        "dsrwp",
        "mdo",
        "drink-gifter",
        "air-buddy",
      ],
    },
    {
      name: "Debugging & Root Cause Analysis",
      years: { start: 2008, end: null },
      description:
        "My detective hat comes on when bugs appear, tracking them down and eradicating them with methodical precision.",
      relatedExperienceIds: [
        "rsc",
        "arctic",
        "dsrwp",
        "mdo",
        "drink-gifter",
        "air-buddy",
      ],
    },
    {
      name: "Prompt Engineering",
      years: { start: 2024, end: null },
      description:
        "Crafting the perfect prompts to get the best responses from large language models – it's an art!",
      relatedExperienceIds: ["rsc", "air-buddy"],
    },
    {
      name: "Retrieval-Augmented Generation (RAG)",
      versions: [],
      years: { start: 2025, end: null },
      description:
        "Combining information retrieval with generative AI for smarter, more context-aware solutions.",
      relatedExperienceIds: ["air-buddy"],
    },
    // {
    //   name: "wit.ai",
    //   description:
    //     "Integrating natural language processing to build intelligent conversational interfaces.",
    // },
  ],

  experiences: [
    {
      id: "rsc",
      title: "Senior Software Engineer",
      titles: [
        {
          title: "Senior Software Engineer / Technical Lead",
          years: "Sep 2022 - May 2025",
        },
        {
          title: "Software Engineer II",
          years: "Jul 2021 - Sep 2022",
        },
        {
          title: "Software Engineer",
          years: "Jul 2020 - Jul 2021",
        },
      ],
      company: "Research Square / AJE a division of MPS North America",
      years: "Jul 2020 - May 2025",
      level: "professional",
      responsibilities: [
        "Led a fully remote team of four backend engineers and three frontend engineers offset by eleven timezones, enhancing and maintaining an ecommerce web application in the scientific research publishing industry.",
        "Built and deployed microservices written in Golang utilizing AWS services like Route53, load balancers, ECR, ECS, EC2, and SQS in multiple regions.",
        "Became the go-to expert for diagnosing and resolving complex, cross-team bugs due to deep domain knowledge and a methodical approach to root cause analysis.",
        "Switched from manual deployment processes to fully automated CI/CD with GitHub and GitHub Actions.",
        "Led the migration from PHP 7.4 to 8.2 using tools like Rector, and the migration from React class-based components to functional components, improving system performance, security, and maintainability.",
        "Implemented a referral and rewards program that increased customer engagement and loyalty, resulting in a 20% increase in repeat business.",
        "Collaborated with cross-functional teams to develop and launch localized versions of the platform for different markets, including China, Brazil, and Europe.",
        "Maintained eventual consistency with third-party services like Zoho Books, Zoho Desk, Zendesk, Salesforce, and HubSpot using webhooks and processing of SQS events.",
        "Conducted regular database optimizations and developed scripts for data migrations, resulting in a 30% reduction in query execution times and improved system scalability.",
        "Implemented role-based access control and user authentication/authorization mechanisms to ensure the security and privacy of sensitive customer data.",
        "Worked closely with the support team to investigate and resolve customer-reported bugs and issues, maintaining a high level of customer satisfaction.",
        "Participated in the hiring process for new engineers and mentored junior developers in best practices, contributing to the growth and development of the engineering team.",
        "Participated in Agile development processes, including sprint planning, daily stand-ups, and retrospectives, consistently delivering features and bug fixes on time and within scope.",
      ],
      skillsUsed: [
        "PHP",
        "Laminas",
        "Doctrine ORM",
        "JavaScript",
        "React",
        "Redux",
        "MySQL",
        "Bootstrap",
        "Golang",
        "AWS",
        "Docker",
        "Linux",
        "Bash",
        "Symfony",
        "Airbrake",
        "phpMyAdmin",
        "Debugging & Root Cause Analysis",
        "CI/CD",
        "Git",
        "GitHub Actions",
        "Legacy Code Refactoring",
        "API Integration",
        "Mentoring",
        "Code Review",
        "Pair Programming",
        "Jira",
        "Slack",
        "Full-Stack Development",
        "Gemini",
        "Prompt Engineering",
        "Figma",
      ],
    },
    {
      id: "arctic",
      title: "Software Engineer, Contractor",
      company: "Arctic Coliseum",
      years: "2019-2020",
      level: "professional",
      responsibilities: [
        "Developed a React SPA with a Laravel REST API for a facility management system.",
        "Implemented scheduling and pricing models tailored for individual customers.",
        "Created comprehensive reporting features by facility and customer.",
      ],
      skillsUsed: [
        "React",
        "JavaScript",
        "PHP",
        "Laravel",
        "MySQL",
        "Bootstrap",
        "Bash",
        "Linux",
        "Docker",
        "Git",
        "phpMyAdmin",
        "Full-Stack Development",
        "Debugging & Root Cause Analysis",
      ],
    },
    {
      id: "dsrwp",
      title: "Owner, Software Engineer",
      company: "Dog Sled Rides of Winter Park",
      years: "2000-2019",
      level: "professional",
      responsibilities: [
        "Created website and reservation system increasing conversions and reducing time on the phone with customers. Reservations shifted from 100% over the phone to 98% online with no employees needed.",
        "Implemented a dynamic pricing algorithm which increased the average sale by 20% and smoothed the demand curve over our six-day week.",
        "Developed a feature-rich backend with automation of common tasks reducing admin costs 80%.",
        "Automated customer communication with text messages and emails increasing customer on-time rates 30%.",
        "Drove 7,303 dog sleds loaded with excited customers (which is an experience in itself!).",
      ],
      skillsUsed: [
        "JavaScript",
        "PHP",
        "MySQL",
        "Bash",
        "Linux",
        "Git",
        "API Integration",
        "phpMyAdmin",
        "Full-Stack Development",
        "Debugging & Root Cause Analysis",
      ],
    },
    {
      id: "mdo",
      title: "Owner, Software Engineer",
      company: "Mountain Dawg Outfitters",
      years: "2002-2017",
      level: "professional",
      responsibilities: [
        "Created a dynamic, cloud-based, point of sale system with integrated inventory system and CRM, which enabled real-time monitoring of sales and inventory from any device.",
        "Automated the emailing of customer receipts, loyalty points status, customized special deals, and inventory status which increased customer retention.",
        "Automated the ordering process with vendors reducing ordering time 90% and increasing order accuracy.",
      ],
      skillsUsed: [
        "JavaScript",
        "PHP",
        "MySQL",
        "Bash",
        "Linux",
        "Git",
        "API Integration",
        "phpMyAdmin",
        "Full-Stack Development",
        "Debugging & Root Cause Analysis",
      ],
    },
    {
      id: "drink-gifter",
      title: "Software Engineer",
      company: "Beer Bars and Coffee Shops, Facebook App",
      years: "2011",
      level: "professional",
      responsibilities: [
        "Implemented the design of a Facebook App from customer design.",
        "Utilized PayPal micro payment API to track customer deposits, balances and payments.",
      ],
      skillsUsed: [
        "JavaScript",
        "PHP",
        "MySQL",
        "API Integration",
        "Linux",
        "phpMyAdmin",
        "Debugging & Root Cause Analysis",
        "Full-Stack Development",
      ],
    },
    {
      id: "air-buddy",
      title: "AirBuddy: AI-Powered Error Analysis Tool",
      years: "2025",
      level: "personal",
      responsibilities: [
        "Developed a Python Flask application to streamline debugging by analyzing Airbrake errors.",
        "The tool retrieves relevant source code from the user's machine based on the error's call stack, packages it into a detailed prompt, and utilizes the Gemini API for in-depth analysis and potential solutions.",
      ],
      skillsUsed: [
        "Python",
        "Flask",
        "Prompt Engineering",
        "Retrieval-Augmented Generation (RAG)",
        "Gemini",
        "Gemini API",
        "API Integration",
        "Airbrake",
        "Linux",
        "Git",
        "GitHub Actions",
        "Google Cloud Platform",
        "Debugging & Root Cause Analysis",
        "Full-Stack Development",
      ],
    },
    {
      id: "resume",
      title: "Interactive resume",
      years: "2025",
      level: "personal",
      responsibilities: [
        "Developed an interactive resume application.",
        "The application reads a json file of resume data and displays it in an interactive website.",
        "Users can click on skills and experiences to get more detailed information about them.",
      ],
      skillsUsed: [
        "React",
        "GitHub Actions",
        "Google Cloud Platform",
        "Tailwind",
        "Linux",
        "Git",
      ],
    },
  ],
  education: [
    {
      degree: "BS",
      major: "Engineering & Applied Science",
      institution: "California Institute of Technology",
      url: "https://caltech.edu",
      years: "",
      note: "I unfortunately did not accomplish any noteworthy academic achievements during my time at Caltech, but I did set the school record in the javelin throw.",
      courseWork:
        "In addition to the rigorous math, physics and chemistry requirements, my coursework included: Algorithms, VLSI Design,  ",
    },
  ],
};
