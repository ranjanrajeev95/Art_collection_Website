import translation from "./assets/art/translation.jpeg";
import navratri from "./assets/art/Navratri.jpg";
import shackles from "./assets/art/shackles.jpg";
import passion from "./assets/art/Passion.jpg";
import loss from "./assets/art/Loss.jpg";
import ganesha from "./assets/art/ganesha.jpg";

export const artStoreData = [
  {
    id: "0",
    img: passion,
    price: "$300",
    title: "Passion",
    description: `
        This painting was inspired by with feelings of passion, 
        pain, joy, and the special little moments with loved ones. 
        Love is often confusing, whether we speak of the love we have 
        for our parents or for our partners. Its a confusing mix of 
        joy, when we laugh over a joke, and pain, when we go through 
        when we fight. This confusion felt like a flower, 
        where some parts of it are detailed and easy to understand, 
        some parts are blurred to reflect confusion, and some are 
        amidst a fog of pain. 
    `,
    sold: false,
  },
  {
    id: "2",
    img: ganesha,
    price: "$250",
    title: "Ganesha",
    description: "",
    sold: false,
  },
  {
    id: "4",
    img: shackles,
    price: "$350",
    title: "Shackles",
    description: "",
    sold: false,
  },
  {
    id: "5",
    img: navratri,
    price: "$250",
    title: "Navratri",
    description: "",
    sold: true,
  },
  {
    id: "1",
    img: loss,
    price: "$500",
    title: "Loss",
    description: "",
    sold: true,
  },
  {
    id: "3",
    img: translation,
    price: "$300",
    title: "Translation",
    description: "",
    sold: true,
  }
];
