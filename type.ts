export type ProductsT = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type UserT = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
};

export type CartT = {
  id:number;
  products:ProductsT[]
  total:number;
  discountedTotal: number;
  userId: number;
  totalProducts:number;
  totalQuantity:number;
};
