function checkProbabilityTheory(count) {
    let oddCount = 0;
    let evenCount = 0;
    for(i=0; i<count; i++){
      let randomNumber = Math.floor(Math.random() * 900) + 100;
      if (randomNumber % 2 === 0 ){
        evenCount++;
      } else {
        oddCount++;
      }
    }
    let evenPercent = (evenCount / count) * 100;
    let oddPercent = (oddCount / count) * 100;
   
    console.log("к-сть числел " + count);
    console.log("парних " + evenCount);
    console.log("не парних " + oddCount)
    console.log("відсоток парних " + evenPercent)
    console.log("відсоток не парних " + oddPercent)
}
checkProbabilityTheory(200);