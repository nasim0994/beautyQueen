import PersonalCare from "../Images/categories-logo/personalCare.jpg";
import MomBaby from "../Images/categories-logo/mom&baby.jpg";
import Accessories from "../Images/categories-logo/accessories.jpg";
import Clothing from "../Images/categories-logo/clothing.jpeg";

const categoryData = [
  {
    id: 1,
    title: "Personal care",
    icon: PersonalCare,
    dropdown: [
      {
        title: "Skin Care",
      },
      {
        title: "Body",
      },
      {
        title: "Face",
      },
      {
        title: "Hair Care",
      },
    ],
  },

  {
    id: 2,
    title: "Mom & Baby",
    icon: MomBaby,
    dropdown: [
      {
        title: "Baby Product",
      },
      {
        title: "Baby Lotion",
      },
      {
        title: "Baby Care",
      },
      {
        title: "Soap & BodyWash",
      },
    ],
  },

  {
    id: 3,
    title: "Clothing",
    icon: Clothing,
    dropdown: [
      {
        title: "Sharees",
      },
      {
        title: "Shalwar Kameez",
      },
      {
        title: "T-Shirts",
      },
      {
        title: "Kurtis",
      },
      {
        title: "Party Wear",
      },
      {
        title: "Undergarments",
      },
    ],
  },

  {
    id: 3,
    title: "Accessories",
    link: "/",
    icon: Accessories,
    dropdown: [
      {
        title: "Hair straightener",
      },
      {
        title: "Loofahs & Sponges",
      },
      {
        title: "Bag",
      },
      {
        title: "Watch",
      },
      {
        title: "Jewelry",
      },
    ],
  },
];

export default categoryData;
