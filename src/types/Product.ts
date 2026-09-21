import type { Timestamp } from "firebase/firestore";

export interface Product {
  id: string;
  image: string;
  price: number;
  category: string;
  title: string;
  location: string;
  description: string;
  sellerId: string;
  createdAt: Timestamp | null;
}