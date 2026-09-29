# CLAUDE.md: Steady Local website project

Working brief for building this site (target platform: **Base44**). Everything decided so far lives here. A static HTML reference build is in this repo (`index.html`, `audit.html`, `terms.html`, `assets/`). Use it as the layout and copy source.

## 1. The business

- **Offer:** "Website as a Service" for local small businesses. A custom-built site, fully managed, for a flat monthly fee, plus analytics, SEO, AEO (answer-engine optimization), a website chatbot, and an internal knowledge assistant.
- **Model reference:** suncoastlocal.com (Sarasota FL). Their offer: $749 setup + $179/mo founding rate ("future price $1,999 + $249/mo"), custom PHP site, managed hosting, AI chatbot, 3 blog posts/week, 10 local landing pages, lead capture, free 10-15 page audit PDF (their "$250 value"), free guides, monthly newsletter, portfolio, city pages. We copy the *model*, not their wording.
- **Owner:** Michel Garcia-Miranda. Operator background, healthcare operations, brand "The 3AM Shift" (theme: "Run on Systems. Not on Guesswork."). Building systems, content, and AI agents/workflows for small organizations.
- **Legal entity idea:** SOLVY LLC exists as a name in the repo; **brand name is not final**. Working name: **Steady Local** (alternatives: Plainspoken Web, Lantern Local, Keel Web, Two-State Web). Domain/trademark availability not checked. Swap the name in one place when decided.

## 2. Markets

Two hubs. Do **not** claim "local roots" in both. Say "serving Central Florida and North Alabama" and show a real address only where one exists.
- **Central Florida (Davenport, FL):** Davenport, ChampionsGate, Haines City, Winter Haven, Kissimmee, Lakeland (Polk County).
- **North Alabama (Huntsville, AL):** Huntsville, Madison, Athens, Decatur, Hampton Cove (Madison County).
- Target clients: home services (roofing, pool, lawn, HVAC, trades) and similar local service businesses.

## 3. Pricing (current decision, updated after competitor review)

| Package | Monthly | Down | Includes |
|---|---|---|---|
| **Foundation** | $149 | $0 on a 12-month term, or $499 setup month-to-month | Custom site (up to 6 pages) plus local city pages, managed hosting and backups, GA4 + Search Console setup, on-page SEO/AEO basics, website chatbot, weekly blog content, small edits (up to 60 min/mo), monthly report |
| **Growth** (most popular) | $349 | $0 on a 12-month term | Foundation + unlimited edits (fair use), monthly SEO/AEO optimization, Google Business Profile management, review-request automation, citation cleanup, ranking and AI-visibility reporting |
| **Operator** | $499 | $500 one-time assistant onboarding | Growth + knowledge assistant (internal AI trained on the client's SOPs, price lists, FAQs), quarterly systems review, priority support |

- **Founding rate** is locked for life for the **first 10 clients per market** (20 total).
- **Standard rates after founding window:** Foundation $199/mo, Growth $449/mo, Operator $649/mo.
- **Pilot option:** first 5 clients per market at $0 down + $149/mo in exchange for a testimonial and case-study rights. These become the portfolio.
- **Contract:** $0-down plans have a 12-month minimum, then month-to-month with no fees (matches every competitor reviewed). Paying the $499 Foundation setup keeps the client month-to-month.
- **Guarantee:** 30-day trial after launch. Cancel within 30 days of going live and owe nothing more (beats Golden Coast's 14 days). **No ranking or AI-citation guarantees.**
- **Ownership:** client owns domain (registered in their name), content, and brand. Custom code stays with us unless bought out. **Buyout schedule numbers not final** (suggested $1,500 in year one, declining).
- Extra pages beyond 6: quote per page (Golden Coast charges $99/page for reference).
- Do not go below $149/mo.
- Possible later upsells: standalone Google Business Profile management ($99/mo), review automation ($49/mo).

### Competitor research (checked Sep 2026; pages opened and read)
- **Golden Coast Digital** (goldencoastdigital.com): $150/mo, $0 down, 12-month minimum, only 3 pages, extra pages $99, blogs are custom quotes, unlimited edits, 14-day trial, 3-6 week delivery, dedicated SEO campaign add-on $2,500+/mo.
- **Green Cove Digital** (greencovedigital.com): $180/mo, $0 down, 12-month commitment then monthly, custom copy written for you, 2-4 weeks, domain/content go with client, code stays with builder.
- **Media Express / itguy.services** (Chicago): Starter $199, Professional $349 (GA4, blog), Growth $499 (AEO, suburb pages, AI chat), Premium $749, Enterprise $1,250. $0 down, setup waived on Growth+ with 12-month agreement.
- **Lifted Websites** (liftedwebsites.com): from $200/mo (WordPress), Growth $500 with 2 blog posts/month, no contracts. Sells AEO/GEO and local SEO as separate services.
- **CodeWays** ($97/mo, no setup), **Mr.Site** ($0 setup), **RateGather** ($33/mo hosting only), **Surmado** ($99-$150/mo).
- Central Florida agencies: $4,000-$15,000 setup, often $300-$1,500/mo retainers. Huntsville freelancers: $599-$1,299 setup, hosting from $79/mo.
- AEO/GEO retainers for small business start around $590/mo elsewhere.
- **Takeaways:** $0 down + 12-month term is the market norm. No one found bundles weekly blog + chatbot + analytics + city pages at $150-$200, and no one offers a knowledge assistant. Still worth mystery-shopping 3 competitors per market.

## 4. Positioning and voice

- Voice: direct, plain, operator-to-owner. No corporate jargon, no agency fluff. Strong, memorable lines. Short sentences. Concrete examples.
- Core line: **"Run on systems. Not on guesswork."**
- Differentiators: custom-built (not a template), numbers you can see (analytics + monthly report), AI-search readiness (AEO), a real person answers, one flat price.
- Avoid unverifiable claims: no "$12,000 value" unless true, no guaranteed Lighthouse 100 or rankings. Use "target" or "built for speed" language.
- Healthcare note: never put protected health information into any chatbot or assistant without signed agreements. This is stated on the terms page.

## 5. Site structure (from the reference build)

**Home (`/`)** sections, in order:
1. Sticky header: logo, Services, How it works, Pricing, FAQ, "Free Audit" button.
2. Hero: eyebrow "Central Florida & North Alabama", H1 "Run on systems. Not on guesswork.", subhead, CTAs (Get my free audit / See pricing), checks (Branded PDF in 48 hours / No credit card / 30-day trial after launch), 3-stat strip, and a mock chatbot panel ("Ask Riverside Roofing", scripted 4-message exchange about emergency tarps).
3. Why us (3 cards): custom code not templates; you see the numbers; a real person answers.
4. Services (8 cards): custom website, managed hosting, GA4 + Search Console, SEO, AEO and AI search, website chatbot, knowledge assistant, weekly content.
5. How it works (3 steps): free audit, we build, approve and launch.
6. Pricing: the 3 tiers above, middle tier highlighted, standard-rate footnote, guarantee box.
7. Service areas: two cards (Central Florida, North Alabama).
8. FAQ: ownership, ranking guarantees, SEO vs AEO, knowledge assistant, custom vs WordPress, timeline. Add FAQPage schema.
9. Closing CTA band: "See what your site is missing." Free audit.
10. Footer: copyright, Davenport FL / Huntsville AL, Terms & AI Policy, email, phone.

**Free audit page:** form fields: name, email, phone (optional), business name, current website URL, "what matters most" (more calls/leads, show up on Google, show up in AI search, replace outdated site). Success message: "We'll send your audit within 48 hours."

**Terms & AI Policy page:** website chatbot limits, knowledge assistant data rules (no passwords, card data, or PHI without agreements), data not sold and deletable on request, no ranking guarantees, ownership and cancellation, 30-day refund. **Draft. Needs attorney review.**

**Not built yet (candidates):** portfolio, blog, free guides/lead magnets (e.g. "27-point local SEO audit", "AI search survival guide"), monthly newsletter signup, city landing pages (one per town), client login, about page.

## 6. Design direction

- Inspired (layout ideas only, no code copied) by 21st.dev previews: hero with floating chat/demo panel, glass-style stats strip, three-tier pricing with animated highlighted middle plan, feature grid cards.
- Palette in the reference build: white/deep navy, brand blue `#0b5fff`, accent orange `#ff8a1f`, soft blue-gray surfaces. Supports dark mode. System font stack. Mobile-first, 16px gutters, no horizontal scroll.
- Respect `prefers-reduced-motion`. Keep one strong animated moment (chat demo) and leave the rest quiet.

## 7. SEO / AEO requirements for the site itself

- JSON-LD: `ProfessionalService` (areaServed: Davenport FL, Polk County FL, Huntsville AL, Madison County AL) and `FAQPage`.
- One H1 per page, descriptive titles and meta descriptions, clean URLs.
- Plan one landing page per city served.
- Set up Google Analytics 4 and Search Console for the site itself, submit the sitemap. Add a Google Business Profile for each hub where a real address exists.

## 8. Base44 build notes

- Base44 builds apps from a description, with its own hosting, entities (data models), and forms. Suggested approach: create the app from Sections 1-7, then refine page by page.
- Suggested entities: **Lead** (name, email, phone, business, website, goal, market, source, status, created date), **AuditRequest** (linked to Lead, audit PDF sent flag, notes), later **Client** (package, start date, market, founding/pilot flag, monthly rate) and **BlogPost**.
- Lead form must save to the Lead entity and send an email notification to the owner. Show the success message inline.
- Keep the founding-slot counter ("X of 10 left in Davenport / Huntsville") as an editable setting, not hard-coded, and only show real numbers.
- The chatbot on the marketing site should answer only from approved content (services, pricing, service areas, FAQ) and capture leads. The hero chat is a scripted mock until a real bot exists.
- Connect a custom domain once the brand name is chosen.

## 9. Open decisions and to-do

1. Final brand name, then check domain and trademark.
2. Real contact email, phone, and any physical address (per hub).
3. Buyout schedule numbers.
5. Attorney review of terms page and service agreement.
6. Build one real demo site for a local business (pool, lawn, roofing) as the first portfolio piece.
7. Write the audit PDF template (speed, SEO, schema, Google Business Profile, AI-search readiness, prioritized fix list) linking to the paid tiers.
8. Real chatbot demo behind the hero panel.
9. Outreach plan: about 20 free audits per week per market, targeting weak sites with good reviews.
10. Mystery-shop 3 competitors per market to confirm pricing.
11. Knowledge assistant: cap at the first 3-5 clients until there is a repeatable onboarding checklist.

## 10. Working rules for Claude in this repo

- Develop on branch `claude/nifty-einstein-udhenl`. Do not open a PR unless asked.
- Keep copy plain and in the owner's operator voice. No filler, no hype.
- Never state pricing, guarantees, or claims that differ from Section 3 without asking.
- Do not include model identifiers in commits or repo files.
