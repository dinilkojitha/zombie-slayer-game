var startValue = 0;

function start(event){

    if (event.key == "Enter" && timeWorker == 0 && forwardRunWorker == 0 && backwardRunWorker == 0 && walkWorker == 0){
        startValue = 1;
        runValue = 1;
        clearInterval(zombieIdleWorker);
        timer(); 
        walk();      
    }

    
    if (event.key == "d" && forwardRunWorker == 0 && startValue == 1){
        runValue = 1;
        heroScale = +1;
        clearInterval(backwardRunWorker);
        runForward();
    }
    
    if (event.key == "a" && backwardRunWorker == 0 && startValue == 1){
        runValue = 2;
        heroScale = -1;
        clearInterval(forwardRunWorker);
        runBackward();
    }
    
    if (event.key == " " && heroAttackWorker == 0 && timeWorker != 0 && (forwardRunWorker == 0 || backwardRunWorker == 0)){
        runValue = 0;
        heroAttackWorker = 0;
        clearInterval(heroIdleWorker);
        clearInterval(forwardRunWorker);
        clearInterval(backwardRunWorker);
        heroAttack();
        //forwardRunWorker = 0;
        //backwardRunWorker = 0;
    }

    if (heroML <= zombieML + 100 && heroML >=zombieML - 100 && zombieAttackWorker == 0 && startValue == 1){
        clearInterval(walkWorker);
        zombieAttack();
    }

    if(heroML >= zombieML + 100 && heroML <=zombieML - 100){
        walkWorker = 0;
        clearInterval(zombieAttackWorker);
        walk();
    }


}

var heroIdleImageNumber = 0;
var heroIdleWorker = 0;

function heroIdleAnimation(){

    heroIdleWorker = setInterval(()=>{

        heroIdleImageNumber++;
        
        document.getElementById("hero").src = "assets/hero/Idle (" + heroIdleImageNumber + ").png";

        if (heroIdleImageNumber == 10){
            heroIdleImageNumber = 1;
        }
    }, 100)  
}    

var remainTime = 50;
var timeWorker = 0;

function timer(){
    timeWorker = setInterval(()=>{
        remainTime--;

        document.getElementById("timer").innerHTML = "Time:" + remainTime;

        if(remainTime == 0){
            alert("Game Over");
            window.location.reload();

        }
    },1000)

}

var runValue = 0;
var runImage = 0;
var heroML = 50;
var heroScale = +1;
var forwardRunWorker = 0;

function runForward(){

    clearInterval(heroIdleWorker);

    forwardRunWorker = setInterval(()=>{

        runImage++;

        document.getElementById("hero").style.transform = "scalex(" + heroScale + ")";
        document.getElementById("hero").src = "assets/hero/Run (" + runImage + ").png";

        if (runImage == 10){
            runImage = 1;
        }

        if (heroML < 1320){
            heroML = heroML + 15;
            document.getElementById("hero").style.marginLeft = heroML + "px";    
        }

        backwardRunWorker = 0;

    }, 100)
}

var backwardRunWorker = 0;

function runBackward(){

    clearInterval(heroIdleWorker);

    backwardRunWorker = setInterval(()=>{

        runImage++;
        
        document.getElementById("hero").style.transform = "scalex(" + heroScale + ")";
        document.getElementById("hero").src = "assets/hero/Run (" + runImage + ").png";

        if (runImage == 10){
            runImage = 1;
        }

        if (heroML > 50){
            heroML = heroML - 15;
            document.getElementById("hero").style.marginLeft = heroML + "px";    
        }

        forwardRunWorker = 0;

    }, 100)
    
}

var heroAttackImageNumber = 0;
var heroAttackWorker = 0;
var attackCount = 0;

function heroAttack(){

    heroAttackWorker = setInterval(()=>{

        heroAttackImageNumber++;

        clearInterval(forwardRunWorker);
        clearInterval(backwardRunWorker);

        if (heroAttackImageNumber == 10){
            clearInterval(heroAttackWorker);
            heroAttackImageNumber = 1;
            heroAttackWorker = 0;

            if (zombieML + 100 >= heroML && heroML >= zombieML - 100){
                attackCount++;
            }

            if (runValue == 0){
                heroIdleAnimation();
            }

            if (runValue == 1){
                runForward();
            }

            if (runValue == 2){
                runBackward();
            }
        }
        
        document.getElementById("hero").src = "assets/hero/Attack (" + heroAttackImageNumber + ").png";
                
    }, 80)

    if(attackCount >= 2 && (heroML >= zombieML - 80 || heroML >= zombieML + 80) ){
        
        clearInterval(zombieIdleWorker);
        clearInterval(walkWorker);
        clearInterval(zombieAttackWorker);
        zombieDead();
        
        if (attackCount > 2){
            window.location.reload();
            
        }    
    }
    forwardRunWorker = 0;
    backwardRunWorker = 0;
}

var zombieIdleImageNumber = 0;
var zombieIdleWorker = 0;
var zombieActivityNumber = 0;

function zombieIdleAnimation(){
    zombieActivityNumber = 1;

    zombieIdleWorker = setInterval(()=>{

        zombieIdleImageNumber++;

        document.getElementById("zombie").src = "assets/femaleZombie/Idle (" + zombieIdleImageNumber + ").png";

        if (zombieIdleImageNumber == 15){
            zombieIdleImageNumber = 1;
        }    
    }, 100);
}

var zombieWalkImageNumber = 0;
var zombieML = 1270;
var zombieScale = -1;
var walkWorker  = 0;

function walk(){

    walkWorker = setInterval(()=>{
        zombieActivityNumber = 2;

        zombieWalkImageNumber++;
        

        document.getElementById("zombie").src = "assets/femaleZombie/Walk (" + zombieWalkImageNumber + ").png"

        if (zombieWalkImageNumber == 10){
            zombieWalkImageNumber = 1;
            clearInterval(zombieAttackWorker);
        }

        if (zombieML > heroML + 50 && zombieAttackWorker == 0){

            zombieScale = -1;
            zombieML = zombieML - 5;

            document.getElementById("zombie").style.marginLeft = zombieML + "px";
            document.getElementById("zombie").style.transform = "scalex(" + zombieScale + ")";
        }

        if (zombieML < heroML - 50 && zombieAttackWorker == 0){

            zombieScale = +1;
            zombieML = zombieML + 5;

            document.getElementById("zombie").style.marginLeft = zombieML + "px";
            document.getElementById("zombie").style.transform = "scalex(" + zombieScale + ")";   
        }


    },120)
}

var zombieAttackImageNumber = 0;
var zombieAttackWorker = 0;

function zombieAttack(){
    zombieActivityNumber = 3;

    zombieAttackWorker = setInterval(()=>{

        zombieAttackImageNumber++;
        clearInterval(walkWorker);
        walkWorker = 0;

        if (zombieML <= heroML && walkWorker == 0 ){
            zombieScale = +1;
            document.getElementById("zombie").src = "assets/femaleZombie/Attack (" + zombieAttackImageNumber + ").png"; 
            document.getElementById("zombie").style.transform = "scalex(" + zombieScale + ")";
        }

        if (zombieML >= heroML && walkWorker == 0){
            zombieScale = -1;
            document.getElementById("zombie").src = "assets/femaleZombie/Attack (" + zombieAttackImageNumber + ").png"; 
            document.getElementById("zombie").style.transform = "scalex(" + zombieScale + ")";
        }

        if (zombieAttackImageNumber == 8){
            zombieAttackImageNumber = 1;
        }
    }, 120)
}

var zombieDeadImageNumber = 0;
var zombieDeadWorker = 0; 

function zombieDead(){
    zombieActivityNumber = 4;

    zombieDeadWorker = setInterval(()=>{

        zombieDeadImageNumber++;

        document.getElementById("zombie").src = "assets/femaleZombie/Dead (" + zombieDeadImageNumber +").png";

        if (zombieDeadImageNumber == 12){
            clearInterval(zombieDeadWorker);
            alert("you Won");
        }
    },100)
}