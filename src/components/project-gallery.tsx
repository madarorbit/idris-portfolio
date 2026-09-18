import Image from "next/image";
import { LiveProductPreview } from "@/components/live-product-preview";
import type { Project } from "@/content/projects";
import type { Locale } from "@/lib/i18n";

export function ProjectGallery({ project, locale }: { project: Project; locale: Locale }) {
  const ar = locale === "ar";
  if (project.theme === "madar") {
    return (
      <div className="product-evidence product-evidence--madar">
        <figure className="evidence-wide"><Image src="/projects/madar/madar-retail-master.png" alt={ar ? "MADAR Retail — الأصل الرسمي" : "MADAR Retail official visual"} width={1254} height={1254} /><figcaption>MADAR Retail</figcaption></figure>
        <figure><Image src="/projects/madar/connected-business-master.png" alt={ar ? "Connected Business — أصل مَدار الرسمي" : "Connected Business official visual"} width={1254} height={1254} /><figcaption>Connected Business</figcaption></figure>
        <figure><Image src="/projects/madar/native-business-master.png" alt={ar ? "Native Business — أصل مَدار الرسمي" : "Native Business official visual"} width={1254} height={1254} /><figcaption>Native Business</figcaption></figure>
        <figure className="evidence-wide evidence-dark"><Image src="/projects/madar/orby-master.png" alt={ar ? "ORBY — الأصل البصري الرسمي" : "ORBY official visual"} width={1536} height={1536} /><figcaption>ORBY</figcaption></figure>
      </div>
    );
  }

  return (
    <div className="product-evidence product-evidence--ahd">
      <div className="ahd-brand-panel">
        <Image src="/projects/ahd/ahd-app-icon.webp" alt={ar ? "علامة عَهد الرسمية" : "Official AHD mark"} width={384} height={384} />
        <div><span>{ar ? "الأصل الرسمي" : "Official brand asset"}</span><strong>عَهد</strong><p>{ar ? "منصة عربية للضمان وخدمات ما بعد البيع." : "Arabic warranty and after-sales SaaS."}</p></div>
      </div>
      <LiveProductPreview theme="ahd" url="https://warranty-platform-mu.vercel.app/explore" title={ar ? "التجربة التفاعلية لعَهد" : "AHD interactive demo"} label={ar ? "Explore / التجربة التفاعلية" : "Interactive Explore demo"} />
      <div className="ahd-demo-brand"><Image src="/projects/ahd/al-khalia-solar-logo.svg" alt={ar ? "شعار المنشأة التجريبية المستخدم داخل ديمو عَهد" : "Demo merchant logo used inside AHD"} width={220} height={90} /><p>{ar ? "أصل حقيقي مستخدم داخل تجربة Explore لإظهار تخصيص هوية المنشأة." : "A real asset used inside Explore to demonstrate tenant branding."}</p></div>
    </div>
  );
}
