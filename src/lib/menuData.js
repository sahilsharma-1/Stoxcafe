export const MENU = [
  {
    id: 'demat',
    tag: '01 · Investing',
    title: 'Demat & Trading',
    blurb:
      'Open an account, then actually understand what you own. Every StoxCafe demat comes with a guide, not just a login.',
    items: [
      { name: 'Demat + Trading account opening', detail: 'Paperless KYC, live in under a day', price: 'Free' },
      { name: '1:1 onboarding call', detail: 'A real person walks you through your first trade', price: 'Included' },
      { name: 'Portfolio check-ins', detail: 'Quarterly review of what you hold and why', price: 'Included' },
      { name: 'Market literacy sessions', detail: 'Small-group sessions on SIPs, F&O basics, taxes', price: 'Free' },
    ],
    cta: 'Open a demat account',
  },
  {
    id: 'loans',
    tag: '02 · Borrowing',
    title: 'Loans',
    blurb:
      'We shop your application across partner lenders so you don\u2019t have to fill the same form six times.',
    items: [
      { name: 'Home loan', detail: 'Compared across banks & housing finance partners', price: 'From 8.1%*' },
      { name: 'Personal loan', detail: 'Disbursal in as little as 48 hours', price: 'From 10.4%*' },
      { name: 'Other loans', detail: 'Education, vehicle & business loans on request', price: 'On request' },
    ],
    cta: 'Check your loan options',
  },
  {
    id: 'insurance',
    tag: '03 · Protection',
    title: 'Insurance',
    blurb:
      'Cover chosen for your actual life, explained in plain language before you sign anything.',
    items: [
      { name: 'Term insurance', detail: 'Life cover starting at ₹1Cr sum assured', price: 'From ₹590/mo*' },
      { name: 'Car insurance', detail: 'Comprehensive & third-party, renewed on time', price: 'From ₹2,100/yr*' },
      { name: 'Other insurance', detail: 'Health, two-wheeler & travel cover', price: 'On request' },
    ],
    cta: 'Compare insurance plans',
  },
];
