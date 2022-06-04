var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // ask player if they'd like to fight or run
    if (promptFight === "fight" || promptFight === "FIGHT") {

        //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that to update the value in the 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;
        //Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + "attacked" + enemyName + ". " + enemyName + "now has" + enemyHealth + "health remaining."
        )
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        //Subtract the value of 'enemyHealth' from the value of 'enemyAttack' fro the value of 'playerHealth' and use that to update the value in the 'playerHealth' variable
        playerHealth = playerHealth - enemyAttack;
        //Log a resutling message to the console so we kow that it worked.
        console.log(
            enemyName + "attacked" + playerName + ". " + playerName + "now has" + playerHealth + "health remaining."
        );

        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm(playerName + "Are you sure you'd like to quit?");
    }
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
        fight();
    }
  // if player did not chose 1 or 2 in prompt
    else {
    window.alert("You need to pick a valid option. Try again!");
    }
}; // end of fight function

fight();