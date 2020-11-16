class GrandCircusStudent {
    constructor(name, age, location) {
      this.name = name;
      this.age = age;
      this.location = location;
  
      this.skills = ['Programming', 'LinkedIn', 'Zoom'];
    }
    
    sayName() {
        console.log(this.name);
    }
  }
  
  class GrandCircusFEStudent extends GrandCircusStudent {
      constructor(name, age, location) {
          // Call the parent's constructor
          super(name, age, location);
  
          const frontEndSkills = ['HTML', 'CSS', 'JavaScript'];
          this.skills = [this.skills, ...frontEndSkills];
      }
  }
  
  console.log(new GrandCircusFEStudent('BJ', 25, 'Grand Rapids'));
   