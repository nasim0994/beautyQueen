import woman from "../Images/categories-logo/woman.png";
import baby from "../Images/categories-logo/baby.png";
import Health from "../Images/categories-logo/men.png";

const categoryData = [
  {
    id: 1,
    title: "Personal care",
    link: "/",
    icon: woman,
    dropdown: [
      {
        title: "Skin Care",
        link: "/",
      },
      {
        title: "Body",
        link: "/",
      },
      {
        title: "Face",
        link: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Mom & Baby",
    link: "/",
    icon: baby,
    dropdown: [
      {
        title: "Baby Product",
        link: "/",
      },
      {
        title: "Baby Lotion",
        link: "/",
      },
      {
        title: "Baby Care",
        link: "/",
      },
      {
        title: "Soap & BodyWash",
        link: "/",
      },
    ],
  },

  {
    id: 3,
    title: "Hair care",
    link: "/",
    icon: Health,
    dropdown: [
      {
        title: "Hair styling",
        link: "/",
      },
      {
        title: "Tools & Accessories",
        link: "/",
      },
    ],
  },
];

export default categoryData;
