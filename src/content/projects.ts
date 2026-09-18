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
    eyebrow: "Arabic business operating layer",
    theme: "madar",
    status: "Live product",
    role: "Founder & builder",
    period: "2026 — ongoing",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "AI SDK", "PostgreSQL"],
    shortDescription: {
      ar: "منظومة عربية تجمع تشغيل التجارة والبيانات والقدرات الذكية في تجربة واحدة.",
      en: "An Arabic-first operating layer connecting commerce, data, and practical intelligence.",
    },
    overview: {
      ar: "مَدار مشروع طويل المدى لبناء طبقة تشغيل عربية للأعمال. بدل أن تكون مجموعة شاشات منفصلة، تجمع المنصة المبيعات والمخزون والعملاء والمصروفات والمهام والتقارير داخل مساحات عمل واضحة، ثم تضع الذكاء الاصطناعي في سياق البيانات والصلاحيات الفعلية.",
      en: "MADAR is a long-term attempt to build an Arabic operating layer for businesses. Rather than a collection of disconnected screens, it brings sales, inventory, customers, expenses, tasks, and reporting into clear workspaces, then places AI inside the context of real data and permissions.",
    },
    problem: {
      ar: "تعمل كثير من الأعمال على أدوات متفرقة، وقراراتها موزعة بين الذاكرة والرسائل والملفات. المشكلة ليست غياب المزايا بقدر ما هي غياب صورة تشغيلية واحدة يمكن فهمها والتصرف بناءً عليها.",
      en: "Many businesses work across scattered tools, with decisions split between memory, messages, and files. The problem is not simply a lack of features; it is the lack of one operational picture that can be understood and acted on.",
    },
    built: {
      ar: [
        "منصة عربية RTL بمساحات عمل معزولة لكل عميل.",
        "طبقات للحساب والخدمات والمتجر ومساحات التشغيل.",
        "MADAR Retail لإدارة المنتجات والمبيعات والمخزون والعملاء والمصروفات والديون والتقارير.",
        "ORBY كمساعد واحد يفهم سياق المساحة بدل تقديم إجابات عامة منفصلة عن العمل.",
        "نظام تصميم وتجربة موحّد يحافظ على الوضوح مع نمو المنصة.",
      ],
      en: [
        "An Arabic RTL platform with isolated workspaces for each customer.",
        "Account, services, store, and workspace layers that share one product language.",
        "MADAR Retail for products, sales, inventory, customers, expenses, debts, and reports.",
        "ORBY as one context-aware assistant rather than a set of disconnected bots.",
        "A shared design and experience system that keeps the product understandable as it grows.",
      ],
    },
    decisions: {
      ar: [
        { title: "السياق قبل الذكاء", text: "صُمم ORBY ليفهم المساحة والبيانات والصلاحيات، ويقترح خطوة قابلة للمراجعة بدل عرض ذكاء عام لا يعرف طبيعة العمل." },
        { title: "العربية من البداية", text: "اللغة واتجاه الواجهة والمصطلحات جزء من تصميم المنتج، وليست طبقة ترجمة تضاف في النهاية." },
        { title: "طبقات واضحة", text: "فصل المتجر عن مساحات التشغيل والإدارة يحافظ على حدود مفهومة بين ما يراه العميل وما يخص المنصة." },
      ],
      en: [
        { title: "Context before intelligence", text: "ORBY is shaped around workspace data and permissions, so a suggestion can be reviewed and acted on instead of being generic." },
        { title: "Arabic from the start", text: "Language, direction, and terminology are product decisions—not a translation layer added at the end." },
        { title: "Clear layers", text: "Separating the store, customer workspaces, and platform administration keeps boundaries understandable." },
      ],
    },
    experience: {
      ar: [
        { title: "منظومة واحدة", text: "تنتقل من إدارة التجارة إلى الرقمنة والمنتجات المتخصصة ضمن مسار واحد." },
        { title: "ORBY", text: "محادثة واحدة للحساب، مع سياق خدمة وصلاحيات وضوابط واضحة." },
        { title: "Retail", text: "مساحة تشغيل أقرب إلى يوم التاجر الحقيقي: بيع، مخزون، عملاء، نقد، ديون وتقارير." },
      ],
      en: [
        { title: "One operating layer", text: "Commerce management, practical digitisation, and specialised products live in one product direction." },
        { title: "ORBY", text: "One account-level conversation with service context, permissions, and explicit controls." },
        { title: "Retail", text: "A workspace shaped around a merchant's day: sales, inventory, customers, cash, debts, and reports." },
      ],
    },
    currentStatus: {
      ar: "مَدار منشور ويستمر تطويره على مراحل. المنتج الأساسي، تجربة ORBY، ومساحات Retail موجودة في المستودع والنسخة العامة، مع استمرار العمل على توسيع العمق التشغيلي.",
      en: "MADAR is shipped and still evolving in stages. The core product, ORBY experience, and Retail workspaces exist in the repository and public product, while deeper operational layers continue to grow.",
    },
    links: {
      ar: [
        { label: "زيارة مَدار", href: "https://www.orbitmadar.com/", external: true },
        { label: "استكشف ORBY", href: "https://www.orbitmadar.com/orby", external: true },
        { label: "عن مَدار", href: "https://www.orbitmadar.com/about", external: true },
        { label: "المستودع العام", href: "https://github.com/madarorbit/madar-platform", external: true },
      ],
      en: [
        { label: "Visit MADAR", href: "https://www.orbitmadar.com/", external: true },
        { label: "Explore ORBY", href: "https://www.orbitmadar.com/orby", external: true },
        { label: "About MADAR", href: "https://www.orbitmadar.com/about", external: true },
        { label: "Public repository", href: "https://github.com/madarorbit/madar-platform", external: true },
      ],
    },
  },
  {
    slug: "ahd",
    title: "عَهد",
    eyebrow: "Warranty & after-sales SaaS",
    theme: "ahd",
    status: "In active development",
    role: "Founder & builder",
    period: "2026 — ongoing",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Vercel"],
    shortDescription: {
      ar: "منصة عربية تساعد المنشآت على تنظيم الضمان وخدمات ما بعد البيع في مكان واحد.",
      en: "An Arabic SaaS product for organising warranties and after-sales work in one place.",
    },
    overview: {
      ar: "عَهد يحوّل الضمان من ورقة أو محادثة يصعب الرجوع إليها إلى سجل تشغيلي يمكن للمنشأة إدارته والعميل فهمه. يبدأ المنتج من لحظة البيع: تسجيل العميل والمنتج والرقم التسلسلي، ثم إصدار بطاقة ضمان وهوية واضحة، ثم متابعة ما بعد البيع ضمن تدفق مفهوم.",
      en: "AHD turns a warranty from a paper card or a hard-to-find conversation into an operational record a business can manage and a customer can understand. The product starts at the point of sale—capturing the customer, product, and serial number—then carries the warranty and after-sales flow forward.",
    },
    problem: {
      ar: "تتوزع معلومات الضمان بين كروت ورقية وفواتير وواتساب وذاكرة الموظف. وعندما يعود العميل بعد أشهر، يصبح العثور على الحالة وإثباتها ومتابعتها عبئًا على المنشأة.",
      en: "Warranty information is often split across paper cards, invoices, WhatsApp, and employee memory. When a customer returns months later, finding, proving, and following up on the case becomes expensive friction for the business.",
    },
    built: {
      ar: [
        "بنية SaaS متعددة المنشآت مع عزل بيانات كل منشأة.",
        "تسجيل دخول وصلاحيات تفصل إدارة المنصة عن مساحة المنشأة.",
        "مساحات تشغيل لإدارة العملاء والمنتجات والضمانات والمطالبات والإعدادات.",
        "تجربة Explore تفاعلية تشرح إصدار الضمان وبطاقة العميل والتحقق وطلب الخدمة دون تسجيل.",
        "تخصيص هوية المنشأة في تجربة الضمان مع واجهات متجاوبة للهاتف والحاسوب.",
      ],
      en: [
        "A multi-tenant SaaS foundation with tenant-level data isolation.",
        "Authentication and roles that separate platform administration from the business workspace.",
        "Operational surfaces for customers, products, warranties, claims, and settings.",
        "An interactive Explore experience that demonstrates issuing a warranty, the customer card, verification, and service requests without sign-up.",
        "Tenant branding and responsive workflows for phone, tablet, and desktop use.",
      ],
    },
    decisions: {
      ar: [
        { title: "الثقة تبدأ من السجل", text: "اختيار سجل واضح للعميل والمنتج والرقم التسلسلي يجعل خدمة ما بعد البيع امتدادًا لعملية البيع، لا بحثًا منفصلًا كل مرة." },
        { title: "عزل المنشآت", text: "صُممت البيانات والصلاحيات حول tenant_id وسياسات وصول على مستوى قاعدة البيانات حتى لا تختلط عمليات منشأة بأخرى." },
        { title: "الديمو جزء من المنتج", text: "تجربة Explore ليست صورة تسويقية؛ إنها مسار تفاعلي يشرح القيمة قبل طلب تسجيل أو بيانات." },
      ],
      en: [
        { title: "Trust starts with the record", text: "Making the customer, product, and serial number explicit turns after-sales work into a continuation of the sale, not a search exercise." },
        { title: "Tenant isolation", text: "Data and permissions are shaped around tenant boundaries and database-level access policies so businesses do not bleed into one another." },
        { title: "The demo is part of the product", text: "Explore is not a marketing screenshot; it is an interactive path that explains the value before asking for an account." },
      ],
    },
    experience: {
      ar: [
        { title: "من البيع إلى الضمان", text: "تبدأ الرحلة من إدخال بيانات العميل والمنتج، ثم إصدار ضمان يحمل هوية المنشأة." },
        { title: "وضوح للعميل", text: "تجربة التحقق تعرض حالة الضمان بطريقة مفهومة دون الحاجة إلى تطبيق مستقل." },
        { title: "تشغيل ما بعد البيع", text: "تجمع مساحة المنشأة سجلات الضمان والعملاء والمنتجات وطلبات الخدمة في سياق واحد." },
      ],
      en: [
        { title: "From sale to warranty", text: "The flow begins with the customer and product record, then issues a warranty carrying the business identity." },
        { title: "Clarity for customers", text: "The verification path is designed to explain warranty status without requiring a separate app." },
        { title: "After-sales operations", text: "The business workspace brings warranty, customer, product, and service records into one context." },
      ],
    },
    currentStatus: {
      ar: "عَهد مبني ومتاح عبر نسخة عامة وديمو تفاعلي. تستمر المراحل التشغيلية في التطور، لذلك يركّز هذا العرض على البنية والتجربة المنفذة فعلًا دون ادعاء أرقام عملاء أو نتائج تجارية غير موثقة.",
      en: "AHD is built and available through a public product and interactive demo. Operational phases are still evolving, so this case study stays close to what is implemented and makes no unsupported claims about customers or commercial results.",
    },
    links: {
      ar: [
        { label: "زيارة عَهد", href: "https://warranty-platform-mu.vercel.app/", external: true },
        { label: "استكشف التجربة التفاعلية", href: "https://warranty-platform-mu.vercel.app/explore", external: true },
      ],
      en: [
        { label: "Visit AHD", href: "https://warranty-platform-mu.vercel.app/", external: true },
        { label: "Try the interactive demo", href: "https://warranty-platform-mu.vercel.app/explore", external: true },
      ],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
