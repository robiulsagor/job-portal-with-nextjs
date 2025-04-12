import {
  BadgeDollarSign,
  BedDouble,
  Briefcase,
  BuildingIcon,
  Bus,
  GraduationCap,
  HardHat,
  ShoppingBag,
  Sprout,
  Users,
  Wrench,
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
    link: "/",
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
