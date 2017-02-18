window.ondblclick=cioc;
function try_ajax(){
	
  var xhttp;
 
    xhttp = new XMLHttpRequest();
   
  xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }

  };
  xhttp.open("GET", "ajax.txt", true);
  xhttp.send();
}

function cioc(){
	setInterval(function(){document.getElementById("in").style.backgroundColor="black";},1000);
			setInterval(function(){document.getElementById("in").style.backgroundColor="white";},1500);
}
function ii(){
	document.getElementById("ii").style.fontSize="100px";
}
window.onload=lava;
function lava(){
	setInterval(function(){document.getElementById("lav").style.fontsize="100px";},1000);
			setInterval(function(){document.getElementById("lav").style.fontSize="70px";},1500);
}
function create(event)
{

	var i=document.createElement("img");	
	i.style.position="absolute";
	i.setAttribute('src', 'cup.jpg');
	i.style.left=event.pageX + "px";
	i.style.top=event.pageY + "px";
	document.body.appendChild(i);
	setTimeout(function(){document.body.removeChild(i);},2000);
			setInterval(function(){document.getElementById("int").style.backgroundColor="lavender";},1000);
			setInterval(function(){document.getElementById("int").style.backgroundColor="peachpuff";},1500);
}

window.onkeyup=f1;
function f1(){
	var a=document.getElementsByTagName("img");
	
	for(var i=0;i<a.length;i++){
		a[i].style.width="50%";
	
	}
}
window.onclick=capsuna;
function capsuna(){
	var a= document.getElementById("cap");
	a.style.float="right";
	var b=document.getElementById("cap1");
	b.style.float="left";
	var c = document.getElementById("cap3");
	c.style.width="10%";
}

window.onmousemove=tiramisu;
function tiramisu(event){
	var a=document.getElementById("tir");
	var x = event.clientX;
	var y = event.clientY;
	a.style.position="absolute";
	a.style.top=y+"px";
	a.style.left=x+"px";
	a.style.width="10%";

}
function main(){
	var a = document.getElementById("but");
	a.onclick=alert("Excessive consume of sugar is bad for your health");
}
i=1;
function adauga_ciocolata(){
	if(i==1){
	var snou = document.createElement("section");
	var tnou = document.createTextNode("Chocolate has become one of the most popular food types and flavors in the world, and a vast number of foodstuffs involving chocolate have been created, particularly desserts including cakes, pudding, mousse, chocolate brownies, and chocolate chip cookies. Many candies are filled with or coated with sweetened chocolate, and bars of solid chocolate and candy bars coated in chocolate are eaten as snacks. Gifts of chocolate molded into different shapes (e.g., eggs, hearts) have become traditional on certain Western holidays, such as Easter and Valentine's Day. Chocolate is also used in cold and hot beverages such as chocolate milk and hot chocolate and in some alcoholic drinks, such as creme de cacao.");
	snou.appendChild(tnou);
	document.body.appendChild(snou);}
	i++;
}
function adauga_tort(){
	if(i==1){
	var snou = document.createElement("section");
	var tnou = document.createTextNode("Cake is often served as a celebratory dish on ceremonial occasions, such as weddings, anniversaries, and birthdays. There are countless cake recipes; some are bread-like, some are rich and elaborate, and many are centuries old. Cake making is no longer a complicated procedure; while at one time considerable labor went into cake making (particularly the whisking of egg foams), baking equipment and directions have been simplified so that even the most amateur cook may bake a cake.");
	snou.appendChild(tnou);
	document.body.appendChild(snou);}
	i++;
}

function adauga_cookie(){
if(i==1){
	var snou = document.createElement("section");
	var tnou = document.createTextNode("Cookies or biscuits may be mass-produced in factories, made in small bakeries or home-made. Biscuit or cookie variants include sandwich biscuits such as Custard creams, Jammie Dodgers, Bourbons and Oreos, with marshmallow or jam filling and sometimes dipped in chocolate or another sweet coating. Cookies are often served with beverages such as milk, coffee or tea. Factory-made cookies are sold in grocery stores, convenience stores and vending machines. Fresh-baked cookies are sold at bakeries and coffeehouses, with the latter ranging from small business-sized establishments to multinational corporations such as Starbucks.");
	snou.appendChild(tnou);
	document.body.appendChild(snou);}
	i++;
}
function adauga_ice(){
	if(i==1){
	var snou = document.createElement("section");
	var tnou = document.createTextNode("Ice cream may be served in dishes, for eating with a spoon, or in cones, which are licked. Ice cream may be served with other desserts, such as apple pie. Ice cream is used to prepare other desserts, including ice cream floats, sundaes, milkshakes, Ice cream cakes and even baked items, such as the Baked Alaska.");
	snou.appendChild(tnou);
	document.body.appendChild(snou);}
	i++;
			
		}
function schimba0(){
	document.getElementById("schimba0").style.color="blue";
}
function schimba(){
	document.getElementById("schimba").style.backgroundColor="lavender";
}function schimba1(){
	document.getElementById("schimba1").style.fontSize="20px";
}function schimba2(){
	document.getElementById("schimba2").style.borderColor="pink";
}function schimba3(){
	document.getElementById("schimba3").style.color="white";
	document.getElementById("schimba3").style.backgroundColor="black";
	
}function schimba4(){
	document.getElementById("schimba4").style.color="red";
	document.getElementById("schimba4").style.fontSize="18px";
}


function fform(){
	
	var x= document.getElementById("name").value;
	var y=document.getElementById("email").value;
	var z1= document.getElementById("t1").checked;
	var z2=document.getElementById("t2").checked;
	var z3 = document.getElementById("t3").checked;
	var a1=document.getElementById("a1").checked;
	var a2=document.getElementById("a2").checked;
	var a3=document.getElementById("a3").checked;
		if(x=="" || y=="" || (!z1 && !z2 && !z3)||(!a1 && !a2 && !a3)) alert("Please complete empty boxes");
		else{
			var txt="";
			var a,b,c,d;
			txt += "Your name is "+x+", ";
			txt += "your email is "+y+", ";
			txt += "you like ";
		
			if(z1) {
				 a = document.getElementById("t1").value;
				txt += a+", ";
				}
				
			if(z2) {
				 b = document.getElementById("t2").value;
				txt += b+", ";
			}
				
			if(z3) {
				 c = document.getElementById("t3").value;
				txt += c+", ";
			}
				
			txt += "you prefer MOST ";
				
				if(a1) { alert("ASADA");
				 d= document.getElementById("a1").value;
			
				txt += d+".";
			}
			
			if(a2){
				d= document.getElementById("a2").value;
				txt += d+".";
			}
			if(a3){
				 d= document.getElementById("a3").value;
				txt += d+".";
			}
			
			
			document.getElementById("art").innerHTML =txt;
			document.getElementById("art").style.background="lavender";
			
		
		}
	
}