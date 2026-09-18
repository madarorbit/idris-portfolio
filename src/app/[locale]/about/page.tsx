import type { Metadata } from "next";
import Image from "next/image";
import { copy } from "@/content/site";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  const locale = isLocale(value) ? value : "ar";
  return { title: copy[locale].about, description: copy[locale].aboutShort, alternates: { canonical: `/${locale}/about`, languages: { ar: "/ar/about", en: "/en/about" } } };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "ar";
  const ar = locale === "ar";
  return <div className="about-page">
    <header className="about-intro"><span className="section-index">01 / {ar ? "عن إدريس" : "About"}</span><div><h1>{ar ? "أبني لأفهم، وأتعلم بما أبنيه." : "I build to understand, and learn through what I build."}</h1><p>{ar ? "أعمل على منتجات تقنية من الفكرة إلى الواجهة والبنية والنشر، وأتعامل مع البرمجيات كوسيلة لحل احتكاك حقيقي، لا كعرض تقنيات." : "I work on technology products from idea to interface, architecture, and deployment. Software is a way to remove real friction—not a technology showcase."}</p></div></header>
    <div className="about-story">
      <div className="about-story__portrait"><Image src="/portraits/idris-about.png" alt={ar ? "إدريس عارف" : "Idris Arif"} width={1254} height={1254} priority /></div>
      <div className="about-story__copy">
        <span className="gold-rule" />
        <h2>Founder mindset. Builder discipline.</h2>
        {ar ? <><p>أنا إدريس عارف، مؤسس وباني منتجات. اهتمامي الأساسي هو المكان الذي تلتقي فيه هندسة البرمجيات مع المنتج والذكاء الاصطناعي: كيف تتحول مشكلة واضحة إلى تجربة يمكن استخدامها، ثم إلى نظام يمكن الوثوق به وتطويره.</p><p>مَدار وعَهد هما أفضل سجل لهذا الأسلوب. كلاهما بدأ من احتكاك عملي، ثم تطور عبر قرارات في المنتج والواجهة والمعمارية والنشر بدل الاكتفاء بنموذج استعراضي.</p></> : <><p>I am Idris Arif, a founder and product builder. My focus is the intersection of software engineering, product thinking, and AI: turning a clear problem into an experience people can use, then into a system that can be trusted and improved.</p><p>MADAR and AHD are the clearest record of that approach. Both started from operational friction and evolved through product, interface, architecture, and deployment decisions rather than stopping at a showcase prototype.</p></>}
        <div className="principles">
          {(ar ? [
            ["01", "المشكلة أولًا", "أبدأ من الاحتكاك الحقيقي، لا من قائمة تقنيات."],
            ["02", "الوضوح قبل الاستعراض", "التجربة الجيدة تجعل النظام مفهومًا قبل أن تجعله مبهرًا."],
            ["03", "المنتج هو الدليل", "أفضل شرح للقدرة هو شيء حقيقي يعمل ويمكن تجربته."],
          ] : [
            ["01", "Problem first", "I start with real friction, not a list of technologies."],
            ["02", "Clarity before spectacle", "A good experience makes a system understandable before it makes it impressive."],
            ["03", "The product is the proof", "The clearest evidence of capability is something real that works."],
          ]).map(([n,t,d]) => <article className="principle" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}
        </div>
      </div>
    </div>
  </div>;
}
