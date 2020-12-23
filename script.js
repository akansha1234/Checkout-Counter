var submit=document.getElementById("submit");
var item=document.getElementById("barcode");
var result=document.getElementById("result");
var total=document.getElementById("total");
var items=[{id:"1",name:"fruits",price:2.34},{id:"2",name:"flowers",price:3.45},{id:"3",name:"veggies",price:5.0},{id:"4",name:"biscuits",price:3.20},{id:"5",name:"juice",price:6.0},{id:"6",name:"clothes",price:7.32},{id:"7",name:"shoes",price:5.67},{id:"8",name:"utensils",price:10.45},{id:"9",name:"blankets",price:13.66},{id:"10",name:"food",price:4.0}];
var sum=0;
var box=[];
submit.addEventListener('click',cards);
function cards(){
  for(i=0;i<items.length;i++){
 if(item.value==items[i].id){
     sum+=items[i].price;
   result.innerHTML=items[i].name + " " +items[i].price;
   box.push(items[i].name);
   item.value="";
 }
}
  total.innerHTML="$"+sum;
}