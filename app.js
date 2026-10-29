// function clickme(){
//     console.log("Button Clicked!");
// }

// function clickme(){
//     console.log(document.getElementById("txtSample").value);
// }

// function clickme(){
//     let txtValue = document.getElementById("txtSample").value;
//     document.getElementById("txtSample").innerHTML = "<h1>"+ txtValue +"</h1>"
// }

// let calHistory = ["10", "20", "30", "40"];

// for(let i = 0; i<calHistory.length; i++){
//     console.log(calHistory(i));
// }

// for(let num of calHistory){
//     console.log(num);
// }

// calHistory.forEach(data =>{
//     console.log(data);
// });

// console.log(calHistory);

// function clickMe1(){
//     //console.log(document.getElementById ("txtsample").value);
//     let txtvalue1 = document.getElementById ("txtsample1").value;
//     let num01 = parseInt(txtvalue1);
//     let txtvalue2 = document.getElementById ("txtsample2").value;
//     let num02 = parseInt(txtvalue2);
//     let sub = num01 - num02;

//     document.getElementById("lblSection").innerHTML = "<h1>"+ sub + "</h1>";
// }
// function clickMe2(){
//     //console.log(document.getElementById ("txtsample").value);
//     let txtvalue1 = document.getElementById ("txtsample1").value;
//     let num01 = parseInt(txtvalue1);
//     let txtvalue2 = document.getElementById ("txtsample2").value;
//     let num02 = parseInt(txtvalue2);
//     let add = num01 + num02;

//     document.getElementById("lblSection").innerHTML = "<h1>"+ add + "</h1>";
// }

// let calHistory = [ ];

// calHistory.push(calHistory.forEach(data =>{
// console.log(data);
// }));

// console.log(calHistory);



function clickMeRed() {
  loadData();
}

function clickMeSum() {
  let txtValue01 = document.getElementById("txtSample01").value;
  let txtValue02 = document.getElementById("txtSample02").value;
  let num01 = parseInt(txtValue01);
  let num02 = parseInt(txtValue02);
  let sum = num01 + num02;
  document.getElementById("lblSection").innerHTML = "<h1>" + sum + "</h1>";

  CalHistory.push(num01 + "+" + num02 + "=" + sum);
  loadData();
}

function clickMeMin() {
  let txtValue01 = document.getElementById("txtSample01").value;
  let txtValue02 = document.getElementById("txtSample02").value;
  let num01 = parseInt(txtValue01);
  let num02 = parseInt(txtValue02);
  let min = num01 + num02;
  document.getElementById("lblSection").innerHTML = "<h1>" + min + "</h1>";

  CalHistory.push(num01 + "-" + num02 + "=" + min);
  loadData();
}

function loadData() {
  for (let num of CalHistory) {
    document.getElementById("calHistory").innerHTML = "<h1>" + sum + "</h1>";
  }
}

function calHistory(){
    
}
