let services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
    
  };
  
  services.price = function() {
    let total = 0;
    for (let key in this) {
        if (typeof this[key] === 'string' && this[key].includes('грн')) {
            let price = parseInt(this[key]);
            total += price;
        }
    }
    return total + " грн";
  }
  services.minPrice = function() {
    let minPrice = Infinity; 
  
    for (let key in this) {
        if (typeof this[key] === 'string' && this[key].includes('грн')) {
            let price = parseInt(this[key]); 
            minPrice = Math.min(minPrice, price); 
        }
    }
  
    return minPrice + " грн";
  };
  services.maxPrice = function(){
    let maxPrice = 0;
    for(let key in this){
      if (typeof this[key] === 'string' && this[key].includes('грн')){
        let price = parseInt(this[key]);
        maxPrice = Math.max(maxPrice, price);
      }
    }
    return maxPrice + " грн";
  };
