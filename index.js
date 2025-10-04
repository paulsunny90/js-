let arr=["apple","orang","apple","orang","apple","grapes"]
let obj={};
for(let count of arr){
    
    if(obj[count]){
        obj[count]+=1;
    }else{
        obj[count]=1;
    }
}

console.log(obj);