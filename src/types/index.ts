export type Film = {
  id: number;
  name: string;
  description: string;
  href: string;
  poster: string,
  fulldescription: string;
  imgId?: number;
  posterId?: string
}


export type LayoutProps = {
  children: React.ReactNode;
}

export type Socials = {
  name: string,
  id: number,
  url: string,
  logo: string
}