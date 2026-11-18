import Link from "next/link";
import { stages, services, sampleRequest } from "../../lib/data";

export const metadata = {
  title: "My account | ServiceFoundry U.S.",
};

export default function AccountPage() {
  const currentIndex = stages.findIndex((s) => s.id === sampleRequest.stageId);
  const current = stages[currentIndex];
  const chosenServices = services.filter((s) => sampleRequest.services.includes(s.id));

  return (
    <section className="section" style={{ borderTop: "none", paddingTop: "3.5rem" }}>
      <div className="wrap">
        <div className="section-head">
          <h2>My account</h2>
          <p>
            Your request status, feedback, and next steps are kept here. Each email we send links back to this page.
          </p>
        </div>

        <div className="notice" style={{ marginBottom: "2rem" }}>
          <strong>Sample account.</strong> This is example data. Logins and real requests are not connected yet.
        </div>

        <h3 style={{ fontWeight: 800, fontSize: "1.4rem", margin: "0 0 1rem" }}>
          {sampleRequest.trade}
        </h3>

        <ol className="tracker" style={{ listStyle: "none", marginBottom: "2rem" }}>
          {stages.map((stage, index) => {
            const isCurrent = index === currentIndex;
            const isDone = index < currentIndex;
            const cls = isCurrent ? "current" : isDone ? "done" : "";
            return (
              <li key={stage.id} className={cls} aria-current={isCurrent ? "step" : undefined}>
                {stage.label}
                {isCurrent && <small>Current stage</small>}
              </li>
            );
          })}
        </ol>

        <dl className="detail-list">
          <div>
            <dt>Current status</dt>
            <dd>{current.description}</dd>
          </div>
          <div>
            <dt>Feedback</dt>
            <dd>{sampleRequest.feedback}</dd>
          </div>
          <div>
            <dt>Next steps</dt>
            <dd>{sampleRequest.nextSteps}</dd>
          </div>
          <div>
            <dt>Services requested</dt>
            <dd>{chosenServices.map((s) => s.label).join(" and ")}</dd>
          </div>
          <div>
            <dt>Submitted</dt>
            <dd>{sampleRequest.submitted}</dd>
          </div>
          <div>
            <dt>Last updated</dt>
            <dd>{sampleRequest.updated}</dd>
          </div>
        </dl>

        <p style={{ marginTop: "2rem" }}>
          <Link href="/request" style={{ color: "var(--accent-b)", fontWeight: 800 }}>
            Request another trade
          </Link>
        </p>
      </div>
    </section>
  );
}
