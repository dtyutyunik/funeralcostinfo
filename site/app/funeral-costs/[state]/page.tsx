import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import JsonLd, { faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import {
  dataset, getState, stateSlug, fmt, fmtRange, SITE_URL, LAST_UPDATED,
  SERVICE_ORDER, ALL_STATE_SLUGS, VINTAGE_LABEL, type ServiceKey,
} from '../../../lib/data';
import Link from 'next/link';

interface StateNote {
  boardName: string;
  boardUrl: string | null;
  fcaSurveyName: string | null;
  fcaSurveyUrl: string | null;
  context: string[];
  caveats: string[];
}

const STATE_NOTES: Record<string, StateNote> = {
  california: {
    boardName: 'California Cemetery and Funeral Bureau',
    boardUrl: 'https://www.cfb.ca.gov/',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'California has the highest regional price level of any state in our dataset (RPP 110.7), so its modeled estimates are the highest in the nation.',
      'The NFDA projects 81.5% of California dispositions will be cremations by 2035 — among the highest cremation rates in the country.',
    ],
    caveats: [
      'Costs vary enormously within California: Los Angeles, San Francisco, and San Diego metro prices typically run well above the state modeled figure, while rural counties run below it.',
      'California law requires funeral establishments to provide written price lists; always ask for the General Price List before discussing options.',
    ],
  },
  texas: {
    boardName: 'Texas Funeral Service Commission',
    boardUrl: 'https://tfsc.texas.gov/',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Texas sits just below the national average price level (RPP 97.1), so modeled costs run slightly under the national medians.',
      'The NFDA projects 70.2% of Texas dispositions will be cremations by 2035.',
    ],
    caveats: [
      'Texas does not require embalming. State law requires that a body held for more than 24 hours be refrigerated, embalmed, or encased in a suitable container.',
      'Anyone providing funeral services for compensation in Texas must be licensed by the Texas Funeral Service Commission — be wary of unlicensed online sellers.',
    ],
  },
  florida: {
    boardName: 'Florida Division of Funeral, Cemetery & Consumer Services',
    boardUrl: 'https://www.myfloridacfo.com/division/funeralcemetery',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Florida runs modestly above the national average price level (RPP 103.4).',
      'The NFDA projects 79.8% of Florida dispositions will be cremations by 2035, reflecting the state\u2019s large retiree population and transient communities.',
    ],
    caveats: [
      'Florida regulates preneed (prepaid) funeral contracts through the Department of Financial Services; if you are considering prepaying, verify the seller\u2019s license.',
      'Prices differ between South Florida metros and the Panhandle — treat the state figure as a midpoint, not a local quote.',
    ],
  },
  'new-york': {
    boardName: 'New York State Department of Health, Bureau of Funeral Directing',
    boardUrl: null,
    fcaSurveyName: 'Funeral Consumers Alliance of the Finger Lakes — 2025 funeral home price survey (Tompkins County area)',
    fcaSurveyUrl: 'https://www.fingerlakesfunerals.org/price-survey',
    context: [
      'New York has one of the highest price levels in the nation (RPP 107.9), driven largely by the New York City metro area.',
      'The NFDA projects 70.7% of New York dispositions will be cremations by 2035.',
    ],
    caveats: [
      'The New York City metro area typically prices well above the state modeled figure; upstate and rural counties typically price below it.',
      'New York licenses funeral directors through the Department of Health\u2019s Bureau of Funeral Directing; you can verify a license before engaging a provider.',
    ],
  },
  mississippi: {
    boardName: 'Mississippi State Board of Funeral Service',
    boardUrl: 'https://www.msbfs.ms.gov/',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Mississippi has the second-lowest regional price level in our dataset (RPP 87.0), just above Arkansas, so its modeled estimates are among the lowest in the nation.',
      'The NFDA projects Mississippi will retain one of the highest burial shares in the country, with only 54.5% cremations by 2035.',
    ],
    caveats: [
      'Mississippi is largely rural; fewer providers can mean less price competition in some counties — comparing two or three GPLs matters more, not less.',
      'A low state average does not guarantee a low bill: merchandise choices (casket, vault) move the total more than geography does.',
    ],
  },
  alabama: {
    boardName: 'Alabama Board of Funeral Service',
    boardUrl: 'https://fsb.alabama.gov/consumers/consumer-complaints/',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Alabama has one of the lowest regional price levels in our dataset (RPP 88.8), so its modeled estimates sit well below the national anchor.',
      'Alabama\u2019s 2023 cremation rate was 42.8% — among the lowest in the country (Cremation Association of North America, 2023) — so burial goods and services weigh more heavily in typical Alabama funeral totals than in high-cremation states.',
    ],
    caveats: [
      'Complaints to the Board of Funeral Service must be in writing; after a formal complaint is received, the licensee has 20 days to answer before the Board proceeds with further investigation.',
      'Statewide price-level differences are typically smaller than provider-to-provider variation — always compare itemized General Price Lists from several funeral homes.',
    ],
  },
  alaska: {
    boardName: 'Alaska Department of Commerce, Community, and Economic Development, Division of Corporations, Business and Professional Licensing — Mortuary Science Program',
    boardUrl: 'https://www.commerce.alaska.gov/web/cbpl/ProfessionalLicensing/Morticians/ApplicationsandForms.aspx',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Alaska sits just above the national average price level (RPP 102.4), so its modeled estimates run slightly above the national anchor.',
      'Alaska\u2019s 2023 cremation rate was 72.5% — the 8th-highest in the nation (Cremation Association of North America, 2023) — so families comparing options should weigh direct-cremation pricing alongside full-service quotes.',
    ],
    caveats: [
      'Alaska separately issues a \u201cCare and Disposal of Human Remains Permit\u201d for disposition of bodies not requiring embalming.',
      'Distance and logistics dominate Alaska funeral pricing — always ask for transport, airline shipping, and air-tray charges as separate line items on current GPLs.',
    ],
  },
  arizona: {
    boardName: 'Arizona Department of Health Services — Funeral Services Licensing',
    boardUrl: 'https://directorsblog.health.azdhs.gov/funeral-industry-licensing-regulation-now-falls-under-adhs/',
    fcaSurveyName: 'Funeral Consumers Alliance of Arizona — 2023 funeral provider price comparison report (Southern Arizona)',
    fcaSurveyUrl: 'https://www.fcaaz.org/_files/ugd/4a9646_731877e39d4444d4bb12045ac9d35f8f.pdf',
    context: [
      'Arizona sits essentially at the national average price level (RPP 100.7), so its modeled figures track the national anchor closely.',
      'Arizona\u2019s 2023 cremation rate was 71.3% (Cremation Association of North America, 2023) — direct cremation is widely used and worth pricing separately from full-service funerals.',
    ],
    caveats: [
      'Oversight of Arizona\u2019s roughly 1,800 funeral-industry licenses moved from the former State Board of Funeral Directors and Embalmers to the Arizona Department of Health Services in 2023 — search licenses and file complaints through ADHS Funeral Services Licensing.',
      'FCA of Arizona also publishes a Spanish-language 2023 Central Arizona price-comparison report as a separate independent public resource; listed prices change, so confirm any figure against the provider\u2019s current GPL.',
    ],
  },
  arkansas: {
    boardName: 'Arkansas State Board of Embalmers, Funeral Directors, Cemeteries, and Burial Services',
    boardUrl: 'https://portal.arkansas.gov/state_agencies/department-of-commerce/insurance-department/state-board-of-embalmers-and-funeral-directors/',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Arkansas has the lowest regional price level in our dataset (RPP 86.9), so its modeled estimates are the lowest of any state.',
      'Arkansas\u2019s 2023 cremation rate was 37.4% — among the lowest in the nation (Cremation Association of North America, 2023) — so burial-related costs (casket, vault, cemetery charges) drive most Arkansas funeral totals.',
    ],
    caveats: [
      'Act 788 of 2017 consolidated Arkansas\u2019s previously separate funeral-director, cemetery, and burial-association boards into a single board under the Insurance Department.',
      'Arkansas burial associations are a distinctive local institution: by statute, 75% of a burial association\u2019s collections must go to payment of membership-certificate benefits rather than operating expenses.',
    ],
  },
  colorado: {
    boardName: 'Colorado Department of Regulatory Agencies — Office of Funeral Home and Crematory Registration',
    boardUrl: 'https://dora.colorado.gov/press-release/department-of-regulatory-agencies-statement-on-support-for-funeral-home-investigation',
    fcaSurveyName: 'Funeral Consumer Society of Colorado — Colorado funeral homes price comparison (provider directory)',
    fcaSurveyUrl: 'https://funeralconsumercolorado.org/directory',
    context: [
      'Colorado sits modestly above the national average price level (RPP 103.1).',
      'Colorado\u2019s 2023 cremation rate was 70.8% (Cremation Association of North America, 2023) — direct cremation is widely available and worth pricing as an alternative to full-service funerals.',
    ],
    caveats: [
      'Colorado funeral homes and crematories must be registered with DORA\u2019s Office of Funeral Home and Crematory Registration, which investigates complaints through that office.',
      'The Funeral Consumer Society\u2019s price tool gathers data over several years and notes it cannot attest to accuracy, \u201cparticularly with pricing\u201d — always confirm current prices on providers\u2019 GPLs.',
    ],
  },
  connecticut: {
    boardName: 'Connecticut Department of Public Health / Board of Examiners of Embalmers and Funeral Directors',
    boardUrl: 'https://portal.ct.gov/DPH/Public-Health-Hearing-Office/Board-of-Examiners-of-Embalmers-and-Funeral-Directors/Board-of-Examiners-of-Embalmers-and-Funeral-Directors',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Connecticut sits moderately above the national average price level (RPP 103.6).',
      'Oversight is split: the Department of Public Health handles licensing and inspection, while the Board of Examiners of Embalmers and Funeral Directors hears disciplinary matters and adjudicates complaints — both are reachable through the Board\u2019s official page.',
    ],
    caveats: [
      'A Connecticut funeral-directing business requires a DPH-licensed funeral director in charge and a DPH certificate of inspection for the establishment itself.',
      'Statewide cost-of-living adjustments are smaller than provider-to-provider differences — compare current itemized GPLs from several funeral homes rather than relying on the state figure.',
    ],
  },
  delaware: {
    boardName: 'Delaware Board of Funeral Services, Division of Professional Regulation',
    boardUrl: 'https://dpr.delaware.gov/boards/funeralservices/reciprocity/',
    fcaSurveyName: 'Funeral Consumers Alliance of Maryland & Environs — 2023 mortuary price survey (regional: Maryland, Delaware, and Washington, DC)',
    fcaSurveyUrl: 'https://mdfunerals.org/wp-content/uploads/2022/12/Price-Survey-2023-final-1.2.24.pdf',
    context: [
      'Delaware sits essentially at the national average price level (RPP 99.8), so its modeled figures track the national anchor closely.',
      'The Funeral Consumers Alliance of Maryland & Environs 2023 survey is regional — it contains actual provider-level prices from Maryland, Delaware, and Washington, DC — and is an independent local comparison alongside current GPLs.',
    ],
    caveats: [
      'The Board licenses funeral directors and issues establishment permits, including new permits when an establishment opens, relocates, or changes ownership.',
      'Delaware\u2019s limited funeral-director licenses currently hold reciprocity agreements only with Maryland and Pennsylvania.',
    ],
  },
  'district-of-columbia': {
    boardName: 'District of Columbia Board of Funeral Directors, Department of Licensing and Consumer Protection',
    boardUrl: 'https://dlcp.dc.gov/page/board-funeral-directors/',
    fcaSurveyName: 'Funeral Consumers Alliance of Maryland & Environs — 2023 mortuary price survey (regional: Maryland, Delaware, and Washington, DC)',
    fcaSurveyUrl: 'https://mdfunerals.org/wp-content/uploads/2022/12/Price-Survey-2023-final-1.2.24.pdf',
    context: [
      'The District of Columbia has one of the highest regional price levels in the nation (RPP 109.9), so its modeled estimates run well above the national anchor.',
      'The Funeral Consumers Alliance of Maryland & Environs 2023 survey is regional — it contains actual provider-level prices from DC, Maryland, and Delaware — and is an independent local comparison alongside current GPLs.',
    ],
    caveats: [
      'DC funeral homes may not charge consumers more than they themselves paid for third-party goods or services (florists, newspapers, clergy, etc.) and must provide receipts for them.',
      'DC requires authorization from the next of kin or the decedent\u2019s agent before embalming may be performed.',
    ],
  },
  georgia: {
    boardName: 'Georgia State Board of Funeral Service',
    boardUrl: 'https://sos.ga.gov/georgia-state-board-funeral-service',
    fcaSurveyName: 'Funeral Consumers Alliance of Georgia — funeral home pricing comparison (direct cremation and immediate burial figures)',
    fcaSurveyUrl: 'https://fcaga.org/pricing/fhpc/',
    context: [
      'Georgia sits modestly below the national average price level (RPP 96.3).',
      'The Georgia State Board of Funeral Service licenses funeral directors, embalmers, crematories, and funeral establishments, and accepts consumer complaints.',
    ],
    caveats: [
      'FCA of Georgia\u2019s pricing table contains provider-level direct-cremation and immediate-burial figures — a useful independent local comparison — but confirm any listed figure against the provider\u2019s current GPL, since listed prices change.',
      'Local ownership, merchandise choices, and cemetery charges can still move actual Georgia totals well above or below the modeled estimate.',
    ],
  },
  hawaii: {
    boardName: 'Hawaii Department of Commerce and Consumer Affairs, Professional and Vocational Licensing Division — Cemetery and Pre-Need Funeral Authority',
    boardUrl: 'http://cca.hawaii.gov/pvl/professional-and-vocational-licensing-division/',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Hawaii has one of the highest regional price levels in the nation (RPP 110.0), so its modeled estimates run well above the national anchor.',
      'A body generally must be embalmed, cremated, or buried within 30 hours after death — the same 30-hour clock applies after release by a coroner or medical examiner — or go into approved refrigerated storage (Hawaii Administrative Rules ch. 11-22).',
    ],
    caveats: [
      'Hawaii\u2019s funeral regulation is split: the Department of Commerce and Consumer Affairs handles licensing, while the Department of Health handles mortuary sanitation rules — direct licensing questions to DCCA and handling rules to the Health Department.',
      'Transport of a body by common carrier generally requires a burial-transit permit, with special enclosure rules for certain diseases — confirm transport line items on current GPLs.',
    ],
  },
  idaho: {
    boardName: 'Idaho Board of Morticians (Idaho Division of Occupational and Professional Licenses)',
    boardUrl: 'http://dopl.idaho.gov/mor/',
    fcaSurveyName: 'Funeral Consumers Alliance of Utah — Spring 2025 southeastern Idaho price comparisons (southeastern Idaho only)',
    fcaSurveyUrl: 'https://www.utahfunerals.org/_files/ugd/f25c49_9683a1ce9f9d43478f23c6ded88bba02.pdf',
    context: [
      'Idaho sits modestly below the national average price level (RPP 95.5).',
      'The Funeral Consumers Alliance of Utah\u2019s Spring 2025 survey covers Twin Falls, Idaho Falls, Chubbuck/Pocatello, Burley, Blackfoot, Rexburg, and Montpelier — southeastern Idaho only — as an independent local comparison.',
    ],
    caveats: [
      'If remains are held longer than 24 hours before disposition, they must be embalmed or refrigerated at 36°F or below.',
      'Idaho issues two separate licenses — mortician and funeral director — and funeral directors are not permitted to care for, prepare, or embalm a dead human body.',
    ],
  },
  illinois: {
    boardName: 'Illinois Department of Financial and Professional Regulation — Funeral Directors and Embalmers Licensing and Disciplinary Board',
    boardUrl: 'https://IDFPR.illinois.gov/profs/fundiremb.html',
    fcaSurveyName: 'Funeral Consumers Alliance of Champaign County — 2026 annual funeral home and cemetery price survey (Champaign County area)',
    fcaSurveyUrl: 'https://funeralschampaigncounty.org/wp-content/uploads/2026/07/2026-June17-AnnualPriceSurvey.pdf',
    context: [
      'Illinois sits essentially at the national average price level (RPP 100.0), so its modeled figures track the national anchor closely.',
      'The Funeral Consumers Alliance of Champaign County publishes a 2026 annual survey of funeral home and cemetery prices — a useful independent local benchmark — but confirm any figure against the provider\u2019s current GPL.',
    ],
    caveats: [
      'Illinois funeral-home oversight is complaint-driven: the state does not conduct routine funeral-home inspections absent complaints, and IDFPR regulates the individual professionals rather than monitoring physical locations (NPR Illinois, August 2026).',
      'Funeral directors must obtain a permit in a coroner\u2019s case before disposition of remains — in coroner cases, confirm your funeral director has the permit process in hand.',
    ],
  },
  indiana: {
    boardName: 'Indiana State Board of Funeral and Cemetery Service (Indiana Professional Licensing Agency)',
    boardUrl: 'https://www.in.gov/pla/professions/funeral-and-cemetery-home/funeral-and-cemetery-board/',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Indiana sits well below the national average price level (RPP 93.3).',
      'Licensed Indiana funeral homes generally must have an embalming room, though multiple locations in the same or adjoining counties may share a designated room.',
    ],
    caveats: [
      'Indiana law requires a disposition permit before disposition or removal of the body from the county of death.',
      'No funeral-home price survey from an Indiana consumer organization could be found — request each provider\u2019s General Price List and compare itemized quotes directly.',
    ],
  },
  iowa: {
    boardName: 'Iowa Board of Mortuary Science (Iowa Department of Inspections, Appeals & Licensing)',
    boardUrl: 'https://dial.iowa.gov/about-dial/boards-and-commissions/board-mortuary-science',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Iowa has one of the lowest regional price levels in our dataset (RPP 87.8), so its modeled estimates sit well below the national anchor.',
      'Embalming may be omitted if disposition occurs within 72 hours after death or within 24 hours after the funeral director takes custody, whichever is longer; refrigeration at 38–42°F can extend the period by another 72 hours.',
    ],
    caveats: [
      'Preneed sellers and sales agents must hold active licenses before selling or accepting funding for covered preneed funeral or cemetery arrangements.',
      'No funeral-home price survey from an Iowa consumer organization could be found — request each provider\u2019s General Price List and compare itemized quotes directly.',
    ],
  },
  kansas: {
    boardName: 'Kansas State Board of Mortuary Arts',
    boardUrl: 'https://ksbma.ks.gov/',
    fcaSurveyName: 'Funeral Consumers Alliance of Greater Kansas City — 2025 area survey of funeral home prices (Kansas and Missouri)',
    fcaSurveyUrl: 'https://funeralskc.org/wp-content/uploads/2025/11/FCA-2025-Price-Survey-Final-2025-for-Print-Landscape-1.pdf',
    context: [
      'Kansas sits well below the national average price level (RPP 90.1).',
      'The Funeral Consumers Alliance of Greater Kansas City\u2019s 2025 survey covers providers in both Kansas and Missouri, with each funeral home\u2019s General Price List date shown — an independent two-state benchmark, but confirm current GPLs before comparing.',
    ],
    caveats: [
      'If a Kansas crematory cannot cremate immediately, it must generally refrigerate remains at 40°F or below unless embalmed, or hold them in an approved facility.',
      'Kansas rules require preneed endorsers to disclose any financial interest or benefit they receive — ask who profits from a preneed sale before signing.',
    ],
  },
  kentucky: {
    boardName: 'Kentucky Board of Embalmers and Funeral Directors',
    boardUrl: 'https://kbefd.ky.gov/legal/Pages/Complaint-Process.aspx',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Kentucky sits well below the national average price level (RPP 90.2).',
      'Preneed burial-contract sellers must place 100% of purchase money into trust within 30 days — strong consumer protection if you are considering prepaying.',
    ],
    caveats: [
      'A funeral provider may not charge more for embalming remains that require communicable-disease precautions than the General Price List embalming price.',
      'A person may execute a declaration authorizing their own cremation and the disposition of their cremated remains — and may transfer or cancel it before death by certified notice.',
    ],
  },
  louisiana: {
    boardName: 'Louisiana State Board of Embalmers and Funeral Directors',
    boardUrl: 'https://www.lsbefd.state.la.us/',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Louisiana sits well below the national average price level (RPP 88.2), with one of the lowest regional price levels in the dataset.',
      'If a body is held longer than 30 hours after death, it must be embalmed or continuously refrigerated at no more than 45°F — and religious practices prohibiting embalming are expressly protected from the embalming requirement.',
    ],
    caveats: [
      'Louisiana law makes it unlawful for anyone other than a licensed funeral director to engage in the retail sale of funeral goods, including caskets — so third-party casket shopping is restricted here (a federal reading of Louisiana law; check the current statute).',
      'Louisiana\u2019s preneed rules distinguish \u201cguaranteed\u201d funeral goods and services funded through a funeral trust or preneed insurance/annuity, where the establishment agrees to accept the available funds as payment in full.',
    ],
  },
  maine: {
    boardName: 'Maine Board of Funeral Services (Maine Office of Professional and Occupational Regulation)',
    boardUrl: 'https://www.maine.gov/pfr/professionallicensing/professions/board-funeral-services',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Maine sits modestly below the national average price level (RPP 97.1).',
      'Maine law recognizes natural organic reduction (human composting), defined as the contained accelerated conversion of human remains to soil, within its disposition-permit framework (Maine Legislature, 131st Legislature, 2023–2024).',
    ],
    caveats: [
      'An \u201cauthorized person\u201d — not only a funeral director — may obtain the disposition permit once the required medical certificate has been received; transport of the body requires the permit.',
      'The only located Maine consumer price survey is from 2016 and is too dated to link here — request current General Price Lists from providers and compare itemized quotes directly.',
    ],
  },
  maryland: {
    boardName: 'Maryland State Board of Morticians and Funeral Directors',
    boardUrl: 'https://health.maryland.gov/bom',
    fcaSurveyName: 'Funeral Consumers Alliance of Maryland & Environs — 2023 mortuary price survey (regional: Maryland, Delaware, and Washington, DC)',
    fcaSurveyUrl: 'https://mdfunerals.org/wp-content/uploads/2022/12/Price-Survey-2023-final-1.2.24.pdf',
    context: [
      'Maryland sits moderately above the national average price level (RPP 105.0).',
      'The Funeral Consumers Alliance of Maryland & Environs 2023 survey is regional — it contains actual provider-level prices from Maryland, Delaware, and Washington, DC — and is an independent local comparison alongside current GPLs.',
    ],
    caveats: [
      'Maryland\u2019s Green Death Care Options Act authorized alkaline hydrolysis and natural organic reduction effective October 1, 2024 — ask a provider whether it is currently licensed for these methods, since availability varies.',
      'Cemeteries are overseen by a separate regulator, the Maryland Office of Cemetery Oversight — the Morticians and Funeral Directors Board does not regulate cemeteries — so cemetery complaints go to a different office.',
    ],
  },
  massachusetts: {
    boardName: 'Board of Registration in Embalming and Funeral Directing',
    boardUrl: null,
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Massachusetts sits moderately above the national average price level (RPP 105.8).',
      'A body may not be cremated within 48 hours after death (except when death was caused by a contagious or infectious disease), and a medical examiner must view the body and certify in writing that no further examination is necessary before cremation.',
    ],
    caveats: [
      'Embalming is required only when death was caused by a highly contagious disease or when the body will be shipped out of state — you should not be told embalming is otherwise legally required.',
      'A licensed funeral director must give the client a written price disclosure before any price agreement is made, and must separately offer information about veterans\u2019 funeral and burial benefits with a signed written statement.',
    ],
  },
  michigan: {
    boardName: 'Michigan Board of Examiners in Mortuary Science (Department of Licensing and Regulatory Affairs, Bureau of Professional Licensing)',
    boardUrl: null,
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Michigan sits modestly below the national average price level (RPP 96.2).',
      'Mortuary-science licensing (funeral directors, embalmers, and establishments) is administered by LARA\u2019s Bureau of Professional Licensing under the Michigan Board of Examiners in Mortuary Science.',
    ],
    caveats: [
      'Michigan\u2019s Prepaid Funeral Contract Funding Act regulates the sellers, providers, and escrow agents that handle prepaid funeral contract funds — confirm any preneed contract references the Act\u2019s protections.',
      'Cemetery entities must maintain irrevocable endowment/perpetual-care trust funds subject to audit and Attorney General oversight — a backstop for cemetery prepayments.',
    ],
  },
  minnesota: {
    boardName: 'Minnesota Department of Health, Mortuary Science Section',
    boardUrl: 'https://www.health.state.mn.us/facilities/providers/mortsci/mortician.html',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Minnesota sits near the national average price level (RPP 98.6), so its modeled figures track the national anchor closely.',
      'Minnesota law requires every General Price List to carry the disclosure that \u201cExcept in certain cases, embalming is not required by law\u201d — and makes it a deceptive practice to claim state law requires embalming when it does not.',
    ],
    caveats: [
      'A body must be embalmed, refrigerated, or packed in dry ice if final disposition will not occur within 72 hours after death (or after release by a competent authority); refrigeration may not exceed six calendar days.',
      'It is likewise deceptive in Minnesota to represent that a casket is required for cremation by state or local law — a casket is not legally required for cremation.',
    ],
  },
  missouri: {
    boardName: 'Missouri State Board of Embalmers and Funeral Directors',
    boardUrl: null,
    fcaSurveyName: 'Funeral Consumers Alliance of Greater Kansas City — 2025 area survey of funeral home prices (Kansas and Missouri)',
    fcaSurveyUrl: 'https://funeralskc.org/wp-content/uploads/2025/11/FCA-2025-Price-Survey-Final-2025-for-Print-Landscape-1.pdf',
    context: [
      'Missouri sits well below the national average price level (RPP 90.8).',
      'The Funeral Consumers Alliance of Greater Kansas City\u2019s 2025 survey covers providers in both Missouri and Kansas, with each funeral home\u2019s General Price List date shown — an independent two-state benchmark, but confirm current GPLs before comparing.',
    ],
    caveats: [
      'A licensed funeral establishment may not hold an unembalmed body longer than 24 hours unless the body is refrigerated at 40°F or cooler or encased in a closed, hermetically sealed burial case — embalming without authorization from the person entitled to custody can draw board discipline.',
      'No statewide consumer price survey exists for Missouri beyond the regional Kansas City survey — always request itemized General Price Lists from two to three providers.',
    ],
  },
  montana: {
    boardName: 'Montana Board of Funeral Service',
    boardUrl: 'http://boards.bsd.dli.mt.gov/funeral/',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Montana sits modestly below the national average price level (RPP 94.6).',
      'Under Montana\u2019s Right of Disposition Act, a person may leave written disposition directions or designate an agent — and those directions have legal priority over survivors\u2019 wishes.',
    ],
    caveats: [
      'Human remains may not be cremated within 24 hours after the time of death; the authorizing agent must disclose pacemakers or other potentially hazardous implants.',
      'No Board licensee — or any director, officer, or employee of a mortuary, crematory, or other provider — may borrow prepaid funeral trust funds (principal or accrued interest).',
    ],
  },
  nebraska: {
    boardName: 'Nebraska Department of Health and Human Services — Board of Funeral Directing and Embalming (Licensure Unit)',
    boardUrl: null,
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Nebraska sits well below the national average price level (RPP 90.1).',
      'Nebraska\u2019s Burial Pre-Need Sale Act requires trust-funded preneed sellers to deposit 85% of contract payments into trust — confirm any preneed contract identifies the trust arrangement.',
    ],
    caveats: [
      'A separate Preneed Broker license (Nebraska Department of Insurance) is required to sell burial or funeral merchandise or services not for immediate use, and the broker must be associated with a funeral home.',
      'No funeral-home price survey from a Nebraska consumer organization could be found — request each provider\u2019s General Price List and compare itemized quotes directly.',
    ],
  },
  nevada: {
    boardName: 'Nevada Funeral and Cemetery Services Board',
    boardUrl: 'https://funeral.nv.gov',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Nevada sits essentially at the national average price level (RPP 100.0), so its modeled figures track the national anchor closely.',
      'No crematory, funeral home, cemetery, or other place accepting human remains for disposition may require the remains to be embalmed before cremation, interment, or other disposition, unless the State Board of Health orders it.',
    ],
    caveats: [
      'A crematory, funeral establishment, or direct-cremation facility must ensure each body is embalmed or refrigerated at 42°F or less within 24 hours after the operator receives the remains.',
      'Prepaid funeral contracts are regulated by the Division of Insurance under NRS chapter 689: money in trust is exempt from attachment, and the seller must provide the preneed sales agreement to the person entitled to custody of the remains.',
    ],
  },
  'new-hampshire': {
    boardName: 'Board of Registration of Funeral Directors and Embalmers (Office of Professional Licensure and Certification)',
    boardUrl: null,
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'New Hampshire sits moderately above the national average price level (RPP 104.2).',
      'The legal order of priority for custody and control of remains runs: spouse, adult son or daughter, parent, adult brother or sister — and a person may also designate an agent to carry out their wishes (RSA 290:16).',
    ],
    caveats: [
      'Prearranged funeral contracts involving payment to a trust account or insurance policy must be in writing and identify the seller, purchaser, and beneficiary, state the goods and services purchased, and disclose payment terms and default consequences.',
      'Families may handle all after-death care without hiring a funeral professional (except for details they choose to have a funeral home perform) — but no FCA affiliate exists in New Hampshire, so request current GPLs when comparing providers.',
    ],
  },
  'new-jersey': {
    boardName: 'New Jersey State Board of Mortuary Science of New Jersey',
    boardUrl: 'https://www.njconsumeraffairs.gov/mor/Pages/default.aspx',
    fcaSurveyName: 'Funeral Consumers Alliance of Princeton — 2024 funeral home price survey (How to Shop for Cremation and Prices)',
    fcaSurveyUrl: 'https://www.fcaprinceton.org/wp-content/uploads/2023/04/2024-1-How-to-Shop-for-Cremation-and-Prices.pdf',
    context: [
      'New Jersey has one of the highest regional price levels in the nation (RPP 108.8) — roughly 9% above the national average — so its modeled estimates run well above the national anchor.',
      'The State Board of Mortuary Science of New Jersey was created in 1948, one of the country\u2019s oldest mortuary boards, and its stated mission includes respecting each family\u2019s religious values while enforcing the state\u2019s standards for handling the deceased.',
    ],
    caveats: [
      'Preneed funeral arrangements may only be funded through a funeral trust or a funeral insurance policy — other payment structures do not satisfy the statute.',
      'The Funeral Consumers Alliance of Princeton\u2019s 2024 publication contains named funeral homes and actual direct-cremation prices — a useful independent benchmark — but confirm any figure against the provider\u2019s current GPL.',
    ],
  },
  'new-mexico': {
    boardName: 'Board of Funeral Services, New Mexico Regulation and Licensing Department',
    boardUrl: 'https://www.rld.nm.gov/boards-and-commissions/individual-boards-and-commissions/funeral-services/',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'New Mexico sits well below the national average price level (RPP 92.2).',
      'The Board of Funeral Services investigates consumer complaints and takes disciplinary action — verify a provider\u2019s license before engaging them.',
    ],
    caveats: [
      'Under New Mexico\u2019s Prearranged Funeral Plan Regulatory Law, money paid under a funeral-plan agreement is held in trust, and the beneficiary may demand return of the money plus interest in writing.',
      'No public FCA chapter survey with actual New Mexico funeral-home prices could be found — request each provider\u2019s General Price List and compare itemized quotes directly.',
    ],
  },
  'north-carolina': {
    boardName: 'North Carolina Board of Funeral Service',
    boardUrl: 'https://ncbfs.org/',
    fcaSurveyName: 'Funeral Consumers Alliance North Carolina — 2025–2026 statewide funeral home price survey',
    fcaSurveyUrl: 'https://www.funeralsnc.org/price-survey/',
    context: [
      'North Carolina sits modestly below the national average price level (RPP 94.3).',
      'Volunteers for the Funeral Consumers Alliance of North Carolina contacted more than 750 licensed funeral homes statewide for its 2025–2026 price survey — a genuinely statewide independent benchmark to compare any quote against.',
    ],
    caveats: [
      'North Carolina requires funeral establishments and crematories to refrigerate a body at no more than 40°F unless final disposition occurs within 24 hours of taking custody — you should not be told embalming is \u201crequired\u201d to hold a body beyond a day when refrigeration is available.',
      'Death certificates must be filed within five days — if you are on a tight timeline, confirm your funeral director meets that window.',
    ],
  },
  'north-dakota': {
    boardName: 'North Dakota State Board of Funeral Service',
    boardUrl: 'https://www.funeral.nd.gov/',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'North Dakota sits well below the national average price level (RPP 89.0).',
      'North Dakota rules allow transport and final disposition without embalming or refrigeration if the body reaches its destination within 48 hours; with constant 38–40°F refrigeration the limit extends to 72 hours.',
    ],
    caveats: [
      'Professional funeral services are not subject to North Dakota sales tax (the funeral home\u2019s purchases of tangible supplies and caskets are taxable to the funeral director) — so no sales tax should appear on the service portion of your bill.',
      'No public FCA chapter survey with actual North Dakota funeral-home prices could be found — request each provider\u2019s General Price List and compare itemized quotes directly.',
    ],
  },
  ohio: {
    boardName: 'State of Ohio Board of Embalmers and Funeral Directors',
    boardUrl: 'https://funeral.ohio.gov/',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Ohio sits well below the national average price level (RPP 92.8).',
      'Ohio\u2019s board collects a small fee when funeral homes sell preneed contracts — a safety net that reimburses families that can prove they paid but were refused services due to lost paperwork or misuse of funds.',
    ],
    caveats: [
      'The board restored an Indigent Burial and Cremation Support Program for state fiscal year 2025 (board minutes, February 2025) — a rare state-level safety net for families who cannot afford burial or cremation; check current program details with the board.',
      'No public FCA chapter price survey for Ohio qualifies as a link here — the FCA of Central Ohio\u2019s area GPL summary is member-only — so request itemized GPLs from providers directly.',
    ],
  },
  oklahoma: {
    boardName: 'Oklahoma Funeral Board',
    boardUrl: 'https://www.ok.gov/funeral/',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Oklahoma sits well below the national average price level (RPP 87.8), among the lowest price levels in the dataset.',
      'Oklahoma law requires each funeral to be under the personal supervision of an Oklahoma-licensed funeral director from the first call through interment.',
    ],
    caveats: [
      'Embalming may not be performed without authorization from the next of kin.',
      'Unembalmed bodies must be disposed of within 24 hours unless refrigerated at 40°F or below, and there is no public viewing of an unembalmed body 24 or more hours after death — confirm the provider\u2019s timing plan in writing.',
    ],
  },
  oregon: {
    boardName: 'Oregon Mortuary and Cemetery Board',
    boardUrl: 'https://www.oregon.gov/omcb/Pages/default.aspx',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Oregon sits modestly above the national average price level (RPP 103.4).',
      'The Oregon Mortuary and Cemetery Board is a combined funeral-and-cemetery regulator — distinctive versus funeral-only boards — and confirms active rulemaking on its official page.',
    ],
    caveats: [
      'Alkaline hydrolysis (water cremation) and natural organic reduction (human composting) are legal in Oregon; alternative-disposition facilities must obtain a certificate of authority from the Board — ask whether a provider is currently certified.',
      'Anyone selling trust-funded preneed goods and services must hold a preneed sales registration certificate from the board and be employed by a Certified Provider registered with the Department of Consumer and Business Services.',
    ],
  },
  pennsylvania: {
    boardName: 'Pennsylvania State Board of Funeral Directors',
    boardUrl: 'https://www.pa.gov/agencies/dos/department-and-offices/bpoa/boards-commissions/funeral-directors',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Pennsylvania sits modestly below the national average price level (RPP 97.6).',
      'The State Board of Funeral Directors regulates funeral-director licensure, funeral corporations, and the care, preparation, and disposition of bodies.',
    ],
    caveats: [
      'Pennsylvania requires a licensed funeral director to deposit 100% of funds received for preneed arrangements into escrow or trust at a Pennsylvania banking institution, in an account separate from business and personal accounts.',
      'Only licensed people may sell preneed — Pennsylvania courts have rejected unlicensed preneed selling as a workaround — so verify the seller\u2019s license before prepaying.',
    ],
  },
  'rhode-island': {
    boardName: 'Rhode Island Board of Funeral Directors and Embalmers',
    boardUrl: 'https://health.ri.gov/death-and-dying/embalming-funeral-directing',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Rhode Island sits modestly above the national average price level (RPP 102.3).',
      'Rhode Island regulates rental caskets: temporary-use caskets are allowed only if manufactured for multi-use, and the funeral director must obtain written next-of-kin authorization acknowledging the merchandise was previously used in whole or part.',
    ],
    caveats: [
      'Human remains may not be held more than 48 hours without embalming or refrigeration for public-health purposes — confirm the provider\u2019s plan for holding remains.',
      'Natural organic reduction (human composting) is not established law in Rhode Island — a 2025 bill was unverified as enacted — so do not assume it is available.',
    ],
  },
  'south-carolina': {
    boardName: 'South Carolina State Board of Funeral Service',
    boardUrl: 'https://llr.sc.gov/fs/',
    fcaSurveyName: 'Funeral Consumers Alliance of Greater Columbia — 2022 price survey (Greater Columbia area)',
    fcaSurveyUrl: 'https://www.scfuneralconsumers.org/uploads/4/9/8/2/4982014/spring_2022_fcasc_newsletter.pdf',
    context: [
      'South Carolina sits well below the national average price level (RPP 93.7).',
      'A 2024 law (HB 4116) revised South Carolina\u2019s funeral practice, cremation, and preneed statutes — anyone reading older guidance should check current law first.',
    ],
    caveats: [
      'The Funeral Consumers Alliance of Greater Columbia\u2019s 2022 survey is now dated and covers the Greater Columbia area only — confirm any listed figure against the provider\u2019s current GPL.',
      'Cash-funded preneed money must be deposited into trust within 30 days of collection.',
    ],
  },
  'south-dakota': {
    boardName: 'South Dakota Board of Funeral Service',
    boardUrl: 'https://doh.sd.gov/licensing-and-records/boards/funeral/',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'South Dakota sits well below the national average price level (RPP 88.6), among the lowest price levels in the dataset.',
      'Within 24 hours of death, the body must be refrigerated, embalmed, or buried; exceptions require a court order or a coroner directive.',
    ],
    caveats: [
      'A 2025 law requires each crematory to be inspected at least once every three years and to demonstrate that refrigerated retention is available — a backstop for families choosing cremation.',
      'The FCA\u2019s affiliate directory lists no affiliate in South Dakota — request each provider\u2019s General Price List and compare itemized quotes directly.',
    ],
  },
  tennessee: {
    boardName: 'Tennessee Board of Funeral Directors and Embalmers / Burial Services',
    boardUrl: 'https://www.tn.gov/commerce/regboards/funeral.html',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Tennessee sits well below the national average price level (RPP 91.9).',
      'Tennessee splits oversight: the Board of Funeral Directors and Embalmers regulates funeral professionals and establishments, while the Burial Services program regulates cemeteries and preneed sellers and agents (Prepaid Funeral Benefits Act, 2007).',
    ],
    caveats: [
      'The 2007 Act distinguishes guaranteed contracts — selected goods and services are furnished without an added charge at death — from nonguaranteed contracts, where a later balance may be due at death. Read the contract type before signing.',
      'The only located Tennessee chapter price survey is from 2011 and is too dated to link here — request current General Price Lists from providers and compare itemized quotes directly.',
    ],
  },
  utah: {
    boardName: 'Utah Division of Professional Licensing — Funeral Service (Board of Funeral Service)',
    boardUrl: 'https://dopl.utah.gov/fs/',
    fcaSurveyName: 'Funeral Consumers Alliance of Utah — Spring 2025 mortuary price surveys',
    fcaSurveyUrl: 'https://www.utahfunerals.org/compareprices',
    context: [
      'Utah sits near the national average price level (RPP 98.9), so its modeled figures track the national anchor closely.',
      'Utah has regulated alkaline hydrolysis since 2018 — and providers cannot require a casket or reject remains solely because they are not in one.',
    ],
    caveats: [
      'A licensed funeral establishment must have access to an embalming room and refrigeration that maintains no more than 40°F.',
      'The Funeral Consumers Alliance of Utah\u2019s Spring 2025 surveys are a useful independent benchmark — but confirm any listed figure against the provider\u2019s current GPL, since listed prices change.',
    ],
  },
  vermont: {
    boardName: 'Vermont Office of Professional Regulation — Funeral Service',
    boardUrl: 'https://sos.vermont.gov/opr/professions',
    fcaSurveyName: 'Funeral Consumers Alliance — 2021 Vermont funeral home price survey',
    fcaSurveyUrl: 'https://www.funerals.org/wp-content/uploads/2021/06/2021-Vermont-Funeral-Home-Price-Survey.pdf',
    context: [
      'Vermont sits near the national average price level (RPP 98.0), so its modeled figures track the national anchor closely.',
      'Natural organic reduction (human composting) is listed as a lawful disposition method in Vermont.',
    ],
    caveats: [
      'The Funeral Consumers Alliance 2021 Vermont survey is now dated — confirm any listed figure against the provider\u2019s current GPL.',
      'A funeral-establishment application must show water/wastewater approval, state fire-marshal approval, and pass an OPR inspection — a sign the regulator scrutinizes new facilities before they open.',
    ],
  },
  virginia: {
    boardName: 'Virginia Board of Funeral Directors and Embalmers',
    boardUrl: 'https://www.dhp.virginia.gov/Boards/Funeral/',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Virginia sits modestly above the national average price level (RPP 101.1).',
      'The Board regulates funeral establishments, crematories, and surface-transportation/removal services — not just funeral directors.',
    ],
    caveats: [
      'Virginia DHP\u2019s 2026 consumer guide distinguishes guaranteed from nonguaranteed prices: nonguaranteed items can require settlement at death, so check which prices in a preneed contract are actually locked.',
      'The only located Virginia chapter price survey is from 2014 and is too dated to link here — request current General Price Lists from providers and compare itemized quotes directly.',
    ],
  },
  washington: {
    boardName: 'Washington Funeral and Cemetery Board (Department of Licensing)',
    boardUrl: 'https://dol.wa.gov/professional-licenses/funeral-directors/funeral-and-cemetery-board',
    fcaSurveyName: 'People\u2019s Memorial Association — 2024 Washington funeral home price survey (250 funeral homes surveyed, biennial)',
    fcaSurveyUrl: 'https://peoplesmemorial.org/advocacy/price-survey.html',
    context: [
      'Washington has one of the highest regional price levels in the nation (RPP 107.0), so its modeled estimates run well above the national anchor.',
      'Washington was the first state to legalize natural organic reduction (human composting), in 2019, with implementation beginning in 2020.',
    ],
    caveats: [
      'The People\u2019s Memorial Association\u2019s 2024 survey covers 250 Washington funeral homes — the largest it has surveyed — and is an independent benchmark, but confirm any figure against the provider\u2019s current GPL.',
      'The Funeral and Cemetery Board licenses funeral directors, embalmers, and cemetery operators and investigates regulatory violations — verify licenses before engaging a provider.',
    ],
  },
  'west-virginia': {
    boardName: 'West Virginia Board of Funeral Service Examiners',
    boardUrl: 'https://wvfuneralboard.wv.gov/',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'West Virginia sits well below the national average price level (RPP 89.5).',
      'Alkaline hydrolysis requires board certification, follows cremation requirements, and cannot require a casket (WV Code §30-6-22b, enacted 2022).',
    ],
    caveats: [
      'Embalming generally requires authorization; the public-health exception requires written certification or request.',
      'The disposition hierarchy considers written wishes in a will, advance directive, or preneed agreement first — put your wishes in writing to ensure they control.',
    ],
  },
  wisconsin: {
    boardName: 'Wisconsin Funeral Directors Examining Board',
    boardUrl: 'https://dsps.wi.gov/Pages/BoardsCouncils/FuneralDirectors/Default.aspx',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Wisconsin sits modestly below the national average price level (RPP 94.1).',
      'The Funeral Directors Examining Board is created under Wis. Stat. §15.405(16) and operates under Chapter 445.',
    ],
    caveats: [
      'Life-insurance-funded burial agreements must identify the funeral home and insurer, disclose what is guaranteed, and identify the funding instrument — read those disclosures before signing.',
      'No verifiable current chapter price survey was found for Wisconsin — request each provider\u2019s General Price List and compare itemized quotes directly.',
    ],
  },
  wyoming: {
    boardName: 'Wyoming State Board of Funeral Service Practitioners',
    boardUrl: 'https://fspboard.wyo.gov',
    fcaSurveyName: null,
    fcaSurveyUrl: null,
    context: [
      'Wyoming sits well below the national average price level (RPP 92.7).',
      'The 2014 Funeral Service Practitioners Act covers cremation and \u201cchemical disposition,\u201d requires annual facility inspections, requires written authorization before removing remains from their container, and expressly permits rental caskets.',
    ],
    caveats: [
      'The legislature replaced the Board of Embalming with the State Board of Funeral Service Practitioners in 2014 — a fee-supported board that regulates professional funeral service.',
      'The FCA\u2019s affiliate directory lists no affiliate in Wyoming — request each provider\u2019s General Price List and compare itemized quotes directly.',
    ],
  },
};

export function generateStaticParams() {
  return ALL_STATE_SLUGS.map((slug) => ({ state: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const st = getState(state);
  if (!st) return {};
  const trad = st.estimates.traditional_burial;
  const crem = st.estimates.direct_cremation;
  const title = `Funeral Costs in ${st.name} (2026): Modeled Estimates by Service Type`;
  const description =
    `How much does a funeral cost in ${st.name}? Modeled estimate in August 2026 dollars: ${fmt(trad.point)} for a traditional burial with viewing (NFDA 2023 median $${dataset.anchors.traditional_burial.value_2023.toLocaleString()} inflated via the BLS funeral-expenses CPI, adjusted for ${st.name} prices), ${fmt(crem.point)} for direct cremation. Independent — no funeral-home money.`;
  const url = `${SITE_URL}/funeral-costs/${state}/`;
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'article' },
  };
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const st = getState(state);
  if (!st) notFound();
  const notes = STATE_NOTES[state];
  const trad = st.estimates.traditional_burial;
  const maxPoint = Math.max(...SERVICE_ORDER.map((k) => st.estimates[k].point));

  const faqs = [
    {
      q: `Are these real prices from ${st.name} funeral homes?`,
      a: `No. These are modeled estimates: the NFDA 2023 national median, adjusted to August 2026 dollars with the BLS funeral-expenses CPI and scaled by the BEA 2024 regional price parity for ${st.name} (RPP ${st.rpp_all_items.toFixed(1)}). No state-level funeral price survey exists. Treat the point figure as a planning midpoint and the range as the plausible spread — then request itemized General Price Lists from local funeral homes for real quotes.`,
    },
    {
      q: `What does the ${fmt(trad.point)} traditional-burial estimate include?`,
      a: `It follows the NFDA median's definition: basic services fee, removal/transfer, embalming and preparation, facilities and staff for viewing and ceremony, hearse, service car, memorial printed package, and a metal casket. It does not include the cemetery plot, opening and closing fees, a headstone, flowers, or obituary notices.`,
    },
    {
      q: `What is NOT included in these estimates?`,
      a: `Cemetery costs (plot, opening/closing, marker), flowers, obituary notices, clergy honoraria, death certificates, and other cash-advance items. Cemetery charges alone commonly add several thousand dollars to a burial. Use the calculator to add typical cemetery and cash-advance costs.`,
    },
    {
      q: `How accurate is the modeled estimate for ${st.name}?`,
      a: `It is a transparent starting point, not a quote. The ±15% illustrative range reflects typical within-state variation; individual funeral homes can fall outside it, especially in high-cost metros or with premium merchandise. The model's accuracy improves as a planning anchor, not as a prediction of any single provider's price.`,
    },
    {
      q: `How do I get an exact price in ${st.name}?`,
      a: `Under the FTC Funeral Rule you have the right to an itemized General Price List from any funeral home, price information by phone without giving your name, and to buy only the goods and services you want. Call or visit two to three providers, compare their GPLs line by line, and never sign under time pressure. See our guide to your rights under the FTC Funeral Rule.`,
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: `Funeral costs in ${st.name}`, url: `${SITE_URL}/funeral-costs/${state}/` },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link> › Funeral costs in {st.name}
        </nav>
        <h1>
          Funeral Costs in {st.name} <span className="modeled-tag">Modeled estimate</span>
        </h1>
        <div className="answer-first">
          <strong>Quick answer:</strong> a traditional funeral with viewing and burial in {st.name}{' '}
          is modeled at <strong>{fmt(trad.point)}</strong> (range {fmtRange(trad)}), versus the
          inflation-adjusted national anchor of {fmt(dataset.anchors.traditional_burial.value)} (the NFDA
          2023 median of {fmt(dataset.anchors.traditional_burial.value_2023)} in August 2026 dollars). Direct cremation
          is modeled at <strong>{fmt(st.estimates.direct_cremation.point)}</strong>. These are
          modeled estimates — not surveyed prices or quotes — built from the NFDA 2023 national
          medians, inflated with the BLS funeral-expenses CPI, and adjusted by {st.name}&apos;s BEA 2024 regional price parity ({st.rpp_all_items.toFixed(1)}).
        </div>

        <h2>Modeled estimates by service type — {st.name}</h2>
        <p style={{ color: 'var(--muted)' }}>
          Bars are scaled to the most expensive option. Ranges are illustrative (±15%), not
          statistical confidence intervals. Excludes cemetery and cash-advance costs unless noted.
        </p>
        <div className="est-grid">
          {SERVICE_ORDER.map((k: ServiceKey, i) => {
            const e = st.estimates[k];
            const anchor = dataset.anchors[k];
            return (
              <div className={`est-card${i === 0 ? ' featured' : ''}`} key={k}>
                <div className="svc">
                  {anchor.label}
                  {anchor.assumption && <small>Stated assumption — no NFDA median exists</small>}
                </div>
                <div className="val">{fmt(e.point)}</div>
                <div className="rng">Illustrative range {fmtRange(e)}</div>
                <div className="bar-track" aria-hidden="true">
                  <div className="bar-fill" style={{ width: `${(e.point / maxPoint) * 100}%` }} />
                </div>
                {anchor.assumption && (
                  <div className="assumption">Assumption: {anchor.assumption}</div>
                )}
              </div>
            );
          })}
        </div>

        <div className="context-grid">
          <div className="context-box">
            <h3>{st.name} in context</h3>
            <ul>
              {notes.context.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
          <div className="context-box">
            <h3>Local caveats</h3>
            <ul>
              {notes.caveats.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        </div>

        <h2>What&apos;s included — and what isn&apos;t</h2>
        <p><strong>Included</strong> (per the NFDA median definition): basic services fee, removal/transfer,
        embalming and preparation, viewing and ceremony facilities/staff, hearse, service car, memorial
        printed package, and casket (burial) or cremation casket and urn (cremation with service).</p>
        <p><strong>Not included:</strong> cemetery plot, opening and closing, headstone or marker, burial
        vault (except the burial-with-vault row), flowers, obituary notices, and cash-advance items such as
        clergy honoraria or death certificates.</p>

        <div className="affiliate-cta no-print">
          <div className="placeholder-note">Affiliate placement — not active</div>
          <p style={{ margin: '8px 0' }}>
            <strong>Planning ahead?</strong> Final-expense insurance is one way families fund funeral costs.
            We have no insurance partnerships yet, so there is nothing to click — when we add vetted,
            clearly-labeled options, they will appear here. <Link href="/affiliate-disclosure/">Read our disclosure</Link>.
          </p>
        </div>

        <h2>Official {st.name} resources</h2>
        <ul>
          {notes.boardUrl && (
            <li><a href={notes.boardUrl} rel="noopener noreferrer">{notes.boardName}</a> — verify licenses and file complaints.</li>
          )}
          {!notes.boardUrl && (
            <li>{notes.boardName} — verify licenses and file complaints (search the bureau&apos;s site directly).</li>
          )}
          {notes.fcaSurveyUrl && (
            <li><a href={notes.fcaSurveyUrl} rel="noopener noreferrer">{notes.fcaSurveyName}</a> — independent, volunteer-run price survey of local funeral homes.</li>
          )}
          <li><a href="https://consumer.ftc.gov/articles/ftc-funeral-rule">FTC Funeral Rule — your federal rights</a></li>
          <li><Link href="/guides/funeral-rule-rights/">Our plain-English guide to the Funeral Rule</Link></li>
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

        <p className="updated">
          {VINTAGE_LABEL} · Updated {LAST_UPDATED} · Model v3. <Link href="/methodology/">Full methodology</Link>.
        </p>
      </div>
    </>
  );
}
