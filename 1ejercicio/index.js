class Cifras {
  constructor(numero) {
    this.num = parseInt(numero);
  }

  esPar() {
    return this.num % 2 !== 0 ? false : true;
  }

  sumaDigitos() {
    let suma = 0;
    let num = this.num.toString();

    for (let i = 0; i < num.length; i++) {
      suma += parseInt(num.substring(i, i + 1));
    }

    return suma;
  }
}

cifra = new Cifras("1234");

console.log(cifra.esPar());
console.log(cifra.sumaDigitos());
