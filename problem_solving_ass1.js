var A=3;

for(var a=0;a<A;a++ ){
    for(var b=a+1;b<A;b++){
        if(Math.pow(a,2)+Math.pow(b,2)==A){
            console.log(a,b);
        }
    }
}