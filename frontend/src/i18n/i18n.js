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
        badge: "Active Professional • Since March 2025 | AAU Training: March 2026 – Present",
        greeting: "Hello, I'm",
        title: "SELAMSEW ALEMU",
        role: "Electrical & Computer Engineer (Computer Stream)",
        subRole: "System Admin & User Support Officer | Database Associate | Full-Stack Developer",
        description:
          "Electrical and Computer Engineer (Computer stream). Actively serving as System Administrator & User Support Officer after 6 months as Database Associate (since March 05, 2025). AAU Full-Stack Software Development Trainee (March 2026 – Present) and creator of Ekub Circle (built with Node.js, Express, and PostgreSQL).",
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
        subtitle: "Enterprise systems administration, database optimization, and modern full-stack software development.",
        summaryTitle: "Professional Summary",
        summaryText1:
          "Electrical and Computer Engineer (Computer stream) actively working since March 05, 2025. Served 6 months as Database Associate administering MySQL and MongoDB schemas, automated backups, and query tuning; currently serving as System Administrator and User Support Officer ensuring high system uptime and rapid technical support.",
        summaryText2:
          "Currently undergoing intensive Full-Stack Software Development training at Addis Ababa University (March 2026 – Present). Architected and developed 'Ekub Circle' — an automated digital community savings platform built with JavaScript (ES6+), Node.js, Express, and PostgreSQL. Graduated with a B.Sc. in Electrical and Computer Engineering (Computer stream) from Debre Markos University (July 2024).",
        objectiveTitle: "Career Objective",
        objectiveText:
          "To leverage strong engineering principles, database administration skills, and modern full-stack development to build secure, scalable, and high-availability enterprise systems.",
        quickFacts: "Quick Information",
        degree: "B.Sc. in Electrical and Computer Engineering (Computer Stream)",
        specialization: "Field of Study: Electrical and Computer Engineering (Computer stream)",
        university: "Debre Markos University (July 2024)",
        training: "Addis Ababa University (AAU) — Full-Stack Software Development Training (March 2026 – Present)",
        currentRole: "System Admin & User Support Officer (Active Since March 05, 2025)",
        location: "Addis Ababa / Debre Markos, Ethiopia",
        languagesSpoken: "English (Professional Working Proficiency), Amharic (Native)",
      },
      languages: {
        title: "Programming Languages",
        subtitle: "Core languages utilized for web applications, databases, systems, and enterprise services.",
      },
      skills: {
        title: "Technical Expertise",
        subtitle: "Enterprise ERP administration, database engineering, .NET / C#, and modern full-stack development.",
      },
      experience: {
        title: "Professional Experience",
        subtitle: "Active enterprise career track (March 05, 2025 – Present) and AAU software development training (March 2026 – Present).",
      },
      projects: {
        title: "Featured Projects",
        subtitle: "Production web applications including Ekub Circle (PostgreSQL), institutional portals, and ERP systems.",
        viewLive: "Live Demo",
        viewCode: "Source Code",
        caseStudy: "Case Study",
      },
      education: {
        title: "Education & Credentials",
        subtitle: "Debre Markos University degree, AAU software development training (March 2026 – Present), and certifications.",
      },
      contact: {
        title: "Let's Connect",
        subtitle: "Have an engineering opportunity, need ERP/Database administration, or want to discuss a project?",
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
