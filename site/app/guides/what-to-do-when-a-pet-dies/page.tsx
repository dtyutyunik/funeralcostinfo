import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'What to Do When a Pet Dies at Home: A Step-by-Step Guide with Costs',
  description:
    'What to do when a pet dies at home, in order: confirm the passing, care for the body in the first hours, who to call, aftercare choices with prices, and the admin to close out within a week.',
  alternates: { canonical: SITE_URL + '/guides/what-to-do-when-a-pet-dies/' },
  openGraph: {
    title: 'What to Do When a Pet Dies at Home: A Step-by-Step Guide with Costs',
    description:
      'Vet-sourced steps for the first minutes, hours, and days after a pet dies, with the cost attached to each decision.',
    url: SITE_URL + '/guides/what-to-do-when-a-pet-dies/',
  },
};

export default function WhatToDoWhenAPetDies() {
  const faqs = [
    {
      q: 'What should I do first when my pet dies at home?',
      a: 'Confirm the passing: watch the chest for a full minute for any rise and fall, feel for a heartbeat behind the left front leg, and check for a blink response. Twitching, a sigh of released air, or loss of bladder control can happen after death and are not signs of life. If you are in any doubt, call your vet or a 24-hour emergency clinic and let them talk you through it. This step costs nothing.',
    },
    {
      q: 'How long can I keep my pet body at home?',
      a: 'Plan on arranging cremation or burial within about 24 hours. Cooling the body in the coolest place in the house, with towel-wrapped ice packs if the transfer will be delayed, buys a little time but not days. State disposal clocks also apply in some places: Washington allows 72 hours and Michigan requires disposal within 24 hours. Caring for the body overnight and calling in the morning is acceptable, and vet guidance says so explicitly.',
    },
    {
      q: 'Can I take a paw print or fur clipping after my pet dies?',
      a: 'Yes, and do it in the first hours if you want one. Rigor mortis sets in within a few hours, so position the pet curled on its side soon after death, and take the paw print or clipping before the body is collected. Some services include keepsakes: a clay paw print and lock of fur are in the Lap of Love base price, while CodaPet lists keepsakes from $30.',
    },
    {
      q: 'Who do I call when a pet dies at night?',
      a: 'A 24-hour emergency veterinary clinic can confirm the death and usually receive the body. Some crematories offer after-hours pickup, at a fee: $75 at Clay-Barnette in North Carolina and $100 extra for after-hours or Sunday pickup at Precious Paws in California. If neither works, cool the body, keep it somewhere quiet and away from other pets, and call your own vet when it opens.',
    },
    {
      q: 'Do I need a death certificate for my pet?',
      a: 'No. There is generally no death certificate requirement for a pet. The paperwork is your own accounts: cancel pet insurance and ask about final-bill claims, update the microchip registry, cancel the dog licence, and stop food, medication, grooming, and daycare subscriptions. Aim to do this within about a week, not on the first day.',
    },
    {
      q: 'What does it cost to deal with a pet death, all in?',
      a: 'It depends on the aftercare choice. Arranging it yourself, communal cremation runs $45 to $200 by weight, private cremation $100 to $450, aquamation is priced much like private cremation, a pet cemetery burial averages $831 for a dog in CareCredit 2025 data, and a legal home burial costs nothing in fees. Add $35 to $100 if you want home pickup rather than dropping off at a vet. Our pet cremation cost guide breaks each option down.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'What to do when a pet dies', url: SITE_URL + '/guides/what-to-do-when-a-pet-dies/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › What to do when a pet dies</nav>
      <JsonLd data={articleJsonLd({
        title: 'What to Do When a Pet Dies at Home: A Step-by-Step Guide with Costs',
        description: 'Step by step for the first minutes, hours, and days after a pet dies at home or at the vet, with the cost of each step, from veterinarian guidance.',
        url: SITE_URL + '/guides/what-to-do-when-a-pet-dies/',
        datePublished: '2026-11-05',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="what-to-do-when-a-pet-dies" imageAlt="What to do when a pet dies"><h1>What to do when a pet dies</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> in the first minutes, confirm the passing. In
          the first hours, position and cool the body and take any keepsakes. Within
          about 24 hours, arrange cremation or burial. The aftercare decision is the
          only one with a real price attached: <strong>$45 to $200 for communal
          cremation, $100 to $450 for private</strong>, priced by weight, with burial and
          aquamation priced in our linked guides. These steps follow veterinarian
          guidance published by Pumpkin and PetMD. If your pet is still alive and you
          are planning ahead, our{' '}
          <Link href="/guides/in-home-pet-euthanasia-cost/">in-home pet euthanasia cost guide</Link>{' '}
          covers that decision and its costs.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>Step 1: Confirm the passing (first minutes, $0)</h2>
        <p>
          Watch the chest for a full minute: no rise and fall. Feel for a heartbeat
          behind the left front leg. Check the eyes for fixed, dilated pupils and no
          blink response when a finger approaches. Small movements, a sigh of released
          air, or release of urine or stool can occur after death and are not signs of
          life. If you are unsure, call your vet or a 24-hour emergency clinic; they
          will talk you through the check or confirm in person.
        </p>

        <h2>Step 2: Care for the body (first hours, $0)</h2>
        <ul>
          <li>Put on gloves; fluids are often released after death.</li>
          <li>Lay your pet on its side, on a towel over a waterproof layer, and tuck the legs into a natural curled position soon, because rigor mortis sets in within a few hours.</li>
          <li>Wrap your pet in a towel or a favourite blanket.</li>
          <li>Take a paw print or a clipping of fur now if you want one; this is the easiest moment for it.</li>
          <li>Move your pet to the coolest place available, a basement, garage, or tiled floor, and add towel-wrapped ice packs around the body if collection will be delayed.</li>
        </ul>
        <p>
          Aim to arrange cremation or burial within about 24 hours. Cooling buys a
          little extra time, not days, and some states set their own clocks: Washington
          allows 72 hours for disposal and Michigan requires it within 24 hours.
        </p>

        <h2>Step 3: Call (same day)</h2>
        <p>
          During business hours, call your vet. The clinic can confirm the death,
          explain aftercare options, and usually receive the body. After hours, your
          options are a 24-hour emergency clinic, an after-hours crematory pickup
          (published fees run $75 to $100), or caring for the body overnight and calling
          in the morning, which veterinarian guidance explicitly says is acceptable.
        </p>

        <h2>Step 4: Choose and price the aftercare</h2>
        <table>
          <thead>
            <tr><th>Option</th><th>Typical cost</th><th>Guide</th></tr>
          </thead>
          <tbody>
            <tr><td>Communal cremation (no ashes back)</td><td>$45 to $200 by weight</td><td><Link href="/guides/how-much-does-pet-cremation-cost/">Pet cremation cost</Link></td></tr>
            <tr><td>Private cremation (ashes back)</td><td>$100 to $450 by weight</td><td><Link href="/guides/dog-cremation-cost/">Dog</Link> and <Link href="/guides/cat-cremation-cost/">cat</Link> prices</td></tr>
            <tr><td>Aquamation (water cremation)</td><td>Priced like private cremation at most providers</td><td><Link href="/guides/pet-aquamation-cost/">Pet aquamation cost</Link></td></tr>
            <tr><td>Pet cemetery burial</td><td>$831 average for a dog (CareCredit 2025); $500 to $2,000 or more all-in</td><td><Link href="/guides/pet-burial-cost/">Pet burial & cemetery cost</Link></td></tr>
            <tr><td>Home burial</td><td>$0 in fees where legal</td><td><Link href="/guides/pet-home-burial-laws/">Pet home burial laws</Link></td></tr>
          </tbody>
        </table>
        <p>
          Transport is the other charge at this step: dropping the body at your vet is
          usually free, while home pickup runs $35 to $100 in published price lists.
          One caution overrides all of this if it applies: if your pet was euthanised,
          the drug used stays in the body and is toxic to wildlife, and the product
          label requires deep burial or cremation. That is the main reason a shallow
          backyard grave is never safe for a euthanised pet.
        </p>

        <h2>If your pet dies at the vet</h2>
        <p>
          The clinic holds the body in cold storage while you decide; most clinics can
          hold remains for a few days, so ask how long and which crematory the clinic
          uses. The clinic can contract the cremation, help you choose an urn, and call
          you when ashes return, typically in 1 to 2 weeks through a clinic, against 1
          to 7 days when you arrange directly. You are not obliged to use the clinic
          provider: you may take your pet home for burial or deal directly with a
          crematory or cemetery instead.
        </p>

        <h2>Step 5: The admin, within about a week</h2>
        <ul>
          <li>Cancel pet insurance, and ask about claiming the final vet bill.</li>
          <li>Update the microchip registry record.</li>
          <li>Cancel the dog licence with your city or county, if your pet had one.</li>
          <li>Stop food and medication subscriptions, and grooming, daycare, or walker bookings.</li>
          <li>Tell the vet clinic, so reminder letters and vaccination notices stop arriving.</li>
        </ul>
        <p>
          There is no pet death certificate to file. If your pet died of a suspected
          reportable disease or after a bite or rabies concern, your vet and local
          health officer direct the handling instead, and their instructions override
          the home steps above.
        </p>

        <h2>The timeline at a glance</h2>
        <table>
          <thead>
            <tr><th>When</th><th>What</th></tr>
          </thead>
          <tbody>
            <tr><td>First minutes</td><td>Confirm the passing; call the vet if in doubt</td></tr>
            <tr><td>First hours</td><td>Position, wrap, and cool the body; take paw print or fur clipping</td></tr>
            <tr><td>Within about 24 hours</td><td>Arrange cremation or burial (state clocks run 24 to 72 hours)</td></tr>
            <tr><td>1 to 7 days direct, 1 to 2 weeks via a vet</td><td>Ashes returned</td></tr>
            <tr><td>Within a week</td><td>Insurance, microchip, licence, and subscription close-out</td></tr>
          </tbody>
        </table>

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
          <Link href="/guides/how-much-does-pet-cremation-cost/">Pet cremation cost hub →</Link>
          {' · '}
          <Link href="/guides/in-home-pet-euthanasia-cost/">In-home pet euthanasia cost →</Link>
          {' · '}
          <Link href="/guides/pet-burial-cost/">Pet burial & cemetery cost →</Link>
          {' · '}
          <Link href="/guides/pet-home-burial-laws/">Pet home burial laws →</Link>
        </p>
      <RelatedGuides currentSlug="what-to-do-when-a-pet-dies" />
      </div>
    </>
  );
}
