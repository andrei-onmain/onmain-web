// app/terms/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms | Onmain",
  description: "Terms and Conditions for Onmain",
};

const LAST_UPDATED = "2026-01-05";

export default function TermsPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-14 sm:py-16">
        <h1 className="text-4xl font-semibold tracking-tight text-black/90">
          Terms and Conditions
        </h1>
        <p className="mt-2 text-sm text-black/55">Last updated: {LAST_UPDATED}</p>

        <div className="mt-10 space-y-10 text-[15.5px] leading-relaxed text-black/75">
          {/* 1 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">1. Who we are</h2>
            <p className="mt-3">
              These Terms apply to your use of the Onmain website and any services we provide (including
              Onmain Systems and MainSearch AI where relevant).
            </p>
            <p className="mt-3">
              Business name: Onmain (England &amp; Wales) <br />
              Company number: 14844512 <br />
              Email: sales@onmain.co.uk <br />
              Phone: +44 7926 230863 <br />
              Location: London, United Kingdom
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">2. Definitions</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <span className="font-medium text-black/80">“Website”</span> means onmain.co.uk and related
                pages/subdomains we operate.
              </li>
              <li>
                <span className="font-medium text-black/80">“Services”</span> means any IT maintenance,
                diagnostics, support, website work, and other services we agree to provide.
              </li>
              <li>
                <span className="font-medium text-black/80">“Hardware Repair Services”</span> means device
                repair services (diagnostics/repair/replacement parts). These are covered in an addendum
                below and apply only when we accept a hardware repair job.
              </li>
              <li>
                <span className="font-medium text-black/80">“You/Customer”</span> means the person or business
                using the Website or requesting Services.
              </li>
              <li>
                <span className="font-medium text-black/80">“We/Us/Onmain”</span> means Onmain.
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">3. Agreement and updates</h2>
            <p className="mt-3">
              By using the Website or requesting Services, you agree to these Terms. We may update these Terms
              from time to time. The “Last updated” date above shows when changes were made.
            </p>
          </section>

          {/* WEBSITE TERMS */}
          <section>
            <h2 className="text-xl font-semibold tracking-tight text-black/90">
              Part A — Website Terms
            </h2>
          </section>

          {/* A1 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">4. Website use</h2>
            <p className="mt-3">
              You may use the Website for lawful purposes only. You must not misuse the Website, attempt to
              gain unauthorised access, disrupt service availability, or use automated systems to scrape or
              copy content at scale without permission.
            </p>
          </section>

          {/* A2 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">5. Content and intellectual property</h2>
            <p className="mt-3">
              The Website content (including text, branding, designs, and layout) is owned by or licensed to
              Onmain and is protected by intellectual property laws. You may view and print pages for your own
              personal or internal business use, but you must not reproduce, distribute, or create derivative
              works without written permission.
            </p>
          </section>

          {/* A3 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">6. Links to third parties</h2>
            <p className="mt-3">
              The Website may contain links to third-party sites. We do not control those sites and are not
              responsible for their content, policies, or availability. Accessing third-party links is at your
              own risk.
            </p>
          </section>

          {/* A4 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">7. Availability and changes</h2>
            <p className="mt-3">
              We aim to keep the Website available and accurate, but we do not guarantee uninterrupted access.
              We may modify, suspend, or remove parts of the Website at any time.
            </p>
          </section>

          {/* A5 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">8. Estimators, chatbots, and automated tools</h2>
            <p className="mt-3">
              If the Website provides estimator/chatbot features, outputs are guidance only and may be based on
              limited information. Final pricing, scope, and feasibility may require inspection or clarification.
              You should not rely on automated outputs as professional advice.
            </p>
          </section>

          {/* SERVICES TERMS */}
          <section>
            <h2 className="text-xl font-semibold tracking-tight text-black/90">
              Part B — General Service Terms (IT maintenance, support, projects)
            </h2>
          </section>

          {/* B1 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">9. Quotes and scope</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Any quote/estimate is based on the information you provide and may change if the scope,
                requirements, or underlying issue changes.
              </li>
              <li>
                Where we provide an estimate range, the final price may require additional confirmation after
                diagnosis, testing, or review of requirements.
              </li>
              <li>
                Unless agreed otherwise, services are limited to the scope explicitly confirmed in writing
                (message/email/booking).
              </li>
            </ul>
          </section>

          {/* B2 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">10. Booking, access, and customer responsibilities</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                You must provide accurate information and reasonable access to devices, accounts, premises, or
                stakeholders needed to deliver the Services.
              </li>
              <li>
                You are responsible for maintaining your own backups unless we explicitly agree in writing to
                provide backup services.
              </li>
              <li>
                Where account credentials are required, you should use secure methods and only share access
                necessary for the task.
              </li>
              <li>
                You must ensure you have rights/permissions to any software, content, data, or systems you ask
                us to work with.
              </li>
            </ul>
          </section>

          {/* B3 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">11. Third-party products and services</h2>
            <p className="mt-3">
              Some services may depend on third-party providers (hosting, software licences, cloud platforms,
              payment processors, etc.). We are not responsible for third-party outages, changes, or failures.
              Any third-party fees are typically separate unless we explicitly include them in a written quote.
            </p>
          </section>

          {/* B4 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">12. Changes and additional work</h2>
            <p className="mt-3">
              If you request changes outside the agreed scope, we may require a revised quote or timeline.
              We may pause work until changes are confirmed.
            </p>
          </section>

          {/* B5 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">13. Fees, payment, and late payment</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Fees are payable as agreed in the quote/booking. Some work may require an advance payment or
                deposit (for example, project work or reserved time slots).
              </li>
              <li>
                Unless agreed otherwise, invoices are due on receipt.
              </li>
              <li>
                We may suspend Services for overdue balances.
              </li>
            </ul>
          </section>

          {/* B6 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">14. Cancellations</h2>
            <p className="mt-3">
              If you cancel or reschedule, please notify us as early as possible. Where we have reserved time,
              booked travel, or started work, you may be charged for time spent and any non-refundable costs
              already incurred.
            </p>
          </section>

          {/* B7 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">15. Warranties and disclaimers (general services)</h2>
            <p className="mt-3">
              We will provide Services with reasonable care and skill. Except where required by law, we do not
              guarantee that Services will be error-free or uninterrupted, or that issues will never reoccur
              due to external factors (updates, user changes, third-party changes, new malware, hardware failure,
              etc.).
            </p>
          </section>

          {/* B8 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">16. Limitation of liability</h2>
            <p className="mt-3">
              Nothing in these Terms limits liability where it would be unlawful to do so (including for death
              or personal injury caused by negligence, fraud, or fraudulent misrepresentation).
            </p>
            <p className="mt-3">
              Subject to the above, to the extent permitted by law, we are not liable for:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>loss of profits, revenue, business, goodwill, or anticipated savings;</li>
              <li>indirect or consequential loss;</li>
              <li>loss of data where you have not maintained backups (unless agreed otherwise in writing);</li>
              <li>issues caused by third-party providers or factors outside our reasonable control.</li>
            </ul>
            <p className="mt-3">
              Where liability is permitted, our total liability for a claim will not exceed the fees you paid to
              us for the specific Services giving rise to the claim.
            </p>
          </section>

          {/* B9 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">17. Consumer rights</h2>
            <p className="mt-3">
              If you are a consumer (not acting for business purposes), UK consumer laws give you rights that
              cannot be excluded. These Terms do not affect those rights.
            </p>
          </section>

          {/* HARDWARE ADDENDUM */}
          <section>
            <h2 className="text-xl font-semibold tracking-tight text-black/90">
              Part C — Hardware Repair Services Addendum (Onmain Systems)
            </h2>
            <p className="mt-3 text-black/60">
              This section applies only if we accept a hardware repair job (diagnostics/repair/replacement parts).
              If we do not offer hardware repairs at a given time, this section simply won’t apply.
            </p>
          </section>

          {/* C1 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">18. Diagnostics and quotations</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                A diagnostic fee may be charged for inspection and testing to identify faults and possible
                solutions.
              </li>
              <li>
                After diagnostics, we will provide a repair quotation for approval before repair work continues.
              </li>
              <li>
                If the device cannot be successfully repaired, only the diagnostic fee will apply (unless we
                agree otherwise in writing).
              </li>
            </ul>
          </section>

          {/* C2 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">19. Replacement parts</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Replacement parts are quoted in advance and fitted only with your approval.</li>
              <li>
                Parts used may be OEM or high-quality equivalents. Part pricing and options will be communicated
                before installation.
              </li>
              <li>
                Where parts availability or pricing changes, we may need to revise the quote and request
                re-approval.
              </li>
            </ul>
          </section>

          {/* C3 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">20. Payment terms (hardware repairs)</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Full payment is due after repair is completed and approved.</li>
              <li>
                If a diagnostic fee applies and you decline the repair after diagnosis, the diagnostic fee remains
                payable.
              </li>
            </ul>
          </section>

          {/* C4 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">21. Warranty and exclusions (hardware repairs)</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                We provide a 30-day limited warranty on repairs, covering the specific issue addressed.
              </li>
              <li>
                This warranty does not cover physical damage, liquid damage, accidental damage, misuse, or issues
                unrelated to the original repair.
              </li>
              <li>
                Devices with pre-existing faults may have higher risk of additional failure; we are not responsible
                for unrelated faults that appear later.
              </li>
            </ul>
          </section>

          {/* C5 */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">22. Data and devices</h2>
            <p className="mt-3">
              Repairs can carry a risk of data loss. You should back up your device before providing it to us.
              Unless agreed otherwise in writing, you remain responsible for backups and data security. If you
              provide device passcodes, you confirm you are authorised to do so.
            </p>
          </section>

          {/* LEGAL */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">23. Governing law</h2>
            <p className="mt-3">
              These Terms are governed by the laws of England and Wales. The courts of England and Wales will
              have exclusive jurisdiction, except where consumer law requires otherwise.
            </p>
          </section>

          {/* CONTACT */}
          <section>
            <h2 className="text-lg font-semibold text-black/85">24. Contact</h2>
            <p className="mt-3">
              Email: sales@onmain.co.uk <br />
              Phone: +44 7926 230863 <br />
              Location: London, United Kingdom
            </p>
          </section>

          <div className="pt-2 text-xs text-black/45">
            Note: This page is provided for general information and transparency and is not legal advice.
          </div>
        </div>
      </div>
    </main>
  );
}
