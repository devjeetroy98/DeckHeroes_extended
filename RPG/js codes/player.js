let player;
function Player(classtype,health,mana,strength,agility,speed){
    this.classtype = classtype;
    this.health= health;
    this.mana=mana;
    this.strength= strength;
    this.agility=agility;
    this.speed=speed;

}
let PlayerMoves = {
    calcAttack: function()
    {
        //Who attacks first??

        let getPlayerSpeed= player.speed;
        let getEnemySpeed= enemy.speed;
        //Player Attack
        let playerAttack= function(){
            let calcBaseDamage;
            if(player.mana>0){
                calcBaseDamage= player.strength * player.mana / 1000;
            }
            else{
                calcBaseDamage= player.strength * player.mana / 1000;
            }
            let offsetDamage= Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage=Math.floor(calcBaseDamage+offsetDamage);
            //Number of hits
            let numberOfHits=Math.floor(Math.random() * Math.floor(player.agility/10)/2)+1;
            let attackValues=[calcOutputDamage,numberOfHits];
            return attackValues;
        }
        //Enemy attacks
        let enemyAttack= function(){
            let calcBaseDamage;
            if(enemy.mana>0){
                calcBaseDamage= enemy.strength * enemy.mana / 1000;
            }
            else{
                calcBaseDamage= enemy.strength * enemy.mana / 1000;
            }
            let offsetDamage= Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage=Math.floor(calcBaseDamage+offsetDamage);
            //Number of hits
            let numberOfHits=Math.floor(Math.random() * Math.floor(enemy.agility/10)/2)+1;
            let attackValues=[calcOutputDamage,numberOfHits];
            return attackValues;
        }
        //Change of health after attack

        let getPlayerHealth= document.querySelector(".health-player");
        let getEnemyHealth= document.querySelector(".health-enemy");
        //Initiate attacks

        if(getPlayerSpeed>=getEnemySpeed){
            let playerAttackValues= playerAttack();
            let totalDamage= playerAttackValues[0]*playerAttackValues[1];
            enemy.health=Math.floor(enemy.health - totalDamage);
            alert("You hit "+playerAttackValues[0]+" damage "+playerAttackValues[1]+" times.");
            if(enemy.health<=0){
                alert("You Won! Refresh the browser to play again.");
                getPlayerHealth.innerHTML='Health: '+Math.floor(player.health);
                getEnemyHealth.innerHTML='Health: 0';
            }
            else{
                getEnemyHealth.innerHTML='Health: '+Math.floor(enemy.health);
            }
            
            let enemyAttackValues= enemyAttack();
            totalDamage= enemyAttackValues[0]*enemyAttackValues[1];
            player.health=Math.floor(player.health - totalDamage);
            alert("Opponent hit "+enemyAttackValues[0]+" damage "+enemyAttackValues[1]+" times.");
            if(player.health<=0){
                alert("You Lose! Refresh the browser to play again.");
                getPlayerHealth.innerHTML='Health: 0';
                getEnemyHealth.innerHTML='Health: '+Math.floor(enemy.health);
            }
            else{
                getPlayerHealth.innerHTML='Health: '+Math.floor(player.health);
            }
        }
        else if(getPlayerSpeed<=getEnemySpeed){
            let enemyAttackValues= enemyAttack();
            let totalDamage= enemyAttackValues[0]*enemyAttackValues[1];
            player.health=Math.floor(player.health - totalDamage);
            alert("Opponent hit "+enemyAttackValues[0]+" damage "+enemyAttackValues[1]+" times.");
            if(player.health<=0){
                alert("You Lose! Refresh the browser to play again.");
                getEnemyHealth.innerHTML='Health: '+Math.floor(enemy.health);
                getPlayerHealth.innerHTML='Health: 0';
            }
            else{
                getPlayerHealth.innerHTML='Health: '+Math.floor(player.health);
            }
            
            let playerAttackValues= playerAttack();
            totalDamage= enemyAttackValues[0]*playerAttackValues[1];
            enemy.health=Math.floor(enemy.health - totalDamage);
            alert("You hit "+playerAttackValues[0]+" damage "+playerAttackValues[1]+" times.");
            if(enemy.health<=0){
                alert("You Lose! Refresh the browser to play again.");
                getEnemyHealth.innerHTML='Health: 0';
                getPlayerHealth.innerHTML='Health: '+Math.floor(player.health);
            }
            else{
                getEnemyHealth.innerHTML='Health: '+Math.floor(enemy.health);
            }
        }
    }
}