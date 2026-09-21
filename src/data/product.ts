export interface Product {
  id: number;
  image: string;
  price: string;
  category: string;
  title: string;
  location: string;
  date: string;
}

export const products: Product[] = [
  {
    id: 1,
    image: "https://picsum.photos/seed/phone1/600/400",
    price: "31,000",
    category: "Mobile Phone",
    title: "Samsung Phone",
    location: "Tirur, Kerala",
    date: "Today",
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/bike1/600/400",
    price: "1,14,500",
    category: "Scooters",
    title: "Electric Scooter",
    location: "Kozhikode, Kerala",
    date: "Today",
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/car1/600/400",
    price: "7,50,000",
    category: "Cars",
    title: "Jeep Compass",
    location: "Kannur, Kerala",
    date: "Yesterday",
  },
  {
    id: 4,
    image: "https://picsum.photos/seed/shirt1/600/400",
    price: "489",
    category: "Fashion",
    title: "Regular Fit Shirt",
    location: "Malappuram, Kerala",
    date: "Today",
  },
  {
    id: 5,
    image: "https://picsum.photos/seed/watch1/600/400",
    price: "3,000",
    category: "Watches",
    title: "Classic Watch",
    location: "Kochi, Kerala",
    date: "Today",
  },
  {
    id: 6,
    image: "https://picsum.photos/seed/shoe1/600/400",
    price: "450",
    category: "Footwear",
    title: "Sneakers",
    location: "Thrissur, Kerala",
    date: "Today",
  },
  {
    id: 7,
    image: "https://picsum.photos/seed/home1/600/400",
    price: "12,000",
    category: "Furniture",
    title: "Wooden Table",
    location: "Kozhikode, Kerala",
    date: "Sep 18",
  },
  {
    id: 8,
    image: "https://picsum.photos/seed/laptop1/600/400",
    price: "55,000",
    category: "Electronics",
    title: "Gaming Laptop",
    location: "Ernakulam, Kerala",
    date: "Sep 17",
  },
  {
    id: 9,
    image: "https://picsum.photos/seed/camera1/600/400",
    price: "42,000",
    category: "Cameras",
    title: "Digital Camera",
    location: "Kannur, Kerala",
    date: "Sep 15",
  },
  {
    id: 10,
    image: "https://picsum.photos/seed/table1/600/400",
    price: "8,500",
    category: "Furniture",
    title: "Study Table",
    location: "Calicut, Kerala",
    date: "Sep 14",
  },
  {
    id: 11,
    image: "https://picsum.photos/seed/tv1/600/400",
    price: "28,000",
    category: "TV & Audio",
    title: "Smart LED TV",
    location: "Malappuram, Kerala",
    date: "Sep 12",
  },
  {
    id: 12,
    image: "https://picsum.photos/seed/fridge1/600/400",
    price: "18,000",
    category: "Appliances",
    title: "Double Door Refrigerator",
    location: "Kochi, Kerala",
    date: "Sep 10",
  },
];