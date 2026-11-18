import Link from "next/link";
import { trades } from "../../lib/data";

export const metadata = {
  title: "Trades | ServiceFoundry U.S.",
  description: "Courses built from fully researched businesses, plus trades still in progress.",
};

export default function TradesPage() {
  return (
    <section className="section" style={{ borderTop: "none", paddingTop: "3.5rem" }}>
      <div className="wrap">
        <div className="section-head">
          <h2>Trades</h2>
          <p>
            A course is only for sale once its trade has been researched in full. Trades still under research are
            shown as in-progress courses.
          </p>
        </div>
        <div className="trade-grid">
          {trades.map((trade) => {
            const available = trade.status === "available";
            return (
              <Link key={trade.slug} href={`/trades/${trade.slug}`} className="trade-card">
                <span className={`tag ${available ? "tag-available" : ""}`}>
                  {available ? "Available course" : "In-progress course"}
                </span>
                <h3>{trade.name}</h3>
                <p>{trade.summary}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
