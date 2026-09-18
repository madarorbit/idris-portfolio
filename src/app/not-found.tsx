import Link from "next/link";

export default function NotFound() { return <main className="inner-page" style={{ minHeight: "70vh" }}><div className="inner-page__intro"><span className="eyebrow">404</span><div><h1>Not found.</h1><p>The page you are looking for does not exist.</p><Link className="button button--dark" href="/ar" style={{ marginTop: 30 }}>Back home</Link></div></div></main>; }
