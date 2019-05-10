let stringHello = "hello-baby,-or-grill,is-this,notty-of,the-world";
let stringSplited = stringHello.split(',');
let lastPosition = stringHello.lastIndexOf('-');


function familyMembers (firstName, lastName, age, city, state){
	this.firstName = firstName,
	this.lastName = lastName,
	this.age = age,
	this.city = city,
	this.state = state
}
familyMembers.prototype.addNationatity = function(){
	this.nationallty = "Indian"
}

var familyMember1 = new familyMembers("Santhosh", "Moorthy", 28, "Chennai", "Tamil Nadu");
familyMember1.addNationatity();
console.log(familyMember1);

var familyMember2 = new familyMembers("Mathar", "Beevi", 28, "Tirunelveli", "Tamil Nadu");
familyMember2.addNationatity();
console.log(familyMember2);

var familyMember3 = new familyMembers("Kuppuraj", "Gopal", 65, "Bangalore", "Karnataka");
familyMember3.addNationatity();
console.log(familyMember3);
