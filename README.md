# ServiceFoundry U.S. (Next.js)

Built with Next.js so it deploys directly on Vercel from GitHub.

## Run it on your computer

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy with GitHub and Vercel

1. Create a GitHub repository and upload everything in this folder. Put `package.json` at the top level.
2. In Vercel, choose "Add New Project," import the repository, and deploy. Vercel detects Next.js automatically.
3. Every future commit to GitHub redeploys the site.

## Where to make common changes

All content lives in `lib/data.js`:

- **Mark a trade as fully researched:** change its `status` from `"in-progress"` to `"available"`. Its courses then show purchase buttons.
- **Add a trade:** add an entry to `trades`. It appears on the Trades page and in the request form.
- **Change prices:** edit `prices`. These are placeholders from the earlier draft; confirm them before launch.
- **Change request stages or their wording:** edit `stages`.
- **Change the sample account:** edit `sampleRequest`.

Styling is in `app/globals.css`. Colors are variables at the top (`--black`, `--white`, `--accent-a`, `--accent-b`).

## What's built and what's not

Built:
- Home, Trades (available and in-progress courses), trade detail, request form, and account status page
- Four request stages: Received, Under review, Approved, Declined
- Request validation and a stub API route at `app/api/requests/route.js`

Not connected yet:
- **Saving requests:** the API validates input but doesn't store it. Connect a database such as Supabase or Vercel Postgres.
- **Emails:** no emails are sent yet. Connect an email service such as Resend, sent from your company address. Send one email at each stage, each with a link to the account page.
- **Accounts and login:** the account page shows sample data. Add an auth service such as Supabase Auth, Clerk, or Auth.js.
- **Payments:** course purchase buttons are disabled. Connect Stripe Checkout for one-time purchases.
- **Staff review tool:** you'll need a private page or dashboard to move requests between stages. That's what triggers each email.
