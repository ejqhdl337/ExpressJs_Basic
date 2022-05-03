function Person(fName , lName){
    this.firstName = fName;
    this.lastName = lName;
}

Person.prototype.myNameIs = function(){
    console.log(`My Name is ${this.firstName} ${this.lastName}`)
}

const myNameIs = function () {
    console.log(`My Name is ${this.firstName} ${this.lastName}`)
}

const person1 = new Person('Kim','MinSeong')
const person2 = new Person('Ju','SiHyeon')

person1.myNameIs()
person2.myNameIs()

myNameIs.call(person2)