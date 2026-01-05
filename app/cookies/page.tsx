// app/cookies/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Onmain",
  description: "Cookie Policy for Onmain",
};

const LAST_UPDATED = "2026-01-05";

export default function CookiePolicyPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-14 sm:py-16">
        <h1 className="text-4xl font-semibold tracking-tight text-black/90">
          Cookie Policy
        </h1>
        <p className="mt-2 text-sm text-black/55">Last updated: {LAST_UPDATED}</p>

        <div className="mt-10 space-y-10 text-[15.5px] leading-relaxed text-black/75">
          {/* 1 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">1. What cookies are</h2>
            <p className="mt-3">
              Cookies are small text files stored on your device when you visit a website. They help the
              website work properly, improve security, and remember preferences. Similar technologies
              (such as local storage or pixels) may be used for similar purposes; in this policy we refer
              to them together as “cookies”.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">2. How we use cookies</h2>
            <p className="mt-3">
              Onmain may use cookies to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>keep the site working and secure;</li>
              <li>remember basic preferences (where applicable);</li>
              <li>understand how the site is used so we can improve performance and usability (where enabled);</li>
              <li>support features such as contact forms, booking flows, and estimator/chatbot experiences (where available).</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">3. Types of cookies</h2>

            <div className="mt-3 space-y-5">
              <div>
                <div className="font-medium text-black/80">3.1 Strictly necessary cookies</div>
                <p className="mt-2">
                  These cookies are required for the website to function and cannot be switched off in our systems.
                  They are usually set in response to actions made by you, such as navigating pages, submitting forms,
                  or maintaining basic security.
                </p>
              </div>

              <div>
                <div className="font-medium text-black/80">3.2 Performance / analytics cookies (optional)</div>
                <p className="mt-2">
                  These cookies help us understand how visitors use the site (e.g., which pages are visited, time on page,
                  and errors). We use this information to improve site performance. Where required, these are used only
                  if you consent.
                </p>
              </div>

              <div>
                <div className="font-medium text-black/80">3.3 Functional cookies (optional)</div>
                <p className="mt-2">
                  These cookies allow the site to remember choices you make (for example, preferences) to provide
                  enhanced functionality. Where required, these are used only if you consent.
                </p>
              </div>

              <div>
                <div className="font-medium text-black/80">3.4 Marketing cookies (optional)</div>
                <p className="mt-2">
                  These cookies may be used to deliver relevant advertising or measure campaign effectiveness. We do not
                  enable marketing cookies unless you consent (where applicable).
                </p>
              </div>
            </div>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">4. Cookies we set</h2>
            <p className="mt-3">
              At the moment, we may use only minimal cookies required for the website to operate (for example, security
              and basic functionality). If we add analytics, marketing, or additional functional cookies in the future,
              we will update this policy and (where required) request consent via a cookie banner or settings panel.
            </p>
            <p className="mt-3 text-black/60">
              Note: Some cookies may be set by third-party services we use (for example, hosting, embedded content, or
              email/contact tooling). Those providers may set their own cookies according to their policies.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">5. Managing cookies</h2>
            <p className="mt-3">
              You can control and delete cookies through your browser settings. You can usually:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>see what cookies are stored and delete them individually;</li>
              <li>block third-party cookies;</li>
              <li>block cookies from specific sites;</li>
              <li>block all cookies.</li>
            </ul>
            <p className="mt-3">
              If you block cookies, some parts of the website may not work properly.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">6. “Do Not Track” signals</h2>
            <p className="mt-3">
              Some browsers offer a “Do Not Track” feature. There is no consistent industry standard for how websites
              should respond, so we do not currently respond to these signals. If this changes, we will update this policy.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">7. Changes to this policy</h2>
            <p className="mt-3">
              We may update this Cookie Policy from time to time. The “Last updated” date at the top will show when
              changes were made.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">8. Contact</h2>
            <p className="mt-3">
              If you have questions about cookies or this policy, contact us:
              <br />
              Email: sales@onmain.co.uk <br />
              Phone: +44 7926 230863 <br />
              Location: London, United Kingdom
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
