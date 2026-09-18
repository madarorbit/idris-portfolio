import type { Metadata } from "next";
import Image from "next/image";
import { copy } from "@/content/site";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  const locale = isLocale(value) ? value : "ar";
  return { title: copy[locale].about, description: copy[locale].aboutShort };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "ar";
  const text = copy[locale];
  const ar = locale === "ar";
  return <div className="about-page"><div className="about-intro"><span className="eyebrow">01 / {text.about}</span><div><h1>{ar ? "أبني ما أريد أن أراه موجودًا." : "I build what I want to see exist."}</h1><p>{text.aboutShort}</p></div></div><div className="about-body"><div className="about-body__portrait"><Image src="/portraits/idris-about.png" alt={ar ? "إدريس عارف" : "Idris Arif"} width={1254} height={1254} priority /></div><div className="about-body__content"><h2>{ar ? "التعلّم عندي يمر عبر البناء." : "For me, learning runs through building."}</h2>{ar ? <><p>أنا إدريس، مؤسس وباني منتجات تقنية. أعمل على البرمجيات بالطريقة التي أتعامل بها مع المشكلات: أفهم السياق، أختبر الفكرة، ثم أبني تجربة واضحة يمكن استخدامها وتحسينها.</p><p>اهتمامي يدور حول Software Engineering وSaaS والذكاء الاصطناعي عندما يكون جزءًا من منتج مفيد، لا مجرد طبقة استعراضية. لذلك تظهر المشاريع نفسها كأفضل دليل على ما أتعلمه وكيف أفكر.</p></> : <><p>I am Idris, a founder and builder of technology products. I approach software the same way I approach problems: understand the context, test the idea, then build a clear experience that can be used and improved.</p><p>My interests sit around software engineering, SaaS, and AI when it belongs inside a useful product—not as decoration. That is why the products themselves are the clearest record of what I am learning and how I think.</p></>}<div className="principles">{(ar ? [{ title: "المشكلة أولًا", text: "أبدأ من الاحتكاك الحقيقي، لا من قائمة تقنيات." }, { title: "وضوح قابل للبناء", text: "أحب الأنظمة التي يفهمها الناس ويمكن تطويرها خطوة بعد خطوة." }, { title: "المنتج هو الدليل", text: "أفضل طريقة لشرح القدرة هي وضع شيء حقيقي أمام الزائر." }] : [{ title: "Problem first", text: "I start with the real friction, not a list of technologies." }, { title: "Clarity that compounds", text: "I like systems people can understand and improve step by step." }, { title: "The product is the proof", text: "The clearest way to explain capability is to put something real in front of people." }]).map((item, index) => <article className="principle" key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></div></div></div>;
}
