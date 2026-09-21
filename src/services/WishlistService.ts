import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { db } from "./firebase";

export async function addToWishlist(userId: string, productId: string) {
  const wishlistRef = doc(db, "users", userId, "wishlist", productId);

  await setDoc(wishlistRef, {
    productId,
    addedAt: serverTimestamp(),
  });
}

export async function removeFromWishlist(userId: string, productId: string) {
  const wishlistRef = doc(db, "users", userId, "wishlist", productId);

  await deleteDoc(wishlistRef);
}

export async function isInWishlist(
  userId: string,
  productId: string,
): Promise<boolean> {
  const wishlistRef = doc(db, "users", userId, "wishlist", productId);

  const snapshot = await getDoc(wishlistRef);

  return snapshot.exists();
}

export async function getWishlistProductIds(userId: string): Promise<string[]> {
  const wishlistRef = collection(db, "users", userId, "wishlist");

  const snapshot = await getDocs(wishlistRef);

  return snapshot.docs.map((document) => document.id);
}
