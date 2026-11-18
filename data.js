import RequestForm from "../../components/RequestForm";

export const metadata = {
  title: "Request a trade | ServiceFoundry U.S.",
  description: "Ask to start a business in any trade. We review each request and reply by email.",
};

export default function RequestPage({ searchParams }) {
  const initialTrade = typeof searchParams?.trade === "string" ? searchParams.trade : "";
  return (
    <section className="section" style={{ borderTop: "none", paddingTop: "3.5rem" }}>
      <div className="wrap">
        <div className="section-head">
          <h2>Request a trade</h2>
          <p>
            Tell us what you want to start. We'll email you when your request is received, when it's under review, and
            when we've made a decision. Your account has the details.
          </p>
        </div>
        <RequestForm initialTrade={initialTrade} />
      </div>
    </section>
  );
}
