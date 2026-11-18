import Link from "next/link";
import { notFound } from "next/navigation";
import { trades, prices, services } from "../../../lib/data";

export function generateStaticParams() {
  return trades.map((trade) => ({ slug: trade.slug }));
}

export function generateMetadata({ params }) {
  const trade = trades.find((t) => t.slug === params.slug);
  return { title: trade ? `${trade.name} | ServiceFoundry U.S.` : "Trade not found" };
}

export default function TradePage({ params }) {
  const trade = trades.find((t) => t.slug === params.slug);
  if (!trade) notFound();

  const available = trade.status === "available";

  return (
    <>
      <section className="section" style={{ borderTop: "none", paddingTop: "3.5rem" }}>
        <div className="wrap">
          <p className="crumbs">
            <Link href="/trades">Trades</Link> / {trade.name}
          </p>
          <div className="section-head">
            <span className={`tag ${available ? "tag-available" : ""}`}>
              {available ? "Available course" : "In-progress course"}
            </span>
            <h2 style={{ marginTop: "1rem" }}>{trade.name}</h2>
            <p>{trade.summary}</p>
          </div>

          {available ? (
            <>
              <ul className="price-rows">
                {trade.courses.map((course) => (
                  <li key={course.slug}>
                    <div>
                      <strong>{course.title}</strong>
                      <br />
                      <span>{course.focus}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <span className="price">${prices.course.toFixed(2)}</span>
                      <button className="btn" disabled>Buy course</button>
                    </div>
                  </li>
                ))}
              </ul>
              <p style={{ color: "var(--muted)", marginTop: "1.25rem" }}>
                Both courses: ${prices.bundle.toFixed(2)}. Checkout opens once payments are connected.
              </p>
            </>
          ) : (
            <>
              <div className="notice">
                <strong>This course is in progress.</strong> {trade.researchNote} It becomes available for purchase
                once the research is complete.
              </div>
              <ul className="price-rows" style={{ marginTop: "2rem" }}>
                {trade.courses.map((course) => (
                  <li key={course.slug}>
                    <div>
                      <strong>{course.title}</strong>
                      <br />
                      <span>{course.focus}</span>
                    </div>
                    <span className="tag">In progress</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Start this business</h2>
            <p>
              Want to open a {trade.name.toLowerCase()} business? Request it, and we'll tell you whether we can help with
              business design, business management, or both.
            </p>
          </div>
          <div className="actions">
            <Link href={`/request?trade=${trade.slug}`} className="btn btn-accent">
              Request {trade.name.toLowerCase()}
            </Link>
          </div>
          <p style={{ color: "var(--muted)", marginTop: "1.5rem", fontSize: "0.95rem" }}>
            Services available: {services.map((s) => s.label).join(" and ")}.
          </p>
        </div>
      </section>
    </>
  );
}
