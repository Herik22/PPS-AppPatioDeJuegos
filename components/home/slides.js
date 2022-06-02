import uno from "../../assets/numeros/1.png";
import dos from "../../assets/numeros/2.png";
import tres from "../../assets/numeros/3.png";
import cuatro from "../../assets/numeros/4.png";
import cinco from "../../assets/numeros/5.png";
import fondoNumero from "../../assets/numeros/fondoNumeros.png";

import loro from "../../assets/animales/loro.png";
import buho from "../../assets/animales/buho.png";
import aguila from "../../assets/animales/aguila.png";
import pajaro from "../../assets/animales/bird.png";
import cigueña from "../../assets/animales/stork.png";
import fondoanimales from "../../assets/animales/fondoAnimales.png";

import amarillo from "../../assets/colores/amarillo.png";
import rojo from "../../assets/colores/rojo.png";
import azul from "../../assets/colores/azul.png";
import morado from "../../assets/colores/morado.png";
import verde from "../../assets/colores/verde.png";
import fondoColores from "../../assets/colores/fondoColores.png";

export default [
  {
    id: 1,
    tittle: ["uno", "dos", "tres", "cuatro", "cinco"],
    images: [uno, dos, tres, cuatro, cinco],
    bgImage: fondoNumero,
    sonidos: {
      ESP: [
        "../assets/sonidos/numeros/español/1.png",
        "../assets/sonidos/numeros/español/2.png",
        "../assets/sonidos/numeros/español/3.png",
        "../assets/sonidos/numeros/español/4.png",
        "../assets/sonidos/numeros/español/5.png",
      ],
      ING: [
        "../assets/sonidos/numeros/ingles/1.png",
        "../assets/sonidos/numeros/ingles/2.png",
        "../assets/sonidos/numeros/ingles/3.png",
        "../assets/sonidos/numeros/ingles/4.png",
        "../assets/sonidos/numeros/ingles/5.png",
      ],
    },
  },
  {
    id: 2,
    tittle: ["loro", "buho", "aguila", "pajaro", "cigueña"],
    images: [loro, buho, aguila, pajaro, cigueña],
    bgImage: fondoanimales,
  },
  {
    id: 3,
    tittle: ["loro", "buho", "aguila", "pajaro", "cigueña"],
    images: [amarillo, rojo, azul, morado, verde],
    bgImage: fondoColores,
  },
];
