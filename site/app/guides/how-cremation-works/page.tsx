import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL, dataset, fmt } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

const A = dataset.anchors;

export const metadata: Metadata = {
  title: 'How Does Cremation Work? The Step-by-Step Process Explained',
  description:
    'How cremation works, step by step: authorization and the waiting period, identification, preparation, the retort at 1,400 to 1,800 degrees, cooling and processing, and return of the ashes in 7 to 10 days.',
  alternates: { canonical: SITE_URL + '/guides/how-cremation-works/' },
  openGraph: {
    title: 'How Does Cremation Work? The Step-by-Step Process Explained',
    description:
      'The cremation process from authorization to ashes: what happens at each step, how long it takes, what cremated remains actually are, and what families can choose afterward.',
    url: SITE_URL + '/guides/how-cremation-works/',
  },
};

export default function HowCremationWorks() {
  const faqs = [
    {
      q: 'How long does cremation take?',
      a: 'The time inside the chamber is usually 2 to 3 hours, depending on body size and the equipment. With preheating, cooling, and processing, the full cycle at the crematory runs about 4 to 6 hours. From the family side, the whole timeline from signing the authorization to receiving the ashes is usually 7 to 10 days, because paperwork, permits, and scheduling take longer than the cremation itself.',
    },
    {
      q: 'Do you need a casket for cremation?',
      a: 'No. Under the FTC Funeral Rule, no casket is required for cremation. What the crematory does require is a rigid, combustible container, usually fiberboard or pressed wood, which is included in the cremation price. Families sometimes choose a rental casket for a viewing beforehand, or a nicer cremation casket, but both are optional upgrades.',
    },
    {
      q: 'What are cremated remains actually made of?',
      a: 'Mostly bone mineral. The intense heat vaporizes soft tissue, and what is left is bone fragments, which are then processed into a fine, uniform powder. That is why the correct term is cremated remains rather than ashes: there is no wood ash or paper ash in the container, and the powder is grayish white, not black. An adult typically produces 3 to 7 pounds of remains.',
    },
    {
      q: 'Are pacemakers and implants removed before cremation?',
      a: 'Yes, pacemakers and other battery-powered devices are always removed first, because batteries can rupture under heat and damage the chamber. Orthopedic implants such as hip or knee replacements, surgical pins, and dental fillings usually survive the heat and are separated from the remains afterward with magnets or by hand. Most crematories recycle those metals through regulated programs.',
    },
    {
      q: 'Is each person cremated separately?',
      a: 'Yes. Cremation chambers are designed for one person at a time, and a permanent metal identification tag stays with the body through the entire process, including inside the chamber. The tag survives the heat and is placed with the processed remains, so the ashes a family receives are identified at every step.',
    },
    {
      q: 'Can you have a funeral service before or after cremation?',
      a: 'Both. A traditional funeral with a viewing can happen before cremation, using embalming and a rental or purchased casket, and then the body is cremated afterward. Or the cremation can happen first and a memorial service follows with the urn present, which skips embalming and viewing entirely and costs much less. Our cremation cost guide compares the two paths side by side.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'How does cremation work?', url: SITE_URL + '/guides/how-cremation-works/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › How does cremation work?</nav>
      <JsonLd data={articleJsonLd({
        title: 'How Does Cremation Work? The Step-by-Step Process Explained',
        description: 'How cremation works, step by step: authorization and the waiting period, identification, preparation, the retort at 1,400 to 1,800 degrees, cooling and processing, and return of the ashes in 7 to 10 days.',
        url: SITE_URL + '/guides/how-cremation-works/',
        datePublished: '2026-10-29',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="how-cremation-works" imageAlt="How does cremation work?"><h1>How does cremation work?</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> cremation reduces the body to bone fragments with
          intense heat, roughly <strong>1,400 to 1,800 degrees Fahrenheit</strong>, inside a
          chamber called a retort. The time in the chamber is about <strong>2 to 3 hours</strong>,
          and the full process from authorization to receiving the ashes usually takes{' '}
          <strong>7 to 10 days</strong>. The fragments are then processed into a fine powder
          and returned to the family in a temporary container or an urn. Cremation is the most
          common form of disposition in the United States, and the cheapest form of it, direct
          cremation, has a modeled national estimate of{' '}
          <strong>{fmt(A.direct_cremation.value)}</strong>. For what that price includes, see
          our <Link href="/guides/cremation-cost-2026/">cremation cost guide</Link>; this
          guide covers the process itself.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>The cremation process, step by step</h2>
        <table>
          <thead>
            <tr><th>Step</th><th>What happens</th><th>Typical timing</th></tr>
          </thead>
          <tbody>
            <tr><td>1. Authorization and paperwork</td><td>Death certificate, cremation authorization from the legal next of kin, and a cremation permit from the local authority</td><td>1 to 3 days</td></tr>
            <tr><td>2. Waiting period</td><td>Most states require 24 to 48 hours after death before cremation can proceed</td><td>24 to 48 hours</td></tr>
            <tr><td>3. Identification and preparation</td><td>A metal ID tag is attached, pacemakers and battery devices are removed, the body is washed and placed in a rigid combustible container</td><td>Same day as cremation</td></tr>
            <tr><td>4. The retort</td><td>One person at a time, chamber preheated to 1,400 to 1,800 degrees, reduced to bone fragments</td><td>2 to 3 hours</td></tr>
            <tr><td>5. Cooling and processing</td><td>Chamber cools, metals are separated out, fragments are processed into a uniform powder in a machine called a cremulator</td><td>1 to 2 hours cooling, plus processing</td></tr>
            <tr><td>6. Return to the family</td><td>Remains placed in a temporary container or the family urn, picked up or shipped</td><td>7 to 10 days from authorization</td></tr>
          </tbody>
        </table>

        <h2>Step 1: authorization and paperwork</h2>
        <p>
          Nothing happens at the crematory until the paperwork is signed. The person with the
          legal right to arrange the disposition, usually the next of kin, signs a cremation
          authorization form. The funeral home or crematory also obtains a certified death
          certificate and a cremation permit from the local medical examiner or health
          department. If the death was unexpected or under investigation, the medical
          examiner may hold the body longer before releasing it. Families who want to be
          sure the right person signed can check our{' '}
          <Link href="/guides/who-can-arrange-funeral/">guide to who has the legal right to
          make funeral arrangements</Link>.
        </p>

        <h2>Step 2: the waiting period</h2>
        <p>
          Most states require a waiting period of 24 to 48 hours after death before cremation
          can proceed. The exact length varies by state, and some states have no statutory
          waiting period but still need a day or two for permits. This is one reason the
          family timeline is measured in days even though the chamber time is measured in
          hours. During the wait, the body is refrigerated. No embalming is required for a
          cremation that happens promptly, which is one of the reasons direct cremation
          costs far less than a traditional funeral.
        </p>

        <h2>Step 3: identification and preparation</h2>
        <p>
          Identification is the most tightly controlled part of the process. A permanent
          metal identification tag, usually a stamped disk, is attached to the body when it
          first comes into care, and that tag stays with the body through the chamber and
          into the processed remains. It survives the heat, so the identity is verified at
          every handoff.
        </p>
        <p>
          Preparation is simple compared with a burial. Pacemakers, defibrillators, and
          other battery-powered devices are removed, because batteries can rupture under
          heat. The body is washed and positioned, and personal items the family wants to
          keep are removed now: anything left in the container will not survive. The body
          is then placed in a rigid, fully combustible container, usually fiberboard or
          pressed wood. No traditional casket is required, and under the FTC Funeral Rule
          no provider can require you to buy one for a cremation.
        </p>

        <h2>Step 4: inside the retort</h2>
        <p>
          The retort is a brick-lined chamber, preheated to roughly 1,400 to 1,800 degrees
          Fahrenheit before the container goes in. One person is cremated at a time: the
          chamber is built for a single container, and the identification tag goes in with
          it. Over 2 to 3 hours, the heat vaporizes soft tissue and reduces the body to bone
          fragments plus any non-combustible material, such as metal implants. Larger
          individuals take longer, and the operator monitors the chamber throughout. Modern
          retorts have a secondary chamber that burns off emissions, which is why a
          crematory produces far less visible smoke than older furnaces.
        </p>

        <h2>Step 5: cooling, separation, and processing</h2>
        <p>
          After the chamber cools for 1 to 2 hours, the operator removes the remaining bone
          fragments. Any metal, dental fillings, surgical pins, joint replacements, and the
          identification tag, is separated with magnets or by hand. Most crematories send
          recovered metals to regulated recycling programs. The bone fragments then go
          through a machine called a cremulator, which grinds them into the fine, uniform,
          grayish white powder families recognize as ashes. The correct term is cremated
          remains: the powder is bone mineral, not wood or paper ash. An adult typically
          produces 3 to 7 pounds of remains, roughly the volume of a shoebox.
        </p>

        <h2>Step 6: return to the family</h2>
        <p>
          The remains are placed in a temporary container, usually a simple plastic box
          inside a bag, or directly into an urn the family chose. Families pick the remains
          up from the funeral home or crematory, or have them shipped: the U.S. Postal
          Service is the only common carrier that accepts cremated remains, and it requires
          a specific labeled box. From authorization to pickup, most families wait 7 to
          10 days.
        </p>
        <p>
          What happens next is the family choice, and it has its own rules and costs: keep
          the urn at home, bury it, place it in a columbarium niche, or scatter the ashes.
          Our <Link href="/guides/what-to-do-with-ashes/">guide to what to do with
          ashes</Link> covers every option with costs, our{' '}
          <Link href="/guides/scattering-ashes-laws-costs/">scattering ashes guide</Link>{' '}
          covers the legal side, and our{' '}
          <Link href="/guides/urn-costs-guide/">urn guide</Link> covers sizing and buying.
          If a service is still to come, our{' '}
          <Link href="/guides/memorial-service-cost/">memorial service cost guide</Link>{' '}
          prices the ceremony that usually follows a cremation.
        </p>

        <h2>What cremation does not involve</h2>
        <ul>
          <li><strong>No embalming.</strong> Not required for a prompt cremation in any state, and direct cremation skips it entirely.</li>
          <li><strong>No casket purchase.</strong> A rigid combustible container is required, and it is included in the cremation price.</li>
          <li><strong>No cemetery plot.</strong> Unless the family chooses burial or a niche for the ashes afterward.</li>
          <li><strong>No viewing requirement.</strong> A viewing before cremation is optional, and it is what turns a direct cremation into a full-service cremation at roughly double the price.</li>
        </ul>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>

        <p>
          <Link href="/calculator/">Build your line-item estimate →</Link>
          {' · '}
          <Link href="/guides/cremation-cost-2026/">Cremation costs in 2026 →</Link>
          {' · '}
          <Link href="/guides/what-to-do-with-ashes/">What to do with ashes →</Link>
          {' · '}
          <Link href="/guides/urn-costs-guide/">Urn types and costs →</Link>
          {' · '}
          <Link href="/guides/cremation-container-cost/">Cremation container costs →</Link>
          {' · '}
          <Link href="/guides/how-much-does-pet-cremation-cost/">Pet cremation costs →</Link>
        </p>
      <RelatedGuides currentSlug="how-cremation-works" />
      </div>
    </>
  );
}
