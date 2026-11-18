:root {
  --black: #07080a;
  --ink-2: #14161a;
  --line: #2a2e35;
  --white: #ffffff;
  --muted: #a9afb8;
  --accent-a: #8b5cff;
  --accent-b: #5ce6e6;
  --gradient: linear-gradient(90deg, var(--accent-a), var(--accent-b));
  --wrap: min(100% - 2.5rem, 1160px);
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  background: var(--black);
  color: var(--white);
  font-family: var(--font-archivo), system-ui, sans-serif;
  font-size: 1.0625rem;
  line-height: 1.6;
}

a { color: inherit; }

:focus-visible {
  outline: 3px solid var(--accent-b);
  outline-offset: 3px;
}

.wrap {
  width: var(--wrap);
  margin-inline: auto;
}

/* Gradient text is the one accent. Used sparingly. */
.grad {
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* ---------- Header ---------- */
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(7, 8, 10, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--line);
}
.site-header .wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: 4.5rem;
}
.brand { display: inline-flex; align-items: center; gap: 0.6rem; text-decoration: none; }
.brand img { height: 2.5rem; width: auto; }
.nav { display: flex; align-items: center; gap: 1.5rem; }
.nav a {
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--muted);
}
.nav a:hover { color: var(--white); }

/* ---------- Buttons ---------- */
.btn {
  display: inline-block;
  padding: 0.85rem 1.4rem;
  border-radius: 6px;
  font: inherit;
  font-weight: 800;
  font-size: 0.95rem;
  text-decoration: none;
  letter-spacing: 0.01em;
  cursor: pointer;
  border: 2px solid var(--white);
  background: var(--white);
  color: var(--black);
  transition: transform 150ms ease, opacity 150ms ease;
}
.btn:hover { transform: translateY(-1px); }
.btn-ghost { background: transparent; color: var(--white); }
.btn-accent {
  border: none;
  background: var(--gradient);
  color: var(--black);
}
.btn[disabled] { opacity: 0.4; cursor: not-allowed; transform: none; }

/* ---------- Hero ---------- */
.hero { padding: clamp(4rem, 10vw, 8rem) 0 clamp(3rem, 6vw, 5rem); }
.hero h1 {
  font-weight: 900;
  font-size: clamp(2.8rem, 8vw, 6.5rem);
  line-height: 0.95;
  letter-spacing: -0.035em;
  text-transform: uppercase;
  margin: 0 0 1.5rem;
  max-width: 12ch;
}
.lede {
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: var(--muted);
  max-width: 52ch;
  margin: 0 0 2.25rem;
}
.actions { display: flex; flex-wrap: wrap; gap: 0.85rem; }

/* ---------- Sections ---------- */
.section { padding: clamp(3.5rem, 7vw, 6rem) 0; border-top: 1px solid var(--line); }
.section-head { max-width: 60ch; margin-bottom: 2.5rem; }
.section-head h2 {
  font-weight: 900;
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  line-height: 1;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  margin: 0 0 0.9rem;
}
.section-head p { margin: 0; color: var(--muted); }

/* ---------- Two paths (home) ---------- */
.paths {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
}
.path {
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 2rem;
  background: var(--ink-2);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: border-color 150ms ease;
}
.path:hover { border-color: var(--accent-b); }
.path h3 { font-weight: 800; font-size: 1.5rem; margin: 0; }
.path p { margin: 0; color: var(--muted); }
.path .go { margin-top: auto; font-weight: 800; color: var(--accent-b); }

/* ---------- Trade list ---------- */
.trade-grid {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
}
.trade-card {
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 1.75rem;
  background: var(--ink-2);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.trade-card:hover { border-color: var(--accent-a); }
.trade-card h3 { font-weight: 800; font-size: 1.5rem; margin: 0; }
.trade-card p { margin: 0; color: var(--muted); }
.tag {
  align-self: flex-start;
  font-size: 0.8rem;
  font-weight: 800;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  color: var(--muted);
}
.tag-available {
  border: none;
  background: var(--gradient);
  color: var(--black);
}

/* ---------- Pricing rows ---------- */
.price-rows { list-style: none; margin: 0; padding: 0; }
.price-rows li {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1.5rem;
  padding: 1.25rem 0;
  border-top: 1px solid var(--line);
}
.price-rows li:last-child { border-bottom: 1px solid var(--line); }
.price-rows strong { font-weight: 800; font-size: 1.15rem; }
.price-rows span { color: var(--muted); font-size: 0.95rem; }
.price { font-weight: 900; font-size: 1.6rem; white-space: nowrap; }

/* ---------- Trade detail ---------- */
.crumbs { color: var(--muted); font-size: 0.9rem; margin: 0 0 1.5rem; }
.crumbs a { text-decoration: none; }
.crumbs a:hover { color: var(--white); }
.notice {
  border: 1px solid var(--line);
  border-left: 4px solid var(--accent-b);
  border-radius: 8px;
  background: var(--ink-2);
  padding: 1.25rem 1.5rem;
  color: var(--muted);
  max-width: 62ch;
}
.notice strong { color: var(--white); }

/* ---------- Forms ---------- */
.form { display: grid; gap: 1.25rem; max-width: 40rem; }
.field { display: grid; gap: 0.4rem; }
.field label { font-weight: 800; font-size: 0.95rem; }
.field .hint { color: var(--muted); font-size: 0.875rem; }
.field input,
.field select,
.field textarea {
  font: inherit;
  color: var(--white);
  background: var(--ink-2);
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 0.8rem 0.9rem;
}
.field textarea { min-height: 7rem; resize: vertical; }
.field input:focus,
.field select:focus,
.field textarea:focus { outline: 2px solid var(--accent-b); outline-offset: 1px; }
.checks { display: grid; gap: 0.6rem; }
.checks label {
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
  font-weight: 600;
  cursor: pointer;
}
.checks small { display: block; color: var(--muted); font-weight: 400; }
.status-msg { font-weight: 700; }
.status-msg.ok { color: var(--accent-b); }
.status-msg.err { color: #ff8a8a; }

/* ---------- Status tracker ---------- */
.tracker {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
}
.tracker li {
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 1rem;
  background: var(--ink-2);
  color: var(--muted);
  font-weight: 800;
}
.tracker li.done { color: var(--white); border-color: var(--accent-b); }
.tracker li.current {
  color: var(--black);
  background: var(--gradient);
  border-color: transparent;
}
.tracker small { display: block; font-weight: 400; margin-top: 0.35rem; color: inherit; opacity: 0.85; }

.detail-list { margin: 0; display: grid; gap: 1rem; }
.detail-list div { border-top: 1px solid var(--line); padding-top: 1rem; }
.detail-list dt { font-weight: 800; margin-bottom: 0.25rem; }
.detail-list dd { margin: 0; color: var(--muted); }

/* ---------- Footer ---------- */
.site-footer {
  border-top: 1px solid var(--line);
  padding: 3rem 0;
  color: var(--muted);
  font-size: 0.9rem;
}
.site-footer .wrap { display: grid; gap: 0.8rem; }
.site-footer img { height: 2.25rem; width: auto; }

/* ---------- Small screens ---------- */
@media (max-width: 720px) {
  .nav a:not(.btn) { display: none; }
  .price-rows li { flex-direction: column; align-items: flex-start; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  * { transition: none !important; }
}
