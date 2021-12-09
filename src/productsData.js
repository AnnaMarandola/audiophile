import XX59PREVIEW from "./assets/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import XX99PREVIEW from "./assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import XX992PREVIEW from "./assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import XX992GALLERY1M from "./assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg";
import XX992GALLERY2M from "./assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg";
import XX992GALLERY3M from "./assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg";
import XX992GALLERY1T from "./assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg";
import XX992GALLERY2T from "./assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg";
import XX992GALLERY3T from "./assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg";
import XX992GALLERY1D from "./assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import XX992GALLERY2D from "./assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import XX992GALLERY3D from "./assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";
import OTHERXX99M from "./assets/shared/mobile/image-xx99-mark-one-headphones.jpg";
import OTHERXX99T from "./assets/shared/tablet/image-xx99-mark-one-headphones.jpg";
import OTHERXX99D from "./assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import OTHERXX59M from "./assets/shared/mobile/image-xx59-headphones.jpg";
import OTHERXX59T from "./assets/shared/tablet/image-xx59-headphones.jpg";
import OTHERXX59D from "./assets/shared/desktop/image-xx59-headphones.jpg";
import OTHERZX9M from "./assets/shared/mobile/image-zx9-speaker.jpg";
import OTHERZX9T from "./assets/shared/tablet/image-zx9-speaker.jpg";
import OTHERZX9D from "./assets/shared/desktop/image-zx9-speaker.jpg";

import XX99GALLERY1M from "./assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg";
import XX99GALLERY2M from "./assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg";
import XX99GALLERY3M from "./assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg";
import XX99GALLERY1T from "./assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg";
import XX99GALLERY2T from "./assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg";
import XX99GALLERY3T from "./assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg";
import XX99GALLERY1D from "./assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
import XX99GALLERY2D from "./assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";
import XX99GALLERY3D from "./assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";


const productsData = [
  {
    category: "headphones",
    products: [
      {
        id: 1,
        slug: "xx99-mark-two-headphones",
        name: "XX99 Mark II Headphones",
        categoryImage: XX992PREVIEW,
        category: "headphones",
        new: true,
        price: "2,999",
        description:
          "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
        features:
          "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
        includes: [
          {
            quantity: 1,
            item: "Headphone unit",
          },
          {
            quantity: 2,
            item: "Replacement earcups",
          },
          {
            quantity: 1,
            item: "User manual",
          },
          {
            quantity: 1,
            item: "3.5mm 5m audio cable",
          },
          {
            quantity: 1,
            item: "Travel bag",
          },
        ],
        gallery: {
          first: {
            mobile: XX992GALLERY1M,
            tablet: XX992GALLERY1T,
            desktop: XX992GALLERY1D,
          },
          second: {
            mobile: XX992GALLERY2M,
            tablet: XX992GALLERY2T,
            desktop: XX992GALLERY2D,
          },
          third: {
            mobile: XX992GALLERY3M,
            tablet: XX992GALLERY3T,
            desktop: XX992GALLERY3D,
          },
        },
        others: [
          {
            slug: "xx99-mark-one-headphones",
            name: "XX99 Mark I",
            category: "headphones",

            image: {
              mobile: OTHERXX99M,
              tablet: OTHERXX99T,
              desktop: OTHERXX99D,
            },
          },
          {
            slug: "xx59-headphones",
            name: "XX59",
            category: "headphones",

            image: {
              mobile: OTHERXX59M,
              tablet: OTHERXX59T,
              desktop: OTHERXX59D,
            },
          },
          {
            slug: "zx9-speaker",
            name: "ZX9 Speaker",
            image: {
              mobile: OTHERZX9M,
              tablet: OTHERZX9T,
              desktop: OTHERZX9D,
            },
          },
        ],
      },

      {
        id: 2,
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I Headphones",
        categoryImage: XX99PREVIEW,
        category: "headphones",
        new: false,
        price: "1,750",
        description:
          "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
        features:
          "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.",
        includes: [
          {
            quantity: 1,
            item: "Headphone unit",
          },
          {
            quantity: 2,
            item: "Replacement earcups",
          },
          {
            quantity: 1,
            item: "User manual",
          },
          {
            quantity: 1,
            item: "3.5mm 5m audio cable",
          },
        ],
        gallery: {
          first: {
            mobile: XX99GALLERY1M,
            tablet: XX99GALLERY1T,
            desktop: XX99GALLERY1D,
          },
          second: {
            mobile: XX99GALLERY2M,
            tablet: XX99GALLERY2T,
            desktop: XX99GALLERY2D,
          },
          third: {
            mobile: XX99GALLERY3M,
            tablet: XX99GALLERY3T,
            desktop: XX99GALLERY3D,
          },
        },

        others: [
          {
            slug: "xx99-mark-one-headphones",
            name: "XX99 Mark I",
            category: "headphones",
            image: {
              mobile: OTHERXX99M,
              tablet: OTHERXX99T,
              desktop: OTHERXX99D,
            },
          },
          {
            slug: "xx59-headphones",
            category: "headphones",
            name: "XX59",
            image: {
              mobile: OTHERXX59M,
              tablet: OTHERXX59T,
              desktop: OTHERXX59D,
            },
          },
          {
            slug: "zx9-speaker",
            name: "ZX9 Speaker",
            image: {
              mobile: OTHERZX9M,
              tablet: OTHERZX9T,
              desktop: OTHERZX9D,
            },
          },
        ],

      },
      {
        id: 3,
        slug: "xx59-headphones",
        name: "XX59 Headphones",
        category: "headphones",
        categoryImage: XX59PREVIEW,
        new: false,
        image: {
          mobile: "./assets/product-xx59-headphones/mobile/image-product.jpg",
          tablet: "./assets/product-xx59-headphones/tablet/image-product.jpg",
          desktop: "./assets/product-xx59-headphones/desktop/image-product.jpg",
        },
        price: "8,99",
        description:
          "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
        features:
          "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
        includes: [
          {
            quantity: 1,
            item: "Headphone unit",
          },
          {
            quantity: 2,
            item: "Replacement earcups",
          },
          {
            quantity: 1,
            item: "User manual",
          },
          {
            quantity: 1,
            item: "3.5mm 5m audio cable",
          },
        ],
        gallery: {
          first: {
            mobile:
              "./assets/product-xx59-headphones/mobile/image-gallery-1.jpg",
            tablet:
              "./assets/product-xx59-headphones/tablet/image-gallery-1.jpg",
            desktop:
              "./assets/product-xx59-headphones/desktop/image-gallery-1.jpg",
          },
          second: {
            mobile:
              "./assets/product-xx59-headphones/mobile/image-gallery-2.jpg",
            tablet:
              "./assets/product-xx59-headphones/tablet/image-gallery-2.jpg",
            desktop:
              "./assets/product-xx59-headphones/desktop/image-gallery-2.jpg",
          },
          third: {
            mobile:
              "./assets/product-xx59-headphones/mobile/image-gallery-3.jpg",
            tablet:
              "./assets/product-xx59-headphones/tablet/image-gallery-3.jpg",
            desktop:
              "./assets/product-xx59-headphones/desktop/image-gallery-3.jpg",
          },
        },
        others: [
          {
            slug: "xx99-mark-one-headphones",
            name: "XX99 Mark I",
            category: "headphones",
            image: {
              mobile: OTHERXX99M,
              tablet: OTHERXX99T,
              desktop: OTHERXX99D,
            },
          },
          {
            slug: "xx59-headphones",
            category: "headphones",

            name: "XX59",
            image: {
              mobile: OTHERXX59M,
              tablet: OTHERXX59T,
              desktop: OTHERXX59D,
            },
          },
          {
            slug: "zx9-speaker",
            name: "ZX9 Speaker",
            image: {
              mobile: OTHERZX9M,
              tablet: OTHERZX9T,
              desktop: OTHERZX9D,
            },
          },
        ],

      },
    ],
  },
  {
    category: "speakers",
    products: [],
  },
  { category: "earphones", products: [] },
];

export default productsData;
