import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        techStack: "Tech Stack",
        languages: "Languages",
        frameworks: "Frameworks",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        education: "Education",
        contact: "Contact",
        services: "Services",
        dashboard: "Dashboard",
        hireMe: "Hire Me",
      },
      hero: {
        badge: "Tibeb SysAdmin • AAU Full-Stack",
        greeting: "Hi, I'm",
        title: "SELAMSEW ALEMU",
        role: "Computer Engineer",
        subRole: "SysAdmin & IT Support | Full-Stack Developer",
        description:
          "Computer Engineer building reliable ERP platforms, tuned databases, and modern full-stack web applications.",
        exploreProjects: "Projects",
        getInTouch: "Contact Me",
        downloadCV: "Download CV",
        copyEmail: "Copy Email",
        emailCopied: "Copied!",
        localTime: "Addis Ababa",
        availableForWork: "Available for Hire & Remote Contracts",
        stats: {
          experience: "Current Role",
          expSub: "SysAdmin @ Tibeb",
          training: "AAU Certified",
          trainSub: "Full-Stack Dev",
          projects: "Production Apps",
          projSub: "Web & Enterprise",
          uptime: "ERP Uptime",
          uptimeSub: "High Availability",
        },
      },
      about: {
        badge: "Overview",
        title: "About Me",
        subtitle: "ERP Administration • Database Optimization • Full-Stack Web Development",
        summaryTitle: "Executive Summary",
        summaryText1:
          "Computer Engineer (DMU '24) serving as System Administrator & IT Support Officer at Tibeb Design & Build PLC.",
        summaryText2:
          "Certified Full-Stack Developer (AAU '26) with production experience in React, Node.js, and PostgreSQL.",
        objectiveTitle: "Focus",
        objectiveText:
          "Delivering secure, scalable, continuous uptime enterprise infrastructure and modern web applications.",
        quickFacts: "Key Credentials",
        degree: "B.Sc. Computer Engineering (DMU '24)",
        specialization: "Computer Engineering Stream",
        university: "Debre Markos University (2024)",
        training: "Full-Stack Certified (AAU '26)",
        currentRole: "SysAdmin @ Tibeb Design & Build (2025–Present)",
        location: "Addis Ababa, Ethiopia",
        languagesSpoken: "English & Amharic",
        statusAvailable: "Full-Time, Remote & Consulting",
      },
      languages: {
        badge: "Languages",
        title: "Core Languages",
        subtitle: "Key languages used for web, APIs, and database engineering.",
        searchPlaceholder: "Search languages...",
        proficiency: "Proficiency",
      },
      frameworks: {
        badge: "Stacks",
        title: "Frameworks & Tools",
        subtitle: "Production web frameworks, ORMs, and real-time database engines.",
        searchPlaceholder: "Search frameworks...",
        all: "All",
      },
      skills: {
        badge: "Expertise",
        title: "Technical Skills",
        subtitle: "Enterprise ERP, database administration, and full-stack development.",
        searchPlaceholder: "Search skills...",
        allDisciplines: "All",
      },
      experience: {
        badge: "Career",
        title: "Experience",
        subtitle: "Enterprise IT operations, database administration, and software development.",
      },
      projects: {
        badge: "Portfolio",
        title: "Featured Projects",
        subtitle: "Production web applications: fintech, enterprise training, exam engines, and ERP systems.",
        searchPlaceholder: "Search projects...",
        all: "All",
        viewLive: "Live Demo",
        viewCode: "Source Code",
        caseStudy: "Case Study",
      },
      education: {
        badge: "Accreditations",
        title: "Education",
        subtitle: "Engineering degree, AAU software accreditation, and technical certifications.",
      },
      contact: {
        badge: "Contact",
        title: "Let's Connect",
        subtitle: "Available for engineering roles, ERP administration, and contract projects.",
        sendMessage: "Send Message",
        sending: "Sending...",
        fullName: "Your Name",
        emailAddress: "Email Address",
        subject: "Subject",
        messagePlaceholder: "Write your message here...",
        successMsg: "Message sent successfully! I will reply shortly.",
        errorMsg: "Failed to send message. Please email or call directly.",
        directChannels: "Direct Channels",
        copied: "Copied!",
      },
    },
  }
};

const savedLng = "en";

i18n.use(initReactI18next).init({
  resources: { en: resources.en },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
