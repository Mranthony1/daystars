export const projectCategories = [
  { value: "all", label: "All Projects" },
  { value: "branding", label: "Branding" },
  { value: "websites", label: "Websites" },
  { value: "seo", label: "SEO" },
  { value: "social", label: "Social Media" },
  { value: "paid", label: "Paid Advertising" },
] as const;

export type ProjectCategory = (typeof projectCategories)[number]["value"];

export type ProjectArt =
  | "northline"
  | "harbor"
  | "lumen"
  | "fieldnote"
  | "kite";

export type Project = {
  slug: string;
  title: string;
  designation: "Self-Initiated Concept";
  industry: string;
  services: string[];
  categories: Exclude<ProjectCategory, "all">[];
  summary: string;
  challenge: string;
  strategy: string;
  execution: string[];
  outcome: string;
  lessons: string;
  art: ProjectArt;
  alt: string;
};

export const projects: Project[] = [
  {
    slug: "northline-atelier",
    title: "Northline Atelier",
    designation: "Self-Initiated Concept",
    industry: "Independent fashion",
    services: ["Branding", "Web design"],
    categories: ["branding", "websites"],
    summary:
      "A concept identity and editorial website for a clothing label that needed a sharper point of view than a marketplace shopfront.",
    challenge:
      "The imagined label had strong garments and a weak frame. Product photos were doing all the talking, the name was easy to forget, and nothing on the page explained why this studio was different from a feed of similar clothes.",
    strategy:
      "Treat the brand as an editorial house rather than a catalog. Lead with a point of view, show fewer pieces with more context, and make the site feel like a publication that happens to sell.",
    execution: [
      "A wordmark and monogram built for labels, the site, and small social crops.",
      "A restrained palette and a display type system that can carry lookbook headlines.",
      "A homepage that opens on the season’s idea, then moves into pieces, process, and a quiet way to enquire or buy.",
      "Page structure designed so a future collection can be added without redesigning the brand.",
    ],
    outcome:
      "This is not a client engagement and it has no sales or traffic results. The concept shows the brand system, the site structure, and the hierarchy DAYSTARS would use to make a fashion label feel specific.",
    lessons:
      "A shop becomes memorable when the point of view is as designed as the product. The catalog can come second.",
    art: "northline",
    alt: "Abstract editorial composition of charcoal planes, a warm paper field, and a single lime diagonal for the Northline Atelier concept.",
  },
  {
    slug: "harbor-and-grain",
    title: "Harbor & Grain",
    designation: "Self-Initiated Concept",
    industry: "Hospitality",
    services: ["Branding", "Social media"],
    categories: ["branding", "social"],
    summary:
      "A concept brand and social system for a coastal restaurant group that wanted to be known for a table, not a trend.",
    challenge:
      "The imagined group had two rooms and no shared language. Menus, signs, and posts each looked like they belonged to a different business, and the social presence was a stream of plates without a reason to follow.",
    strategy:
      "Build one house voice around place, produce, and the table. Use social to extend that voice — origin stories, the room, and the people — instead of posting every dish at the same volume.",
    execution: [
      "Naming guidance and a lockup that works on a menu, a sign, and an avatar.",
      "A short messaging system the floor team could actually say out loud.",
      "A content rhythm: the room, the ingredient, the table, and the occasional announcement.",
      "Templates for stories and still posts so the look stays intact when the kitchen is busy.",
    ],
    outcome:
      "No guest counts or engagement figures are claimed. The concept demonstrates a brand voice and a social system a hospitality group could run without reinventing the look each week.",
    lessons:
      "Hospitality brands get stronger when the feed sounds like the room, not like a content calendar.",
    art: "harbor",
    alt: "Abstract coastal composition with a stone circle, charcoal ground, and a thin lime horizon for the Harbor and Grain concept.",
  },
  {
    slug: "lumen-ledger",
    title: "Lumen Ledger",
    designation: "Self-Initiated Concept",
    industry: "Financial advisory",
    services: ["Web design", "SEO"],
    categories: ["websites", "seo"],
    summary:
      "A concept website and search foundation for an advisory practice that needed to sound clear before it tried to sound impressive.",
    challenge:
      "The imagined practice offered useful advice and described it in language only the firm understood. Important pages competed, the first screen made no promise, and there was no plan for which searches deserved a page.",
    strategy:
      "Rewrite the site around the decisions a client is trying to make. Pair each priority service with a page that matches a real search, and keep the design quiet enough for the advice to lead.",
    execution: [
      "An information architecture organized by client questions, not internal departments.",
      "A first screen that states who the practice helps and what happens next.",
      "Search intent mapped to a small set of pages worth earning, rather than a blog for its own sake.",
      "Technical foundations: clear titles, internal links, fast pages, and a path to an enquiry on every service.",
    ],
    outcome:
      "There are no ranking or lead figures because this work was not launched for a client. The concept shows the page system and the search plan the practice would brief, measure, and revise.",
    lessons:
      "Professional firms win attention by answering a specific question well, not by publishing more often.",
    art: "lumen",
    alt: "Abstract grid of fine lines and ink bars with one lime marker, made for the Lumen Ledger concept.",
  },
  {
    slug: "fieldnote-supply",
    title: "Fieldnote Supply",
    designation: "Self-Initiated Concept",
    industry: "E-commerce",
    services: ["Web design", "Social media", "Paid advertising"],
    categories: ["websites", "social", "paid"],
    summary:
      "A concept storefront, social language, and paid structure for a small-goods brand entering a crowded category.",
    challenge:
      "The imagined brand sold useful objects and looked interchangeable in ads. The product page explained materials and forgot the person. Paid traffic, if it arrived, would have landed on a page with no point of view.",
    strategy:
      "Make the product page and the ad the same argument. Use social to show the object in a life, and structure paid campaigns around a few offers that can be tested without confusing the brand.",
    execution: [
      "A product narrative: what it is, who it is for, and why this version.",
      "A storefront hierarchy that leads with one object, then the edit, then the story.",
      "Social frames that can be shot simply and still look like the brand.",
      "A campaign structure with separate tests for audience, offer, and creative — and a landing page matched to each offer.",
    ],
    outcome:
      "No return on ad spend or conversion rate is reported. The concept is a model for how the store, the posts, and the ads would share one argument before any budget is spent.",
    lessons:
      "Paid media gets more honest when the page is designed as part of the campaign, not after it.",
    art: "fieldnote",
    alt: "Stacked paper and charcoal blocks with a lime label, an abstract product still for the Fieldnote Supply concept.",
  },
  {
    slug: "kite-and-co",
    title: "Kite & Co.",
    designation: "Self-Initiated Concept",
    industry: "Architecture",
    services: ["Branding"],
    categories: ["branding"],
    summary:
      "A concept identity for an architecture studio that wanted the brand to feel as considered as the buildings.",
    challenge:
      "The imagined studio had a careful body of work and an identity that looked borrowed from a template. Project pages were galleries without a way of seeing. The name did not travel well from a drawing set to a proposal cover.",
    strategy:
      "Build an identity from the studio’s way of working: measure, light, and the joint between materials. Let the system be quiet at small sizes and confident on a project cover.",
    execution: [
      "A geometric mark derived from a joint and a ray of light, not a building cliché.",
      "A typographic system for project titles, drawings, and the practice name.",
      "Rules for photography, margins, and captions so a project page reads as one argument.",
      "A short guideline: what the studio says first, and what it refuses to decorate.",
    ],
    outcome:
      "This concept was not commissioned and has no market-research scores. It demonstrates an identity system a studio could apply to proposals, the site, and the door.",
    lessons:
      "Architecture brands feel credible when the identity has the same discipline as the work it presents.",
    art: "kite",
    alt: "Architectural line composition on charcoal with a warm paper plane and a lime joint for the Kite and Co. concept.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return { previous: undefined, next: undefined };
  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}
