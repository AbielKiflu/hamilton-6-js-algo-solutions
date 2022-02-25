
 
function askTvSerie() {
    // this function accepts name production date and casts of a certain tvseries
    let name,production_date,casts=[];
    const readlineSync = require("readline-sync");
    name=readlineSync.question("Enter the name of the movie?");
    production_date=readlineSync.question("Enter the production date?");
    let cast_number=new Number(readlineSync.question("Enter the number of casts?"));
    
    while (cast_number>0){
        casts.push(readlineSync.question("Enter the name of the cast?"));
        cast_number--;
    }
    
    let tvSerieObject={"Movie":name,"ProductionDate":production_date,"casts":casts};
    
    return tvSerieObject;
}





function randomizeCast(tvSerie){
    let name=tvSerie.Movie;
    let production_date=tvSerie.ProductionDate;
    let random_casts=tvSerie.casts;
     
    let random=Math.floor(Math.random()*(random_casts.length+1));
   
    while(random >0){
        random_casts.push( ...random_casts.splice(random,1)); // spread operator
        random=(Math.random()*random_casts.length);  
            }
            
        return random_casts;
        
    let tvSerieObject={"Movie":name,"ProductionDate":production_date,"casts":random_casts};
    return tvSerieObject;
}
 

let tvSerie =askTvSerie();
console.log(randomizeCast(tvSerie));
 

