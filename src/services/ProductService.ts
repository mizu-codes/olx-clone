import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "./firebase";
import type { Product } from "../types/Product";

export async function getProducts(): Promise<Product[]> {
  const productsRef = collection(db, "products");

  const productsQuery = query(
    productsRef,
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(productsQuery);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  })) as Product[];
}

export async function getProductById(
  productId: string
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