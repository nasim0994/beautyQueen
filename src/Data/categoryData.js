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
        category: "Clothing",
        items: [
          {
            id: 1.11,
            title: "Jeans & Denim",
            link: "/",
          },
          {
            id: 1.12,
            title: "T-shirt & Tanks",
            link: "/",
          },
          {
            id: 1.13,
            title: "Pant & Pajama",
            link: "/",
          },
        ],
      },
      {
        id: 1.2,
        category: "Muslim Wear",
        items: [
          {
            id: 1.21,
            title: "Panjabi & Pajama",
            link: "/",
          },
          {
            id: 1.22,
            title: "Tupi & Pagri",
            link: "/",
          },
          {
            id: 1.23,
            title: "Pant & Pajama",
            link: "/",
          },
        ],
      },
      {
        id: 1.13,
        category: "Muslim Wear",
        items: [
          {
            id: 1.31,
            title: "Panjabi",
            link: "/",
          },
          {
            id: 1.32,
            title: "Pant & Pajama",
            link: "/",
          },
        ],
      },
      {
        id: 1.4,
        category: "Muslim Wear",
        items: [
          {
            id: 1.41,
            title: "Panjabi & Pajama",
            link: "/",
          },
          {
            id: 1.42,
            title: "Tupi & Pagri",
            link: "/",
          },
          {
            id: 1.43,
            title: "Pant & Pajama",
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
    dropdown: [
      {
        id: 5.1,
        category: "Clothing",
        items: [
          {
            id: 5.11,
            title: "Shirt",
            link: "/",
          },
          {
            id: 5.12,
            title: "T-shirt",
            link: "/",
          },
          {
            id: 5.13,
            title: "Pant",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Electronic Devices",
    link: "/",
    icon: ElectronicDevices,
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
    title: "Home & Lifestyle",
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
