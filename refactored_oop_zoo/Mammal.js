// Example of inheritance
// Bird and Mammal gets everything from Animal via 'extends'

class Mammal extends Animal {
  constructor(name, species, furColor) {
    super(name, species); // calls the parent constructor
    this.furColor = furColor;
  }

  groom() {
    console.log(`${this.name} is brushing their ${this.furColor} fur.`);
  }
}