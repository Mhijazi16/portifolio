export type Language = 'en' | 'ar';

export const translations = {
  en: {
    dir: 'ltr' as const,
    nav: {
      links: [
        { label: 'About', id: 'about' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' },
      ],
    },
    hero: {
      heading1: 'Architecting Digital',
      heading2: 'Excellence',
      subtext:
        'I am an AI Engineer & Linux Systems Engineer focused on building generative AI products, robust backend systems, and automated infrastructure.',
      availableText: 'Available for hire',
      viewWork: 'View Work',
      contactMe: 'Contact Me',
      resume: 'Resume',
    },
    about: {
      title: 'About Me',
      paragraphs: [
        "I'm Mohammed Hijazi, an AI Engineer and Computer Science graduate from Palestine Polytechnic University with a GPA of 93.4%.",
        'My expertise spans building generative AI products using LangChain, LangGraph, and modern LLMs, as well as engineering robust backend systems with Python, ASP.NET, and FastAPI.',
        'Beyond development, I have deep experience in Linux systems engineering, automating infrastructure, and optimizing cloud architectures using AWS and Docker.',
      ],
    },
    skills: {
      title: 'Technical Arsenal',
      categories: {
        'Backend Engineering': 'Backend Engineering',
        'AI Engineering': 'AI Engineering',
        'Infrastructure & DevOps': 'Infrastructure & DevOps',
        Languages: 'Languages',
        Databases: 'Databases',
        Frontend: 'Frontend',
        'Systems & DevOps': 'Infrastructure & DevOps',
      } as Record<string, string>,
    },
    experience: {
      title: 'Work Experience',
      description:
        'My professional journey leading AI initiatives.',
      items: {
        w1: {
          title: 'AI Engineer at Sol',
          description:
            'Leading and growing the engineering team to deliver generative AI products. Maintaining and improving existing software products to ensure reliability and performance.',
        },
        w2: {
          title: 'AI Engineer at Reveno',
          description:
            'Built an AI Avatar Interviewer that joins meetings and starts questioning and interviewing the participants.',
        },
        w3: {
          title: 'Linux Systems Engineer at ColdRelay',
          description:
            'Automated Linux mail infrastructure deployments, reducing provisioning time from 2 hours to 15 minutes. Refactored system architecture for centralized monitoring and built event-driven systems using AWS.',
        },
        w4: {
          title: 'Linux Systems Mentor at Mercy Corps (GSG)',
          description:
            'Mentored and guided over 40+ students in a Linux Fundamentals Bootcamp. Led a four-month intensive training program for BZU university students.',
        },
        w5: {
          title: 'Backend Intern at Foothill Technology Solutions',
          description:
            'Designed and implemented backend systems using ASP.NET, adhering to Domain-Driven Design principles. Wrote comprehensive unit and integration tests using XUnit.',
        },
      } as Record<string, { title: string; description: string }>,
    },
    projects: {
      title: 'Personal Projects',
      description:
        'Innovative projects demonstrating expertise in AI agents, systems programming, and full-stack development.',
      items: {
        '1': {
          title: 'Autopilot',
          description:
            'AI Agents that complete system administrator tasks by executing commands on Linux servers.',
        },
        '2': {
          title: 'Lastoria E-Menu',
          description:
            'Interactive restaurant E-Menu with admin dashboard for dynamic content updates.',
        },
        '3': {
          title: 'AI Avatar Interviewer',
          description:
            'AI Voice Agent that joins meetings and starts questioning and interviewing the participants.',
        },
        '4': {
          title: 'E-Commerce & Storage Management System',
          description: 'Storage system with order tracking and revenue insights.',
        },
        '5': {
          title: 'Sol.ps Landing Page',
          description: 'A modern landing page for an AI Startup.',
        },
        '6': {
          title: 'AI Salesman',
          description:
            'An AI Salesman for furniture stores that helps customers visualize their ideal designs through natural dialogue and on-the-spot AI-generated furniture images.',
        },
      } as Record<string, { title: string; description: string }>,
      viewGithub: 'View All on GitHub',
    },
    heatmap: {
      title: 'GitHub Contributions',
      description:
        'A snapshot of my recent open-source and coding activity on GitHub.',
      viewProfile: 'View full profile',
      lastYear: 'Last 1 year of activity',
      generated: 'Generated from public GitHub contribution data.',
    },
    contact: {
      title: "Let's build something extraordinary.",
      text: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      sayHello: 'Say Hello',
      whatsapp: 'WhatsApp',
    },
    footer: {
      copyright: 'Mohammed Hijazi. All rights reserved.',
    },
    modal: {
      overview: 'Overview',
      technologies: 'Technologies',
      roleResponsibilities: 'Role & Responsibilities',
      techStack: 'Tech Stack',
    },
    langSelector: {
      title: 'Choose Your Language',
      subtitle: 'اختر لغتك',
    },
  },

  ar: {
    dir: 'rtl' as const,
    nav: {
      links: [
        { label: 'نبذة عني', id: 'about' },
        { label: 'المهارات', id: 'skills' },
        { label: 'المشاريع', id: 'projects' },
        { label: 'تواصل', id: 'contact' },
      ],
    },
    hero: {
      heading1: 'بناء التميز',
      heading2: 'الرقمي',
      subtext:
        'أنا AI Engineer ومهندس أنظمة Linux، متخصص في بناء منتجات Generative AI وأنظمة Backend المتينة والبنية التحتية المؤتمتة.',
      availableText: 'متاح للتوظيف',
      viewWork: 'عرض الأعمال',
      contactMe: 'تواصل معي',
      resume: 'السيرة الذاتية',
    },
    about: {
      title: 'نبذة عني',
      paragraphs: [
        'أنا محمد حجازي، AI Engineer وخريج Computer Science من جامعة بوليتكنك فلسطين بمعدل 93.4%.',
        'تمتد خبرتي في بناء منتجات Generative AI باستخدام LangChain وLangGraph وLLMs الحديثة، بالإضافة إلى هندسة أنظمة Backend متينة باستخدام Python وASP.NET وFastAPI.',
        'بالإضافة إلى التطوير، لدي خبرة عميقة في هندسة أنظمة Linux وأتمتة البنية التحتية وتحسين البنى السحابية باستخدام AWS وDocker.',
      ],
    },
    skills: {
      title: 'الترسانة التقنية',
      categories: {
        'Backend Engineering': 'Backend Engineering',
        'AI Engineering': 'AI Engineering',
        'Infrastructure & DevOps': 'Infrastructure & DevOps',
        Languages: 'لغات البرمجة',
        Databases: 'قواعد البيانات',
        Frontend: 'Frontend',
        'Systems & DevOps': 'Infrastructure & DevOps',
      } as Record<string, string>,
    },
    experience: {
      title: 'الخبرة المهنية',
      description:
        'مسيرتي المهنية في قيادة مبادرات AI.',
      items: {
        w1: {
          title: 'AI Engineer في Sol',
          description:
            'قيادة وتنمية فريق الهندسة لتقديم منتجات Generative AI. صيانة وتحسين المنتجات البرمجية الحالية لضمان الموثوقية والأداء.',
        },
        w2: {
          title: 'AI Engineer في Reveno',
          description:
            'بناء AI Avatar Interviewer ينضم إلى الاجتماعات ويبدأ باستجواب ومقابلة المشاركين.',
        },
        w3: {
          title: 'Linux Systems Engineer في ColdRelay',
          description:
            'أتمتة نشر البنية التحتية لبريد Linux، مما قلل وقت التجهيز من ساعتين إلى 15 دقيقة. إعادة هيكلة بنية النظام للمراقبة المركزية وبناء أنظمة Event-Driven باستخدام AWS.',
        },
        w4: {
          title: 'Linux Systems Mentor في Mercy Corps (GSG)',
          description:
            'إرشاد وتوجيه أكثر من 40 طالبًا في Linux Fundamentals Bootcamp. قيادة برنامج تدريب مكثف لمدة أربعة أشهر لطلاب جامعة بيرزيت.',
        },
        w5: {
          title: 'Backend Intern في Foothill Technology Solutions',
          description:
            'تصميم وتنفيذ أنظمة Backend باستخدام ASP.NET مع الالتزام بمبادئ Domain-Driven Design. كتابة Unit Tests و Integration Tests شاملة باستخدام XUnit.',
        },
      } as Record<string, { title: string; description: string }>,
    },
    projects: {
      title: 'المشاريع الشخصية',
      description:
        'مشاريع مبتكرة تُظهر الخبرة في AI Agents وبرمجة الأنظمة و Full-Stack Development.',
      items: {
        '1': {
          title: 'Autopilot',
          description:
            'AI Agents تنجز مهام System Administrator عبر تنفيذ الأوامر على خوادم Linux.',
        },
        '2': {
          title: 'Lastoria E-Menu',
          description:
            'قائمة مطعم إلكترونية تفاعلية مع Admin Dashboard لتحديث المحتوى بشكل ديناميكي.',
        },
        '3': {
          title: 'AI Avatar Interviewer',
          description:
            'AI Voice Agent ينضم إلى الاجتماعات ويبدأ باستجواب ومقابلة المشاركين.',
        },
        '4': {
          title: 'E-Commerce & Storage Management System',
          description: 'نظام مخازن مع تتبع الطلبات ورؤى الإيرادات.',
        },
        '5': {
          title: 'Sol.ps Landing Page',
          description: 'صفحة هبوط عصرية لشركة AI ناشئة.',
        },
        '6': {
          title: 'AI Salesman',
          description:
            'AI Salesman لمتاجر الأثاث يساعد العملاء على تصور تصاميمهم المثالية من خلال حوار طبيعي وصور أثاث مولدة بـ AI.',
        },
      } as Record<string, { title: string; description: string }>,
      viewGithub: 'عرض الكل على GitHub',
    },
    heatmap: {
      title: 'مساهمات GitHub',
      description:
        'لمحة عن نشاطي الأخير في البرمجة والمساهمات مفتوحة المصدر على GitHub.',
      viewProfile: 'عرض الملف الكامل',
      lastYear: 'نشاط آخر سنة',
      generated: 'مُنشأ من بيانات مساهمات GitHub العامة.',
    },
    contact: {
      title: 'لنبنِ شيئاً استثنائياً.',
      text: 'أبحث حالياً عن فرص جديدة. سواء كان لديك سؤال أو أردت فقط إلقاء التحية، سأبذل قصارى جهدي للرد عليك!',
      sayHello: 'قل مرحباً',
      whatsapp: 'واتساب',
    },
    footer: {
      copyright: 'محمد حجازي. جميع الحقوق محفوظة.',
    },
    modal: {
      overview: 'نظرة عامة',
      technologies: 'التقنيات',
      roleResponsibilities: 'الدور والمسؤوليات',
      techStack: 'Tech Stack',
    },
    langSelector: {
      title: 'Choose Your Language',
      subtitle: 'اختر لغتك',
    },
  },
} as const;

export type Translations = (typeof translations)['en'];
