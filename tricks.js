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





