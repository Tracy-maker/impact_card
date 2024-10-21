import {
  FaUtensilSpoon,
  FaTshirt,
  FaLeaf,
  FaSeedling,
  FaGlobe,
} from "react-icons/fa";


const cardData = [
  {
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
  },
  {
    brandName: "Frozen",
    brandLogo: "/assets/img/frozen_logo.png",
    imageUrl: "/assets/img/frozen_image.jpg",
    description: "Frozen Impact Card",

    progress: {
      current: 2,
      total: 400,
    },

    backgroundColor: "bg-blue-300",
    backgroundOverlayColor: "bg-blue-400",

    rewards: [
      { label: "Ice Sculptures Created", icon: FaUtensilSpoon, number: 8 },
      { label: "Frozen Adventures", icon: FaTshirt, number: 12 },
      { label: "Winter Wonders", icon: FaLeaf, number: 4 },
    ],

    impactMetrics: [
      { icon: FaSeedling, value: "300", label: "Snowmen Built" },
      { icon: FaGlobe, value: "80%", label: "Frozen Adventures" },
      { icon: null, value: null, label: "Winter Events" },
    ],
  },
  {
    brandName: "The Lion King",
    brandLogo: "/assets/img/lion_king_logo.png",
    imageUrl: "/assets/img/lion_king_image.jpg",
    description: "The Lion King Impact Card",

    progress: {
      current: 3,
      total: 400,
    },

    backgroundColor: "bg-yellow-300",
    backgroundOverlayColor: "bg-yellow-400",

    rewards: [
      { label: "Lions Protected", icon: FaUtensilSpoon, number: 20 },
      { label: "Kingdoms Established", icon: FaTshirt, number: 15 },
      { label: "Nature Preserved", icon: FaLeaf, number: 10 },
    ],

    impactMetrics: [
      { icon: FaSeedling, value: "10", label: "Conservation Efforts" },
      { icon: FaGlobe, value: "90%", label: "Wildlife Protected" },
      { icon: null, value: null, label: "Nature Reserves" },
    ],
  },
  {
    brandName: "Toy Story",
    brandLogo: "/assets/img/toy_story_logo.png",
    imageUrl: "/assets/img/toy_story_image.jpg",
    description: "Toy Story Impact Card",

    progress: {
      current: 4,
      total: 400,
    },

    backgroundColor: "bg-green-300",
    backgroundOverlayColor: "bg-green-400",

    rewards: [
      { label: "Toys Recycled", icon: FaUtensilSpoon, number: 30 },
      { label: "Adventures Taken", icon: FaTshirt, number: 25 },
      { label: "Friendships Formed", icon: FaLeaf, number: 50 },
    ],

    impactMetrics: [
      { icon: FaSeedling, value: "500", label: "Toys Recycled" },
      { icon: FaGlobe, value: "85%", label: "Sustainable Toys" },
      { icon: null, value: null, label: "New Adventures" },
    ],
  },
  {
    brandName: "Marvel",
    brandLogo: "/assets/img/marvel_logo.png",
    imageUrl: "/assets/img/marvel_image.jpg",
    description: "Marvel Impact Card",

    progress: {
      current: 5,
      total: 400,
    },

    backgroundColor: "bg-red-500",
    backgroundOverlayColor: "bg-red-600",

    rewards: [
      { label: "Heroes Created", icon: FaUtensilSpoon, number: 5 },
      { label: "Villains Defeated", icon: FaTshirt, number: 20 },
      { label: "Cities Saved", icon: FaLeaf, number: 50 },
    ],

    impactMetrics: [
      { icon: FaSeedling, value: "200", label: "Rescues" },
      { icon: FaGlobe, value: "95%", label: "World Protected" },
      { icon: null, value: null, label: "Heroic Deeds" },
    ],
  },
  {
    brandName: "Star Wars",
    brandLogo: "/assets/img/star_wars_logo.png",
    imageUrl: "/assets/img/star_wars_image.jpg",
    description: "Star Wars Impact Card",

    progress: {
      current: 6,
      total: 400,
    },

    backgroundColor: "bg-black",
    backgroundOverlayColor: "bg-gray-800",

    rewards: [
      { label: "Galaxies Saved", icon: FaUtensilSpoon, number: 10 },
      { label: "Lightsabers Forged", icon: FaTshirt, number: 50 },
      { label: "Jedi Trained", icon: FaLeaf, number: 20 },
    ],

    impactMetrics: [
      { icon: FaSeedling, value: "300", label: "Starships Built" },
      { icon: FaGlobe, value: "100%", label: "Galaxy Protected" },
      { icon: null, value: null, label: "Jedi Missions" },
    ],
  }
];

export default cardData;
