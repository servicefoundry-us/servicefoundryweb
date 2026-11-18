import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <img src="/logo.png" alt="ServiceFoundry U.S." />
        <p>
          Building the next generation of business. Independent educational resources for service-business owners.
          Practical tools, not legal, tax, financial, or professional advice.
        </p>
        <p>
          <Link href="/trades">Trades</Link> · <Link href="/request">Request a trade</Link> ·{" "}
          <Link href="/account">My account</Link>
        </p>
        <p>&copy; 2026 ServiceFoundry U.S. All rights reserved.</p>
      </div>
    </footer>
  );
}
