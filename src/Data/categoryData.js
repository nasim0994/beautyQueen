import men from "../Images/categories-logo/men.png";
import woman from "../Images/categories-logo/woman.png";
import baby from "../Images/categories-logo/baby.png";
import Health from "../Images/categories-logo/men.png";
import Watches from "../Images/categories-logo/men.png";
import ElectronicDevices from "../Images/categories-logo/electronicdevice.png";
import ElectronicAccessories from "../Images/categories-logo/electronic.png";
import Groceries from "../Images/categories-logo/2022-12-14T18_10_49.png";
import Home from "../Images/categories-logo/home.png";
import Sports from "../Images/categories-logo/men.png";
import Automotive from "../Images/categories-logo/autom.png";

const categoryData = [
  {
    id: 1,
    title: "Men's Fashion",
    link: "/",
    icon: men,
    dropdown: [
      {
        id: 1.1,
        category: "mens-shirts",
        items: [
          {
            id: 1.31,
            title: "Muslim Shirts",
            link: "/",
          },
          {
            id: 1.32,
            title: "Punjabi & Pajama",
            link: "/",
          },
          {
            id: 1.32,
            title: "Accessories",
            link: "/",
          },
          {
            id: 1.32,
            title: "Jubahs",
            link: "/",
          },
        ],
      },
      {
        id: 1.2,
        category: "mens-shoes",
        items: [
          {
            id: 1.31,
            title: "Muslim Shirts",
            link: "/",
          },
          {
            id: 1.32,
            title: "Punjabi & Pajama",
            link: "/",
          },
          {
            id: 1.32,
            title: "Accessories",
            link: "/",
          },
          {
            id: 1.32,
            title: "Jubahs",
            link: "/",
          },
        ],
      },
      {
        id: 1.13,
        category: "mens-watches",
        items: [
          {
            id: 1.31,
            title: "Muslim Shirts",
            link: "/",
          },
          {
            id: 1.32,
            title: "Punjabi & Pajama",
            link: "/",
          },
          {
            id: 1.32,
            title: "Accessories",
            link: "/",
          },
          {
            id: 1.32,
            title: "Jubahs",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Women's Fashion",
    link: "/",
    icon: woman,
    dropdown: [
      {
        id: 5.1,
        category: "womens-dresses",
        items: [
          {
            id: 5.11,
            title: "Bracelets And Rings",
            link: "/",
          },
          {
            id: 5.12,
            title: "Necklaces And Earrings",
            link: "/",
          },
          {
            id: 5.13,
            title: "Women Brooches & Pins",
            link: "/",
          },
          {
            id: 5.13,
            title: "Nose Pin & Body Piercings",
            link: "/",
          },
          {
            id: 5.13,
            title: "Women's Watches",
            link: "/",
          },
          {
            id: 5.14,
            title: "Women's Sunglasses",
            link: "/",
          },
        ],
      },
      {
        id: 5.1,
        category: "womens-shoes",
        items: [
          {
            id: 5.11,
            title: "Bracelets And Rings",
            link: "/",
          },
          {
            id: 5.12,
            title: "Necklaces And Earrings",
            link: "/",
          },
          {
            id: 5.13,
            title: "Women Brooches & Pins",
            link: "/",
          },
          {
            id: 5.13,
            title: "Nose Pin & Body Piercings",
            link: "/",
          },
          {
            id: 5.13,
            title: "Women's Watches",
            link: "/",
          },
          {
            id: 5.14,
            title: "Women's Sunglasses",
            link: "/",
          },
        ],
      },
      {
        id: 5.1,
        category: "womens-watches",
        items: [
          {
            id: 5.11,
            title: "Bracelets And Rings",
            link: "/",
          },
          {
            id: 5.12,
            title: "Necklaces And Earrings",
            link: "/",
          },
          {
            id: 5.13,
            title: "Women Brooches & Pins",
            link: "/",
          },
          {
            id: 5.13,
            title: "Nose Pin & Body Piercings",
            link: "/",
          },
          {
            id: 5.13,
            title: "Women's Watches",
            link: "/",
          },
          {
            id: 5.14,
            title: "Women's Sunglasses",
            link: "/",
          },
        ],
      },
      {
        id: 5.1,
        category: "womens-bags",
        items: [
          {
            id: 5.11,
            title: "Bracelets And Rings",
            link: "/",
          },
          {
            id: 5.12,
            title: "Necklaces And Earrings",
            link: "/",
          },
          {
            id: 5.13,
            title: "Women Brooches & Pins",
            link: "/",
          },
          {
            id: 5.13,
            title: "Nose Pin & Body Piercings",
            link: "/",
          },
          {
            id: 5.13,
            title: "Women's Watches",
            link: "/",
          },
          {
            id: 5.14,
            title: "Women's Sunglasses",
            link: "/",
          },
        ],
      },
      {
        id: 5.1,
        category: "womens-jewellery",
        items: [
          {
            id: 5.11,
            title: "Bracelets And Rings",
            link: "/",
          },
          {
            id: 5.12,
            title: "Necklaces And Earrings",
            link: "/",
          },
          {
            id: 5.13,
            title: "Women Brooches & Pins",
            link: "/",
          },
          {
            id: 5.13,
            title: "Nose Pin & Body Piercings",
            link: "/",
          },
          {
            id: 5.13,
            title: "Women's Watches",
            link: "/",
          },
          {
            id: 5.14,
            title: "Women's Sunglasses",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Babies & Toys",
    link: "/",
    icon: baby,
  },
  {
    id: 4,
    title: "Health & Beauty",
    link: "/",
    icon: Health,
  },
  {
    id: 5,
    title: "Watches, Bags, Jewellery",
    link: "/",
    icon: Watches,
  },
  {
    id: 6,
    title: "Electronic Devices",
    link: "/",
    icon: ElectronicDevices,
    dropdown: [
      {
        id: 5.1,
        category: "Smartphones",
        items: [
          {
            id: 5.11,
            title: "Walton",
            link: "/",
          },
          {
            id: 5.11,
            title: "Realme",
            link: "/",
          },
          {
            id: 5.11,
            title: "Apple",
            link: "/",
          },
        ],
      },
      {
        id: 5.1,
        category: "Laptops",
        items: [
          {
            id: 5.11,
            title: "HP",
            link: "/",
          },
          {
            id: 5.12,
            title: "Lenevo",
            link: "/",
          },
          {
            id: 5.13,
            title: "Apple",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Electronic Accessories",
    link: "/",
    icon: ElectronicAccessories,
  },
  {
    id: 8,
    title: "Groceries & Pets",
    link: "/",
    icon: Groceries,
  },
  {
    id: 9,
    title: "Home-Decoration",
    link: "/",
    icon: Home,
  },
  {
    id: 10,
    title: "Sports & Outdoor",
    link: "/",
    icon: Sports,
  },
  {
    id: 11,
    title: "Automotive & Motorbike",
    link: "/",
    icon: Automotive,
  },
];

export default categoryData;
