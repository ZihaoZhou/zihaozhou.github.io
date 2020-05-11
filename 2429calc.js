//Calculate Tip
function calculateSplit() {
  var Zihao    = parseFloat(document.getElementById("Zihao").value);
  var Dongdong = parseFloat(document.getElementById("Dongdong").value);
  var Nanshen  = parseFloat(document.getElementById("Nanshen").value);

  var ZDShare  = parseFloat(document.getElementById("ZDShare").value);
  var DNShare  = parseFloat(document.getElementById("DNShare").value);
  var NZShare  = parseFloat(document.getElementById("NZShare").value);

  var ZDNShare = parseFloat(document.getElementById("ZDNShare").value);
  var Total    = parseFloat(document.getElementById("Total").value);

  if(isNaN(Zihao))    Zihao = 0;
  if(isNaN(Dongdong)) Dongdong = 0;
  if(isNaN(Nanshen))  Nanshen = 0;
  if(isNaN(ZDShare))  ZDShare = 0;
  if(isNaN(DNShare))  DNShare = 0;
  if(isNaN(NZShare))  NZShare = 0;
  if(isNaN(ZDNShare)) ZDNShare = 0;
  if(isNaN(Total))    Total = 0;

  Zihao = Zihao + ZDShare / 2 + NZShare / 2 + ZDNShare / 3;
  Dongdong = Dongdong + ZDShare / 2 + DNShare / 2 + ZDNShare / 3;
  Nanshen = Nanshen + DNShare / 2 + NZShare / 2 + ZDNShare / 3;
  
  // Calculate split
  var Subtotal = Zihao + Dongdong + Nanshen;
  if (Subtotal === 0 || Total === 0) {
    alert("Please enter values");
    return;
  }

  Zihao = Zihao / Subtotal * Total 
  Zihao = Math.round(Zihao * 100) / 100; //round to two decimal places
  //next line allows us to always have two digits after decimal point
  Zihao = Zihao.toFixed(2);

  Dongdong = Dongdong / Subtotal * Total
  Dongdong = Math.round(Dongdong * 100) / 100;
  Dongdong = Dongdong.toFixed(2);

  Nanshen = Nanshen / Subtotal * Total
  Nanshen = Math.round(Nanshen * 100) / 100;
  Nanshen = Nanshen.toFixed(2);

  document.getElementById("result").style.display = "block";
  document.getElementById("calculate").style.display = "none";

  document.getElementById("ZihaoResult").innerHTML = Zihao;
  document.getElementById("DongdongResult").innerHTML = Dongdong;
  document.getElementById("NanshenResult").innerHTML = Nanshen;
}
  
//Hide the tip amount on load
document.getElementById("result").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateSplit();
};