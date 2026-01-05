import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Onmain",
  description: "Privacy Policy for Onmain",
};

const LAST_UPDATED = "2026-01-05";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-14 sm:py-16">
        <h1 className="text-4xl font-semibold tracking-tight text-black/90">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-black/55">Last updated: {LAST_UPDATED}</p>

        <div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.02] p-5 text-[15px] leading-relaxed text-black/75">
          <div className="text-sm font-semibold text-black/80">Quick summary</div>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              We primarily use personal data to respond to enquiries and deliver IT
              services/quotes.
            </li>
            <li>
              If you submit a form, call, email, or message us, we will process the
              details you provide.
            </li>
            <li>
              Our website/hosting may log basic technical data for security and reliability.
            </li>
            <li>
              We do not sell personal data. We may share it with service providers who help
              us run the website and communications.
            </li>
            <li>
              You can request access, correction, deletion, or object to certain processing.
            </li>
          </ul>
        </div>

        <div className="mt-10 space-y-10 text-[15.5px] leading-relaxed text-black/75">
          {/* 1 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">1. Who we are</h2>
            <p className="mt-3">
              Onmain (“we”, “us”, “our”) is responsible for personal data processed through
              this website and related enquiry channels (the “Services”).
            </p>
            <p className="mt-3">
              Company: Onmain (England &amp; Wales) <br />
              Company number: 14844512 <br />
              Email: sales@onmain.co.uk <br />
              Phone: +44 7926 230863 <br />
              Location: London, United Kingdom
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">2. Scope</h2>
            <p className="mt-3">This policy applies when you:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>browse this website;</li>
              <li>contact us (forms, email, phone, messaging);</li>
              <li>request a quote, repair, IT maintenance, or related support;</li>
              <li>
                use any estimator/chat or AI-assisted features on this site (where available).
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">
              3. Personal data we collect
            </h2>

            <div className="mt-3 space-y-5">
              <div>
                <div className="font-medium text-black/80">3.1 Information you provide</div>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>Contact details: name, email address, phone number.</li>
                  <li>
                    Enquiry/service details: device type, brand/model, symptoms, issue
                    description, preferred appointment times, and any information you choose to share.
                  </li>
                  <li>
                    Communications: messages you send us and our replies (including call notes where relevant).
                  </li>
                </ul>
              </div>

              <div>
                <div className="font-medium text-black/80">3.2 Information collected automatically</div>
                <p className="mt-2">
                  Like most websites, our hosting/infrastructure may automatically collect basic technical
                  data for security and reliability, such as IP address, device/browser type, requested pages,
                  timestamps, and error logs.
                </p>
                <p className="mt-2 text-black/60">
                  If you do not contact us, this type of technical data may be the only data processed when you
                  browse the site.
                </p>
              </div>

              <div>
                <div className="font-medium text-black/80">3.3 Special category (sensitive) data</div>
                <p className="mt-2">
                  We do not intentionally collect special category data (for example: health information).
                  Please avoid sharing sensitive information in free-text fields unless it is strictly necessary.
                </p>
              </div>
            </div>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">
              4. Cookies and similar technologies
            </h2>
            <p className="mt-3">
              Cookies are small files stored on your device. Some cookies are essential for the website to function.
              Others (like analytics/marketing cookies) are optional.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                We may use strictly necessary cookies to make the site work and keep it secure.
              </li>
              <li>
                We do not aim to use advertising/marketing cookies or behavioural tracking on this site.
              </li>
              <li>
                If we introduce analytics or optional cookies in the future, we will update this policy and,
                where required, provide choices/consent controls.
              </li>
            </ul>
            <p className="mt-3 text-black/60">
              You can also control cookies through your browser settings (blocking or deleting cookies may impact site functionality).
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">
              5. How we use your data and lawful bases
            </h2>
            <p className="mt-3">
              We process personal data only where permitted under UK data protection law. Depending on the context,
              our lawful bases may include: legitimate interests, steps prior to entering a contract, performance of a contract,
              legal obligations, and consent (where applicable).
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <div className="font-medium text-black/80">5.1 Responding to enquiries and providing quotes</div>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>Purpose: reply, troubleshoot, quote, and arrange next steps.</li>
                  <li>Lawful basis: legitimate interests and/or steps prior to contract.</li>
                </ul>
              </div>

              <div>
                <div className="font-medium text-black/80">5.2 Delivering services</div>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>Purpose: bookings, repairs/maintenance, updates, completion and aftercare.</li>
                  <li>Lawful basis: performance of a contract.</li>
                </ul>
              </div>

              <div>
                <div className="font-medium text-black/80">5.3 Operating, securing, and improving the site</div>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>Purpose: security monitoring, preventing abuse, diagnostics, and reliability.</li>
                  <li>Lawful basis: legitimate interests and/or legal obligations.</li>
                </ul>
              </div>

              <div>
                <div className="font-medium text-black/80">5.4 Estimator / AI-assisted features (where available)</div>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>
                    Purpose: understand your enquiry, provide a guidance estimate, and route your case to a human technician where needed.
                  </li>
                  <li>Lawful basis: legitimate interests and/or steps prior to contract.</li>
                  <li>
                    Important: estimates are guidance only; final pricing may require inspection/diagnosis.
                  </li>
                </ul>
              </div>

              <div>
                <div className="font-medium text-black/80">5.5 Marketing</div>
                <p className="mt-2">
                  If we send marketing communications, we will do so only where permitted by law.
                  You can opt out at any time by contacting us or using an unsubscribe option (where provided).
                </p>
              </div>
            </div>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">
              6. Who we share personal data with
            </h2>
            <p className="mt-3">
              We may share personal data with trusted service providers who help us run the Services.
              We do not sell personal data.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Hosting/infrastructure providers (website delivery, storage, logging).</li>
              <li>Email/communications providers (to send replies and service updates).</li>
              <li>Tools used to manage enquiries and support cases.</li>
              <li>Professional advisers (legal/accounting) where necessary.</li>
              <li>
                Technicians/contractors involved in your service request (only what’s needed to complete the job).
              </li>
            </ul>
            <p className="mt-3 text-black/60">
              Where a provider processes data on our behalf, they are required to keep it secure and follow our instructions.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">7. International transfers</h2>
            <p className="mt-3">
              Some service providers may process data outside the UK. Where this happens, we use appropriate safeguards
              to protect personal data (for example, adequacy regulations and/or contractual protections).
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">8. Data retention</h2>
            <p className="mt-3">
              We keep personal data only for as long as necessary for the purposes described in this policy, including
              legal, accounting, and dispute resolution requirements.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>General enquiries: typically up to 24 months.</li>
              <li>Service/repair records: typically up to 6 years.</li>
              <li>Security/technical logs: typically up to 12 months.</li>
              <li>Marketing preferences: until you opt out/unsubscribe.</li>
            </ul>
            <p className="mt-3 text-black/60">
              Retention may vary depending on the service and legal requirements.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">9. Security</h2>
            <p className="mt-3">
              We use reasonable technical and organisational measures to protect personal data, including access controls
              and secure systems. No transmission or storage method is 100% secure, but we work to minimise risk.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">10. Your rights</h2>
            <p className="mt-3">
              Depending on the circumstances, you may have rights including:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Access to your personal data.</li>
              <li>Correction of inaccurate data.</li>
              <li>Deletion (where applicable).</li>
              <li>Restriction of processing (where applicable).</li>
              <li>Data portability (where applicable).</li>
              <li>Objection to processing (including direct marketing).</li>
              <li>Withdrawal of consent (where consent is used).</li>
            </ul>
            <p className="mt-3">
              To exercise your rights, contact us using the details in section 13. We may need to verify your identity.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">11. Complaints</h2>
            <p className="mt-3">
              If you have concerns, contact us first and we will try to resolve them. You also have the right to lodge a
              complaint with the UK supervisory authority, the Information Commissioner’s Office (ICO).
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">12. Children</h2>
            <p className="mt-3">
              Our Services are not directed at children. If you believe a child has provided personal data to us, contact us
              and we will address it.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">13. Contact</h2>
            <p className="mt-3">
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
