for(var i=0;i<=50;i++){
    var str=`${i}`;
    if(str.split("").reverse().join("")===str){
      console.log(i);
    }
}