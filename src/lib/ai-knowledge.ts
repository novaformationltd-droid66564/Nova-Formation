// Exhaustive knowledge base and intelligent response matcher for Nova Formation Ltd

export interface KnowledgeTopic {
  id: string;
  title: string;
  category: "uk" | "usa" | "banking" | "compliance" | "web" | "general" | "pricing";
  keywords: string[];
  urduKeywords: string[];
  summary: string;
  details: string;
  action?: {
    label: string;
    url: string;
    isExternal?: boolean;
  };
}

export const KNOWLEDGE_TOPICS: KnowledgeTopic[] = [
  {
    id: "uk-ltd-overview",
    title: "UK Limited Company Formation",
    category: "uk",
    keywords: ["uk ltd", "uk company", "uk formation", "register uk", "companies house", "england", "london company", "incorporation"],
    urduKeywords: ["یو کے", "برطانیہ", "کمپنی", "رجسٹریشن", "یوکے لمیٹڈ", "یو کے کمپنی"],
    summary: "Register your UK Limited Company remotely within 3 to 5 business days with Companies House.",
    details: `🇬🇧 **UK Limited (LTD) Company Formation**:
Nova Formation registers your UK company directly with Companies House with a 98% first-time approval rate. Non-UK residents can 100% legally own and manage a UK company without traveling.

**Included in our formations:**
• Official Companies House Incorporation & government fee covered
• Certificate of Incorporation (Digital & Printed)
• Memorandum & Articles of Association
• Digital Share Certificates
• UTR (Unique Taxpayer Reference) Registration with HMRC
• Company Authentication Code (WebFiling)
• London Registered Office Address & Director Service Address
• Official ID Verification (DIATF Compliant)
• Bank account guidance (Wise, Payoneer)

**Processing Time:** 3–5 Business Days
**Requirements:** Valid Passport or National ID, plus Proof of Address (utility bill or bank statement under 3 months old).`,
    action: {
      label: "View UK Packages & Pricing",
      url: "/uk-services",
    },
  },
  {
    id: "uk-packages-pricing",
    title: "UK LTD Formation Packages & Pricing",
    category: "pricing",
    keywords: ["uk price", "uk package", "uk cost", "how much uk", "uk fee", "starter", "silver", "gold", "platinum", "elite", "vip"],
    urduKeywords: ["قیمت", "پیکج", "کتنے پیسے", "خرچہ", "فیس", "یوکے ریٹ", "یوکے پیکج"],
    summary: "UK LTD packages start from £140 up to £300 VIP package.",
    details: `💰 **UK LTD Formation Packages & Pricing**:

1. **Starter (£140)**
   • Companies House Registration fee included
   • Digital Certificate of Incorporation & Memorandum
   • Digital Share Certificate & all documents in PDF
   • DIATF ID verification & Client portal access
   • Turnaround: 3–5 Business Days

2. **Silver (£170) — ⭐ Most Popular**
   • Everything in Starter PLUS:
   • Official London Registered Office Address
   • HMRC UTR Number & Authentication Code
   • Digital + Printed Certificate of Incorporation

3. **Gold (£180)**
   • Everything in Silver PLUS:
   • Director Service Address (protects home privacy)
   • Confirmation statement filing assistance
   • Priority processing

4. **Platinum (£210)**
   • Everything in Gold PLUS:
   • UK Business Bank Account Setup guidance (Wise / Payoneer)
   • VAT Registration guidance & business phone setup

5. **Elite (£250)**
   • Everything in Platinum PLUS:
   • Full corporate compliance kit & Stripe setup guidance
   • Dedicated account manager

6. **VIP (£300)**
   • Full bespoke 1-year corporate concierge & same-day express filing
   • Guaranteed banking application assistance & 24/7 dedicated support`,
    action: {
      label: "Explore UK Services",
      url: "/uk-services",
    },
  },
  {
    id: "usa-llc-overview",
    title: "USA LLC Formation for Non-Residents",
    category: "usa",
    keywords: ["usa llc", "us company", "llc formation", "form llc", "wyoming llc", "delaware llc", "us business", "american company", "ein", "itin"],
    urduKeywords: ["امریکہ", "امریکی", "ایل ایل سی", "یو ایس اے", "ایل ایل سی فارمیشن", "کمپنی امریکہ"],
    summary: "Form your US LLC remotely without being a US citizen or visiting the USA. We provide Registered Agent, Articles of Organization & EIN.",
    details: `🇺🇸 **USA LLC Formation (100% Remote for Global Founders)**:
You do NOT need a US Social Security Number (SSN) or US citizenship to register an LLC. Nova Formation handles the entire process remotely.

**What we deliver:**
• Articles of Organization filed with the Secretary of State
• 1 Full Year of US Registered Agent Service
• Custom LLC Operating Agreement & Banking Resolution
• Official Federal EIN (Employer Identification Number) from the IRS
• US Business Address with digital mail scanning
• FinCEN Beneficial Ownership Information (BOI) compliance
• Support for US Business Bank Accounts (Mercury, Relay) & Stripe US

**Best States for Foreigners:**
• **Wyoming**: #1 choice for E-commerce & Amazon sellers (zero state income tax, maximum privacy, low $62 annual renewal).
• **Delaware**: Best for Tech startups looking to raise VC funds.
• **New Mexico**: Budget-friendly with strong privacy & zero annual reporting fee.
• **Florida & Texas**: Excellent if you have direct business connections or clients in those states.`,
    action: {
      label: "Choose Your State & Form LLC",
      url: "/usa-services/us-llc-formation/choose-state",
    },
  },
  {
    id: "usa-packages-pricing",
    title: "US LLC Packages & State Fees",
    category: "pricing",
    keywords: ["llc price", "llc cost", "llc package", "usa fee", "state fee", "wyoming fee", "delaware fee", "how much llc"],
    urduKeywords: ["ایل ایل سی ریٹ", "ایل ایل سی قیمت", "امریکہ پیکج", "کتنے پیسے لگیں گے", "اسٹیٹ فیس"],
    summary: "US LLC formation packages start from £250 + state fee.",
    details: `💵 **US LLC Packages & Pricing**:

1. **Starter (£250 + State Fee)**
   • Name Availability Check & Articles of Organization filing
   • 1 Year Registered Agent Service Included
   • Custom LLC Operating Agreement
   • Digital Delivery of all approved State documents

2. **Silver (£280 + State Fee) — ⭐ Most Popular**
   • Everything in Starter PLUS:
   • Official Federal EIN (Tax ID) from the IRS (100% without SSN)
   • Banking Resolution document for opening bank accounts
   • Certificate of Good Standing

3. **Gold (£320 + State Fee)**
   • Everything in Silver PLUS:
   • Prestigious US Business Mailing Address
   • FinCEN BOI (Beneficial Ownership Information) Mandatory Report Filing
   • Expedited state filing queue

4. **Platinum (£380 + State Fee)**
   • Everything in Gold PLUS:
   • US Business Bank Account Setup assistance (Mercury / Relay)
   • US Stripe Gateway Integration guidance & ITIN filing assistance

5. **Elite (£450 + State Fee)**
   • Complete Turnkey US Corporation setup with dedicated US expansion specialist and full 1-year corporate oversight.

*Note: State filing fees are separate government fees (e.g. Wyoming ~$102, New Mexico ~$50, Delaware ~$140, Florida ~$125).*`,
    action: {
      label: "View US Services",
      url: "/usa-services",
    },
  },
  {
    id: "business-banking",
    title: "Business Banking & Payment Gateways (Stripe, Wise, Mercury)",
    category: "banking",
    keywords: ["bank", "banking", "wise", "stripe", "mercury", "relay", "payoneer", "paypal", "payment gateway", "merchant", "dollar account"],
    urduKeywords: ["بینک", "بینکنگ", "وائز", "اسٹرائپ", "سٹرائپ", "مرکری", "پایونیر", "اکاؤنٹ", "ڈالر اکاؤنٹ", "پیمنٹ گیٹ وے"],
    summary: "Guaranteed document guidance for Wise Business, Stripe, Mercury Bank, Relay Financial, and Payoneer.",
    details: `💳 **Business Banking & Payment Gateways**:
Having a legally registered UK LTD or US LLC gives you direct access to tier-1 global banking and payment processing:

**For UK Limited Companies:**
• **Wise Business**: Multi-currency account with UK Account Number & Sort Code, US Routing Number, EUR IBAN.
• **Stripe UK**: Accept credit/debit cards globally, Apple Pay, Google Pay with fast payouts.
• **Payoneer**: Ideal for marketplace withdrawals (Amazon, eBay, Upwork).

**For US LLCs:**
• **Mercury Bank**: Top digital business banking for foreign-owned US LLCs. Zero monthly maintenance fees, FDIC-insured up to $5M, virtual cards.
• **Relay Financial**: Excellent multi-account business checking for US LLCs.
• **Stripe USA**: Highest acceptance rates and seamless integration worldwide.

**How Nova Formation Helps:**
We provide the exact certified Articles of Organization, EIN confirmation letter (CP 575 / 147C), Operating Agreement, Banking Resolution, and address proof required by compliance teams for swift approval.`,
    action: {
      label: "View Banking Solutions",
      url: "/banks-payment-solutions",
    },
  },
  {
    id: "uk-compliance-taxes",
    title: "UK Compliance, Annual Accounts & VAT",
    category: "compliance",
    keywords: ["compliance", "annual accounts", "confirmation statement", "vat", "tax", "hmrc", "ct600", "dormant", "strike off", "dissolution"],
    urduKeywords: ["ٹیکس", "اکاؤنٹس", "کمپلائنس", "وی اے ٹی", "کنفرمیشن سٹیٹمنٹ", "سالانہ ریٹرن"],
    summary: "Full ongoing UK compliance: Confirmation Statements (£60), Annual Accounts (£150), VAT Registration (£120).",
    details: `📑 **UK Compliance & Accounting Services**:
Keep your UK Company in 100% good standing with Companies House and HMRC:

• **Confirmation Statement (CS01) — £60**: Mandatory annual report to Companies House verifying directors, shareholders, and registered office.
• **Annual Accounts & Corporation Tax (CT600) — £150**: Full preparation and filing of balance sheet and tax return with HMRC.
• **VAT Registration — £120**: Voluntary or mandatory VAT registration (if UK turnover exceeds £90k).
• **Dormant Company Accounts — £70**: For companies that haven't traded during the financial year.
• **Company Strike-Off / Dissolution — £120**: Compliant closing and striking off of a company with Companies House.
• **Registered Office Renewal — £90/year**: Keep your official London correspondence address active.`,
    action: {
      label: "View UK Compliance Services",
      url: "/uk-compliance",
    },
  },
  {
    id: "requirements-eligibility",
    title: "Requirements & Eligibility for Foreign Founders",
    category: "general",
    keywords: ["requirements", "documents", "eligibility", "foreigner", "non resident", "pakistan", "india", "passport", "id card", "need to visit"],
    urduKeywords: ["کیا چاہیے", "دستاویزات", "پاسپورٹ", "شناختی کارڈ", "شرائط", "اہلیت", "کیا پاکستان سے"],
    summary: "No travel required. Only a valid passport/national ID and proof of address needed.",
    details: `📋 **Who Can Apply & What Documents Are Needed?**

✅ **100% Remote Registration**:
You do **not** need to visit the UK or USA. Founders from Pakistan, India, UAE, Saudi Arabia, Africa, and 150+ countries can legally form companies through Nova Formation.

**Documents Required:**
1. **Valid Passport** or Government National ID Card.
2. **Proof of Residential Address** (Utility Bill, Bank Statement, or Internet Bill issued within the last 3 months).
3. **Proposed Company Name** (we run free name availability checks).
4. **Brief description** of your business activities (e.g. IT services, e-commerce, consulting, trading).

No physical office in the UK/US required — we provide the certified registered agent and registered office addresses for you!`,
    action: {
      label: "Book Free Consultation",
      url: "https://wa.me/923234362864?text=Hello%20Nova%20Formation%2C%20I%20want%20to%20know%20the%20requirements%20to%20register%20a%20company.",
      isExternal: true,
    },
  },
  {
    id: "timeline-turnaround",
    title: "Processing Times & Timelines",
    category: "general",
    keywords: ["time", "how long", "timeline", "duration", "fast", "days", "when ready", "processing time"],
    urduKeywords: ["کتنا ٹائم", "کتنے دن", "کتنا وقت", "کب تک بنے گی", "مدت"],
    summary: "UK LTD takes 3–5 business days. US LLC takes 5–10 business days + EIN processing.",
    details: `⏱️ **How Long Does the Process Take?**

• **UK LTD Formation**:
  - Companies House Approval: **3 to 5 Business Days** (Express same-day available in VIP).
  - UTR Number from HMRC: Dispatched within 2–3 weeks by HMRC.
  - Digital documents delivered instantly upon approval.

• **US LLC Formation**:
  - State Approval (Articles of Organization): **3 to 7 Business Days** (varies by state, Wyoming is typically fast).
  - IRS Federal EIN (Tax ID for non-residents): **10 to 20 Business Days** depending on IRS fax queue.
  - Bank Account & Stripe Setup: Ready immediately once EIN is issued.`,
    action: {
      label: "Start Your Application",
      url: "/pricing",
    },
  },
  {
    id: "web-development",
    title: "Web Development & Digital Solutions",
    category: "web",
    keywords: ["web development", "website", "design", "ecommerce", "shopify", "wordpress", "custom site", "landing page", "software"],
    urduKeywords: ["ویب سائٹ", "ڈویلپمنٹ", "ویب ڈیزائن", "آن لائن اسٹور", "ای کامرس"],
    summary: "Professional custom websites, e-commerce stores, and high-converting landing pages for businesses.",
    details: `💻 **Web Development & Digital Solutions**:
Nova Formation also builds premium web applications and brand assets to help new businesses launch fast:

• **High-Converting Business Websites**: Modern, responsive, fast, and SEO-optimized.
• **E-Commerce & Online Stores**: Shopify, WooCommerce, and custom checkout solutions integrated with Stripe and PayPal.
• **Brand Identity**: Logo design, company letterheads, corporate presentation templates.
• **Maintenance & Cloud Hosting**: High-speed, secure, and always accessible.`,
    action: {
      label: "Explore Web Development",
      url: "/web-development",
    },
  },
  {
    id: "contact-support",
    title: "Contact & Free Consultation",
    category: "general",
    keywords: ["contact", "phone", "whatsapp", "email", "address", "support", "office", "call", "agent", "consultant"],
    urduKeywords: ["رابطہ", "فون نمبر", "واٹس ایپ", "ای میل", "دفتر", "کال", "نمبر"],
    summary: "Call or WhatsApp our team at 0323 4362864 or email novaformationltd@gmail.com.",
    details: `📞 **Get in Touch with Nova Formation Ltd**:

Our dedicated formation consultants are available 12/6 to review your business plans and guide you step-by-step:

• **WhatsApp**: [0323 4362864](https://wa.me/923234362864) (International: [+92 323 4362864](https://wa.me/923234362864))
• **Phone Call**: 0323 4362864
• **Email**: [novaformationltd@gmail.com](mailto:novaformationltd@gmail.com)
• **Facebook**: [facebook.com/novaformationltd](https://facebook.com/novaformationltd)
• **Free Consultation**: Discuss your UK LTD, US LLC, Banking, or Tax compliance with an expert today!`,
    action: {
      label: "Open WhatsApp Chat",
      url: "https://wa.me/923234362864?text=Hello%20Nova%20Formation%2C%20I%20would%20like%20a%20free%20consultation.",
      isExternal: true,
    },
  },
];

// Helper to determine the best response for any user query
export function findBestAnswer(query: string): {
  text: string;
  topic?: KnowledgeTopic;
  suggestedQuestions: string[];
} {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return {
      text: "Hello! Welcome to Nova Formation Ltd. I am your AI Business Consultant. How can I help you today? You can ask me about UK LTD formation, US LLC registration, Stripe & Wise banking, pricing packages, or tax compliance.",
      suggestedQuestions: [
        "How much does a UK LTD cost?",
        "How can I form a US LLC from Pakistan?",
        "Can I open Wise and Stripe accounts?",
        "Which US state is best for an LLC?",
      ],
    };
  }

  // Greeting checks
  if (/^(hi|hello|hey|salam|assalam|aoa|kese ho|kia hal|hal|help)/i.test(normalized) && normalized.length < 15) {
    return {
      text: `سلام! خوش آمدید Nova Formation Ltd میں۔ میں آپ کا AI بزنس کنسلٹنٹ ہوں۔\n\nمیں آپ کو UK LTD کمپنی، USA LLC فارمیشن، بزنس بینکنگ (Wise, Mercury, Stripe)، اور ٹیکس کمپلائنس کے تمام پیکجز، فیس اور پراسس کے بارے میں مکمل معلومات دے سکتا ہوں۔\n\nآپ کیا جاننا چاہتے ہیں؟ نیچے دیے گئے آپشنز میں سے منتخب کریں یا اپنا سوال لکھیں!`,
      suggestedQuestions: [
        "UK LTD Formation Packages & Pricing",
        "USA LLC Formation & Best States",
        "Stripe & Wise Business Banking",
        "Documents required to register",
      ],
    };
  }

  // Score each topic
  let bestTopic: KnowledgeTopic | null = null;
  let highestScore = 0;

  for (const topic of KNOWLEDGE_TOPICS) {
    let score = 0;

    // Check title match
    if (normalized.includes(topic.title.toLowerCase())) score += 10;

    // Check keywords
    for (const kw of topic.keywords) {
      if (normalized.includes(kw.toLowerCase())) {
        score += kw.includes(" ") ? 5 : 2;
      }
    }

    // Check Urdu keywords
    for (const ukw of topic.urduKeywords) {
      if (normalized.includes(ukw.toLowerCase())) {
        score += 4;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestTopic = topic;
    }
  }

  if (bestTopic && highestScore > 0) {
    const followUps: Record<string, string[]> = {
      "uk-ltd-overview": [
        "What are the UK LTD pricing packages?",
        "Can I open a Wise bank account for UK LTD?",
        "What documents do I need to register?",
      ],
      "uk-packages-pricing": [
        "What is included in the £170 Silver package?",
        "How long does UK formation take?",
        "Chat with consultant on WhatsApp",
      ],
      "usa-llc-overview": [
        "What are the US LLC packages & pricing?",
        "Which state is best: Wyoming or Delaware?",
        "Can I get US Stripe without an SSN?",
      ],
      "usa-packages-pricing": [
        "How much are state filing fees?",
        "How do I get an EIN number?",
        "Chat with consultant on WhatsApp",
      ],
      "business-banking": [
        "Can I get Mercury Bank for US LLC?",
        "How does Wise Business verification work?",
        "How much is UK LTD with Bank setup?",
      ],
      "uk-compliance-taxes": [
        "How much is Confirmation Statement (CS01)?",
        "When do I need to register for VAT?",
        "What if my company is dormant?",
      ],
      "requirements-eligibility": [
        "Can Pakistani residents form UK & US companies?",
        "What is the UK LTD formation price?",
        "Start my application on WhatsApp",
      ],
      "timeline-turnaround": [
        "How fast can I get a UK LTD?",
        "How long does the IRS take for an EIN?",
        "View all formation packages",
      ],
      "web-development": [
        "What is the price for an e-commerce store?",
        "Can you integrate Stripe payment gateway?",
        "Chat with our web team on WhatsApp",
      ],
      "contact-support": [
        "What is your WhatsApp number?",
        "Can I book a free consultation call?",
        "What are your working hours?",
      ],
    };

    return {
      text: bestTopic.details,
      topic: bestTopic,
      suggestedQuestions: followUps[bestTopic.id] || [
        "UK LTD Pricing & Packages",
        "US LLC Formation & State Fees",
        "Wise, Mercury & Stripe Banking",
        "Contact on WhatsApp",
      ],
    };
  }

  // Fallback intelligent summary
  return {
    text: `Nova Formation Ltd provides complete end-to-end UK & US corporate solutions for global entrepreneurs:

• **UK LTD Formation**: Starting at **£140** (Companies House fees, registered office, UTR, share certificates). Ready in 3–5 days.
• **USA LLC Formation**: Starting at **£250 + state fee** (Wyoming, Delaware, New Mexico, Florida, Registered Agent, Operating Agreement, EIN).
• **Business Banking & Payments**: Assistance with Wise Business, Mercury Bank, Relay Financial, and Stripe account approvals.
• **Annual Compliance & Accounts**: Confirmation Statements (£60), Annual Accounts (£150), and VAT Registration (£120).

Would you like specific details about **UK Formations**, **US LLCs**, or **Banking**? You can also talk directly with our live consultant on WhatsApp at **0323 4362864**.`,
    suggestedQuestions: [
      "Tell me about UK LTD packages",
      "Tell me about US LLC in Wyoming",
      "How to get Stripe and Wise account?",
      "Talk to consultant on WhatsApp",
    ],
  };
}
