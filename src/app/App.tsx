import {
  FileText,
  Code,
  BookOpen,
  AlertCircle,
  Megaphone,
  GraduationCap,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Briefcase,
  Award,
} from "lucide-react";

export default function App() {
  const documentationSamples = [
    {
      title: "Product Requirement Document (PRD)",
      description:
        "Comprehensive product specifications, user stories, and acceptance criteria for new features",
      icon: FileText,
      tags: ["Product Management", "Requirements"],
      link: "https://drive.google.com/drive/folders/1_3pZBXnR_SS4XUEf9lO8yKBToD33IhS4?usp=sharing",
    },
    {
      title: "API Documentation",
      description:
        "API reference with endpoints, authentication, request/response examples",
      icon: Code,
      tags: ["Technical Writing", "API"],
      link: "https://github.com/iftekhar-4952/Warehouse-Robot-Management-API",
    },
    {
      title: "UI/UX Prototypes",
      description:
        "Concept validation, User research, Developer reference ",
      icon: BookOpen,
      tags: ["Documentation", "User-facing artefacts"],
      link: "https://www.figma.com/design/xoJgxyz1hOeDbpAM852UbR/UI-UX-Portfolio?m=auto&t=cs6LLXs59rf9h0Rq-6",
    },
    {
      title: "Wireframes",
      description:
        "Early stage product discovery, Product planning",
      icon: BookOpen,
      tags: ["Brainstorming", "Internal use team-artefacts"],
      link: "https://whimsical.com/iftekharul-islam-s-workspace/porfolio-projects-WgW1vPDUTe9au9nisF4a9b",
    }
  ];

  const skills = {
    "Product Management": [
      "Product Strategy",
      "Roadmap Planning",
      "User Stories & Requirements",
      "Agile/Scrum",
      "Stakeholder Management",
    ],
    "Technical Documentation": [
      "API Documentation",
      "User Guides",
      "Product Requirements (PRDs)",
      "Release Notes",
      "Technical Writing",
    ],
    "User Research": [
      "User Interviews",
}
