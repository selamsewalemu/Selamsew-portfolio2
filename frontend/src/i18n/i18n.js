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
          "Electrical & Computer Engineer with hands-on enterprise experience starting March 05, 2025 to Present. Currently serving as System Administrator & User Support Officer after 6 months as Database Associate. Graduate of a 6-month intensive Full-Stack Software Development program at Addis Ababa University (AAU) and creator of Ekub Circle (እቁብ Circle).",
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
          "I also completed a 6-month intensive Full-Stack Software Development training at Addis Ababa University (AAU), where I engineered 'Ekub Circle' (እቁብ Circle) — an automated digital community savings platform built with React 19, Node.js, Express, and MongoDB. I hold a B.Sc. in Electrical and Computer Engineering (Specialized in Computer Engineering) from Debre Markos University (July 2024).",
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
        languagesSpoken: "English (Fluent), Amharic (Native), French (Basic)",
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
        subtitle: "Production web applications including Ekub Circle (እቁብ Circle), ERP platforms, and engineering systems.",
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
  am: {
    translation: {
      nav: {
        home: "ዋና ገጽ",
        about: "ስለ እኔ",
        languages: "የፕሮግራሚንግ ቋንቋዎች",
        skills: "ክህሎቶች",
        experience: "የስራ ልምድ",
        projects: "ፕሮጀክቶች",
        education: "ትምህርት",
        contact: "አግኙኝ",
        resume: "የስራ ታሪክ (CV)",
      },
      hero: {
        badge: "ተግባራዊ የስራ ልምድ • ከመጋቢት 2025 – እስካሁን",
        greeting: "ሰላም፣ እኔ",
        title: "ሰላምሰው አለሙ",
        role: "የኤሌክትሪካል እና ኮምፒውተር መሀንዲስ",
        subRole: "የሲስተም አድሚን እና የተጠቃሚዎች ድጋፍ ባለሙያ | ዳታቤዝ አድሚን | ፉል-ስታክ አልሚ",
        description:
          "በኮምፒውተር ምህንድስና የሃርድዌር እና የሶፍትዌር ስርዓቶችን በማስተሳሰር ከመጋቢት 05 2025 እ.ኤ.አ ጀምሮ እስካሁን ድረስ በዳታቤዝ አስተዳዳሪነት (ለ6 ወራት) እና በሲስተም አድሚን እና የተጠቃሚዎች ድጋፍ (System Admin & User Support) እየሰራሁ እገኛለሁ። እንዲሁም ከአዲስ አበባ ዩኒቨርሲቲ የ6 ወራት ፉል-ስታክ ሶፍትዌር ስልጠና ወስጄ 'እቁብ Circle' (Ekub Circle) የተሰኘውን የዘመናዊ እቁብ ዌብ መተግበሪያ ሰርቻለሁ።",
        exploreProjects: "ፕሮጀክቶችን ይመልከቱ",
        getInTouch: "መልእክት ይላኩ",
        downloadCV: "CV ያውርዱ",
        activeExp: "የአሁን ስራ",
        projectsCompleted: "የተጠናቀቁ ፕሮጀክቶች",
        uptime: "የሲስተም ዝግጁነት",
        satisfaction: "የተገልጋዮች እርካታ",
      },
      about: {
        title: "ስለ እኔ",
        subtitle: "የሲስተም አስተዳደር፣ የዳታቤዝ ቁጥጥር እና ዘመናዊ የፉል-ስታክ ሶፍትዌር ልማት።",
        summaryTitle: "የሙያ ማጠቃለያ",
        summaryText1:
          "እኔ ከመጋቢት 05 2025 እ.ኤ.አ ጀምሮ እስካሁን ድረስ በድርጅት ውስጥ በቋሚነት እየሰራሁ እገኛለሁ። በመጀመሪያዎቹ 6 ወራት በዳታቤዝ አስተዳዳሪነት (Database Associate) የ MySQL እና MongoDB ዳታቤዝ አሰራርን፣ የባክአፕ (Backup) ስርዓትን እና የዳታ ጥራትን በከፍተኛ ሁኔታ አስጠብቄያለሁ። በአሁኑ ወቅት ደግሞ የሲስተም አድሚን እና የተጠቃሚዎች ድጋፍ ባለሙያ (System Admin & User Support Officer) በመሆን እየሰራሁ እገኛለሁ።",
        summaryText2:
          "በተጨማሪም ከአዲስ አበባ ዩኒቨርሲቲ (AAU) ለ6 ወራት የወሰድኩትን የተጠናከረ የፉል-ስታክ ሶፍትዌር ልማት (Full-Stack Software Development) ስልጠና በማጠናቀቅ 'እቁብ Circle' (Ekub Circle) የተባለውን የዲጂታል እቁብ መተግበሪያ አዘጋጅቻለሁ። ከደብረ ማርቆስ ዩኒቨርሲቲ በኤሌክትሪካል እና ኮምፒውተር ምህንድስና (በኮምፒውተር ምህንድስና ልዩ ትኩረት) ተመርቄያለሁ።",
        objectiveTitle: "የሙያ ግብ",
        objectiveText:
          "በሲስተም አስተዳደር፣ በዳታቤዝ ቁጥጥር እና በዘመናዊ ሶፍትዌር ልማት ላይ ጠንካራ አቅም በመጠቀም ለተቋማት ዕድገት እና አስተማማኝ የቴክኖሎጂ ስራዎች ጉልህ አስተዋጽኦ ማበርከት።",
        quickFacts: "ፈጣን መረጃ",
        degree: "የመጀመሪያ ዲግሪ በኤሌክትሪካል እና ኮምፒውተር ምህንድስና",
        specialization: "ልዩ ሙያ: ኮምፒውተር ምህንድስና (ደብረ ማርቆስ ዩኒቨርሲቲ 2024)",
        training: "አዲስ አበባ ዩኒቨርሲቲ (AAU) — የ6 ወር ፉል-ስታክ ሶፍትዌር ስልጠና",
        currentRole: "ሲስተም አድሚን እና ዩዘር ሰፖርት (ከመጋቢት 2025 – እስካሁን)",
        location: "አዲስ አበባ / ደብረ ማርቆስ፣ ኢትዮጵያ",
        languagesSpoken: "እንግሊዝኛ፣ አማርኛ፣ ፈረንሳይኛ (መሰረታዊ)",
      },
      languages: {
        title: "የፕሮግራሚንግ ቋንቋዎች",
        subtitle: "ለዌብ፣ ለአልጎሪዝም፣ ለዳታቤዝ እና ለሲስተም ስራዎች የምጠቀምባቸው ቋንቋዎች።",
      },
      skills: {
        title: "ቴክኒካዊ ክህሎቶች",
        subtitle: "በዘመናዊ ቴክኖሎጂ፣ በኢአርፒ ሲስተሞች እና በኮምፒውተር ኔትወርክ ላይ ያሉ ዕውቀቶች።",
      },
      experience: {
        title: "የስራ ልምድ",
        subtitle: "ከመጋቢት 05 2025 እ.ኤ.አ ጀምሮ እስካሁን ድረስ ያለ የስራ እና የስልጠና ታሪክ።",
      },
      projects: {
        title: "የተሰሩ ፕሮጀክቶች",
        subtitle: "የተሰሩ የዌብ መተግበሪያዎች (እቁብ Circle ጨምሮ) እና የተቋማት ሲስተሞች።",
        viewLive: "ቀጥታ ይመልከቱ",
        viewCode: "ኮድ ይመልከቱ",
        caseStudy: "ዝርዝር መረጃ",
      },
      education: {
        title: "ትምህርት እና የምስክር ወረቀቶች",
        subtitle: "የትምህርት ዝግጅት፣ የአዲስ አበባ ዩኒቨርሲቲ ስልጠና እና ሙያዊ ሰርተፊኬቶች።",
      },
      contact: {
        title: "ያግኙኝ",
        subtitle: "ስራ ወይም የቴክኖሎጂ ፕሮጀክት ካለዎት መልእክትዎን ይላኩ።",
        sendMessage: "መልእክት ላክ",
        sending: "በመላክ ላይ...",
        fullName: "ሙሉ ስምዎ",
        emailAddress: "የኢሜይል አድራሻ",
        subject: "ርዕስ",
        messagePlaceholder: "መልእክትዎን እዚህ ይጻፉ...",
        successMsg: "እናመሰግናለን! መልእክትዎ በተሳካ ሁኔታ ደርሷል። በቅርቡ ምላሽ እሰጣለሁ።",
        errorMsg: "መልእክቱን መላክ አልተቻለም። እባክዎ ከታች ባለው ኢሜይል ወይም ስልክ በቀጥታ ያግኙኝ።",
      },
    },
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        about: "À Propos",
        languages: "Langages",
        skills: "Compétences",
        experience: "Expérience",
        projects: "Projets",
        education: "Formation",
        contact: "Contact",
        resume: "CV",
      },
      hero: {
        badge: "Expérience Active • Mars 2025 – Présent",
        greeting: "Bonjour, je suis",
        title: "SELAMSEW ALEMU",
        role: "Ingénieur Électrique & Informatique",
        subRole: "Admin Système & Support | Associé Base de Données | Développeur Full-Stack",
        description:
          "Ingénieur électrique et informatique avec une expérience active depuis le 5 mars 2025 à ce jour. Actuellement administrateur système et support utilisateur après 6 mois en tant qu'administrateur de bases de données. Certifié d'une formation intensive de 6 mois en développement Full-Stack à l'Université d'Addis-Abeba (AAU) et créateur de 'Ekub Circle'.",
        exploreProjects: "Voir Projets",
        getInTouch: "Me Contacter",
        downloadCV: "Télécharger CV",
        activeExp: "Poste Actuel",
        projectsCompleted: "Projets Réalisés",
        uptime: "Disponibilité",
        satisfaction: "Satisfaction",
      },
      about: {
        title: "À Propos de Moi",
        subtitle: "Administration système d'entreprise, optimisation de bases de données et développement full-stack.",
        summaryTitle: "Résumé Professionnel",
        summaryText1:
          "Je travaille activement depuis le 5 mars 2025 chez Enterprise ERP & Software Solutions. J'ai occupé pendant 6 mois le poste d'associé de base de données (MySQL, MongoDB, sauvegardes, requêtes), et j'occupe actuellement le poste d'administrateur système et chargé de support utilisateur.",
        summaryText2:
          "J'ai également suivi une formation intensive de 6 mois en développement Full-Stack à l'Université d'Addis-Abeba (AAU), où j'ai développé 'Ekub Circle' (እቁብ Circle), une plateforme numérique communautaire d'épargne rotative construite avec React, Node.js, Express et MongoDB. Diplômé de l'Université de Debre Markos (Juillet 2024).",
        objectiveTitle: "Objectif de Carrière",
        objectiveText:
          "Administrateur système et ingénieur logiciel motivé cherchant à mettre en œuvre des architectures logicielles et d'entreprise fiables au sein d'organisations novatrices.",
        quickFacts: "Informations Rapides",
        degree: "B.Sc. en Génie Électrique et Informatique",
        specialization: "Spécialisation : Génie Informatique (Debre Markos 2024)",
        training: "Université d'Addis-Abeba (AAU) — Formation Full-Stack 6 Mois",
        currentRole: "Admin Système & Support (Mars 2025 – Présent)",
        location: "Addis-Abeba / Debre Markos, Éthiopie",
        languagesSpoken: "Anglais (Courant), Amharique (Natif), Français (Notions)",
      },
      languages: {
        title: "Langages de Programmation",
        subtitle: "Langages fondamentaux pour le web, les algorithmes et les systèmes.",
      },
      skills: {
        title: "Expertise Technique",
        subtitle: "Compétences complètes en développement web, ERP et infrastructure.",
      },
      experience: {
        title: "Expérience Professionnelle",
        subtitle: "Parcours en entreprise (5 Mars 2025 – Présent) et formation de l'Université d'Addis-Abeba.",
      },
      projects: {
        title: "Projets Récents",
        subtitle: "Applications web de production dont Ekub Circle (እቁብ Circle) et systèmes d'entreprise.",
        viewLive: "Démo en direct",
        viewCode: "Code Source",
        caseStudy: "Étude de Cas",
      },
      education: {
        title: "Formation & Diplômes",
        subtitle: "Diplôme de Debre Markos, certification AAU et accréditations professionnelles.",
      },
      contact: {
        title: "Contactez-moi",
        subtitle: "Vous avez un projet ou souhaitez échanger sur des opportunités ?",
        sendMessage: "Envoyer Message",
        sending: "Envoi en cours...",
        fullName: "Nom Complet",
        emailAddress: "Adresse Email",
        subject: "Sujet",
        messagePlaceholder: "Écrivez votre message ici...",
        successMsg: "Merci ! Votre message a été envoyé avec succès.",
        errorMsg: "Échec de l'envoi. Veuillez me contacter directement via les coordonnées ci-dessous.",
      },
    },
  },
};

const savedLang = typeof window !== "undefined" ? localStorage.getItem("portfolio_lang") : "en";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
