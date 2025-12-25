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
    energy,
    finance,
    financialmarket,
    dataanalytics,
    RWE,
    Agora,
    Freeport,
    Bi,
    enerkite,
    hydrogen,
    pv,
    oldwebsite,
    projectfinance,
    uniper,
    pokebowl,
  } from "../assets";
  
  export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "Project",
    title: "Project",
  },
  {
    id: "Gallery",
    title: "Gallery",
  },
  {
    id: "Contact",
    title: "Contact",
  },
];
  
  const services = [
    {
      title: "Energy Management",
      icon: energy,
    },
    {
      title: "Valuation, M&A, Project finance",
      icon: finance,
    },
    {
      title: "Financial Market",
      icon: financialmarket,
    },
    {
      title: "Data Analytics",
      icon: dataanalytics,
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
      title:  "Senior Valuation & Decision Process Expert Investments/Divestments/Commercial Contracts ",
      company_name: "Uniper - Düsseldorf, Germany",
      icon: uniper,
      iconBg: "#E6DEDD",
    date:  "Present" ,
    points: [
      "Guide the preparation of investment, divestment, and commercial contract decisions front-to-end to ensure a smooth and efficient process",
      "Delivering clear and reliable financial planning and valuation support across all business units",
      "Leading digital improvements to streamline approval workflows",
      "Improving valuation methods and governance in line with industry best practices",
      ],
    },
    {
      title:  "Global Business Growth Hydrogen- Intern",
      company_name: "RWE - Essen, Germany",
      icon: RWE,
      iconBg: "#E6DEDD",
    date:  "" ,
    points: [
      "Support market research projects into different industrial and transport sectors",
      "Keep track of local and international hydrogen market developments",
      "Contribute to multi-disciplinary projects within the strategic domain for green hydrogen",
      "Support complex (techno-economic) analyses using Excel, PowerPoint etc",
      ],
    },
    {
      title: "Power System Transformation - Student Assistant",
      company_name: "Agora Energiewende - Berlin, Germany",
      icon: Agora,
      iconBg: "#E6DEDD",
      date: "",
      points: [
      "Managed the dataset and created data visualization for the workstream Low-Carbon Transition of State-Owned Power Companies.",
      "Tracked and analyzed technical, regulatory, and political developments in the EU power market as lessons learned for the workstream Low-Carbon Transition of State-Owned Power Companies",
      "Developed a data collection tool for the organization’s power sector knowledge management and maintained the dataset",
      "Coordinated with internal and external stakeholders to conduct research and organize workshops regarding power system transformation.",
      "Facilitated collaboration with colleagues from Berlin, Beijing, Bangkok, and Brussels offices by supporting other project content work and logistics.",
      ],
    },
    {
      title: "Kitchen Hand & Cashier",
      company_name: "Hawaiian Poke Bowl - Berlin, Germany",
      icon: pokebowl,
      iconBg: "#E6DEDD",
      date: "",
      points: [
      "It was a casual job nothing fancy.",
      "But I'm truly proud to have gone through this stage. It taught me so much. I chose to include it here, even if it’s not impressive on paper but it holds deep meaning and unforgettable memories for me.",
      "I've created a dedicated page to share that journey"
      ],
      source_code_link: "https://dennyhidayat.com/project/kitchenhand/"
    },
    {
      title: "Junior Economist",
      company_name: "Bank Indonesia - Jakarta, Indonesia",
      icon: Bi,
      iconBg: "#383E56",
      date: "",
      points: [
        "Monitoring money market activities in domestic market",
        "Assessing money market development stage, proposing, and implementing money market development initiatives",
        "Regulating and developing money market instrument such as commercial paper, negotiable certificate of deposit, interest rate derivatives",
      ],
    },
    {
      title: "Contract Engineer",
      company_name: "Freeport Mcmoran Indonesia - Papua, Indonesia",
      icon: Freeport,
      iconBg: "#E6DEDD",
    date: "",
    points: [
      "Developed an automated worksheet using Visual Basic and macros in Excel for monitoring of project milestones, vendor management, and construction progress.",
      "Managing commercial contract project, project controlling and verification of incoming payments.",
      "Coordinated with end-user from related Business Unit and cost control section for cost budgeting to provide appropriate cost-effective manner.",
      "Controlled the progress of ongoing contractor projects, including their man hours charges and their achievement to be complied with signed contracts.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Hydrogen clustering",
      description:
        "This project is all about checking out what's up with hydrogen projects. We're going to dive into different projects and see what makes them tick. This project using the International Energy Agency's (IEA) Hydrogen Production and Infrastructure Projects Database.",
      tags: [
        {
          name: "H2",
          color: "blue-text-gradient",
        },
        {
          name: "Clustering",
          color: "green-text-gradient",
        },
        {
          name: "DataAnalytic",
          color: "pink-text-gradient",
        },
      ],
      image: hydrogen,
      source_code_link: "https://dennyhidayat.com/project/hydrogen/",
    },
    {
      name: "PV + BESS with incentive ?",
      description:
        "This project is all about exploring the integration of Photovoltaic (PV) and Battery Energy Storage Systems (BESS) with the current incentives in Germany. I’ll dive into the details and see how it all comes together, focusing on  self-consumption and selling surplus electricity to the grid. This whole thing is part of my master thesis..",
      tags: [
        {
          name: "PV+BESS",
          color: "blue-text-gradient",
        },
        {
          name: "EnergyIncentive",
          color: "green-text-gradient",
        },
        {
          name: "RES",
          color: "pink-text-gradient",
        },
      ],
      image: pv,
      source_code_link: "https://dennyhidayat.com/project/pv-bess-integration/",
    },
    {
      name: "Financial modelling on airborne-wind energy",
      description:
        "This projects creating an investment financial model for EnerKíte's revolutionary airborne wind energy. This work blended cutting-edge renewable technology with strategic financial analysis, demonstrating how innovative energy solutions can be transformed into profitable investments",
      tags: [
        {
          name: "FinancialModelling",
          color: "blue-text-gradient",
        },
        {
          name: "WindEnergy",
          color: "green-text-gradient",
        },
        {
          name: "InnovativeEnergy",
          color: "pink-text-gradient",
        },
      ],
      image: enerkite,
      source_code_link: "https://dennyhidayat.com/project/investment-analysis-airborne-wind/",
    },
    {
      name: "From WordPress to React: A learning in Web Development (hidayatdenny.com v.2)",
      description:
        "This is my first website that started with WordPress and Elementor. Now, I've upgraded it using React.js with 3D features for a more interactive and fun experience. I kept some of the old style to remind myself of how I've learning and improving.",
      tags: [
        {
          name: "WebDevelopment",
          color: "blue-text-gradient",
        },
        {
          name: "ReactJS",
          color: "green-text-gradient",
        },
        {
          name: "3DDesignInnovativeEnerg",
          color: "pink-text-gradient",
        },
      ],
      image: oldwebsite,
      source_code_link: "https://dennyhidayat.com/project/",
    },  
    {
      name: "Project Finance Renewable Energy Modeling",
      description:
        "Project finance modeling, showcasing  Excel-based tool to simulate the financial structure of large-scale infrastructure and energy projects. The model integrates financial logic with automation to assess debt capacity, investor returns, and key risk metrics, crucial in evaluating bankability and structuring capital",
      tags: [
        {
          name: "Project finance",
          color: "blue-text-gradient",
        },
        {
          name: "Debt Service Coverage Ratio",
          color: "green-text-gradient",
        },
        {
          name: "Financing",
          color: "pink-text-gradient",
        },
      ],
      image: projectfinance,
      source_code_link: "https://dennyhidayat.com/project/project-finance/",
    },  
  ];
  
  export { services, technologies, experiences, testimonials, projects };