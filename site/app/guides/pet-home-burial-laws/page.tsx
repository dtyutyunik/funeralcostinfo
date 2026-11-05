import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Is It Legal to Bury a Pet in Your Yard? State Rules Explained',
  description:
    'No federal law governs burying a pet at home. State dead-animal rules, city ordinances, and lease or HOA rules decide: Washington, Michigan, Texas, Illinois, and New York rules from the primary texts.',
  alternates: { canonical: SITE_URL + '/guides/pet-home-burial-laws/' },
  openGraph: {
    title: 'Is It Legal to Bury a Pet in Your Yard? State Rules Explained',
    description:
      'The three layers of rules on pet home burial, the five states with clear primary texts, and the euthanasia safety rule that applies everywhere.',
    url: SITE_URL + '/guides/pet-home-burial-laws/',
  },
};

export default function PetHomeBurialLaws() {
  const faqs = [
    {
      q: 'Is it legal to bury a pet in your backyard?',
      a: 'Often, but it depends on three layers: your state dead-animal law, your city or county ordinance and health code, and private rules such as a lease or homeowner association covenants. The strictest layer wins. There is no federal law on burying a pet on your own land. Check all three layers, own the land or get written permission, and call 811 before digging.',
    },
    {
      q: 'How deep should a pet grave be?',
      a: 'Follow your state rule where one exists. Washington requires every part of the animal to be covered by at least 3 feet of soil. Michigan requires burial at least 2 feet below the natural surface. Texas carcass rules require at least 3 feet of earth cover. Depth matters most for a euthanised pet: the euthanasia drug remains in the body and is toxic to wildlife, and the product label requires deep burial or cremation.',
    },
    {
      q: 'How close to water can I bury a pet?',
      a: 'Washington sets the clearest pet rule: at least 100 feet from any well, spring, stream, or other surface water, outside floodplains, and not in a drinking-water protection area. A 300 foot figure circulates online for Washington, but it comes from the state livestock rule, not the pet rule. Where your state gives no number, keep the grave well away from wells and water and ask your local health department.',
    },
    {
      q: 'How long do I have to bury or cremate a pet after it dies?',
      a: 'Some states set clocks. Michigan requires disposal within 24 hours of death. Washington allows 72 hours. Texas guidance is to collect within 24 hours and dispose within 3 days. Cold storage pauses the practical problem: Michigan guidance treats refrigerated or frozen storage as pausing its clock. Our what to do when a pet dies guide covers care of the body in the first hours.',
    },
    {
      q: 'Does my vet have to offer me cremation options?',
      a: 'No law requiring that was found in any state. What exists is professional policy: the AVMA Companion Animal Aftercare Policy says vets should encourage planning ahead, know the legal restrictions on disposition, counsel owners on them, and use trustworthy aftercare providers. That is guidance for vets, not a legal entitlement for owners, so ask the questions yourself: which crematory, which service type, and what each costs.',
    },
    {
      q: 'Are pet crematories licensed?',
      a: 'In most states, no. The honest national picture, stated by industry associations themselves, is that most states do not regulate pet crematories. New York is the exception with a real licensing regime for pet cemeteries and crematoria under General Business Law Article 29-F, and Illinois regulates how cremation services are described and disclosed rather than licensing the facilities. Everywhere, local land-use and air-quality permits still apply.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Pet home burial laws', url: SITE_URL + '/guides/pet-home-burial-laws/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Pet home burial laws</nav>
      <JsonLd data={articleJsonLd({
        title: 'Is It Legal to Bury a Pet in Your Yard? State Rules Explained',
        description: 'Pet home burial legality from primary texts: Washington, Michigan, and Texas burial rules, Illinois cremation disclosure law, and New York pet cemetery licensing.',
        url: SITE_URL + '/guides/pet-home-burial-laws/',
        datePublished: '2026-11-05',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="pet-home-burial-laws" imageAlt="Is it legal to bury a pet in your yard"><h1>Is it legal to bury a pet in your yard?</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> there is <strong>no federal law</strong> on
          burying a pet at home, and in much of the country it is legal on your own
          land. Three layers decide: <strong>state dead-animal rules, city or county
          ordinances, and private rules</strong> in a lease or homeowner association.
          Where a state rule exists it is specific: Washington requires disposal within
          72 hours, at least 3 feet of soil cover, and at least 100 feet from water.
          Home burial costs nothing in fees where it is legal, which is why the rules
          are worth reading before you dig; the cemetery alternative is priced in our{' '}
          <Link href="/guides/pet-burial-cost/">pet burial and cemetery cost guide</Link>.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>The states with clear rules, from the primary texts</h2>
        <table>
          <thead>
            <tr><th>State</th><th>The rule</th><th>Source</th></tr>
          </thead>
          <tbody>
            <tr><td>Washington</td><td>Dispose within 72 hours of death. Burial: every part covered by at least 3 ft of soil, at least 100 ft from any well, spring, stream, or other surface water, not in a floodplain, and not where groundwater could be contaminated</td><td>WAC 246-203-121</td></tr>
            <tr><td>Michigan</td><td>Dispose within 24 hours; burial at least 2 ft below the natural surface. State extension guidance adds at least 200 ft from wells and spacing between graves</td><td>MCL 287.671; Michigan State University Extension</td></tr>
            <tr><td>Texas</td><td>Carcass disposal rules require at least 3 ft of earth cover over every part; state guidance is collection within 24 hours and disposal within 3 days</td><td>4 Texas Administrative Code 59.12; TCEQ guidance</td></tr>
            <tr><td>Illinois</td><td>Regulates cremation rather than burial: the Companion Animal Cremation Act requires a free written explanation of services and makes it an offence to call a communal or partitioned cremation private or individual</td><td>815 ILCS 318</td></tr>
            <tr><td>New York</td><td>Licenses pet cemeteries and pet crematoria through the Department of State. Human cemeteries may allow pet cremated remains only incidental to a human burial, in the same grave, crypt, or niche, in a separate sealed urn</td><td>General Business Law Article 29-F; NY Department of State</td></tr>
          </tbody>
        </table>
        <p>
          Two warnings from checking these texts. First, numbers travel badly online: a
          Washington setback of 300 feet is widely copied, but it belongs to the state
          livestock rule; the pet rule says 100 feet. Second, in states not listed here
          we found no pet-specific burial statute, which does not mean anything goes:
          it means your city or county ordinance is the layer that decides, and it is
          the one to check.
        </p>

        <h2>The rule that applies everywhere: euthanised pets</h2>
        <p>
          If your pet was euthanised, the drug used, pentobarbital, stays in the body
          and is toxic to wildlife. The FDA-approved product label states that birds
          and mammals feeding on a treated animal may be killed, and that euthanised
          animals must be disposed of by deep burial, cremation, or another method that
          complies with state and local law. In practice: bury deep, cover well, and
          never leave a euthanised pet where scavengers can reach it. This is the
          single most important safety point in home burial, and it is also why many
          vets steer euthanasia families toward cremation; prices are in our{' '}
          <Link href="/guides/how-much-does-pet-cremation-cost/">pet cremation cost guide</Link>.
        </p>

        <h2>Before you dig: the checklist</h2>
        <ul>
          <li>Confirm you own the land, or get the owner written permission. Renters should assume no without it.</li>
          <li>Check your city or county ordinance and health code, not just state law.</li>
          <li>Check lease terms or homeowner association covenants.</li>
          <li>Call 811 before digging, so underground utilities are marked.</li>
          <li>Site the grave away from wells, springs, streams, and flood-prone ground.</li>
          <li>Meet your state depth rule, and go deeper for a euthanised pet.</li>
          <li>If your pet died of a suspected reportable disease, stop: your vet and local health officer direct the disposal.</li>
        </ul>
        <p>
          If home burial turns out not to be available to you, the practical defaults
          are a pet cemetery, priced in our{' '}
          <Link href="/guides/pet-burial-cost/">pet burial and cemetery cost guide</Link>,
          cremation through your vet, or municipal animal control pickup where offered.
          Our step-by-step guide to{' '}
          <Link href="/guides/what-to-do-when-a-pet-dies/">what to do when a pet dies</Link>{' '}
          covers the first hours before any of these decisions has to be final.
        </p>

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
          <Link href="/guides/pet-burial-cost/">Pet burial & cemetery cost →</Link>
          {' · '}
          <Link href="/guides/how-much-does-pet-cremation-cost/">Pet cremation cost hub →</Link>
          {' · '}
          <Link href="/guides/what-to-do-when-a-pet-dies/">What to do when a pet dies →</Link>
        </p>
      <RelatedGuides currentSlug="pet-home-burial-laws" />
      </div>
    </>
  );
}
