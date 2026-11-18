"use client";

import { useState } from "react";
import { trades, services } from "../lib/data";

const OTHER = "other";

export default function RequestForm({ initialTrade = "" }) {
  const knownTrade = trades.some((t) => t.slug === initialTrade);
  const [form, setForm] = useState({
    name: "",
    email: "",
    trade: knownTrade ? initialTrade : initialTrade ? OTHER : "",
    otherTrade: knownTrade ? "" : initialTrade,
    location: "",
    services: [],
    background: "",
    consent: false,
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function toggleService(id) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ state: "sending", message: "" });

    try {
      const response = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) {
        setStatus({ state: "error", message: data.error || "Something went wrong. Please try again." });
        return;
      }
      setStatus({
        state: "done",
        message: `Request received. Track its status in My account. Updates will go to ${form.email}.`,
      });
    } catch {
      setStatus({ state: "error", message: "We couldn't send your request. Check your connection and try again." });
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Full name</label>
        <input id="name" required value={form.name} onChange={(e) => update("name", e.target.value)} />
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} />
        <span className="hint">We send every update here.</span>
      </div>

      <div className="field">
        <label htmlFor="trade">Trade you want to start</label>
        <select id="trade" required value={form.trade} onChange={(e) => update("trade", e.target.value)}>
          <option value="">Choose a trade</option>
          {trades.map((t) => (
            <option key={t.slug} value={t.slug}>{t.name}</option>
          ))}
          <option value={OTHER}>Another trade</option>
        </select>
      </div>

      {form.trade === OTHER && (
        <div className="field">
          <label htmlFor="otherTrade">Which trade?</label>
          <input id="otherTrade" required value={form.otherTrade} onChange={(e) => update("otherTrade", e.target.value)} />
        </div>
      )}

      <div className="field">
        <label htmlFor="location">City and state</label>
        <input id="location" value={form.location} onChange={(e) => update("location", e.target.value)} />
      </div>

      <fieldset className="field" style={{ border: "none", padding: 0, margin: 0 }}>
        <legend style={{ fontWeight: 800, marginBottom: "0.5rem" }}>Services you want</legend>
        <div className="checks">
          {services.map((s) => (
            <label key={s.id}>
              <input
                type="checkbox"
                checked={form.services.includes(s.id)}
                onChange={() => toggleService(s.id)}
              />
              <span>
                {s.label}
                <small>{s.description}</small>
              </span>
            </label>
          ))}
        </div>
        <span className="hint">Choose one or both. We'll confirm what's approved.</span>
      </fieldset>

      <div className="field">
        <label htmlFor="background">Tell us about your background and goals</label>
        <textarea id="background" value={form.background} onChange={(e) => update("background", e.target.value)} />
      </div>

      <label className="checks" style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
        <input
          type="checkbox"
          required
          checked={form.consent}
          onChange={(e) => update("consent", e.target.checked)}
        />
        <span>I agree to receive emails about my request. I can unsubscribe from marketing emails at any time.</span>
      </label>

      <div>
        <button type="submit" className="btn btn-accent" disabled={status.state === "sending"}>
          {status.state === "sending" ? "Sending…" : "Send request"}
        </button>
      </div>

      {status.message && (
        <p className={`status-msg ${status.state === "error" ? "err" : "ok"}`} role="status">
          {status.message}
        </p>
      )}
    </form>
  );
}
