function Bunny(name, age) {
  this.name = name;
  this.age = age;
  this.image = "bunny.jpg";
  this.type = "Bunny";
}

function Otter(name, age) {
  this.name = name;
  this.age = age;
  this.image = "otter.jpg"
  this.type = "Otter";
}

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.image = "dog.jpg"
  this.type = "Dog";
}

var animals = [new Bunny(), new Otter(), new Dog()];
var names = ["Pork Chop", "LuLu", "LaLa", "Mamie", "Jose", "Ruben", "Dory", "Nemo", "Rolly", "Jack", "Pup"];


function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
  var randomIndex = getRandomIndex(names.length);
  return names[randomIndex];
}


function generateRandomAge() {
  var randomIndex = getRandomIndex(5);
  return randomIndex;
}

function generateRandomAnimal() {
  var randomIndex = getRandomIndex(animals.length);
  var randomAnimal = animals[randomIndex];

  if (randomAnimal instanceof Bunny) 
  {
    return new Bunny(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Dog) 
  {
    return new Dog(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Otter) 
  {
    return new Otter(generateRandomName(), generateRandomAge());
  }
}

$(document).ready(function() {
  var animal = generateRandomAnimal();
  $("#animal-properties").text(animal.name + "  " + animal.age + "years old");
  $("#animal-img").attr("src", animal.image);

});