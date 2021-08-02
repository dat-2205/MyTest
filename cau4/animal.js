class Animal{
    name;
    weight;
    constructor(name,weight) {
        this.name = name;
        this.weight = weight;
    }
    setName(newName) {
        this.name = newName;
    }
    setWeight(newWeight) {
        this.weight = newWeight;
    }
    getName() {
        return this.name;
    }
    getWeight() {
        return this.weight;
    }
    toString() {
        return "Tên: " + this.name + " Cân nặng: " + this.weight
    }
}
let objAnimal1 = new Animal()
objAnimal1.setName("Elepant")
objAnimal1.setWeight(45.6)
alert(objAnimal1.toString())
let objAnimal2 = new Animal("Tiger",33)
objAnimal2.setName("Mouse")