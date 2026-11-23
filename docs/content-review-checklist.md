# Content review checklist

Pages below are **drafts** (`draft: true` in `src/data/site.js`) and are served with
`noindex` until reviewed. To publish a page, review it against this list, then delete its
`draft: true` line.

Credibility levels follow the SEO Master Blueprint: *established* capability,
*developing* capability, or *transferable* expertise (industry pages). Nothing here claims
a specific project, client, result or product.

## All capability and industry pages
- [ ] Capability descriptions match what FluiDimensions can really deliver.
- [ ] Meta titles and descriptions (drafts) validated against the keyword map.
- [ ] Internal links and the "why" lines under them read correctly.

## Per page
| Page | Check |
|---|---|
| Engineering Simulation | Confirm CFD, FEA and multiphysics scope; confirm FEA/structural is offered. |
| Machine Learning & Data Intelligence | Marked *developing*. Confirm status and wording; no deployed-product claims. |
| Engineering Design | Confirm "sizing and configuration support" and "design inputs" are accurate. |
| Software & Automation | Confirm the cyclone-design automation example may be mentioned (shown on Cement and this page). |
| Chemical Engineering & Process Consulting | Confirm troubleshooting, optimisation and scale-up scope. |
| Chemical Process industry | Confirm sector focus; add approved project examples when available. |
| Cement industry | Confirm pyro-process, cyclone, combustion and calcination wording; no Combustion Engineering page exists yet (mentioned in the blueprint). |
| Pharmaceuticals industry | Confirm reactor modelling and scale-up wording. |
| Oil & Gas industry | Confirm fire-scenario and mechanical-performance scope. |

## Still to supply
- Approved project examples and images per industry (blueprint section 5).
- Whether an Industries landing page and a Combustion Engineering page are wanted.

## Phase 4 pages (also `draft`, `noindex`)
| Page | Check |
|---|---|
| About Us | Philosophy cards (Understand / Optimise / Innovate) are my reading of the tagline; confirm wording. Add team, experience and publications when approved. |
| Engineering Technologies & Software | No platform or Siemens product is named. Confirm partner scope, then fill the "Platforms" section. |
| Engineering Café | Confirm this "open conversation" form is the intended format (threaded discussion is not built). |
| Contact | Set `PUBLIC_FORM_ENDPOINT` (forms say "not connected" until then) and confirm `PUBLIC_CONTACT_EMAIL`. Resume upload needs a form service/plan that accepts attachments. Add a privacy policy page and link it. |

## Privacy Policy (`/privacy-policy/`, draft, `noindex`)
Written to match what the site does today (Web3Forms for enquiries, Vercel hosting, Google Analytics only if enabled). It is **not legal advice**: have it reviewed before launch.
- [ ] Confirm the legal entity name and add a postal address / contact email (set `PUBLIC_CONTACT_EMAIL` to show an email on the page).
- [ ] Decide real retention periods for enquiries and careers applications (the page currently says "as long as needed").
- [ ] Confirm which laws to cite (it mentions India's DPDP Act 2023 and the GDPR) and whether a cookie-consent banner is needed once Analytics is on.
- [ ] Update the policy whenever forms, analytics or hosting providers change (for example if Web3Forms is replaced, or resume uploads are enabled).
- [ ] Delete `draft: true` for `privacyPage` in `src/data/site.js` to publish it.

## Document-based content (added from websitecentral_aboutus_vision.docx)
Pages now carry real content condensed from your document. These need your sign-off before publishing (each page is still `draft`, so `noindex`).
- [ ] **Cement:** the predicted pressure-drop reductions (53%, 10%, 15%), "recommendations implemented by cement plants", and the automated cyclone design app. Confirm client permission and wording.
- [ ] **Pharmaceuticals:** the reactor reduced-order model example and Ferment IQ (labelled a demonstration). Confirm images and wording.
- [ ] **Oil & Gas:** separators, rotating jet tank mixing, roasters, FGD, fire modelling (distinguished from safety certification), FEA. Confirm exactly what was done on roasters and FGD.
- [ ] **Siemens:** product names on Technologies & Software (STAR-CCM+, Simcenter 3D, Amesim, CULGI) are taken from your document. Confirm the partner scope.
- [ ] **Leadership:** Ph.D., 25+ years, UOP India and Aditya Birla Science and Technology Centre. Confirm wording; add a name, photo and biography if wanted.
- [ ] **Steel & Metals, Automotive, Aerospace, Marine, Food & Beverage:** only the headline and generic application areas exist. Supply full content if you want full pages.
- [ ] Remove any claim you cannot support; condensed copy is in `src/data/doc.js`.
