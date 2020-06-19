var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyHealth = 50;
var enemyAttack = 12;
var playerMoney = 10;
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];


var fight = function(enemyName) {
  // repeat and execute as long as the enemy robot is alive 
  while(enemyHealth > 0 && playerHealth > 0) {
    // place fight function code block here . . .
    
  //fight function statements
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

      // if player chooses to skip
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + " has decided to skip this fight. Goodbye!");
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 10;
          console.log("playerMoney", playerMoney);
          break;
        }
      
        // if no (false), ask question again by running fight() again
        else {
          fight();
            } 
          }

  // if player choses to fight, then fight

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      // if the enemy robot's health is zero or less, exit from the fight loop.
      break;

    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
      // "LOSE" - Player robot's health is zero or less
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

for(var i = 0; i < enemyNames.length; i++) {
  // call fight function with enemy robot
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}

//fight()