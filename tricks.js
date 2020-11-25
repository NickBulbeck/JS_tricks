//************************************************
// nearest ancestor
const usefulElement = event.target.closest('.foadyb') // identifies the nearest ancestor matching the selector
// The useful thing with this is that you can attach an event-listener to a big parent element, then trigger it
// on whatever selector it happens within. For instance:
userfulElement.display = userIndex === 0 ? "none" : "block"

//**************************************************
/* map element
<p>
  <img src="images/foadby.jpg" usemap="#workmap" />
  <map name="workmap">
    <area shape="rect" coords="TLacross,TLdown,BRacross,BRdown" alt="description" href="somewhere else" />
  </map>
</p>
*/
// Prototype: a way of using class variables
class CoffeeOrder { // as in, your personal coffee order.
  constructor(name, drink) {
    this.name = name;   // e.g. 'Nick'
    this.drink = drink; // e.g. 'Large Americano'
   }
}
CoffeeOrder.prototype.callOrder = function() {      // equivalent of a static method. The idea of this is that, in
 return `I have a ${this.drink} for ${this.name}!`; // memory, only one instance is created and the whole class
}                                                   // points to it. The output is the same, but the processing
                                                    // behind the scenes is more efficient.
/* Datalist - provides auto-complete for the user in a drop-down menu
<input list="animals" name="animal" id="animal">
<datalist id="animals">  // id has to mach the list property in the <input> tag
    <option value="Cat">
    <option value="Dog">
    <option value="Chicken">
    <option value="Cow">
    <option value="Pig">
</datalist>
*/
/* Clickable label for a checkbox - can be accomplished by nesting the checkbox inside the label, thus:
<label><input type="checkbox" name="checkbox" id="checkbox_id" value="value">I agree</label>
*/
/* css calc() function - can mix different types of units.
width: calc(5px + 100px);
width: calc(6em * 8);
width: calc(100% - 50px);
*/  
// 0| instead of Math.floor()
0|743.4343 // returns 743
Math.floor(743.4343) // returns 743
812.777+.5|0 // returns 813
Math.round(812.777) // returns 813

// console.time - times an event. Just look this up if you need it.

// in-operator - for checking whether a value is in an array, or a property in a nobject.
let cars = ['Audi', 'BMW', 'Mini', 'Bentley', 'Porsche'];
0 in cars        // returns true
3 in cars        // returns true
6 in cars        // returns false

const person = { firstName : "Dave", surname: "Smith", age: 34 };
'firstName' in person  // returns true
'surname' in person    // returns true
'age' in person        // returns true
'gender' in person     // returns false

// Make chrome a text editor by going to the following url:
// data:text/html, <html contenteditable>

// Removing an element...
const element = document.getElementById('foadyb') // or whatever
element.remove() // is a DOM method. Saves having to do parentnode.removechild etc etc
// Removing all child elements...
while (element.firstChild) {
  element.removeChild(element.firstChild);
}

// Setting an attribute...
element.setAttribute('disabled',true);
element.removeAttribute('disabled'); // That's one I didnae ken aboot

// Maps and Sets... useful alternatives to arrays and objects. Sets cannot have duplicate values;
// whereas Maps have a size, unlike objects. One or two other useful ideas. Consider when you're storing
// temporary data.
const mySet = new Set() // can also have an array, or values, passed in
const myMap = new Map() // ditto

// adding options to a select list
const mySelectList = document.createElement('select');
mySelectList.add(document.createElement('option')) // You can put it before a specific item as well

// arguments object
function aFunction() = {
  console.log(arguments[0]);
}
afunction(1,2,3) // '1' is logged. Note that this DOESN'T work with arrow functions

// for-of:
const elements = document.querySelectorAll('.foadyb'); // In other words, for-of can be used for 
for (element of elements) {                            // node lists where .forEach doesn't always
  console.log("Wotevahhh");                            // work. Use it to iterate over collections generally.
}

// Event-listeners: can be attached to the document object itself, via a
// query selector or similar, before you actually create the element. That way
// the listener is ready and waiting when you dynamically create the elements, 
// instead of you having to create it after the code runs to create them.

// Factories: something that returns an object, as distinct from a class that is the template for an object.
// The example given was for a factory that creates rockets of a specific color:
const RocketFactory = (c) => {
	const colour = c;
	return {
		launch: () => console.log(`The ${colour} rocket has launched`); // a function - i.e this is a method
		land: () => console.log(`The ${colour} rocket has landed`); // but you could equally add properties
	}
}
const purpleRocket = RocketFactory('purple');
purpleRocket.launch(); // Two advantages: the colour property can't be altered. And the object can be attached
					   // to a button-click or similar event without confusion over the context of 'this' which
					   // you would have in a class method containing this.colour.

// insertAdjacentHTML - just remember that this exists!

const element = document.createElement('Wotevahhh');
const html = outputOfAComplicatedFunction();
Wotevahhh.insertAdjacentHTML('beforeend',html );

