import {
  Award,
  BadgeDollarSign,
  BedDouble,
  Briefcase,
  BuildingIcon,
  Bus,
  Clock,
  GraduationCap,
  HardHat,
  MapPin,
  ShoppingBag,
  Sprout,
  User,
  Users,
  Wallet,
  Wrench,
  Mail, 
  MessageSquare, 
  PhoneCall,
  UserSquare,
  FileText,
  CheckCircle
} from "lucide-react";

export const menuItems = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Jobs",
    link: "/jobs",
  },
  {
    id: 3,
    title: "About",
    link: "/about",
  },
  {
    id: 4,
    title: "Contact",
    link: "/",
  },
  {
    id: 5,
    title: "Testing",
    link: "/sagor",
  },
];

export const infoCard = [
  {
    icon: Users,
    label: "Candidates",
    number: "9,754",
  },
  {
    icon: BuildingIcon,
    label: "Companies",
    number: "1,290",
  },
  {
    icon: Briefcase,
    label: "Jobs",
    number: "3,246",
  },
];

export const features = [
  {
    id: 1,
    title: "12k+",
    title2: "Clients worldwide",
    description: "We have a strong presence in the global market.",
  },
  {
    id: 2,
    title: "20k+",
    title2: "Active Resumes",
    description:
      "Our database is constantly growing with thousands of resumes everyday. ",
  },
  {
    id: 3,
    title: "10k+",
    title2: "Companies",
    description:
      "We have partnered with numerous companies to help them find the right talent.",
  },
];

export const recentJobs = [
  {
    id: 1,
    postedAt: "2025-04-11T08:30:00Z",
    companyLogo: "/logos/logo1.png",
    jobTitle: "Forward Security Director",
    companyName: "Bauch, Schuppe and Schulist Co",
    jobCategory: "Hotel & Tourism",
    employmentType: "Full Time",
    salary: "$4000–$5000",
    location: "New York, USA",
  },
  {
    id: 2,
    postedAt: "2025-04-10T22:15:00Z",
    companyLogo: "/logos/logo2.png",
    jobTitle: "Frontend Engineer",
    companyName: "Globex Software Inc.",
    jobCategory: "Commerce",
    employmentType: "Part Time",
    salary: "$2500–$3500",
    location: "San Francisco, USA",
  },
  {
    id: 3,
    postedAt: "2025-04-09T13:45:00Z",
    companyLogo: "/logos/logo3.png",
    jobTitle: "Construction Project Manager",
    companyName: "Grady-Kuphal Ltd.",
    jobCategory: "Construction",
    employmentType: "Full Time",
    salary: "$6000–$7500",
    location: "Berlin, Germany",
  },
  {
    id: 4,
    postedAt: "2025-04-11T06:00:00Z",
    companyLogo: "/logos/logo4.png",
    jobTitle: "Agricultural Field Officer",
    companyName: "Green Harvest Ltd.",
    jobCategory: "Agriculture",
    employmentType: "Full Time",
    salary: "$1800–$2500",
    location: "Chittagong, Bangladesh",
  },
  {
    id: 5,
    postedAt: "2025-04-08T17:20:00Z",
    companyLogo: "/logos/logo5.png",
    jobTitle: "School Principal",
    companyName: "Harmony Public School",
    jobCategory: "Education",
    employmentType: "Full Time",
    salary: "$3000–$4000",
    location: "London, UK",
  },
];

export const blogPosts = [
  {
    id: 1,
    type: "blog",
    thumbnail:
      "https://c.ndtvimg.com/2024-10/ft0surto_work-generic_625x300_02_October_24.jpeg?downsize=773:435",
    title:
      "Woman Returning To Work Asks For Help After Bizarre Interview Question",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices et dolor ac convallis. In accumsan metus eget erat laoreet, id facilisis quam tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet efficitur mi. Vivamus sollicitudin, orci congue ullamcorper porta, justo arcu euismod leo, vitae auctor massa enim ut mi. Aliquam tempor cursus eros sed rutrum. Nullam pretium orci diam, eu porta elit cursus eget. Sed pellentesque arcu sit amet urna iaculis facilisis. Maecenas lobortis dolor eu ipsum pretium, non iaculis eros commodo. Nam sit amet lacus vel nisl commodo ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec ligula nisl. Cras volutpat justo eget tortor vehicula scelerisque. Maecenas tempus commodo sapien, in fermentum elit iaculis id. Vestibulum euismod, felis sollicitudin ultricies ornare, est ligula porta massa, ac auctor nisi leo sit amet augue. Ut suscipit dapibus felis et dignissim.",
  },
  {
    id: 2,
    type: "news",
    thumbnail:
      "https://c.ndtvimg.com/2025-04/n8bpnlto_ffff_625x300_02_April_25.jpeg?downsize=773:435",
    title:
      "National High Speed Rail Corporation Hiring For Various Posts, Salary Up To 1.6 Lakh Per Month",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices et dolor ac convallis. In accumsan metus eget erat laoreet, id facilisis quam tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet efficitur mi. Vivamus sollicitudin, orci congue ullamcorper porta, justo arcu euismod leo, vitae auctor massa enim ut mi. Aliquam tempor cursus eros sed rutrum. Nullam pretium orci diam, eu porta elit cursus eget. Sed pellentesque arcu sit amet urna iaculis facilisis. Maecenas lobortis dolor eu ipsum pretium, non iaculis eros commodo. Nam sit amet lacus vel nisl commodo ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec ligula nisl. Cras volutpat justo eget tortor vehicula scelerisque. Maecenas tempus commodo sapien, in fermentum elit iaculis id. Vestibulum euismod, felis sollicitudin ultricies ornare, est ligula porta massa, ac auctor nisi leo sit amet augue. Ut suscipit dapibus felis et dignissim.",
  },
];
export const categories = [
  {
    id: 1,
    title: "Agriculture",
    value: "agriculture",
    icon: Sprout,
    jobsCount: 997,
  },
  {
    id: 2,
    title: "Metal Production",
    value: "metalProduction",
    icon: Wrench,
    jobsCount: 1690,
  },
  {
    id: 3,
    title: "Commerce",
    value: "commerce",
    icon: ShoppingBag,
    jobsCount: 3413,
  },
  {
    id: 4,
    title: "Construction",
    value: "construction",
    icon: HardHat,
    jobsCount: 756,
  },
  {
    id: 5,
    title: "Hotels & Tourism",
    value: "hotelsTourism",
    icon: BedDouble,
    jobsCount: 900,
  },
  {
    id: 6,
    title: "Education",
    value: "education",
    icon: GraduationCap,
    jobsCount: 1020,
  },
  {
    id: 7,
    title: "Financial Services",
    value: "financialServices",
    icon: BadgeDollarSign,
    jobsCount: 1240,
  },
  {
    id: 8,
    title: "Transport",
    value: "Transport",
    icon: Bus,
    jobsCount: 120,
  },
];

export const jobType = [
  {
    id: 1,
    title: "Full Time",
    value: "fullTime",
    jobsCount: 12,
  },
  {
    id: 2,
    title: "Part Time",
    value: "partTime",
    jobsCount: 22,
  },
  {
    id: 3,
    title: "Freelance",
    value: "freelance",
    jobsCount: 35,
  },
  {
    id: 4,
    title: "Seasonal",
    value: "seasonal",
    jobsCount: 15,
  },
  {
    id: 5,
    title: "Fixed-Price",
    value: "fixedPrice",
    jobsCount: 15,
  },
];

export const jobExperienceLevel = [
  {
    id: 1,
    title: "No-experience",
    value: "noExperience",
    jobsCount: 5,
  },
  {
    id: 2,
    title: "Fresher",
    value: "fresher",
    jobsCount: 26,
  },
  {
    id: 3,
    title: "Intermediate",
    value: "intermediate",
    jobsCount: 31,
  },
  {
    id: 4,
    title: "Expert",
    value: "expert",
    jobsCount: 55,
  },
];

export const jobDatePosted = [
  {
    id: 1,
    title: "All",
    value: "all",
    jobsCount: 5000,
  },
  {
    id: 2,
    title: "Last Hour",
    value: "lastHour",
    jobsCount: 179,
  },
  {
    id: 3,
    title: "Last 24 Hours",
    value: "24hours",
    jobsCount: 234,
  },
  {
    id: 4,
    title: "Last 7 Days",
    value: "7days",
    jobsCount: 954,
  },
  {
    id: 5,
    title: "Last 30 Days",
    value: "30days",
    jobsCount: 1498,
  },
];

export const jobTags = [
  {
    id: 1,
    value: "engineering",
  },
  {
    id: 2,
    value: "design",
  },
  {
    id: 3,
    value: "ui/ux",
  },
  {
    id: 4,
    value: "marketing",
  },
  {
    id: 5,
    value: "management",
  },
  {
    id: 6,
    value: "soft",
  },
  {
    id: 7,
    value: "construction",
  },
];

export const jobOverview = [
  {
    id:1,
    title: "Job Title",
    value: "title",
    icon: User,
  },
  {
    id:2,
    title: "Job Type",
    value: "jobType",
    icon: Clock,
  },
  {
    id:3,
    title: "Category",
    value: "category",
    icon: Briefcase,
  },
  {
    id:4,
    title: "Experience",
    value: "experience",
    icon: Award,
  },
  {
    id:5,
    title: "Degree",
    value: "degree",
    icon: GraduationCap,
  },
  {
    id:6,
    title: "Offered Salary",
    value: "salary",
    icon: Wallet,
  },
  {
    id:7,
    title: "Location",
    value: "location",
    icon: MapPin,
  },
]

export const jobsData = [
  {
    "id": 1,
    "postedAt": "2025-04-03T11:32:00Z",
    "companyLogo": "/logos/logo2.png",
    "jobTitle": "Product Manager",
    "companyName": "Hooli Systems",
    "jobCategory": "Management",
    "employmentType": "Part Time",
    "salary": "$2203\u2013$7644",
    "location": "Stockholm, Sweden",
    "description": "We are looking for a passionate and experienced professional to join our team. In this role, you'll be responsible for a range of tasks that support the development, implementation, and optimization of our projects and platforms. You will collaborate with cross-functional teams to deliver high-quality solutions that meet business objectives. Strong communication, analytical thinking, and a proactive attitude are essential. If you\u2019re eager to make a meaningful impact, grow within a dynamic team, and work on cutting-edge technologies, then this is the perfect opportunity for you.",
    "keyResponsibilities": [
      "Collaborate with team members on project requirements and timelines.",
      "Develop and maintain scalable applications.",
      "Participate in code reviews and ensure code quality.",
      "Troubleshoot and debug issues as they arise.",
      "Write technical documentation for internal use.",
      "Ensure product performance and reliability."
    ],
    "professionalSkills": [
      "Strong knowledge of relevant frameworks and libraries.",
      "Experience with RESTful APIs.",
      "Excellent problem-solving abilities.",
      "Good understanding of version control (Git).",
      "Ability to work independently and in a team.",
      "Strong written and verbal communication skills."
    ],
    "tags": [
      "marketing",
      "engineering",
      "ui/ux",
      "soft"
    ]
  },
  {
    "id": 2,
    "postedAt": "2025-04-07T02:43:00Z",
    "companyLogo": "/logos/logo3.png",
    "jobTitle": "DevOps Engineer",
    "companyName": "Initech Solutions",
    "jobCategory": "Management",
    "employmentType": "Full Time",
    "salary": "$3627\u2013$4675",
    "location": "London, UK",
    "description": "We are looking for a passionate and experienced professional to join our team. In this role, you'll be responsible for a range of tasks that support the development, implementation, and optimization of our projects and platforms. You will collaborate with cross-functional teams to deliver high-quality solutions that meet business objectives. Strong communication, analytical thinking, and a proactive attitude are essential. If you\u2019re eager to make a meaningful impact, grow within a dynamic team, and work on cutting-edge technologies, then this is the perfect opportunity for you.",
    "keyResponsibilities": [
      "Collaborate with team members on project requirements and timelines.",
      "Develop and maintain scalable applications.",
      "Participate in code reviews and ensure code quality.",
      "Troubleshoot and debug issues as they arise.",
      "Write technical documentation for internal use.",
      "Ensure product performance and reliability."
    ],
    "professionalSkills": [
      "Strong knowledge of relevant frameworks and libraries.",
      "Experience with RESTful APIs.",
      "Excellent problem-solving abilities.",
      "Good understanding of version control (Git).",
      "Ability to work independently and in a team.",
      "Strong written and verbal communication skills."
    ],
    "tags": [
      "management",
      "soft",
      "design",
      "construction"
    ]
  },
  {
    "id": 3,
    "postedAt": "2025-04-08T08:29:00Z",
    "companyLogo": "/logos/logo4.png",
    "jobTitle": "Frontend Engineer",
    "companyName": "Stark Industries",
    "jobCategory": "Management",
    "employmentType": "Full Time",
    "salary": "$3217\u2013$5340",
    "location": "New York, USA",
    "description": "We are looking for a passionate and experienced professional to join our team. In this role, you'll be responsible for a range of tasks that support the development, implementation, and optimization of our projects and platforms. You will collaborate with cross-functional teams to deliver high-quality solutions that meet business objectives. Strong communication, analytical thinking, and a proactive attitude are essential. If you\u2019re eager to make a meaningful impact, grow within a dynamic team, and work on cutting-edge technologies, then this is the perfect opportunity for you.",
    "keyResponsibilities": [
      "Collaborate with team members on project requirements and timelines.",
      "Develop and maintain scalable applications.",
      "Participate in code reviews and ensure code quality.",
      "Troubleshoot and debug issues as they arise.",
      "Write technical documentation for internal use.",
      "Ensure product performance and reliability."
    ],
    "professionalSkills": [
      "Strong knowledge of relevant frameworks and libraries.",
      "Experience with RESTful APIs.",
      "Excellent problem-solving abilities.",
      "Good understanding of version control (Git).",
      "Ability to work independently and in a team.",
      "Strong written and verbal communication skills."
    ],
    "tags": [
      "marketing",
      "engineering",
      "construction",
      "ui/ux"
    ]
  },
  {
    "id": 4,
    "postedAt": "2025-04-07T22:36:00Z",
    "companyLogo": "/logos/logo5.png",
    "jobTitle": "QA Tester",
    "companyName": "Globex Software Inc.",
    "jobCategory": "Design",
    "employmentType": "Full Time",
    "salary": "$2069\u2013$6563",
    "location": "Stockholm, Sweden",
    "description": "We are looking for a passionate and experienced professional to join our team. In this role, you'll be responsible for a range of tasks that support the development, implementation, and optimization of our projects and platforms. You will collaborate with cross-functional teams to deliver high-quality solutions that meet business objectives. Strong communication, analytical thinking, and a proactive attitude are essential. If you\u2019re eager to make a meaningful impact, grow within a dynamic team, and work on cutting-edge technologies, then this is the perfect opportunity for you.",
    "keyResponsibilities": [
      "Collaborate with team members on project requirements and timelines.",
      "Develop and maintain scalable applications.",
      "Participate in code reviews and ensure code quality.",
      "Troubleshoot and debug issues as they arise.",
      "Write technical documentation for internal use.",
      "Ensure product performance and reliability."
    ],
    "professionalSkills": [
      "Strong knowledge of relevant frameworks and libraries.",
      "Experience with RESTful APIs.",
      "Excellent problem-solving abilities.",
      "Good understanding of version control (Git).",
      "Ability to work independently and in a team.",
      "Strong written and verbal communication skills."
    ],
    "tags": [
      "management",
      "construction",
      "engineering",
      "marketing"
    ]
  },
  {
    "id": 5,
    "postedAt": "2025-04-07T06:31:00Z",
    "companyLogo": "/logos/logo1.png",
    "jobTitle": "Marketing Specialist",
    "companyName": "Initech Solutions",
    "jobCategory": "Design",
    "employmentType": "Full Time",
    "salary": "$2412\u2013$5071",
    "location": "Paris, France",
    "description": "We are looking for a passionate and experienced professional to join our team. In this role, you'll be responsible for a range of tasks that support the development, implementation, and optimization of our projects and platforms. You will collaborate with cross-functional teams to deliver high-quality solutions that meet business objectives. Strong communication, analytical thinking, and a proactive attitude are essential. If you\u2019re eager to make a meaningful impact, grow within a dynamic team, and work on cutting-edge technologies, then this is the perfect opportunity for you.",
    "keyResponsibilities": [
      "Collaborate with team members on project requirements and timelines.",
      "Develop and maintain scalable applications.",
      "Participate in code reviews and ensure code quality.",
      "Troubleshoot and debug issues as they arise.",
      "Write technical documentation for internal use.",
      "Ensure product performance and reliability."
    ],
    "professionalSkills": [
      "Strong knowledge of relevant frameworks and libraries.",
      "Experience with RESTful APIs.",
      "Excellent problem-solving abilities.",
      "Good understanding of version control (Git).",
      "Ability to work independently and in a team.",
      "Strong written and verbal communication skills."
    ],
    "tags": [
      "soft",
      "construction",
      "marketing",
      "engineering"
    ]
  },
  {
    "id": 6,
    "postedAt": "2025-04-03T01:24:00Z",
    "companyLogo": "/logos/logo2.png",
    "jobTitle": "Marketing Specialist",
    "companyName": "Globex Software Inc.",
    "jobCategory": "Marketing",
    "employmentType": "Full Time",
    "salary": "$3095\u2013$5913",
    "location": "Tokyo, Japan",
    "description": "We are looking for a passionate and experienced professional to join our team. In this role, you'll be responsible for a range of tasks that support the development, implementation, and optimization of our projects and platforms. You will collaborate with cross-functional teams to deliver high-quality solutions that meet business objectives. Strong communication, analytical thinking, and a proactive attitude are essential. If you\u2019re eager to make a meaningful impact, grow within a dynamic team, and work on cutting-edge technologies, then this is the perfect opportunity for you.",
    "keyResponsibilities": [
      "Collaborate with team members on project requirements and timelines.",
      "Develop and maintain scalable applications.",
      "Participate in code reviews and ensure code quality.",
      "Troubleshoot and debug issues as they arise.",
      "Write technical documentation for internal use.",
      "Ensure product performance and reliability."
    ],
    "professionalSkills": [
      "Strong knowledge of relevant frameworks and libraries.",
      "Experience with RESTful APIs.",
      "Excellent problem-solving abilities.",
      "Good understanding of version control (Git).",
      "Ability to work independently and in a team.",
      "Strong written and verbal communication skills."
    ],
    "tags": [
      "soft",
      "engineering",
      "marketing",
      "construction"
    ]
  },
  {
    "id": 7,
    "postedAt": "2025-04-02T06:10:00Z",
    "companyLogo": "/logos/logo3.png",
    "jobTitle": "Mobile Developer",
    "companyName": "Umbrella Corp",
    "jobCategory": "Management",
    "employmentType": "Full Time",
    "salary": "$3908\u2013$5437",
    "location": "New York, USA",
    "description": "We are looking for a passionate and experienced professional to join our team. In this role, you'll be responsible for a range of tasks that support the development, implementation, and optimization of our projects and platforms. You will collaborate with cross-functional teams to deliver high-quality solutions that meet business objectives. Strong communication, analytical thinking, and a proactive attitude are essential. If you\u2019re eager to make a meaningful impact, grow within a dynamic team, and work on cutting-edge technologies, then this is the perfect opportunity for you.",
    "keyResponsibilities": [
      "Collaborate with team members on project requirements and timelines.",
      "Develop and maintain scalable applications.",
      "Participate in code reviews and ensure code quality.",
      "Troubleshoot and debug issues as they arise.",
      "Write technical documentation for internal use.",
      "Ensure product performance and reliability."
    ],
    "professionalSkills": [
      "Strong knowledge of relevant frameworks and libraries.",
      "Experience with RESTful APIs.",
      "Excellent problem-solving abilities.",
      "Good understanding of version control (Git).",
      "Ability to work independently and in a team.",
      "Strong written and verbal communication skills."
    ],
    "tags": [
      "management",
      "marketing",
      "engineering",
      "construction"
    ]
  },
  {
    "id": 8,
    "postedAt": "2025-04-03T23:59:00Z",
    "companyLogo": "/logos/logo4.png",
    "jobTitle": "Data Analyst",
    "companyName": "Wonka Tech",
    "jobCategory": "Marketing",
    "employmentType": "Full Time",
    "salary": "$3580\u2013$4805",
    "location": "Stockholm, Sweden",
    "description": "We are looking for a passionate and experienced professional to join our team. In this role, you'll be responsible for a range of tasks that support the development, implementation, and optimization of our projects and platforms. You will collaborate with cross-functional teams to deliver high-quality solutions that meet business objectives. Strong communication, analytical thinking, and a proactive attitude are essential. If you\u2019re eager to make a meaningful impact, grow within a dynamic team, and work on cutting-edge technologies, then this is the perfect opportunity for you.",
    "keyResponsibilities": [
      "Collaborate with team members on project requirements and timelines.",
      "Develop and maintain scalable applications.",
      "Participate in code reviews and ensure code quality.",
      "Troubleshoot and debug issues as they arise.",
      "Write technical documentation for internal use.",
      "Ensure product performance and reliability."
    ],
    "professionalSkills": [
      "Strong knowledge of relevant frameworks and libraries.",
      "Experience with RESTful APIs.",
      "Excellent problem-solving abilities.",
      "Good understanding of version control (Git).",
      "Ability to work independently and in a team.",
      "Strong written and verbal communication skills."
    ],
    "tags": [
      "ui/ux",
      "design",
      "soft",
      "marketing"
    ]
  },
  {
    "id": 9,
    "postedAt": "2025-04-03T07:37:00Z",
    "companyLogo": "/logos/logo5.png",
    "jobTitle": "Mobile Developer",
    "companyName": "Soylent Technologies",
    "jobCategory": "Marketing",
    "employmentType": "Full Time",
    "salary": "$2351\u2013$5640",
    "location": "Sydney, Australia",
    "description": "We are looking for a passionate and experienced professional to join our team. In this role, you'll be responsible for a range of tasks that support the development, implementation, and optimization of our projects and platforms. You will collaborate with cross-functional teams to deliver high-quality solutions that meet business objectives. Strong communication, analytical thinking, and a proactive attitude are essential. If you\u2019re eager to make a meaningful impact, grow within a dynamic team, and work on cutting-edge technologies, then this is the perfect opportunity for you.",
    "keyResponsibilities": [
      "Collaborate with team members on project requirements and timelines.",
      "Develop and maintain scalable applications.",
      "Participate in code reviews and ensure code quality.",
      "Troubleshoot and debug issues as they arise.",
      "Write technical documentation for internal use.",
      "Ensure product performance and reliability."
    ],
    "professionalSkills": [
      "Strong knowledge of relevant frameworks and libraries.",
      "Experience with RESTful APIs.",
      "Excellent problem-solving abilities.",
      "Good understanding of version control (Git).",
      "Ability to work independently and in a team.",
      "Strong written and verbal communication skills."
    ],
    "tags": [
      "design",
      "management",
      "construction",
      "engineering"
    ]
  },
  {
    "id": 10,
    "postedAt": "2025-04-10T20:10:00Z",
    "companyLogo": "/logos/logo1.png",
    "jobTitle": "Data Analyst",
    "companyName": "Umbrella Corp",
    "jobCategory": "Management",
    "employmentType": "Part Time",
    "salary": "$3530\u2013$7248",
    "location": "Berlin, Germany",
    "description": "We are looking for a passionate and experienced professional to join our team. In this role, you'll be responsible for a range of tasks that support the development, implementation, and optimization of our projects and platforms. You will collaborate with cross-functional teams to deliver high-quality solutions that meet business objectives. Strong communication, analytical thinking, and a proactive attitude are essential. If you\u2019re eager to make a meaningful impact, grow within a dynamic team, and work on cutting-edge technologies, then this is the perfect opportunity for you.",
    "keyResponsibilities": [
      "Collaborate with team members on project requirements and timelines.",
      "Develop and maintain scalable applications.",
      "Participate in code reviews and ensure code quality.",
      "Troubleshoot and debug issues as they arise.",
      "Write technical documentation for internal use.",
      "Ensure product performance and reliability."
    ],
    "professionalSkills": [
      "Strong knowledge of relevant frameworks and libraries.",
      "Experience with RESTful APIs.",
      "Excellent problem-solving abilities.",
      "Good understanding of version control (Git).",
      "Ability to work independently and in a team.",
      "Strong written and verbal communication skills."
    ],
    "tags": [
      "engineering",
      "ui/ux",
      "design",
      "soft"
    ]
  },
  {
    "id": 11,
    "postedAt": "2025-04-01T17:34:00Z",
    "companyLogo": "/logos/logo2.png",
    "jobTitle": "Product Manager",
    "companyName": "Tyrell Corporation",
    "jobCategory": "Management",
    "employmentType": "Part Time",
    "salary": "$2625\u2013$4316",
    "location": "Tokyo, Japan",
    "description": "We are looking for a passionate and experienced professional to join our team. In this role, you'll be responsible for a range of tasks that support the development, implementation, and optimization of our projects and platforms. You will collaborate with cross-functional teams to deliver high-quality solutions that meet business objectives. Strong communication, analytical thinking, and a proactive attitude are essential. If you\u2019re eager to make a meaningful impact, grow within a dynamic team, and work on cutting-edge technologies, then this is the perfect opportunity for you.",
    "keyResponsibilities": [
      "Collaborate with team members on project requirements and timelines.",
      "Develop and maintain scalable applications.",
      "Participate in code reviews and ensure code quality.",
      "Troubleshoot and debug issues as they arise.",
      "Write technical documentation for internal use.",
      "Ensure product performance and reliability."
    ],
    "professionalSkills": [
      "Strong knowledge of relevant frameworks and libraries.",
      "Experience with RESTful APIs.",
      "Excellent problem-solving abilities.",
      "Good understanding of version control (Git).",
      "Ability to work independently and in a team.",
      "Strong written and verbal communication skills."
    ],
    "tags": [
      "design",
      "marketing",
      "soft",
      "construction"
    ]
  },
  {
    "id": 12,
    "postedAt": "2025-04-01T16:13:00Z",
    "companyLogo": "/logos/logo3.png",
    "jobTitle": "Software Engineer",
    "companyName": "Wayne Enterprises",
    "jobCategory": "Engineering",
    "employmentType": "Full Time",
    "salary": "$3257\u2013$6549",
    "location": "Stockholm, Sweden",
    "description": "We are looking for a passionate and experienced professional to join our team. In this role, you'll be responsible for a range of tasks that support the development, implementation, and optimization of our projects and platforms. You will collaborate with cross-functional teams to deliver high-quality solutions that meet business objectives. Strong communication, analytical thinking, and a proactive attitude are essential. If you\u2019re eager to make a meaningful impact, grow within a dynamic team, and work on cutting-edge technologies, then this is the perfect opportunity for you.",
    "keyResponsibilities": [
      "Collaborate with team members on project requirements and timelines.",
      "Develop and maintain scalable applications.",
      "Participate in code reviews and ensure code quality.",
      "Troubleshoot and debug issues as they arise.",
      "Write technical documentation for internal use.",
      "Ensure product performance and reliability."
    ],
    "professionalSkills": [
      "Strong knowledge of relevant frameworks and libraries.",
      "Experience with RESTful APIs.",
      "Excellent problem-solving abilities.",
      "Good understanding of version control (Git).",
      "Ability to work independently and in a team.",
      "Strong written and verbal communication skills."
    ],
    "tags": [
      "engineering",
      "ui/ux",
      "construction",
      "marketing"
    ]
  },
  {
    "id": 13,
    "postedAt": "2025-04-03T17:03:00Z",
    "companyLogo": "/logos/logo4.png",
    "jobTitle": "Mobile Developer",
    "companyName": "Cyberdyne Inc.",
    "jobCategory": "Management",
    "employmentType": "Full Time",
    "salary": "$2622\u2013$6245",
    "location": "Tokyo, Japan",
    "description": "We are looking for a passionate and experienced professional to join our team. In this role, you'll be responsible for a range of tasks that support the development, implementation, and optimization of our projects and platforms. You will collaborate with cross-functional teams to deliver high-quality solutions that meet business objectives. Strong communication, analytical thinking, and a proactive attitude are essential. If you\u2019re eager to make a meaningful impact, grow within a dynamic team, and work on cutting-edge technologies, then this is the perfect opportunity for you.",
    "keyResponsibilities": [
      "Collaborate with team members on project requirements and timelines.",
      "Develop and maintain scalable applications.",
      "Participate in code reviews and ensure code quality.",
      "Troubleshoot and debug issues as they arise.",
      "Write technical documentation for internal use.",
      "Ensure product performance and reliability."
    ],
    "professionalSkills": [
      "Strong knowledge of relevant frameworks and libraries.",
      "Experience with RESTful APIs.",
      "Excellent problem-solving abilities.",
      "Good understanding of version control (Git).",
      "Ability to work independently and in a team.",
      "Strong written and verbal communication skills."
    ],
    "tags": [
      "engineering",
      "marketing",
      "design",
      "management"
    ]
  },
  {
    "id": 14,
    "postedAt": "2025-04-06T10:59:00Z",
    "companyLogo": "/logos/logo5.png",
    "jobTitle": "DevOps Engineer",
    "companyName": "Hooli Systems",
    "jobCategory": "Marketing",
    "employmentType": "Full Time",
    "salary": "$2603\u2013$4510",
    "location": "Stockholm, Sweden",
    "description": "We are looking for a passionate and experienced professional to join our team. In this role, you'll be responsible for a range of tasks that support the development, implementation, and optimization of our projects and platforms. You will collaborate with cross-functional teams to deliver high-quality solutions that meet business objectives. Strong communication, analytical thinking, and a proactive attitude are essential. If you\u2019re eager to make a meaningful impact, grow within a dynamic team, and work on cutting-edge technologies, then this is the perfect opportunity for you.",
    "keyResponsibilities": [
      "Collaborate with team members on project requirements and timelines.",
      "Develop and maintain scalable applications.",
      "Participate in code reviews and ensure code quality.",
      "Troubleshoot and debug issues as they arise.",
      "Write technical documentation for internal use.",
      "Ensure product performance and reliability."
    ],
    "professionalSkills": [
      "Strong knowledge of relevant frameworks and libraries.",
      "Experience with RESTful APIs.",
      "Excellent problem-solving abilities.",
      "Good understanding of version control (Git).",
      "Ability to work independently and in a team.",
      "Strong written and verbal communication skills."
    ],
    "tags": [
      "construction",
      "design",
      "management",
      "engineering"
    ]
  },
  {
    "id": 15,
    "postedAt": "2025-04-04T01:25:00Z",
    "companyLogo": "/logos/logo1.png",
    "jobTitle": "Mobile Developer",
    "companyName": "Hooli Systems",
    "jobCategory": "Design",
    "employmentType": "Part Time",
    "salary": "$2428\u2013$5962",
    "location": "Dhaka, Bangladesh",
    "description": "We are looking for a passionate and experienced professional to join our team. In this role, you'll be responsible for a range of tasks that support the development, implementation, and optimization of our projects and platforms. You will collaborate with cross-functional teams to deliver high-quality solutions that meet business objectives. Strong communication, analytical thinking, and a proactive attitude are essential. If you\u2019re eager to make a meaningful impact, grow within a dynamic team, and work on cutting-edge technologies, then this is the perfect opportunity for you.",
    "keyResponsibilities": [
      "Collaborate with team members on project requirements and timelines.",
      "Develop and maintain scalable applications.",
      "Participate in code reviews and ensure code quality.",
      "Troubleshoot and debug issues as they arise.",
      "Write technical documentation for internal use.",
      "Ensure product performance and reliability."
    ],
    "professionalSkills": [
      "Strong knowledge of relevant frameworks and libraries.",
      "Experience with RESTful APIs.",
      "Excellent problem-solving abilities.",
      "Good understanding of version control (Git).",
      "Ability to work independently and in a team.",
      "Strong written and verbal communication skills."
    ],
    "tags": [
      "marketing",
      "ui/ux",
      "construction",
      "management"
    ]
  },
  {
    "id": 16,
    "postedAt": "2025-04-01T00:23:00Z",
    "companyLogo": "/logos/logo2.png",
    "jobTitle": "Data Analyst",
    "companyName": "Umbrella Corp",
    "jobCategory": "Engineering",
    "employmentType": "Part Time",
    "salary": "$2571\u2013$6262",
    "location": "San Francisco, USA",
    "description": "We are looking for a passionate and experienced professional to join our team. In this role, you'll be responsible for a range of tasks that support the development, implementation, and optimization of our projects and platforms. You will collaborate with cross-functional teams to deliver high-quality solutions that meet business objectives. Strong communication, analytical thinking, and a proactive attitude are essential. If you\u2019re eager to make a meaningful impact, grow within a dynamic team, and work on cutting-edge technologies, then this is the perfect opportunity for you.",
    "keyResponsibilities": [
      "Collaborate with team members on project requirements and timelines.",
      "Develop and maintain scalable applications.",
      "Participate in code reviews and ensure code quality.",
      "Troubleshoot and debug issues as they arise.",
      "Write technical documentation for internal use.",
      "Ensure product performance and reliability."
    ],
    "professionalSkills": [
      "Strong knowledge of relevant frameworks and libraries.",
      "Experience with RESTful APIs.",
      "Excellent problem-solving abilities.",
      "Good understanding of version control (Git).",
      "Ability to work independently and in a team.",
      "Strong written and verbal communication skills."
    ],
    "tags": [
      "design",
      "management",
      "engineering",
      "marketing"
    ]
  },
  {
    "id": 17,
    "postedAt": "2025-04-01T13:57:00Z",
    "companyLogo": "/logos/logo3.png",
    "jobTitle": "DevOps Engineer",
    "companyName": "Cyberdyne Inc.",
    "jobCategory": "Marketing",
    "employmentType": "Full Time",
    "salary": "$2739\u2013$6936",
    "location": "Toronto, Canada",
    "description": "We are looking for a passionate and experienced professional to join our team. In this role, you'll be responsible for a range of tasks that support the development, implementation, and optimization of our projects and platforms. You will collaborate with cross-functional teams to deliver high-quality solutions that meet business objectives. Strong communication, analytical thinking, and a proactive attitude are essential. If you\u2019re eager to make a meaningful impact, grow within a dynamic team, and work on cutting-edge technologies, then this is the perfect opportunity for you.",
    "keyResponsibilities": [
      "Collaborate with team members on project requirements and timelines.",
      "Develop and maintain scalable applications.",
      "Participate in code reviews and ensure code quality.",
      "Troubleshoot and debug issues as they arise.",
      "Write technical documentation for internal use.",
      "Ensure product performance and reliability."
    ],
    "professionalSkills": [
      "Strong knowledge of relevant frameworks and libraries.",
      "Experience with RESTful APIs.",
      "Excellent problem-solving abilities.",
      "Good understanding of version control (Git).",
      "Ability to work independently and in a team.",
      "Strong written and verbal communication skills."
    ],
    "tags": [
      "design",
      "soft",
      "management",
      "construction"
    ]
  },
  {
    "id": 18,
    "postedAt": "2025-04-08T10:12:00Z",
    "companyLogo": "/logos/logo4.png",
    "jobTitle": "Product Manager",
    "companyName": "Wonka Tech",
    "jobCategory": "Management",
    "employmentType": "Full Time",
    "salary": "$2758\u2013$7205",
    "location": "Berlin, Germany",
    "description": "We are looking for a passionate and experienced professional to join our team. In this role, you'll be responsible for a range of tasks that support the development, implementation, and optimization of our projects and platforms. You will collaborate with cross-functional teams to deliver high-quality solutions that meet business objectives. Strong communication, analytical thinking, and a proactive attitude are essential. If you\u2019re eager to make a meaningful impact, grow within a dynamic team, and work on cutting-edge technologies, then this is the perfect opportunity for you.",
    "keyResponsibilities": [
      "Collaborate with team members on project requirements and timelines.",
      "Develop and maintain scalable applications.",
      "Participate in code reviews and ensure code quality.",
      "Troubleshoot and debug issues as they arise.",
      "Write technical documentation for internal use.",
      "Ensure product performance and reliability."
    ],
    "professionalSkills": [
      "Strong knowledge of relevant frameworks and libraries.",
      "Experience with RESTful APIs.",
      "Excellent problem-solving abilities.",
      "Good understanding of version control (Git).",
      "Ability to work independently and in a team.",
      "Strong written and verbal communication skills."
    ],
    "tags": [
      "management",
      "ui/ux",
      "soft",
      "design"
    ]
  },
  {
    "id": 19,
    "postedAt": "2025-04-08T08:13:00Z",
    "companyLogo": "/logos/logo5.png",
    "jobTitle": "Product Manager",
    "companyName": "Wonka Tech",
    "jobCategory": "Marketing",
    "employmentType": "Part Time",
    "salary": "$3452\u2013$5179",
    "location": "Tokyo, Japan",
    "description": "We are looking for a passionate and experienced professional to join our team. In this role, you'll be responsible for a range of tasks that support the development, implementation, and optimization of our projects and platforms. You will collaborate with cross-functional teams to deliver high-quality solutions that meet business objectives. Strong communication, analytical thinking, and a proactive attitude are essential. If you\u2019re eager to make a meaningful impact, grow within a dynamic team, and work on cutting-edge technologies, then this is the perfect opportunity for you.",
    "keyResponsibilities": [
      "Collaborate with team members on project requirements and timelines.",
      "Develop and maintain scalable applications.",
      "Participate in code reviews and ensure code quality.",
      "Troubleshoot and debug issues as they arise.",
      "Write technical documentation for internal use.",
      "Ensure product performance and reliability."
    ],
    "professionalSkills": [
      "Strong knowledge of relevant frameworks and libraries.",
      "Experience with RESTful APIs.",
      "Excellent problem-solving abilities.",
      "Good understanding of version control (Git).",
      "Ability to work independently and in a team.",
      "Strong written and verbal communication skills."
    ],
    "tags": [
      "design",
      "soft",
      "ui/ux",
      "management"
    ]
  },
  {
    "id": 20,
    "postedAt": "2025-04-08T12:18:00Z",
    "companyLogo": "/logos/logo1.png",
    "jobTitle": "Frontend Engineer",
    "companyName": "Hooli Systems",
    "jobCategory": "Design",
    "employmentType": "Full Time",
    "salary": "$2660\u2013$7168",
    "location": "Sydney, Australia",
    "description": "We are looking for a passionate and experienced professional to join our team. In this role, you'll be responsible for a range of tasks that support the development, implementation, and optimization of our projects and platforms. You will collaborate with cross-functional teams to deliver high-quality solutions that meet business objectives. Strong communication, analytical thinking, and a proactive attitude are essential. If you\u2019re eager to make a meaningful impact, grow within a dynamic team, and work on cutting-edge technologies, then this is the perfect opportunity for you.",
    "keyResponsibilities": [
      "Collaborate with team members on project requirements and timelines.",
      "Develop and maintain scalable applications.",
      "Participate in code reviews and ensure code quality.",
      "Troubleshoot and debug issues as they arise.",
      "Write technical documentation for internal use.",
      "Ensure product performance and reliability."
    ],
    "professionalSkills": [
      "Strong knowledge of relevant frameworks and libraries.",
      "Experience with RESTful APIs.",
      "Excellent problem-solving abilities.",
      "Good understanding of version control (Git).",
      "Ability to work independently and in a team.",
      "Strong written and verbal communication skills."
    ],
    "tags": [
      "construction",
      "management",
      "engineering",
      "soft"
    ]
  }
]

export const sendMsgData = [
  {
    id:1,
    label: "Full Name",
    name: "fullname",
    type: "text",
    icon: User
  },
  {
    id:2,
    label: "Email",
    name: "email",
    type: "email",
    icon: Mail
  },
  {
    id:3,
    label: "Phone",
    name: "phone",
    type: "text",
    icon: PhoneCall
  },
  {
    id:4,
    label: "Message",
    name: "message",
    type: "text",
    icon: MessageSquare
  },
]

// in about page
export const howItWorks = [
  {
    id: 1,
    title: "Create an Account",
    text: "Create an account on our website",
    icon: UserSquare
  },
  {
    id: 2,
    title: "Upload Resume",
    text: "Upload your resume on our website",
    icon: FileText
  },
  {
    id: 3,
    title: "Find Jobs",
    text: "Then find jobs that suit your skills",
    icon: Briefcase
  },
  {
    id: 4,
    title: "Apply Job",
    text: "Apply for the job which matches your skillset",
    icon: CheckCircle
  },
]

export const faqs = [
  {
    id: 1,
    question: "What is this website about?",
    answer: "This website is about finding jobs that match your skills.",
  },
  {
    id: 2,
    question: "How do I create an account?",
    answer: "You can create an account by clicking on the register button on the top right corner"
  },
  {
    id: 3,
    question: "Can I upload a resume?",
    answer: "Yes, you can upload a resume on our website. It will help us to find jobs that match your skills"
  },
  {
    id: 4,
    question: "How long will the recruitment process take?",
    answer: "It actually depend on the recruiter. But we will make sure to keep you updated on the status of your application"
  },
  {
    id: 5,
    question: "What does the recruitment and selection process involve?",
    answer: "The recruitment and selection process involves a series of steps including shortlisting, interviewing, and assessment"
  },
  {
    id: 6,
    question: "Do you recruit for Graduates, Apprentices and Students?",
    answer: "Yes, we recruit for graduates, apprentices and students. We have a variety of roles available for different levels of experience. Please check our website for more information."
  },
  {
    id: 7,
    question: "Can I receive notifications for any future jobs that may interest me?",
    answer: "Yes, you can receive notifications for any future jobs that may interest you. Please make sure to save your job search preferences and we will send you notifications when a job that matches your preferences is posted. "
  },
]