export type Film = {
  id: number,
  name: string,
  img?: HTMLImageElement
  description?: string
  href: string
}

export type LayoutProps = {
  children: React.ReactNode;
}