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
        badge: "Available for Opportunities",
        greeting: "Hello, I'm",
        title: "SELAMSEW ALEMU",
        role: "Electrical & Computer Engineer",
        subRole: "Full-Stack Developer | ERP Administrator | System Engineer",
        description:
          "Specializing in Computer Engineering to bridge hardware architecture with scalable, high-performance software. Experienced in architecting full-stack web applications (MERN), managing enterprise-level ERP deployments, optimizing databases, and engineering robust IT networks.",
        exploreProjects: "Explore Projects",
        getInTouch: "Get In Touch",
        downloadCV: "Download CV",
        yearsExp: "Years Exp.",
        projectsCompleted: "Projects",
        uptime: "ERP Uptime",
        satisfaction: "Support Rating",
      },
      about: {
        title: "About Me",
        subtitle: "Engineering scalable software and enterprise systems with precision.",
        summaryTitle: "Professional Summary",
        summaryText1:
          "I am a results-driven Computer Engineer with multifaceted expertise spanning Full-Stack Web Development, ERP Platform Administration, Database Management, and IT Infrastructure Support. I graduated with a B.Sc. in Electrical and Computer Engineering (specializing in Computer Engineering) from Debre Markos University.",
        summaryText2:
          "My core philosophy centers on bridging the gap between low-level system designs and modern high-level cloud and web applications. Leveraging modern technologies like React, Node.js, Express, MongoDB, and ERP workflows, I engineer reliable, high-speed, and secure digital solutions for global organizations.",
        objectiveTitle: "Career Objective",
        objectiveText:
          "Ambitious Software and Systems Engineer seeking to leverage foundational strengths in computer architectures, digital transformation, and ERP systems. Dedicated to driving engineering excellence, implementing modular architectures, and contributing to high-impact international technology applications.",
        quickFacts: "Quick Information",
        degree: "B.Sc. in Electrical & Computer Engineering",
        specialization: "Specialization: Computer Engineering",
        university: "Debre Markos University (2024)",
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
        subtitle: "Proven track record in systems administration, full-stack development, and enterprise support.",
      },
      projects: {
        title: "Featured Projects",
        subtitle: "Production web applications, institutional platforms, and engineering systems.",
        viewLive: "Live Demo",
        viewCode: "Source Code",
        caseStudy: "Case Study",
      },
      education: {
        title: "Education & Credentials",
        subtitle: "Academic background, honors, and professional engineering accreditations.",
      },
      contact: {
        title: "Let's Connect",
        subtitle: "Have a project in mind, need ERP expertise, or want to discuss engineering opportunities?",
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
        badge: "ለአዳዲስ እድሎች ዝግጁ",
        greeting: "ሰላም፣ እኔ",
        title: "ሰላምሰው አለሙ",
        role: "የኤሌክትሪካል እና ኮምፒውተር መሀንዲስ",
        subRole: "ፉል-ስታክ ዌብ አልሚ | የኢአርፒ (ERP) አስተዳዳሪ | ሲስተም መሀንዲስ",
        description:
          "በኮምፒውተር ምህንድስና የሃርድዌር እና የዘመናዊ ሶፍትዌር ስርዓቶችን በማስተሳሰር ጥራት ያላቸውን የዌብ መተግበሪያዎች (MERN)፣ የድርጅት ERP ሲስተም አስተዳደርን እና የዳታቤዝ አሰራርን በከፍተኛ ጥራት እሰራለሁ።",
        exploreProjects: "ፕሮጀክቶችን ይመልከቱ",
        getInTouch: "መልእክት ይላኩ",
        downloadCV: "CV ያውርዱ",
        yearsExp: "ዓመታት ልምድ",
        projectsCompleted: "የተጠናቀቁ ፕሮጀክቶች",
        uptime: "የሲስተም ዝግጁነት",
        satisfaction: "የተገልጋዮች እርካታ",
      },
      about: {
        title: "ስለ እኔ",
        subtitle: "የቴክኖሎጂ እና የሶፍትዌር ስርዓቶችን በጥራት ማልማት።",
        summaryTitle: "የሙያ ማጠቃለያ",
        summaryText1:
          "እኔ በፉል-ስታክ ዌብ ልማት፣ የኢአርፒ (ERP) ስርዓቶች አስተዳደር፣ የዳታቤዝ ቁጥጥር እና የ IT መሠረተ-ልማት ድጋፍ ላይ የካበተ ልምድ ያለኝ የኮምፒውተር መሀንዲስ ነኝ። ከደብረ ማርቆስ ዩኒቨርሲቲ በኤሌክትሪካል እና ኮምፒውተር ምህንድስና (በኮምፒውተር ምህንድስና ልዩ ትኩረት) ተመርቄያለሁ።",
        summaryText2:
          "በዘመናዊ ቴክኖሎጂዎች (React, Node.js, Express, MongoDB, MySQL) እና የድርጅት አሰራር ስርዓቶች አማካኝነት ፈጣን፣ አስተማማኝ እና ዓለም አቀፍ ደረጃቸውን የጠበቁ የዲጂታል መፍትሄዎችን እገነባለሁ።",
        objectiveTitle: "የሙያ ግብ",
        objectiveText:
          "በሶፍትዌር ልማት፣ በዲጂታል ሽግግር እና በኢአርፒ ሲስተሞች ላይ ጠንካራ አቅም በመጠቀም ለተቋማት ዕድገት እና ለዘመናዊ የቴክኖሎጂ ስራዎች ጉልህ አስተዋጽኦ ማበርከት።",
        quickFacts: "ፈጣን መረጃ",
        degree: "የመጀመሪያ ዲግሪ በኤሌክትሪካል እና ኮምፒውተር ምህንድስና",
        specialization: "ልዩ ሙያ: ኮምፒውተር ምህንድስና",
        university: "ደብረ ማርቆስ ዩኒቨርሲቲ (2024 እ.ኤ.አ)",
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
        subtitle: "በሲስተም አስተዳደር፣ በሶፍትዌር ልማት እና በተጠቃሚዎች ድጋፍ ላይ ያለ የስራ ታሪክ።",
      },
      projects: {
        title: "የተሰሩ ፕሮጀክቶች",
        subtitle: "የተሰሩ የዌብ መተግበሪያዎች እና የተቋማት ሲስተሞች።",
        viewLive: "ቀጥታ ይመልከቱ",
        viewCode: "ኮድ ይመልከቱ",
        caseStudy: "ዝርዝር መረጃ",
      },
      education: {
        title: "ትምህርት እና የምስክር ወረቀቶች",
        subtitle: "የትምህርት ዝግጅት፣ ኮርሶች እና ሙያዊ ሰርተፊኬቶች።",
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
        badge: "Disponible pour Opportunités",
        greeting: "Bonjour, je suis",
        title: "SELAMSEW ALEMU",
        role: "Ingénieur Électrique & Informatique",
        subRole: "Développeur Full-Stack | Administrateur ERP | Ingénieur Systèmes",
        description:
          "Spécialisé en génie informatique pour combiner l'architecture matérielle et les logiciels évolutifs et performants. Expert en conception d'applications web (MERN), administration de plateformes ERP et optimisation de bases de données.",
        exploreProjects: "Voir Projets",
        getInTouch: "Me Contacter",
        downloadCV: "Télécharger CV",
        yearsExp: "Années d'Exp.",
        projectsCompleted: "Projets Réalisés",
        uptime: "Disponibilité ERP",
        satisfaction: "Satisfaction",
      },
      about: {
        title: "À Propos de Moi",
        subtitle: "Conception de solutions logicielles et systèmes d'entreprise avec précision.",
        summaryTitle: "Résumé Professionnel",
        summaryText1:
          "Ingénieur informatique orienté résultats avec une vaste expertise en développement web Full-Stack, administration ERP, gestion de bases de données et support d'infrastructure informatique. Diplômé de l'Université de Debre Markos.",
        summaryText2:
          "En utilisant des technologies modernes telles que React, Node.js, Express, MongoDB et MySQL, je conçois des applications web rapides, résilientes et hautement évolutives.",
        objectiveTitle: "Objectif de Carrière",
        objectiveText:
          "Ingénieur logiciel motivé cherchant à contribuer à des projets technologiques novateurs et internationaux au sein d'organisations axées sur l'excellence.",
        quickFacts: "Informations Rapides",
        degree: "B.Sc. en Génie Électrique et Informatique",
        specialization: "Spécialisation : Génie Informatique",
        university: "Université de Debre Markos (2024)",
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
        subtitle: "Parcours réussi en administration système et développement logiciel.",
      },
      projects: {
        title: "Projets Récents",
        subtitle: "Applications web de production et systèmes institutionnels.",
        viewLive: "Démo en direct",
        viewCode: "Code Source",
        caseStudy: "Étude de Cas",
      },
      education: {
        title: "Formation & Diplômes",
        subtitle: "Parcours universitaire et certifications professionnelles.",
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
