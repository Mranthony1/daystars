export type ServiceIcon = "search" | "social" | "paid" | "brand" | "web";

export type Service = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  benefit: string;
  narrative: string;
  problems: string[];
  deliverables: string[];
  fit: string[];
  measures: string[];
  icon: ServiceIcon;
};

export const services: Service[] = [
  {
    slug: "seo",
    number: "01",
    title: "SEO and Organic Growth",
    summary:
      "Help businesses become easier to discover through search, improve relevant organic traffic, and build sustainable visibility.",
    benefit: "Be found for the searches that match real demand.",
    narrative:
      "Search works when a business is understandable to people and to the systems that connect them. DAYSTARS treats SEO as a growth practice: clarify what the company should be found for, make the site capable of earning that attention, and watch whether the right visitors arrive.",
    problems: [
      "The business is hard to find for the products or services it actually sells.",
      "Pages compete with each other, or important pages are buried.",
      "Content describes the company without answering what a buyer is trying to decide.",
      "There is no clear view of which queries, pages, or improvements matter.",
    ],
    deliverables: [
      "Technical SEO audit",
      "Keyword and search-intent research",
      "On-page optimization",
      "Content strategy",
      "Internal linking",
      "Search performance monitoring",
      "Technical improvement recommendations",
      "Organic growth recommendations",
    ],
    fit: [
      "Companies with a website that should earn attention over time.",
      "Service businesses that depend on being found in a specific market.",
      "E-commerce brands that need a clearer search foundation.",
    ],
    measures: [
      "Relevant queries the site is visible for",
      "Organic visits to priority pages",
      "Index coverage and technical health",
      "Enquiries or other useful actions that start from organic search",
    ],
    icon: "search",
  },
  {
    slug: "social",
    number: "02",
    title: "Social Media Marketing",
    summary:
      "Develop platform-specific content and community strategies that strengthen brand recognition, engagement, and opportunities for conversion.",
    benefit: "Show up with a point of view people can remember.",
    narrative:
      "Social media is not a posting schedule with a logo on it. The work is to decide what the brand should be known for, choose the platforms worth the effort, and make content that fits how people actually use them.",
    problems: [
      "The brand looks different every week, or says nothing specific.",
      "Activity is spread across platforms without a reason for each one.",
      "Content is made to fill a calendar rather than to earn attention.",
      "There is no useful read on what the audience responds to.",
    ],
    deliverables: [
      "Platform strategy",
      "Content planning",
      "Content calendars",
      "Creative direction",
      "Social content production",
      "Publishing workflows",
      "Community management",
      "Performance reporting",
    ],
    fit: [
      "Brands that need a recognizable presence, not just an account.",
      "Businesses whose customers already spend time on social platforms.",
      "Teams that want a clearer system for what gets published and why.",
    ],
    measures: [
      "Reach among the intended audience",
      "Quality of engagement, not only the volume of it",
      "Profile visits and content saves",
      "Visits or enquiries that can be traced to social activity",
    ],
    icon: "social",
  },
  {
    slug: "paid",
    number: "03",
    title: "Paid Advertising and Performance Marketing",
    summary:
      "Plan, launch, measure, and optimize advertising campaigns to help businesses reach appropriate audiences and improve acquisition efficiency.",
    benefit: "Put the offer in front of people who can use it.",
    narrative:
      "Paid media is useful when the audience, the offer, and the page someone lands on are working together. DAYSTARS plans campaigns as a learning system: start with a clear action, test the creative, and shift spend toward what holds up.",
    problems: [
      "Spend is going out without a defined audience or action.",
      "Ads and landing pages make different promises.",
      "The business cannot tell a useful click from an expensive one.",
      "Creative is guessed once and then left alone.",
    ],
    deliverables: [
      "Advertising strategy",
      "Audience research",
      "Campaign structure",
      "Campaign setup",
      "Creative testing",
      "Conversion tracking",
      "Budget optimization",
      "Reporting and analysis",
    ],
    fit: [
      "Businesses ready to invest in reaching a defined audience.",
      "Offers that can be explained clearly on a page or in an ad.",
      "Teams that want reporting tied to actions, not vanity totals.",
    ],
    measures: [
      "Reach of the intended audience",
      "Cost and quality of meaningful actions",
      "Landing-page response",
      "What the creative tests actually taught the business",
    ],
    icon: "paid",
  },
  {
    slug: "branding",
    number: "04",
    title: "Branding and Creative Strategy",
    summary:
      "Build a distinctive brand foundation through positioning, messaging, visual identity, and cohesive creative direction.",
    benefit: "Give the business a look and a voice people can place.",
    narrative:
      "A brand is the set of choices that make a company recognizable before the logo is explained. DAYSTARS starts with who the business is for, what it should be known for, and how that should look and sound across the work that follows.",
    problems: [
      "The company is hard to distinguish from competitors who say similar things.",
      "The name, the site, the deck, and the social presence feel unrelated.",
      "People inside the business describe the offer differently.",
      "Design decisions are being made one asset at a time.",
    ],
    deliverables: [
      "Brand positioning",
      "Messaging strategy",
      "Visual identity",
      "Logo system",
      "Typography and color system",
      "Brand guidelines",
      "Campaign creative",
      "Brand consistency recommendations",
    ],
    fit: [
      "New companies that need a foundation before they scale activity.",
      "Established businesses whose current identity no longer fits.",
      "Teams preparing for a website, campaign, or market expansion.",
    ],
    measures: [
      "A positioning line the team can actually use",
      "Consistency across the next set of customer-facing work",
      "Clearer recognition in the market the business cares about",
      "Fewer one-off design decisions",
    ],
    icon: "brand",
  },
  {
    slug: "web",
    number: "05",
    title: "Web Design and Development",
    summary:
      "Create responsive, accessible, fast websites that communicate value clearly and help turn visitors into customers.",
    benefit: "Make the website do the explaining — and the asking.",
    narrative:
      "A website should make the next step obvious. DAYSTARS designs and builds sites that carry the brand, answer the questions a buyer actually has, and stay fast and usable on the phones people use to decide.",
    problems: [
      "The current site looks finished but does not explain the offer.",
      "Visitors cannot tell what to do next.",
      "The experience breaks, slows down, or becomes hard to read on a phone.",
      "The business cannot update the story without starting over.",
    ],
    deliverables: [
      "Discovery and planning",
      "Information architecture",
      "UX and interface design",
      "Responsive development",
      "Next.js implementation where it fits the project",
      "Technical SEO foundations",
      "Performance optimization",
      "Conversion-focused design",
      "Testing and deployment support",
    ],
    fit: [
      "Companies replacing a site that no longer represents them.",
      "Founders who need a first serious web presence.",
      "Teams that want design and build handled as one project.",
    ],
    measures: [
      "Clarity of the offer on the first screen and the key pages",
      "Completed enquiries or other primary actions",
      "Speed, stability, and usability across screen sizes",
      "A structure the business can keep using after launch",
    ],
    icon: "web",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getAdjacentServices(slug: string) {
  const index = services.findIndex((service) => service.slug === slug);
  if (index < 0) return { previous: undefined, next: undefined };
  return {
    previous: services[index - 1],
    next: services[index + 1],
  };
}
