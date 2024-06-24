// const input=document.getElementById("dob");
// const given=document.getElementById("current");
// function calculateAge()
// {
//   const birthDate=new Date(input.value);
// let d1=birthDate.getDate();
// let m1=birthDate.getMonth()+1;
// let y1=birthDate.getFullYear();

//     const currentDate=new Date(given.value);
// let d2=currentDate.getDate();
// let m2=currentDate.getMonth()+1;
// let y2=currentDate.getFullYear();

// let d3,m3,y3;

// y3=y2-y1;

// if (m2>=m1){
// m3=m2-m1;
// }
// else{
//   y3--;
//   m3=12+m2-m1;
// }
// if(d2>=d1){
//   d3=d2-d1;
// }
// else{
//   m3--;
//   d3=getDaysInMonth(y1,m1)+d2-d1;
// }
// if(m3<0){
//   m3=11;
//   y3--;
// }

// result.innerHTML=`your current age is <span>${y3}</span> years <span>${m3}</span> months <span>${d3} days old</span>`
// }

// function getDaysInMonth(year,month){
//   return new Date(year,month,0).getDate();
// }
function age(){
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var d1 = document.getElementById("date").value;
var m1 = document.getElementById("month").value;
var y1 = document.getElementById("year").value;

var date = new Date();
var d2 = date.getDate();
var m2 = 1 + date.getMonth();
var y2 = date.getFullYear();

if(d1 > d2){
  d2 = d2 + month[m2 - 1];
  m2 = m2 - 1;
}
if(m1 > m2){
  m2 = m2 + 12;
  y2 = y2 -1;
}
if (m2>=m1){
m3=m2-m1;
}
else{
  y--;
  m=12+m2-m1;
}
if (y1 >= y2) {
  document.getElementById("age").innerHTML = "Invalid birth year. Please enter a valid year.";
  return;
}
var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;

  document.getElementById("age").innerHTML = `Your Age is ${y} Years ${m} Months ${d} Days`;  
}














