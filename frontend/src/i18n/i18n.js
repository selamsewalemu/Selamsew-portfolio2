import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        languages: "Languages",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        education: "Education",
        contact: "Contact",
        resume: "Resume",
      },
      hero: {
        badge: "Active Professional • March 2025 – Present",
        greeting: "Hello, I'm",
        title: "SELAMSEW ALEMU",
        role: "Electrical & Computer Engineer",
        subRole: "System Admin & User Support Officer | Database Associate | Full-Stack Dev",
        description:
          "Electrical & Computer Engineer with hands-on enterprise experience starting March 05, 2025 to Present. Currently serving as System Administrator & User Support Officer after 6 months as Database Associate. Graduate of a 6-month intensive Full-Stack Software Development program at Addis Ababa University (AAU) and creator of Ekub Circle.",
        exploreProjects: "Explore Projects",
        getInTouch: "Get In Touch",
        downloadCV: "Download CV",
        activeExp: "Active Role",
        projectsCompleted: "Projects",
        uptime: "System Uptime",
        satisfaction: "Support Rating",
      },
      about: {
        title: "About Me",
        subtitle: "Enterprise systems administration, database optimization, and modern full-stack engineering.",
        summaryTitle: "Professional Summary",
        summaryText1:
          "I am an Electrical and Computer Engineer actively working from March 05, 2025 to Present at Enterprise ERP & Software Solutions. I served for 6 months as Database Associate managing MySQL and MongoDB schemas, query tuning, and automated backups, and currently serve as System Administrator and User Support Officer providing mission-critical enterprise systems and user support.",
        summaryText2:
          "I also completed a 6-month intensive Full-Stack Software Development training at Addis Ababa University (AAU), where I engineered 'Ekub Circle' — an automated digital community savings platform built with JavaScript (ES6+), Node.js, Express, and MongoDB. I hold a B.Sc. in Electrical and Computer Engineering (Specialized in Computer Engineering) from Debre Markos University (July 2024).",
        objectiveTitle: "Career Objective",
        objectiveText:
          "Dedicated Systems Administrator and Full-Stack Software Engineer seeking to implement reliable system architectures, optimize enterprise databases, and develop modern, scalable applications in dynamic, technology-driven organizations.",
        quickFacts: "Quick Information",
        degree: "B.Sc. in Electrical & Computer Engineering",
        specialization: "Specialization: Computer Engineering",
        university: "Debre Markos University (July 2024)",
        training: "Addis Ababa University (AAU) — 6-Month Full-Stack Training",
        currentRole: "System Administrator & User Support (March 2025 – Present)",
        location: "Addis Ababa / Debre Markos, Ethiopia",
        languagesSpoken: "English (Professional Working Proficiency), Amharic (Native)",
      },
      languages: {
        title: "Programming Languages",
        subtitle: "Core languages utilized for web platforms, algorithms, databases, and system-level applications.",
      },
      skills: {
        title: "Technical Expertise",
        subtitle: "Comprehensive skill set across modern software stacks, enterprise ERP, and computer infrastructure.",
      },
      experience: {
        title: "Professional Experience",
        subtitle: "Active enterprise career track (March 05, 2025 – Present) and AAU software engineering training.",
      },
      projects: {
        title: "Featured Projects",
        subtitle: "Production web applications including Ekub Circle, ERP platforms, and engineering systems.",
        viewLive: "Live Demo",
        viewCode: "Source Code",
        caseStudy: "Case Study",
      },
      education: {
        title: "Education & Credentials",
        subtitle: "Debre Markos University degree, AAU 6-month full-stack certification, and professional accreditations.",
      },
      contact: {
        title: "Let's Connect",
        subtitle: "Have a project in mind, need ERP/Database expertise, or want to discuss engineering opportunities?",
        sendMessage: "Send Message",
        sending: "Sending Message...",
        fullName: "Your Full Name",
        emailAddress: "Email Address",
        subject: "Subject",
        messagePlaceholder: "Write your message here...",
        successMsg: "Thank you! Your message has been sent successfully. I will get back to you shortly.",
        errorMsg: "Failed to send message. Please reach out directly via email or phone below.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
