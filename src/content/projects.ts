import type { Locale } from "@/lib/i18n";

export type ProjectLink = { label: string; href: string; external?: boolean };
export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  theme: "madar" | "ahd";
  status: string;
  role: string;
  period: string;
  stack: string[];
  shortDescription: Record<Locale, string>;
  overview: Record<Locale, string>;
  problem: Record<Locale, string>;
  built: Record<Locale, string[]>;
  decisions: Record<Locale, { title: string; text: string }[]>;
  experience: Record<Locale, { title: string; text: string }[]>;
  currentStatus: Record<Locale, string>;
  links: Record<Locale, ProjectLink[]>;
};

export const projects: Project[] = [
  {
    slug: "madar",
    title: "مَدار | ORBIT",
    eyebrow: "Arabic-first business operating layer",
    theme: "madar",
    status: "Live product",
    role: "Founder & builder",
    period: "2026 — ongoing",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "AI"],
    shortDescription: {
      ar: "منصة عربية ذكية لإدارة التجارة ورقمنة العمليات وإضافة طبقة ذكاء قابلة للتوسع إلى الأعمال.",
      en: "An Arabic-first platform for commerce operations, business digitisation, and a scalable intelligence layer.",
    },
    overview: {
      ar: "مَدار ليس شاشة واحدة ولا متجرًا فقط. المستودع الفعلي يضم حساب العميل، الخدمات، مساحات العمل، المتجر، الإدارة، MADAR Retail وORBY. الفكرة هي جمع العمل والبيانات والقدرات الذكية داخل طبقة تشغيل عربية واحدة بدل توزيع القرار بين أدوات منفصلة.",
      en: "MADAR is not a single screen or just a storefront. The live repository contains customer account surfaces, services, workspaces, store, administration, MADAR Retail, and ORBY. The product direction is one Arabic-first operating layer connecting work, data, and practical intelligence.",
    },
    problem: {
      ar: "تتوزع عمليات كثير من الأعمال بين الرسائل والملفات والأدوات المنفصلة. عندها تصبح البيانات موجودة لكن الصورة التشغيلية غير واضحة، ويضيع القرار بين أكثر من مكان.",
      en: "Business operations often fragment across messages, files, and disconnected tools. Data exists, but the operational picture does not—and decisions get lost between systems.",
    },
    built: {
      ar: ["منصة عربية RTL تفصل بوضوح بين حساب العميل وإدارة المنصة.", "مساحات عمل وخدمات مع عزل بيانات وصلاحيات على مستوى العميل.", "MADAR Retail للمبيعات والمخزون والعملاء والمصروفات والديون والتقارير.", "ORBY كمساعد ذكي داخل سياق الحساب والخدمة بدل مساعد عام منفصل عن العمل.", "طبقات تشغيل وموبايل وواجهات إدارة تتوسع ضمن نفس المنتج."],
      en: ["An Arabic RTL platform with a clear boundary between customer account and platform administration.", "Workspaces and services with customer-level data and permission isolation.", "MADAR Retail for sales, inventory, customers, expenses, debts, and reporting.", "ORBY as an assistant inside account and service context rather than a generic chatbot.", "Operational, mobile, and administrative surfaces that grow within the same product system."],
    },
    decisions: {
      ar: [{ title: "السياق قبل الذكاء", text: "ORBY مرتبط بسياق الحساب والخدمة والصلاحيات؛ الهدف أن تكون الإجابة قابلة للاستخدام داخل العمل." }, { title: "العربية من البداية", text: "RTL والمصطلحات وتدفق الواجهة قرارات منتج أساسية وليست ترجمة لاحقة." }, { title: "حدود تشغيل واضحة", text: "فصل الحساب ومساحات العمل والإدارة يمنع تحول المنصة مع النمو إلى شاشة ضخمة غير مفهومة." }],
      en: [{ title: "Context before intelligence", text: "ORBY is shaped around account, service, and permission context so intelligence remains useful inside real work." }, { title: "Arabic from the start", text: "RTL, terminology, and interface flow are core product decisions—not a translation pass." }, { title: "Clear operating boundaries", text: "Separating account, workspaces, and administration keeps the product understandable as it grows." }],
    },
    experience: {
      ar: [{ title: "Retail", text: "تشغيل يومي للتجارة." }, { title: "ORBY", text: "طبقة ذكاء مرتبطة بالسياق." }, { title: "Workspaces", text: "مساحات واضحة للخدمات والعمل." }],
      en: [{ title: "Retail", text: "Daily commerce operations." }, { title: "ORBY", text: "Context-aware intelligence." }, { title: "Workspaces", text: "Clear service and work surfaces." }],
    },
    currentStatus: {
      ar: "مَدار منشور على orbitmadar.com ويستمر تطويره. المستودع الحالي يضم المنتج العام، MADAR Retail، ORBY، مساحات الحساب والعمل، طبقات الإدارة وواجهات API متعددة.",
      en: "MADAR is live at orbitmadar.com and continues to evolve. The current repository includes the public product, MADAR Retail, ORBY, account/workspace surfaces, administration, and multiple API layers.",
    },
    links: {
      ar: [{ label: "زيارة مَدار", href: "https://www.orbitmadar.com/", external: true }, { label: "استكشف ORBY", href: "https://www.orbitmadar.com/orby", external: true }, { label: "عن مَدار", href: "https://www.orbitmadar.com/about", external: true }, { label: "المستودع العام", href: "https://github.com/madarorbit/madar-platform", external: true }],
      en: [{ label: "Visit MADAR", href: "https://www.orbitmadar.com/", external: true }, { label: "Explore ORBY", href: "https://www.orbitmadar.com/orby", external: true }, { label: "About MADAR", href: "https://www.orbitmadar.com/about", external: true }, { label: "Public repository", href: "https://github.com/madarorbit/madar-platform", external: true }],
    },
  },
  {
    slug: "ahd",
    title: "عَهد",
    eyebrow: "Warranty & after-sales SaaS",
    theme: "ahd",
    status: "Public demo live · operations evolving",
    role: "Founder & builder",
    period: "2026 — ongoing",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Vercel"],
    shortDescription: {
      ar: "منصة عربية لتنظيم الضمان الإلكتروني والتحقق وخدمات ما بعد البيع من مكان واحد.",
      en: "An Arabic SaaS product for electronic warranties, verification, and after-sales operations.",
    },
    overview: {
      ar: "عَهد يحوّل الضمان من كرت أو محادثة يصعب الرجوع إليها إلى سجل تشغيلي. النسخة الحالية تتضمن واجهة عامة عربية، مصادقة وصلاحيات، إدارة منصة ومنشآت متعددة، ومساحات للعملاء والمنتجات والضمانات والمطالبات، إضافة إلى Explore: ديمو بيعي تفاعلي دون تسجيل.",
      en: "AHD turns warranty from a paper card or hard-to-find conversation into an operational record. The current product includes an Arabic public experience, authentication and roles, platform and tenant administration, customer/product/warranty/claim surfaces, plus Explore: an interactive sales demo with no sign-up.",
    },
    problem: {
      ar: "تتوزع معلومات الضمان بين الورق والفاتورة وواتساب وذاكرة الموظف. عندما يعود العميل بعد أشهر، يصبح التحقق من المنتج والضمان وطلب الخدمة عملية بطيئة وغير موحدة.",
      en: "Warranty information is often split across paper, invoices, WhatsApp, and employee memory. Months later, verification and service become slow and inconsistent.",
    },
    built: {
      ar: ["بنية SaaS متعددة المنشآت.", "مصادقة وفصل بين مالك المنصة ومساحة المنشأة.", "إدارة العملاء والمنتجات والضمانات والمطالبات والإعدادات.", "تحقق بالرمز والرقم التسلسلي ضمن تجربة العميل.", "Explore تفاعلي يشرح إصدار الضمان وبطاقة العميل والتحقق وطلب الخدمة وتخصيص هوية المنشأة دون تسجيل."],
      en: ["A multi-tenant SaaS foundation.", "Authentication and separation between platform owner and tenant workspace.", "Customer, product, warranty, claim, and settings surfaces.", "Token and serial-number verification in the customer experience.", "An interactive Explore flow demonstrating issuance, customer card, verification, service requests, and tenant branding without sign-up."],
    },
    decisions: {
      ar: [{ title: "الثقة تبدأ من السجل", text: "العميل والمنتج والرقم التسلسلي والضمان يعيشون في سياق واحد يمكن الرجوع إليه." }, { title: "عزل المنشآت", text: "الهوية والصلاحيات والبيانات مبنية حول حدود كل منشأة." }, { title: "الديمو جزء من البيع", text: "Explore يسمح بفهم المنتج وتجربته قبل طلب حساب أو بيانات." }],
      en: [{ title: "Trust starts with the record", text: "Customer, product, serial number, and warranty live in one retrievable context." }, { title: "Tenant isolation", text: "Identity, permissions, and data are shaped around each business boundary." }, { title: "The demo is part of sales", text: "Explore lets prospects understand and try the product before giving account details." }],
    },
    experience: {
      ar: [{ title: "إصدار الضمان", text: "من العميل والمنتج إلى سجل واضح." }, { title: "التحقق", text: "بالرمز والرقم التسلسلي." }, { title: "ما بعد البيع", text: "طلبات الخدمة والمطالبات في نفس السياق." }],
      en: [{ title: "Warranty issuance", text: "From customer and product to a clear record." }, { title: "Verification", text: "By token and serial number." }, { title: "After-sales", text: "Service requests and claims in the same context." }],
    },
    currentStatus: {
      ar: "الواجهة العامة والديمو التفاعلي منشوران. بنية المصادقة وإدارة المنصة والمنشآت منفذة في المستودع، بينما يستمر التحقق التشغيلي والتطوير للطبقات الداخلية. لا يعرض هذا البورتفوليو أرقام عملاء أو نتائج تجارية غير موثقة.",
      en: "The public experience and interactive demo are live. Authentication, platform administration, and tenant foundations are implemented in the repository while operational validation and internal layers continue to evolve. No unsupported customer or commercial metrics are claimed here.",
    },
    links: {
      ar: [{ label: "زيارة عَهد", href: "https://warranty-platform-mu.vercel.app/", external: true }, { label: "جرّب Explore", href: "https://warranty-platform-mu.vercel.app/explore", external: true }],
      en: [{ label: "Visit AHD", href: "https://warranty-platform-mu.vercel.app/", external: true }, { label: "Try Explore", href: "https://warranty-platform-mu.vercel.app/explore", external: true }],
    },
  },
];

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
