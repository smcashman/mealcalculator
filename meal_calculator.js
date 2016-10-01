$(document).ready(function(){
	
//diner constructor
var Diner = function(name) {
		this.name = name
        this.dishes = []
        this.addDish = function(dish){
        	this.dishes.push(dish);
        }
    };
 
//adding diners
var Hugo = new Diner("Hugo")

var Sophie = new Diner("Sophie")

var Fred = new Diner("Fred")


//dish constructor
var dish = function(name, cost){
	this.name = name
	this.cost = cost
}

//creating dishes & costs
var Paella = new dish("Paella", 20)

var BaconWrappedShrimp = new dish("Bacon Wrapped Shrimp", 15)

var bread = new dish("bread", 3)

var water = new dish("water", 2)

var pickles = new dish("pickles", 4)

var steak = new dish("steak", 30)


//constructor to join diners and dishes
var Meal = function(){
	this.Diners = []
	this.addDiner = function(Diner){
		this.Diners.push(Diner)
	}
}

//generating objects of diners, their meal, and cost
var Eat = new Meal()
Eat.addDiner(Hugo);
Eat.addDiner(Sophie);
Eat.addDiner(Fred);

Hugo.addDish(steak)
Hugo.addDish(pickles)
Sophie.addDish(Paella)
Sophie.addDish(water)
Fred.addDish(BaconWrappedShrimp)
Fred.addDish(bread)

$(".dishes").append("<p>"+Hugo.name+" had the "+Hugo.dishes[0].name+" and the "+Hugo.dishes[1].name+" this evening.</p>")
$(".dishes").append("<p>"+Sophie.name+" had the "+Sophie.dishes[0].name+" and the "+Sophie.dishes[1].name+" this evening.</p>")
$(".dishes").append("<p>"+Fred.name+" had the "+Fred.dishes[0].name+" and the "+Fred.dishes[1].name+" this evening.</p>")

//adding a calculate method to the meal constructor
//method builds total bill for all diners
Meal.prototype.calculateTotal = function(){
	var totalAmount = 0
	for(var i = 0; i<this.Diners.length;i++){
		var currentDinerTotal = 0
		for(var j = 0; j<this.Diners[i].dishes.length;j++){
			totalAmount+=this.Diners[i].dishes[j].cost
			currentDinerTotal+=this.Diners[i].dishes[j].cost
		}
		this.Diners[i].individualAmount = currentDinerTotal
	}
	return totalAmount
}


//generating bill plus tax and tip
console.log(Eat.calculateTotal());
var subtotal = (Eat.calculateTotal())
var mealTax = .0625
var mealTip = .18
var totalBill = (mealTax+1)*(subtotal);
var billTip = (mealTip+1)*(totalBill);
var Tip = totalBill*mealTip


//generating individual bill for diners
var fredSubTotal = (Fred.dishes[0].cost)+(Fred.dishes[1].cost)
var hugoSubTotal = (Hugo.dishes[0].cost)+(Hugo.dishes[1].cost)
var sophieSubTotal = (Sophie.dishes[0].cost)+(Sophie.dishes[1].cost)


//generating individual bill plus tip and tax for diners
var fredFinal = (fredSubTotal*(mealTax+1))*(mealTip+1)
var sophieFinal = (sophieSubTotal*(mealTax+1))*(mealTip+1)
var hugoFinal = (hugoSubTotal*(mealTax+1))*(mealTip+1)

console.log(billTip)

$(".displayBill").append("<p>Fred owes $"+fredSubTotal.toFixed(2)+", Sophie owes $"+sophieSubTotal.toFixed(2)+", Hugo owes $"+hugoSubTotal.toFixed(2)+"</p>")

$(".displayBill").append("<p>With tax and tip, Fred owes $"+fredFinal.toFixed(2)+", Sophie owes $"+sophieFinal.toFixed(2)+", Hugo owes $"+hugoFinal.toFixed(2)+"</p>")

$(".displayBill").append("<p> The final bill for the table $"+totalBill.toFixed(2)+"</p>");
$(".displayBill").append("<p> An 18% tip would be $"+Tip.toFixed(2)+" for this meal</p>")
$(".displayBill").append("<p> With your tip, the total is $"+billTip.toFixed(2)+"</p>");


});