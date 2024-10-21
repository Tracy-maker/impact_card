import {
  FaUtensilSpoon,
  FaTshirt,
  FaLeaf,
  FaSeedling,
  FaGlobe,
} from "react-icons/fa";

const cardData = {
  brandName: "Barbie",
  brandLogo: "/assets/img/brand_logo.png",
  imageUrl: "/assets/img/impact_image.jpg",
  description: "Driving Barbie Impact Card",

  progress: {
    current: 1,
    total: 400,
  },

  backgroundColor: "bg-pink-300",
  backgroundOverlayColor: "bg-pink-400",

  // Rewards data
  rewards: [
    {
      label: "Seed Pods Planted",
      icon: FaUtensilSpoon,
      number: 2,
    },
    {
      label: "Contribution",
      icon: FaTshirt,
      number: 3,
    },
    {
      label: "Future Forest Collection",
      icon: FaLeaf,
      number: 1,
    },
  ],

  // Impact metrics data
  impactMetrics: [
    {
      icon: FaSeedling,
      value: "4",
      label: "Seed Pods Planted",
    },
    {
      icon: FaGlobe,
      value: "0.4%",
      label: "Contributed of Total",
    },
    {
      icon: null,
      value: null,
      label: "Future Forest Collection",
    },
  ],
};

export default cardData;
