class Distancia {
  millasAmetros(millas) {
    return millas * 1609.34;
  }

  millasAkilometros(millas) {
    return millas * 1.60934;
  }
}

let patata = new Distancia();

console.log(patata.millasAmetros(23));
console.log(patata.millasAkilometros(23));
