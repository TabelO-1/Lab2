/*Create a class for an Animal.
This class must contain a constructor method that contains the following properties: name, species and age.
Create a custom method that will retrieve the name and species of the animal.
Create 3 objects, all with different data, to represent 3 different animals.
Use your custom method to return the name and species of at least one of the animals.*/
console.log("I am alivE! *immedietly dies*");
var dogs = 0
class NewDog {
    constructor(name, species, personality, gender) {
        this.dogName = name,
        this.dogSpecies = species,
        this.dogPersonality = personality,
        this.dogGender = gender
    }
    
    stateDogNameSpeciesPersonality() {
        dogs++ //adds 1 to var dogs
        let doggy = console.log(`My Dog's name is ${this.dogName}. ${this.dogGender} is a 
        ${this.dogSpecies}. ${this.dogGender}'s personality is ${this.dogPersonality[0]} and likes 
        ${this.dogPersonality[1]}. I have a total of ${dogs} Dogs.`);
        return doggy;
    }
}
let create = new NewDog('Mr. Roldie Puggleson', 'Puggle', ['lazy', 'to nap'], 'He'); 
let create1 = new NewDog('Sargent Pepper the Third', 'Black Lab', ['energetic','to eat toys'],'He');
let create2 = new NewDog('Kaila', 'Belgian Malinois', ['biting', 'attention'],'She');
//creates a new object, and passes in arguments.
create.stateDogNameSpeciesPersonality();
create1.stateDogNameSpeciesPersonality();
create2.stateDogNameSpeciesPersonality();
//calls the method stateDogNameSpeciesPersonality.