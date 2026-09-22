import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "./firebase";
import type { Product } from "../types/Product";

export async function getProducts(): Promise<Product[]> {
  const productsRef = collection(db, "products");

  const productsQuery = query(productsRef, orderBy("createdAt", "desc"));

  const snapshot = await getDocs(productsQuery);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  })) as Product[];
}

export async function getProductById(
  productId: string,
): Promise<Product | null> {
  const productRef = doc(db, "products", productId);

  const snapshot = await getDoc(productRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  } as Product;
}

export async function createProduct(
  userId: string,
  title: string,
  category: string,
  price: number,
  location: string,
  description: string,
  image: string,
): Promise<string> {
  const productRef = await addDoc(collection(db, "products"), {
    title,
    category,
    price,
    location,
    description,
    image,
    sellerId: userId,
    createdAt: serverTimestamp(),
  });

  return productRef.id;
}

export function subscribeToProducts(
  onProductsChange: (products: Product[]) => void,
) {
  const productsRef = collection(db, "products");

  const productsQuery = query(productsRef, orderBy("createdAt", "desc"));

  const unsubscribe = onSnapshot(
    productsQuery,
    (snapshot) => {
      const products = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      })) as Product[];

      onProductsChange(products);
    },
    (error) => {
      console.error("Failed to listen to products:", error);
    },
  );

  return unsubscribe;
}
