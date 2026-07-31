const translations = {
  ar: {
    nav_how: "كيف يعمل",
    nav_features: "لماذا أصالة؟",
    nav_parents: "للآباء",
    nav_children: "للأطفال",
    nav_about: "من نحن",
    nav_team: "فريق أصالة",

    hero_small: "✨ بناء العادات • التثقيف المالي • الأصالة السعودية",
    hero_title: "نبني العادات...",
    hero_sub: "بطريقة يفهمها أطفال اليوم",
    hero_p: "أصالة منصة تفاعلية تساعد الأطفال على بناء العادات الإيجابية وتنمية الوعي المالي وتعزيز المسؤولية من خلال المهام اليومية.",

    try_btn: "جرّب أصالة",
    watch_btn: "شاهد كيف يعمل",

    stat1: "بناء العادات",
    stat2: "التثقيف المالي",
    stat3: "القيم والأصالة السعودية",

    how_label: "بخطوات بسيطة",
    how_title: "كيف تبدأ حكاية أصالة معك؟",
    how_desc: "ثلاث خطوات بسيطة لبناء عادات مالية ذكية",

    step1_title: "أضف طفلك",
    step1_desc: "أنشئ حسابًا لطفلك وحدد عمره واهتماماته.",
    step2_title: "أنشئ المهام",
    step2_desc: "أنشئ مهام يومية أو أسبوعية وحدد النقاط.",
    step3_title: "كافئ الإنجاز",
    step3_desc: "تابع إنجاز طفلك وكافئه بما يحب.",

    footer_text: "© 2026 أصالة - جميع الحقوق محفوظة.",
    footer_repo: "مستودع المشروع على GitHub"
  },

  en: {
    nav_how: "How it works",
    nav_features: "Why Asalah?",
    nav_parents: "For Parents",
    nav_children: "For Children",
    nav_about: "About Us",
    nav_team: "Asalah Team",

    hero_small: "✨ Habit Building • Financial Literacy • Saudi Values",
    hero_title: "We build habits...",
    hero_sub: "In a way today's kids understand",
    hero_p: "Asalah is an interactive platform that helps children build positive habits, financial awareness, and responsibility through daily tasks.",

    try_btn: "Try Asalah",
    watch_btn: "Watch how it works",

    stat1: "Habit Building",
    stat2: "Financial Literacy",
    stat3: "Saudi Values",

    how_label: "Simple Steps",
    how_title: "How does Asalah start with you?",
    how_desc: "Three simple steps to build smart financial habits",

    step1_title: "Add your child",
    step1_desc: "Create an account and set age and interests.",
    step2_title: "Create tasks",
    step2_desc: "Add daily or weekly tasks and assign points.",
    step3_title: "Reward progress",
    step3_desc: "Track progress and reward achievements.",

    footer_text: "© 2026 Asalah - All rights reserved.",
    footer_repo: "Project repository on GitHub"
  }
};

let currentLang = "ar";

function switchLanguage() {
  currentLang = currentLang === "ar" ? "en" : "ar";

  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = currentLang;

  for (const key in translations[currentLang]) {
    const el = document.getElementById(key);
    if (el) el.innerText = translations[currentLang][key];
  }

  document.getElementById("lang-toggle").innerText =
    currentLang === "ar" ? "EN" : "AR";
}
