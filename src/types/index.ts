export type Film = {
  id: number;
  name: string;
  description: string;
  href: string;
  poster: string;
  fulldescription: string;
  imgId?: number;
  personalId?: string;
  trailer?: string;
};

export type LayoutProps = {
  children: React.ReactNode;
};

export type Socials = {
  name: string;
  id: number;
  url: string;
  logo: string;
};

export type Subscribes = {
  id: number,
  name: string,
  price: number,
  currency: string,
  description: string
  features: string[],
  billingCycle: string
}
