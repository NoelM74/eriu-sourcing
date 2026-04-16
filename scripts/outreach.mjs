/**
 * Eriu Sourcing — Resend Outreach Script
 *
 * Usage:
 *   node scripts/outreach.mjs
 *
 * Requires:
 *   RESEND_API_KEY set in .env (or as an environment variable)
 *
 * Before running, edit the `recipients` array and the email template below.
 */

import { Resend } from 'resend';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Load .env manually (no dotenv dependency needed in Node 20+)
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, '../.env');
try {
  const envFile = readFileSync(envPath, 'utf8');
  for (const line of envFile.split('\n')) {
    const [key, ...rest] = line.split('=');
    if (key && rest.length) {
      process.env[key.trim()] = rest.join('=').trim();
    }
  }
} catch {
  // .env not found — rely on environment variables already set
}

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  console.error('Error: RESEND_API_KEY is not set.');
  process.exit(1);
}

const resend = new Resend(apiKey);

// --- Edit your recipients here ---
const recipients = [
  { name: 'Jane Smith',   email: 'jane@example.com',   company: 'Acme Ltd' },
  { name: 'John Doe',     email: 'john@example.com',   company: 'Beta Co' },
];

// --- Email template ---
function buildEmail(recipient) {
  return {
    from: 'Noel @ Eriu Sourcing <noel@eriusourcing.com>',
    to:   `${recipient.name} <${recipient.email}>`,
    subject: `Sourcing from China for ${recipient.company} — Eriu Sourcing`,
    html: `
      <p>Hi ${recipient.name},</p>

      <p>
        I'm Noel from <strong>Eriu Sourcing</strong> — we help Irish and European
        businesses source products directly from vetted factories in China, cutting
        out middlemen and reducing costs by 20–50%.
      </p>

      <p>
        Whether you're looking for fashion &amp; apparel, electronics, furniture,
        or anything in between, we manage the full process: factory vetting,
        samples, QC, and shipping.
      </p>

      <p>
        Would it be worth a quick 15-minute call to see if we could save
        ${recipient.company} money on your next order?
      </p>

      <p>
        <a href="https://eriusourcing.com/contact">Get a free quote</a> or just
        reply to this email.
      </p>

      <p>
        Best,<br/>
        Noel<br/>
        <a href="https://eriusourcing.com">eriusourcing.com</a><br/>
        +353 87 118 7806
      </p>
    `,
  };
}

// --- Send loop with rate limiting ---
async function sendAll() {
  console.log(`Sending to ${recipients.length} recipient(s)...\n`);

  for (const recipient of recipients) {
    try {
      const { data, error } = await resend.emails.send(buildEmail(recipient));

      if (error) {
        console.error(`FAILED  ${recipient.email} — ${error.message}`);
      } else {
        console.log(`SENT    ${recipient.email} (id: ${data.id})`);
      }
    } catch (err) {
      console.error(`ERROR   ${recipient.email} — ${err.message}`);
    }

    // Small delay between sends to stay within Resend rate limits
    await new Promise(r => setTimeout(r, 500));
  }

  console.log('\nDone.');
}

sendAll();
