import Link from "next/link";
import { stages, services } from "../lib/data";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>
            Build it. <span className="grad">Study it.</span> Teach it.
          </h1>
          <p className="lede">
            We build real businesses with small cohorts, study how they run, and turn what we learn into courses. Want
            to start a business in a trade? Request it. Want a course? Choose from the trades we have fully researched.
          </p>
          <div className="actions">
            <Link href="/request" className="btn btn-accent">Request a trade</Link>
            <Link href="/trades" className="btn btn-ghost">Browse trades</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Two ways in</h2>
            <p>Start your own business, or learn from the ones we have already built and studied.</p>
          </div>
          <div className="paths">
            <Link href="/request" className="path">
              <h3>Start a business</h3>
              <p>
                Request any trade. We review it and tell you whether we can help with business design, business
                management, or both.
              </p>
              <span className="go">Request a trade →</span>
            </Link>
            <Link href="/trades" className="path">
              <h3>Buy a course</h3>
              <p>
                Courses are built from businesses we have researched in full. Trades still under research are marked
                in progress.
              </p>
              <span className="go">Browse trades →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>What you can get</h2>
            <p>An approved trade can include one service or both.</p>
          </div>
          <ul className="price-rows">
            {services.map((s) => (
              <li key={s.id}>
                <strong>{s.label}</strong>
                <span>{s.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Your request, step by step</h2>
            <p>
              You get an email at each step. Your account has the details: feedback, next steps, and what to do next.
            </p>
          </div>
          <ol className="tracker" style={{ listStyle: "none" }}>
            {stages.map((stage) => (
              <li key={stage.id}>
                {stage.label}
                <small>{stage.description}</small>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
