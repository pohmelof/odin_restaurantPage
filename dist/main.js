(()=>{"use strict";function e(){const e=document.createElement("header"),n=document.createElement("div"),t=document.createElement("ul");return n.classList.add("logo"),n.innerHTML="T<span>avern</span>I<span>n</span>T<span>he</span>S<span>tinks</span>",t.classList.add("nav"),t.innerHTML='<li class="selected">Home</li><li>Menu</li><li>Contacts</li>',e.appendChild(n),e.appendChild(t),e}console.log(e()),document.getElementById("content").prepend(e())})();