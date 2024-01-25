/* 
var calculate_btn = document.getElementById("calculate_btn");
 var calculate_age = document.getElementById("calculate_age");

calculate_btn.addEventListener("click", function () {
  var birth_date = document.getElementById("birth_date").value;
  birth_date = new Date(birth_date);

  var todayDate = new Date();

  totalAge = Date.now() - birth_date.getTime();
  ageYear = new Date(totalAge);
  ageYear = Math.abs(ageYear.getUTCFullYear() - 1970);

  function ageMonth(){
    if(todayDate.getMonth() >= birth_date.getMonth()){
    if(todayDate.getDate() >= birth_date.getDate()){
    return todayDate.getMonth() -birth_date.getMonth();
    }else{
    if( (todayDate.getMonth() -1) >= birth_date.getMonth()){
    return (todayDate.getMonth() - 1) - birth_date.getMonth();
    }else{
    return ((todayDate.getMonth()- 1) + 12) - birth_date.getMonth();
    }
    }
  }
}

  calculate_age.innerHTML = " Your Age " + ageYear + " Years " + ageMonth() + " Months ";
}); */

let date = document.getElementById("date");
date.max = new Date().toISOString().split("T")[0]; //converts the date object to a string in the ISO format.
// max - attribute is set to the current date in the format "YYYY-MM-DD", restricting the user from selecting a date beyond the current date in the input field with the id "date

let result = document.getElementById("result");

function calculateAge() {
  let birthDate = new Date(date.value); // this is birthday date,month,year represent --> d1,m1,y1
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date(); //current date,month,year -->represent d2,m3,y3
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3; //store the different var  represent--> date,month,year

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  result.innerHTML = `You are <span>${y3}</span> Years,<span>${m3}</span> Months and <span>${d3}</span> Days old`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate;
}
