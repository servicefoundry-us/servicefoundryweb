// Receives a "request a trade" submission.
//
// CURRENTLY: validates the input and returns an id. It does NOT save the request
// or send an email yet, because those need a database and an email service.
//
// TO CONNECT (see README):
//   1. Save the request to a database (e.g., Supabase or Vercel Postgres).
//   2. Send the "Received" email from your company address (e.g., Resend).
//   3. Later, when staff change the stage, send the matching email and update the account.

import { trades, services } from "../../../lib/data";
import { randomUUID } from "crypto";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "The form data couldn't be read. Please try again." }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const trade = String(body.trade || "").trim();
  const otherTrade = String(body.otherTrade || "").trim();
  const location = String(body.location || "").trim();
  const background = String(body.background || "").trim();
  const requestedServices = Array.isArray(body.services) ? body.services : [];
  const validServiceIds = services.map((s) => s.id);

  if (!name) return Response.json({ error: "Please enter your name." }, { status: 400 });
  if (!EMAIL_PATTERN.test(email)) return Response.json({ error: "Please enter a valid email address." }, { status: 400 });

  const knownTrade = trades.some((t) => t.slug === trade);
  if (!knownTrade && trade !== "other") {
    return Response.json({ error: "Please choose a trade from the list." }, { status: 400 });
  }
  if (trade === "other" && !otherTrade) {
    return Response.json({ error: "Please tell us which trade you want to start." }, { status: 400 });
  }

  const cleanServices = requestedServices.filter((id) => validServiceIds.includes(id));
  if (cleanServices.length === 0) {
    return Response.json({ error: "Please choose business design, business management, or both." }, { status: 400 });
  }

  const record = {
    id: randomUUID(),
    name,
    email,
    trade: knownTrade ? trade : otherTrade,
    location,
    services: cleanServices,
    background,
    stage: "received",
    submittedAt: new Date().toISOString(),
  };

  // Placeholder: replace with a database insert and a "Received" email.
  console.log("[request received]", { id: record.id, trade: record.trade, services: record.services });

  return Response.json({ ok: true, id: record.id, stage: record.stage, emailSent: false }, { status: 201 });
}
