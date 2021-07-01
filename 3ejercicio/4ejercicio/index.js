class Finanzas {
  dolaresToEuros(dolares) {
    return dolares * 0.84;
  }

  eurosToDolares(euros) {
    return euros * 1.19;
  }
}

patata = new Finanzas();

console.log(patata.dolaresToEuros(100), patata.eurosToDolares(100));
