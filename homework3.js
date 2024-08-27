
function pow (x, y){
  
    let result = 1;
        for(i=0; i<y; i++){
            result*=x;
        } 
        return result;
   } 


   let finalResult = pow(2,9);
   console.log(finalResult);