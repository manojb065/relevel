var a=Number(prompt("enter value of a"));
var b=Number(prompt("enter value of b"));

var op = prompt("enter operator");

switch(op){
    case '+': alert(a+b);
    break;
    case '-': alert(a-b);
    break;
    case '*': alert(a*b);
    break;
    case '/': 
      if(b!=0)alert(a/b);
      else alert("zerodivision error")
    break;
    case '%': alert(a%b);
    break;
    default:alert("invalid operator")
}