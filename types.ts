
export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCard {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface ShowcaseItem {
  title: string;
  category: string;
  image: string;
}
