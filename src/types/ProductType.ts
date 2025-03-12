
export interface ProductType {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  hoverImage?: string;
  description?: string;
  isNew?: boolean;
  sizes?: string[];
}
