 function exponentialPopulationGrowth(){
	   
     let initialPopulation = parseFloat(prompt('Enter the initial population :'));
     let rateGrowth = parseFloat(prompt('Enter the rate of growth: '));
	 let time = parseFloat(prompt('Enter the time in hours: '));
	               
     let finalPopulation = Math.round(initialPopulation*Math.pow(Math.E, (rateGrowth*time)));
                      
     let monsterLocation = prompt('Enter the region or location of the monster: ');
     let monsterName = prompt('Enter the name of the monster: ');
	 
	 let nameAndLoc = monsterLocation.concat(" ", monsterName).toUpperCase();
                      
      document.getElementById("result").innerHTML = "After " + time + " hours, the population of " + nameAndLoc + " has increased to " + finalPopulation;

 }