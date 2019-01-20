let gameManager ={
    setGameStart: function(classtype)
    {
        this.resetPlayer(classtype);
        this.setPreFight();
    },
    resetPlayer:function(classtype){
        switch(classtype){
            case "Archer Queen": 
                player= new Player(classtype,200,0,200,80,100);
                break;
            case "Assasinator": 
                player= new Player(classtype,220,10,200,100,150);
                break;
            case "Death": 
                player= new Player(classtype,180,9,220,110,150);
                break;
            case "Guardian of Sky": 
                player= new Player(classtype,200,10,200,90,140);
                break;
            case "Hell Warden": 
                player= new Player(classtype,240,11,220,60,110);
                break;
            case "Queen Hydra": 
                player= new Player(classtype,195,0,200,110,140);
                break;
            case "Sea Warden": 
                player= new Player(classtype,195,12,220,110,160);
                break;
            case "Witch": 
                player= new Player(classtype,110,8,168,146,105);
                break;
        }
        document.querySelector(".actions").visibility="visible";
        let getInterface= document.querySelector(".interface");
        getInterface.innerHTML='<img src="images/'+ classtype+'.jpg" class="img-avator"><div><h3>'+classtype+'</h3><p class="health-player">Health: '+ player.health
        + '</p><p>Mana: '+ player.mana + '</p><p>Strength: '+player.strength+'</p><p>Agility: '+ player.agility+ '</p><p>Speed: '+ player.speed
        +'</p></div>';
    },
    
    setPreFight: function(){
        let getHeader=document.querySelector(".header");
        let getActions=document.querySelector(".actions");
        let getArena=document.querySelector(".arena");
        getHeader.innerHTML="<p>Task: Find an Enemy!!</p>";
        getActions.innerHTML='<a href="#" class="btn-prefight" onclick="gameManager.setFight()">Search for Enemy!!</a>';
        getActions.style.visibility="visible"; 
        getArena.style.visibility="visible";
    },
    setFight(){
        let getHeader=document.querySelector(".header");
        let getActions=document.querySelector(".actions");
        let getEnemy=document.querySelector(".enemy");
        //create enemy
        let enemy0=new Enemy("Goblin",170,10,50,100,100);
        let enemy1=new Enemy("Pirate",180,5,100,70,90);
        let enemy2=new Enemy("Ash Beast",150,12,140,110,130);
        let enemy3=new Enemy("Thalassa",220,8,180,70,170);
        let chooseRandomEnemy=Math.floor(Math.random()*Math.floor(4));
        switch(chooseRandomEnemy){
            case 0:
                enemy=enemy0;
                break;
            case 1:
                enemy=enemy1;
                break;
            case 2:
                enemy=enemy2;
                break;
            case 3:
                enemy=enemy3;
                break;
        }
        getHeader.innerHTML='<p>Task: Atttttaaacccckkkkk!!!</p>';
        getActions.innerHTML='<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML='<img src="images/'+ enemy.enemytype+'.jpg" class="img-avator1"><div><h3>'+enemy.enemytype+'</h3><p class="health-enemy">Health: '+ enemy.health
        + '</p><p>Mana: '+ enemy.mana + '</p><p>Strength: '+enemy.strength+'</p><p>Agility: '+ enemy.agility+ '</p><p>Speed: '+ enemy.speed
        +'</p></div>';
    },
}