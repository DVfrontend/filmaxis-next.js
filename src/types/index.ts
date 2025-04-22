export type Films = {
  id: number,
  name: string,
  img?: HTMLImageElement
  description?: string
}

export type LayoutProps = {
  children: React.ReactNode;
}