 function exponentialPopulationGrowth(){
	   
     let inPopulation = parseFloat(prompt('Enter the initial population :'));
     let rateGrowth = parseFloat(prompt('Enter the rate of growth: '));
     let time = parseFloat(prompt('Enter the time in hours: '));
	               
     let finPopulation = Math.round(inPopulation*Math.pow(Math.E, (rateGrowth*time)));
                      
     let monsterLoc = prompt('Enter the region or location of the monster: ');
     let monsterName = prompt('Enter the name of the monster: ');
	 
	 let nameAndLoc = monsterLoc.concat(" ", monsterName).toUpperCase();
                      
      document.getElementById("result").innerHTML = "After " + time + " hours, the population of " + nameAndLoc + " has increased to " + finPopulation;

 }
