import Link from "next/link";

export default function NotFound() {
  return (
    <main className="inner-page" style={{ minHeight: "70vh" }}>
      <header className="inner-page__intro">
        <span className="section-index">404</span>
        <div>
          <h1>الصفحة غير موجودة.<br /><span lang="en">Page not found.</span></h1>
          <p>الرابط الذي تبحث عنه غير متاح. يمكنك العودة إلى الصفحة الرئيسية.<br /><span lang="en">The page you are looking for is not available.</span></p>
          <Link className="button button--charcoal" href="/ar" style={{ marginTop: 30 }}>العودة إلى البداية</Link>
        </div>
      </header>
    </main>
  );
}
