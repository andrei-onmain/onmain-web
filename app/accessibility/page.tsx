// app/accessibility/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility | Onmain",
  description: "Accessibility statement for Onmain",
};

const LAST_UPDATED = "2026-01-05";

export default function AccessibilityPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-14 sm:py-16">
        <h1 className="text-4xl font-semibold tracking-tight text-black/90">
          Accessibility statement
        </h1>
        <p className="mt-2 text-sm text-black/55">Last updated: {LAST_UPDATED}</p>

        <div className="mt-10 space-y-10 text-[15.5px] leading-relaxed text-black/75">
          {/* 1 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">1. Our commitment</h2>
            <p className="mt-3">
              Onmain is committed to making this website accessible and usable for as many people as possible.
              We aim to provide an inclusive experience across devices, browsers, and assistive technologies.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">2. Standards we aim to follow</h2>
            <p className="mt-3">
              We aim to meet the requirements of the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
              where reasonably practicable.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">3. Accessibility features</h2>
            <p className="mt-3">We have designed this website with accessibility in mind, including:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>responsive layouts for mobile, tablet, and desktop;</li>
              <li>keyboard navigation support for key interactions (where applicable);</li>
              <li>clear headings and readable typography;</li>
              <li>reasonable colour contrast in most areas;</li>
              <li>support for browser zoom and text resizing.</li>
            </ul>
            <p className="mt-3 text-black/60">
              Note: Some animations may be present for visual polish. If you use reduced-motion settings at
              OS/browser level, we aim to respect them where supported.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">4. Known limitations</h2>
            <p className="mt-3">
              We are continually improving the site. Some pages or components may not fully meet every
              accessibility requirement at all times (for example: third-party embeds, complex animations,
              or content that has not yet been optimised).
            </p>
            <p className="mt-3">
              If you experience any difficulty using the site, please contact us and we will help.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">5. Requesting help or alternative formats</h2>
            <p className="mt-3">
              If you need information from this website in a different format (for example, accessible PDF,
              large text, or plain text), contact us and tell us:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>the page URL (or page name);</li>
              <li>what you’re trying to do;</li>
              <li>the format you need.</li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">6. Feedback and contact</h2>
            <p className="mt-3">
              If you find an accessibility issue or have suggestions, please contact us:
              <br />
              Email: sales@onmain.co.uk <br />
              Phone: +44 7926 230863 <br />
              Location: London, United Kingdom
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">7. Enforcement / legal context (UK)</h2>
            <p className="mt-3">
              We aim to comply with applicable accessibility and equality requirements. If you are not satisfied
              with our response, you may seek independent advice or raise the matter with an appropriate UK body.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">8. Changes to this statement</h2>
            <p className="mt-3">
              We may update this statement as the website evolves. The “Last updated” date at the top will show
              when changes were made.
            </p>
          </section>

          <div className="pt-2 text-xs text-black/45">
            Note: This page is provided for general transparency and is not legal advice.
          </div>
        </div>
      </div>
    </main>
  );
}
