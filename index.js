let  headquarters = 42
function distanceFromHqInBlocks (pickup) {
    if (pickup>42){
        return  pickup - headquarters
    }
    else return headquarters - pickup
  }
  
  function distanceFromHqInFeet (someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
    // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    //the return value of distanceFromHqInBlocks can then be used to calculate feet
  } 
  function distanceTravelledInFeet(start, destination)  {
    if (start>destination){
        return  (start - destination)*264
    }
    else return (destination-start)*264

    //returns the number of blocks given a value
  }
  
  function calculatesFarePrice(start, destination) {
      if (distanceTravelledInFeet(start, destination)<400){
          return 0
      }
      else if (distanceTravelledInFeet(start, destination)<2000){
          return (distanceTravelledInFeet(start,destination)-400)*0.02
      }
      else if (distanceTravelledInFeet(start, destination)<2500){
        return 25
    }
    else return 'cannot travel that far'
    // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    //the return value of distanceFromHqInBlocks can then be used to calculate feet
  } 
