import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "@/components/icons";
import { ContactLinks } from "@/components/contact-links";
import { ProjectCard } from "@/components/project-card";
import { copy } from "@/content/site";
import { projects } from "@/content/projects";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "ar";
  const text = copy[locale];
  const ar = locale === "ar";
  return <>
    <section className="hero">
      <div className="hero__copy">
        <span className="section-index">01 / {ar ? "إدريس عارف" : "Idris Arif"}</span>
        <p className="hero__role">{text.shortRole}</p>
        <h1>{ar ? <>أبني منتجات<br />تعمل في الواقع.</> : <>I build products<br />for the real world.</>}</h1>
        <p className="hero__statement">{text.statement}</p>
        <div className="hero__actions">
          <Link className="button button--gold" href={localizedPath(locale, "/work")}>{text.viewWork}<ArrowUpRight /></Link>
          <Link className="button button--ghost" href={localizedPath(locale, "/contact")}>{text.contact}</Link>
        </div>
      </div>
      <div className="hero__portrait-wrap">
        <span className="hero__portrait-line" />
        <Image className="portrait" src="/portraits/idris-hero.png" alt={ar ? "إدريس عارف" : "Idris Arif"} width={1254} height={1254} priority sizes="(max-width: 850px) 92vw, 44vw" />
        <div className="hero__caption"><span>Builder · Founder</span><span>Software & AI</span></div>
      </div>
      <a className="hero__scroll" href="#work"><ArrowDown /><span>{ar ? "الأعمال" : "Work"}</span></a>
    </section>

    <section className="work-showcase" id="work">
      <header className="editorial-heading">
        <span className="section-index">02 / {text.selectedWork}</span>
        <div><h2>{ar ? "المنتج هو الدليل." : "The product is the proof."}</h2><p>{text.selectedWorkIntro}</p></div>
      </header>
      <div className="work-stack">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} locale={locale} featured={index === 0} />)}</div>
    </section>

    <section className="principle-band">
      <span className="section-index">03 / {text.now}</span>
      <div><p>{ar ? "أبني لأفهم، وأتعلم بما أبنيه." : "I build to understand, and learn through what I build."}</p><span>{text.nowText}</span><ContactLinks locale={locale} compact /></div>
    </section>

    <section className="about-tease">
      <div className="about-tease__image"><Image src="/portraits/idris-about.png" alt={ar ? "إدريس عارف" : "Idris Arif"} width={1254} height={1254} sizes="(max-width: 850px) 92vw, 45vw" /></div>
      <div className="about-tease__copy"><span className="section-index">04 / {text.about}</span><h2>{ar ? "التعلّم عندي يمر عبر البناء." : "For me, learning runs through building."}</h2><p>{text.aboutShort}</p><Link className="text-link text-link--large" href={localizedPath(locale, "/about")}>{text.about}<ArrowUpRight /></Link></div>
    </section>

    <section className="contact-band">
      <span className="section-index">05 / {text.contactNav}</span>
      <div><h2>{ar ? "عندك شيء يستحق أن يُبنى؟" : "Have something worth building?"}</h2><p>{text.contactLead}</p><a className="button button--charcoal" href="https://wa.me/967773076253" target="_blank" rel="noreferrer">{ar ? "تواصل عبر واتساب" : "Talk on WhatsApp"}<ArrowUpRight /></a></div>
    </section>
  </>;
}
