function Pet(name, image) {
  this.name = name;
  this.image =  image;
}
var Image;
var catImage;
var pudding;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};


Image = class {
  constructor(file) {
    this.file = file;
  }
};

var catImage = new Image("cat.png");
var pudding = new Pet("Pudding", catImage);
