# DAYSTARS

The DAYSTARS marketing site. Next.js App Router, TypeScript, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` before adding contact details, email delivery, or analytics. Restart the dev server after changing environment variables.

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint

There is no automated test suite in this project.

## Environment variables

Public values are safe to expose. They are omitted from the interface when empty, so do not invent contact details.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site origin, used for metadata, sitemap, and structured data |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public studio email |
| `NEXT_PUBLIC_CONTACT_PHONE` | Public phone number |
| `NEXT_PUBLIC_CONTACT_ADDRESS` | Public address line |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number, digits with country code |
| `NEXT_PUBLIC_SOCIAL_INSTAGRAM` | Profile URL |
| `NEXT_PUBLIC_SOCIAL_LINKEDIN` | Profile URL |
| `NEXT_PUBLIC_SOCIAL_X` | Profile URL |
| `NEXT_PUBLIC_SOCIAL_FACEBOOK` | Profile URL |
| `NEXT_PUBLIC_CURRENCY` | Currency code for future budget ranges. Default `GHS` |
| `NEXT_PUBLIC_SCHEDULING_URL` | Real scheduling link. Hidden until set |
| `NEXT_PUBLIC_ANALYTICS_PROVIDER` | Set to `plausible` to enable analytics |
| `NEXT_PUBLIC_ANALYTICS_DOMAIN` | Plausible domain |
| `RESEND_API_KEY` | Server-only Resend API key |
| `CONTACT_TO_EMAIL` | Inbox that receives enquiries |
| `CONTACT_FROM_EMAIL` | Verified Resend sender, for example `DAYSTARS <enquiries@yourdomain.com>` |

The enquiry form reports success only after Resend accepts the message. Until all three server variables are set, submissions are rejected and are not stored.

Analytics, when enabled, records page and click events only. Names, emails, and project descriptions are not included.

The contact endpoint rate-limits by IP in process memory (5 requests each 10 minutes). That limit resets on restart and is not shared across multiple server instances. Replace it with a shared store if the site runs more than one instance.

## Content the owner should supply

Edit the TypeScript content modules rather than scattering copy through components.

- `lib/site-config.ts` — brand lines already set; contact details come from the environment
- `lib/services.ts` — five services
- `lib/projects.ts` — concept projects, clearly labeled as self-initiated
- `lib/packages.ts` — Foundation, Growth, and Acceleration. No prices
- `lib/faqs.ts` — questions, principles, process, and values
- `lib/form-options.ts` — form choices, including budget direction

Replace the qualitative budget options with approved ranges before publishing prices. Do not add testimonials, client logos, team names, or performance figures until they are real and permitted.

Privacy and terms pages are drafts for review. They are not legal advice.

Portfolio pieces are original concept studies. Replace them when real work can be shown, and do not present the concepts as client results.

## Deployment

The site is not deployed from this repository setup. A typical production path:

1. Push the project to the host of your choice.
2. Set `NEXT_PUBLIC_SITE_URL` to the production origin.
3. Set the contact and Resend variables if the form should deliver email.
4. Run `npm run build`.
5. Confirm the contact form, sitemap (`/sitemap.xml`), and a service and case-study URL on the live domain.

`CONTACT_FROM_EMAIL` must be a sender Resend has verified for the domain.
