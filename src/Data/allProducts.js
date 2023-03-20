const allProducts = [
  {
    category: "Personal care",
    subCategory: "Skin Care",
    title: "Himalaya Natural Glow Saffron Face Cream",
    description: "An apple mobile which is nothing like apple",
    price: 2200,
    discountPercentage: 20,
    rating: 4.5,
    stock: 94,
    brand: "Apple",
    thumbnail:
      "https://images.shajgoj.com/wp-content/uploads/2018/10/himalaya-cream-natural-glow-fair-ness-50ml.jpg-750x750.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
  {
    category: "Personal care",
    subCategory: "Skin Care",
    title: "Nivea Soft Jar Moisturising Cream",
    description: "An apple mobile which is nothing like apple",
    price: 2200,
    discountPercentage: 20,
    rating: 4.5,
    stock: 94,
    brand: "Apple",
    thumbnail:
      "https://images.shajgoj.com/wp-content/uploads/2020/05/4060-Nivea-Soft-Jar-Moisturising-Cream-1-570x570.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
  {
    category: "Personal care",
    subCategory: "Body",
    title: "Boroplus Whitening Body Lotion",
    description: "An apple mobile which is nothing like apple",
    price: 2200,
    discountPercentage: 20,
    rating: 4.5,
    stock: 94,
    brand: "Apple",
    thumbnail:
      "https://images.shajgoj.com/wp-content/uploads/2020/06/boroplus-almond-body-lotion200-1-570x570.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
  {
    category: "Personal care",
    subCategory: "Face",
    title: "Rajkonna Glow Booster Facial Wash With Jojoba Beads",
    description: "An apple mobile which is nothing like apple",
    price: 2200,
    discountPercentage: 20,
    rating: 4.5,
    stock: 94,
    brand: "Apple",
    thumbnail:
      "https://images.shajgoj.com/wp-content/uploads/2021/02/Rajkonna-Glow-Booster-Facial-Wash-With-Jojoba-Beads-hero-image-570x570.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },

  {
    category: "Hair care",
    subCategory: "Hair styling",
    title: "Kesh King Aloe Vera Herbal Shampoo",
    description: "An apple mobile which is nothing like apple",
    price: 2200,
    discountPercentage: 20,
    rating: 4.5,
    stock: 94,
    brand: "Apple",
    thumbnail:
      "https://images.shajgoj.com/wp-content/uploads/2022/08/Kesh-King-Anti-Hairfall-Shampoo-340-ml_sku24244-570x570.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
  {
    category: "Hair care",
    subCategory: "Tools & Accessories",
    title: "Groome Stylish Unisex Spiral Hair Band (Black)",
    description: "An apple mobile which is nothing like apple",
    price: 2200,
    discountPercentage: 20,
    rating: 4.5,
    stock: 94,
    brand: "Apple",
    thumbnail:
      "https://images.shajgoj.com/wp-content/uploads/2020/08/Groome-Stylish-Unisex-Spiral-Hair-Band-Black-570x570.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
  {
    category: "Mom & Baby",
    subCategory: "Baby Product",
    title: "Parachute Just For Baby - Baby lotion",
    description: "An apple mobile which is nothing like apple",
    price: 2200,
    discountPercentage: 20,
    rating: 4.5,
    stock: 94,
    brand: "Apple",
    thumbnail:
      "https://images.shajgoj.com/wp-content/uploads/2019/02/Parachute-Just-for-Baby-Baby-Lotion-100ml-570x570.png",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
  {
    category: "Mom & Baby",
    subCategory: "Baby Lotion",
    title: "Dove Baby Rich Moisture Nourishing Baby Lotion",
    description: "An apple mobile which is nothing like apple",
    price: 2200,
    discountPercentage: 20,
    rating: 4.5,
    stock: 94,
    brand: "Apple",
    thumbnail:
      "https://images.shajgoj.com/wp-content/uploads/2018/05/Dove-Baby-Rich-Moisture-Nourishing-Baby-Lotion-2-570x570.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
  {
    category: "Mom & Baby",
    subCategory: "Baby Care",
    title: "Bioderma ABCDerm Shampooing",
    description: "An apple mobile which is nothing like apple",
    price: 2200,
    discountPercentage: 20,
    rating: 4.5,
    stock: 94,
    brand: "Apple",
    thumbnail:
      "https://images.shajgoj.com/wp-content/uploads/2018/06/bioderma-shampoo-abcdream-shampooing.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
  {
    category: "Mom & Baby",
    subCategory: "Soap & Bodywash",
    title: "Baby Soap - Parachute Just for Baby",
    description: "An apple mobile which is nothing like apple",
    price: 2200,
    discountPercentage: 20,
    rating: 4.5,
    stock: 94,
    brand: "Apple",
    thumbnail:
      "https://images.shajgoj.com/wp-content/uploads/2019/06/Parachute-Just-for-Baby-Baby-Soap-75g-1-570x570.png",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
];

export default allProducts;