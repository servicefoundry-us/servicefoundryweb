import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand" aria-label="ServiceFoundry U.S. home">
          <img src="/logo.png" alt="ServiceFoundry U.S." />
        </Link>
        <nav className="nav" aria-label="Main">
          <Link href="/trades">Trades</Link>
          <Link href="/request">Request a trade</Link>
          <Link href="/account">My account</Link>
          <Link href="/request" className="btn btn-accent">Get started</Link>
        </nav>
      </div>
    </header>
  );
}
