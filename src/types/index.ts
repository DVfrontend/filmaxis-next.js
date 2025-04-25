export type Film = {
  id: number,
  name: string,
  img: string 
  description: string,
  href: string,
}

export type LayoutProps = {
  children: React.ReactNode;
}

export type Socials = {
  name: string,
  id: number,
  url: string,
  logo?: string
}