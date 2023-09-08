import forest from "../assets/img/building.jpg";
import bag from "../assets/img/bag.png";

import fag from "../assets/img/fag1.jpg";
import fag2 from "../assets/img/fag2.jpg";
import fag3 from "../assets/img/fag3.jpg";
import fag4 from "../assets/img/fag4.jpeg";

import rasinoase from "../assets/img/rasinoase1.jpeg";
import rasinoase2 from "../assets/img/rasinoase2.jpeg";
import rasinoase3 from "../assets/img/rasinoase3.jpeg";
import rasinoase4 from "../assets/img/rasinoase4.jpeg";

import case1 from "../assets/img/case.jpeg";
import case3 from "../assets/img/case3.jpeg";

import lambriu1 from "../assets/img/lambriu1.jpeg";
import lambriu2 from "../assets/img/lambriu2.jpeg";
import lambriu3 from "../assets/img/lambriu3.jpeg";

import mobilier1 from "../assets/img/mobilier1.jpeg";

import parquet1 from "../assets/img/parquet1.jpeg";

import furnitureParts1 from "../assets/img/furnitureParts1.jpeg";

import frizes1 from "../assets/img/frizes1.jpg";

export type ImageMeta = {
  src: string;
  isSpecial?: boolean;
};

export type Product = {
  id: number;
  name: string;
  heroTitle: string;
  description: string;
  images: ImageMeta[];
};

export const productList: Product[] = [
  {
    id: 1,
    name: "pages.products.productList.beechWood.name",
    heroTitle: "pages.products.productList.beechWood.heroTitle",
    description: "pages.products.productList.beechWood.description",
    images: [{ src: fag }, { src: fag4 }, { src: fag2 }, { src: fag3 }],
  },
  {
    id: 2,
    name: "pages.products.productList.whiteWood.name",
    heroTitle: "pages.products.productList.whiteWood.heroTitle",
    description: "pages.products.productList.whiteWood.description",
    images: [
      { src: rasinoase4 },
      { src: rasinoase },
      { src: rasinoase3 },
      { src: rasinoase2 },
    ],
  },
  {
    id: 3,
    name: "pages.products.productList.woodenHouses.name",
    description: "pages.products.productList.woodenHouses.description",
    heroTitle: "pages.products.productList.woodenHouses.heroTitle",
    images: [{ src: case3 }, { src: case1 }],
  },
  {
    id: 4,
    name: "pages.products.productList.paneling.name",
    heroTitle: "pages.products.productList.paneling.heroTitle",
    description: "pages.products.productList.paneling.description",
    images: [{ src: lambriu1 }, { src: lambriu2 }, { src: lambriu3 }],
  },
  {
    id: 5,
    name: "pages.products.productList.woodPellets.name",
    heroTitle: "pages.products.productList.woodPellets.heroTitle",
    description: "pages.products.productList.woodPellets.description",
    images: [
      { src: bag, isSpecial: true }, // marked as special
      { src: forest },
    ],
  },
  {
    id: 6,
    name: "pages.products.productList.smallFurniture.name",
    heroTitle: "pages.products.productList.smallFurniture.heroTitle",
    description: "pages.products.productList.smallFurniture.description",
    images: [{ src: mobilier1 }],
  },
  {
    id: 7,
    name: "pages.products.productList.parquet.name",
    heroTitle: "pages.products.productList.parquet.heroTitle",
    description: "pages.products.productList.parquet.description",
    images: [{ src: parquet1 }],
  },
  {
    id: 8,
    name: "pages.products.productList.furnitureParts.name",
    heroTitle: "pages.products.productList.furnitureParts.heroTitle",
    description: "pages.products.productList.furnitureParts.description",
    images: [{ src: furnitureParts1 }],
  },
  {
    id: 9,
    name: "pages.products.productList.frizes.name",
    heroTitle: "pages.products.productList.frizes.heroTitle",
    description: "pages.products.productList.frizes.description",
    images: [{ src: frizes1 }],
  },
];
