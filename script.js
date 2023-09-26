//your JS code here. If required.
const btn=document.getElementById("enterBtn");
const para =document.getElementById("status");


btn.addEventListener("click" ,()=>{
	let h1=document.createElement("h1");
	h1.innerText="Entered Metaverse"
	 // para.innerHTML="<h1>Entered Metaverse</h1>";
	document.body.insertBefore(h1, para);
	para.remove();
});

