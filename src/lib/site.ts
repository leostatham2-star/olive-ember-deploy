export const BRAND = {
  name: "Olive & Ember",
  tagline: "Wood Fired Kitchen",
  address1: "1120 Monroe Street",
  address2: "West Loop, Chicago, IL 60607",
  phone: "(312) 555 0147",
  phoneHref: "tel:+13125550147",
  email: "hello@oliveandember.com",
  hoursShort: "Tue to Sun, 5 PM to 11 PM",
  closedDay: "Monday",
};

export const IMG = {
  hero: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4f5520071a4f.jpg",
  reserveBg: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5d1d1e0cccf5.jpg",
  hearth: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/6dac92eb4d74.jpg",
  flames: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/6d35fb6dd22e.jpg",
  tasting: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a7aac8b32871.jpg",
  eventBg: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1a075ccc2afa.jpg",
  eventTable: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/91de03099314.png",
  negroni: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ad086f71563b.jpg",
  octopus: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c14f8660af75.jpg",
  burrata: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0def502a7c9b.jpg",
  scallops: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e90b1bfe85e4.jpg",
  tagliatelle: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a6ded97abc70.jpg",
  steak: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c4fd7a0bb2e0.jpg",
  lamb: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/81cd4af5fb43.jpg",
  tiramisu: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c342c2571eab.jpg",
  fondant: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d1abc2184720.jpg",
  wine: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/119fd48d23c2.jpg",
  oven: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/146c916ab8cf.jpg",
  oysters: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ef3074081b18.jpg",
  bread: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/39aa71cc428e.jpg",
  privateDining: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f3b5d0b1f008.jpg",
  wineHand: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c4c6f3849ad5.jpg",
  veggies: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d7118c0e9d80.jpg",
  terrace: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/49162873eafc.jpg",
  interior: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1465fa2fbead.jpg",
};

export type PageKey = "home" | "menu" | "story" | "gallery" | "reservations" | "contact";

export const NAV: { key: PageKey; label: string }[] = [
  { key: "home", label: "Home" },
  { key: "menu", label: "Menu" },
  { key: "story", label: "Our Story" },
  { key: "gallery", label: "Gallery" },
  { key: "reservations", label: "Reservations" },
  { key: "contact", label: "Contact" },
];

export const PAGE_TITLES: Record<PageKey, string> = {
  home: "Olive & Ember | Wood Fired Kitchen, Chicago",
  menu: "Menu | Olive & Ember",
  story: "Our Story | Olive & Ember",
  gallery: "Gallery | Olive & Ember",
  reservations: "Book a Table | Olive & Ember",
  contact: "Contact | Olive & Ember",
};

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  img?: string;
  tags?: string[];
};

export const MENU: Record<
  "starters" | "mains" | "desserts" | "drinks",
  { label: string; note: string; items: MenuItem[] }
> = {
  starters: {
    label: "Starters",
    note: "Made to share, straight from the hearth",
    items: [
      {
        name: "Charred Octopus",
        description:
          "Slow braised then finished over the coals, with smoked paprika oil, crisped fingerlings and a bright squeeze of lemon",
        price: "24",
        img: IMG.octopus,
      },
      {
        name: "Whipped Burrata",
        description:
          "Creamy burrata over heirloom tomatoes with basil oil, grilled sourdough and a drizzle of aged balsamic",
        price: "19",
        img: IMG.burrata,
        tags: ["Vegetarian"],
      },
      {
        name: "Wood Fired Scallops",
        description:
          "Three plump scallops seared in the shell with brown butter, hazelnut, sage and roasted cauliflower",
        price: "22",
        img: IMG.scallops,
      },
      {
        name: "Hearth Bread & Dips",
        description:
          "Loaves baked in the oven door each afternoon, served with whipped feta, olives and our green herb oil",
        price: "12",
        img: IMG.bread,
        tags: ["Vegetarian"],
      },
    ],
  },
  mains: {
    label: "Mains",
    note: "Cooked over oak and olive wood, never in a hurry",
    items: [
      {
        name: "Ember Grilled Ribeye",
        description:
          "Sixteen ounces dry aged for twenty eight days, finished with bone marrow butter, charred onion and red wine jus",
        price: "58",
        img: IMG.steak,
      },
      {
        name: "Chestnut Tagliatelle",
        description:
          "Ribbons rolled in house each morning, tossed with wild mushrooms, truffle cream and aged pecorino",
        price: "34",
        img: IMG.tagliatelle,
        tags: ["Vegetarian"],
      },
      {
        name: "Olive Branch Lamb Chops",
        description:
          "Three chops crusted with pistachio and herbs, over smoked eggplant with a bright mint gremolata",
        price: "46",
        img: IMG.lamb,
      },
      {
        name: "Whole Roasted Branzino",
        description:
          "Line caught branzino roasted over fennel and citrus, filleted at the table with salsa verde",
        price: "42",
      },
    ],
  },
  desserts: {
    label: "Desserts",
    note: "A sweet finish, worth saving room for",
    items: [
      {
        name: "Espresso Tiramisu",
        description:
          "Built in layers each morning with mascarpone, savoiardi soaked in our own espresso blend and bitter cocoa",
        price: "14",
        img: IMG.tiramisu,
      },
      {
        name: "Dark Chocolate Fondant",
        description:
          "A warm molten centre with salted caramel and burnt honey gelato from the creamery down the road",
        price: "15",
        img: IMG.fondant,
      },
      {
        name: "Olive Oil Cake",
        description:
          "Soft citrus scented cake with mascarpone cream, crushed pistachio and a thread of honey",
        price: "13",
        tags: ["Vegetarian"],
      },
    ],
  },
  drinks: {
    label: "Drinks",
    note: "Poured slow at the marble bar",
    items: [
      {
        name: "Smoked Negroni",
        description:
          "Gin, campari and sweet vermouth stirred down and finished with a drift of applewood smoke under glass",
        price: "17",
        img: IMG.negroni,
      },
      {
        name: "Barolo by the Glass",
        description:
          "Nebbiolo from Piedmont with rose, tar and cherry, decanted tableside from a bottle opened at five",
        price: "19",
        img: IMG.wine,
      },
      {
        name: "The Golden Hour",
        description:
          "Bourbon, wildflower honey and orange, warmed with a sprig of rosemary caught from the flame",
        price: "16",
      },
      {
        name: "Amalfi Spritz",
        description:
          "Limoncello and prosecco over ice with a whisper of thyme and a twist of coast grown lemon",
        price: "15",
      },
    ],
  },
};

export const TASTING = {
  name: "The Hearth Table",
  description:
    "Seven courses served at the chef's counter beside the open fire. You watch every plate being built and hear the stories behind them. Offered Tuesday through Saturday for parties of two to six.",
  price: "95",
  pairing: "55",
};

export const TESTIMONIALS = [
  {
    quote:
      "We came for my mother's birthday and the team treated her like family. The lamb fell apart at the touch of a fork and the room smells faintly of woodsmoke in the best way.",
    name: "Dana R.",
    detail: "Fulton Market",
  },
  {
    quote:
      "The tasting counter is the best seat in Chicago right now. Seven courses, one fire, and a chef who talks you through every plate without a hint of fuss.",
    name: "Marcus T.",
    detail: "Logan Square",
  },
  {
    quote:
      "Date night sorted. Candlelight, a smoky negroni, and tiramisu we nearly fought over. Service was warm and unhurried even on a packed Friday.",
    name: "Priya S.",
    detail: "River North",
  },
];

export const GALLERY = [
  { img: IMG.oven, caption: "The oven at full roar before service" },
  { img: IMG.oysters, caption: "Oysters on crushed ice, first of the night" },
  { img: IMG.bread, caption: "Hearth bread, cracked wheat and green oil" },
  { img: IMG.privateDining, caption: "The garden room set for a private dinner" },
  { img: IMG.wineHand, caption: "First pour of Barolo at the bar" },
  { img: IMG.veggies, caption: "Morning delivery from the farmers on Harrison" },
  { img: IMG.terrace, caption: "String lights over the terrace in summer" },
  { img: IMG.eventTable, caption: "A long table for a golden anniversary" },
];

export const HOURS = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "5:00 PM to 11:00 PM" },
  { day: "Wednesday", time: "5:00 PM to 11:00 PM" },
  { day: "Thursday", time: "5:00 PM to 11:00 PM" },
  { day: "Friday", time: "5:00 PM to 12:00 AM" },
  { day: "Saturday", time: "5:00 PM to 12:00 AM" },
  { day: "Sunday", time: "5:00 PM to 10:00 PM" },
];

export const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", key: "instagram" as const },
  { label: "Facebook", href: "https://facebook.com", key: "facebook" as const },
  { label: "X", href: "https://x.com", key: "x" as const },
];
