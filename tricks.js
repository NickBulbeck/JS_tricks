//************************************************
// nearest ancestor
const usefulElement = event.target.closest('.foadyb') // identifies the nearest ancestor matching the selector
// The useful thing with this is that you can attach an event-listener to a big parent element, then trigger it
// on whatever selector it happens within. For instance:
userfulElement.display = userIndex === 0 ? "none" : "block"

//**************************************************
// map element
<p>
  <img src="images/foadby.jpg" usemap="#workmap">
  <map name="workmap">
    <area shape="rect" coords="TLacross,TLdown,BRacross,BRdown" alt="description" href="somewhere else">
  </map>