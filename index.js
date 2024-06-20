const input=document.getElementById("dob");
const given=document.getElementById("current");
function calculateAge()
{
  const birthDate=new Date(input.value);
let d1=birthDate.getDate();
let m1=birthDate.getMonth()+1;
let y1=birthDate.getFullYear();

    const currentDate=new Date(given.value);
let d2=currentDate.getDate();
let m2=currentDate.getMonth()+1;
let y2=currentDate.getFullYear();

let d3,m3,y3;

y3=y2-y1;

if (m2>=m1){
m3=m2-m1;
}
else{
  y3--;
  m3=12+m2-m1;
}
if(d2>=d1){
  d3=d2-d1;
}
else{
  m3--;
  d3=getDaysInMonth(y1,m1)+d2-d1;
}
if(m3<0){
  m3=11;
  y3--;
}

result.innerHTML=`your current age is <span>${y3}</span> years <span>${m3}</span> months <span>${d3} days old</span>`
}

function getDaysInMonth(year,month){
  return new Date(year,month,0).getDate();
}
























// const ageCalculate = () => {
//     const today = new Date();
//     const inputDate = new Date(document.getElementById("date-input").value);
  
//     const birthDetails = {
//       date: inputDate.getDate(),
//       month: inputDate.getMonth() + 1,
//       year: inputDate.getFullYear(),
//     };
  
//     const currentYear = today.getFullYear();
//     const currentMonth = today.getMonth() + 1;
//     const currentDate = today.getDate();
  
//     if (isFutureDate(birthDetails, currentYear, currentMonth, currentDate)) {
//       alert("Not Born Yet");
//       displayResult("-", "-", "-");
//       return;
//     }
  
//     const { years, months, days } = calculateAge(
//       birthDetails,
//       currentYear,
//       currentMonth,
//       currentDate
//     );
  
//     displayResult(days, months, years);
//   };
  
//   const isFutureDate = (birthDetails, currentYear, currentMonth, currentDate) => {
//     return (
//       birthDetails.year > currentYear ||
//       (birthDetails.year === currentYear &&
//         (birthDetails.month > currentMonth ||
//           (birthDetails.month === currentMonth &&
//             birthDetails.date > currentDate)))
//     );
//   };
  
//   const calculateAge = (birthDetails, currentYear, currentMonth, currentDate) => {
//     let years = currentYear - birthDetails.year;
//     let months, days;
  
//     if (currentMonth < birthDetails.month) {
//       years--;
//       months = 12 - (birthDetails.month - currentMonth);
//     } else {
//       months = currentMonth - birthDetails.month;
//     }
  
//     if (currentDate < birthDetails.date) {
//       months--;
//       const lastMonth = currentMonth === 1 ? 12 : currentMonth - 1;
//       const daysInLastMonth = getDaysInMonth(lastMonth, currentYear);
//       days = daysInLastMonth - (birthDetails.date - currentDate);
//     } else {
//       days = currentDate - birthDetails.date;
//     }
//     return { years, months, days };
//   };
  
//   const getDaysInMonth = (month, year) => {
//     const isLeapYear = year % 4 === 0 && (year % 100 != 0 || year % 400 === 0);
//     const getDaysInMonth = [
//       31,
//       isLeapYear ? 29 : 28,
//       31,
//       30,
//       31,
//       30,
//       31,
//       31,
//       30,
//       31,
//       30,
//       31,
//     ];
//     return getDaysInMonth[month - 1];
//   };
  
//   const displayResult = (bdate, bMonth, bYear) => {
//     document.getElementById("years").textContent = bYear;
//     document.getElementById("months").textContent = bMonth;
//     document.getElementById("days").textContent = bdate;
//   };
  
//   document.getElementById("calc-age-btn").addEventListener("click", ageCalculate);