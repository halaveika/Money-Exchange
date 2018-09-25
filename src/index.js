// PLEASE DON'T change function name
module.exports = function makeExchange(currency){
  let H=0, //half-dollars
      Q=0, //quarters
      D=0, //dimes
      N=0,  //nickels
      P=0; //pennies
      //errormessage
    if (currency>10000) return module.exports = {error:"You are rich, my friend! We don't have so much coins for exchange"}; 
      //empty object
    if (currency <=0) return module.exports = {};
     //finding min number of coins
    if ((currency<=10000) && (currency>0)) {    
      while (currency>0){
        currency-=50;
        H++;
        if (currency<0){
            currency+=50;
            H--;  
            while (currency>0){
              currency-=25;
              Q++;
                if (currency<0){
                  currency+=25;
                  Q--;
                  while (currency>0){
                    currency-=10;
                    D++;
                      if (currency<0){
                        currency+=10;
                        D--;  
                        while (currency>0){
                            currency-=5;
                            N++;
                              if (currency<0){
                                currency+=5;
                                N--;
                                while (currency>0){
                                   currency-=1;
                                   P++;
                                }
                              }
                        }  
                      }
                  }
                }   
            }
    } 
      } 
      // creat temporary object and delete all null properaties
      let temp = {"H":H,"Q":Q,"D":D,"D":D,"N":N, "P":P};
      for (let key in temp){
        if (temp[key]===0) delete temp[key];
      }

    return module.exports = temp;}
}

