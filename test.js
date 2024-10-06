function solve( a, c){
    let s=a+c;
    return s;
}

let a=100;
function sum(a){
    let sum=0;
    for(let i=0;i<=a;i++){
        sum=sum+i;
    }
    return sum;
}
console.log(solve(34,56));
console.log(sum(56));
let obj={
    name:"Akhil",
    age: 34,
    height:"6 ft",
    greet : function(){
      console.log("hello love");
    }
  };
  console.log(obj);
  obj.greet();
  let obj2=obj;
  console.log(obj);
  let a1= [10,29,30];
  a1.map((number,index) => {
    console.log(number);
    console.log(index);
  })
  a1.map((number) => {
    console.log(number+2);
  })
  