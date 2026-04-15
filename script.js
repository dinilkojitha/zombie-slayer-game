var startValue = 0;

function start(event){
    

    if (event.key == "Enter" && startValue == false){
        startValue = true;
        timer();            
    }

    
    if (event.key == "d"){
        
    }
    
    if (event.key == "a"){
        
    }
    
    if (event.key == " "){
        
    }

    // if (heroML <= zombieML + 100 && heroML >=zombieML - 100 && zombieAttackWorker == 0 && startValue == 1){
    //     clearInterval(walkWorker);
    //     zombieAttack();
    // }

    // if(heroML >= zombieML + 100 && heroML <=zombieML - 100){
    //     walkWorker = 0;
    //     clearInterval(zombieAttackWorker);
    //     walk();
    // }


}

var remainTime = 50;
var timeWorker ;
function timer(){
    timeWorker = setInterval(()=>{

        document.getElementById("timer").innerHTML = `Time:${--remainTime}`;

        if(remainTime == 0){
            alert("Game Over");
            window.location.reload();
        }
    },1000)
}

var heroIdleImageNumber = 0;
var heroIdleWorker = 0;
function heroIdleAnimation(){

    heroIdleWorker = setInterval(()=>{
        
        document.getElementById("hero").src = `assets/hero/Idle (${++heroIdleImageNumber}).png`;

        if (heroIdleImageNumber == 10){
            heroIdleImageNumber = 1;
        }
    }, 100)  
}    

var runImage = 0;
var heroML = 50;
var heroScale = +1;
var forwardRunWorker = 0;

function run(){

    forwardRunWorker = setInterval(()=>{

        if (heroML < 100 && key == "d"){
            heroML = heroML + 1;
            document.getElementById("hero").style.marginLeft = `${heroML}px`;
        }
        else if (heroML > 0 && key == "a"){
            heroML = heroML + 1;
            document.getElementById("hero").style.marginLeft = `${heroML}px`;
        }

        document.getElementById("hero").src = `assets/hero/Run (${++runImage} + ).png`;

        if (runImage == 10){
            runImage = 1;
        }

    }, 100)
}


// function runForward(){

//     forwardRunWorker = setInterval(()=>{

//         runImage++;

//         document.getElementById("hero").style.transform = "scalex(" + heroScale + ")";
//         document.getElementById("hero").src = "hero/Run (" + runImage + ").png";

//         if (runImage == 10){
//             runImage = 1;
//         }

        // if (heroML < 1320){
        //     heroML = heroML + 15;
        //     document.getElementById("hero").style.marginLeft = heroML + "px";    
//         }

//         backwardRunWorker = 0;

//     }, 100)
// }

// var backwardRunWorker = 0;

// function runBackward(){

//     backwardRunWorker = setInterval(()=>{

//         runImage++;
        
//         document.getElementById("hero").style.transform = "scalex(" + heroScale + ")";
//         document.getElementById("hero").src = "hero/Run (" + runImage + ").png";

//         if (runImage == 10){
//             runImage = 1;
//         }

//         if (heroML > 50){
//             heroML = heroML - 15;
//             document.getElementById("hero").style.marginLeft = heroML + "px";    
//         }

//         forwardRunWorker = 0;

//     }, 100)
    
// }

var heroAttackImageNumber = 0;
var heroAttackWorker = 0;
var attackCount = 0;

function heroAttack(){

    heroAttackWorker = setInterval(()=>{

        heroAttackImageNumber++;

        if (heroAttackImageNumber == 10){
            heroAttackImageNumber = 1;

            if (zombieML + 3 >= heroML && heroML >= zombieML - 3){
                attackCount++;
            }

        }
        
        document.getElementById("hero").src = `assets/hero/Attack (${++heroAttackImageNumber}).png`;
                
    }, 80)
}

var zombieIdleImageNumber = 0;
var zombieIdleWorker = 0;

function zombieIdleAnimation(){

    zombieIdleWorker = setInterval(()=>{

        document.getElementById("zombie").src = `assets/femaleZombie/Idle (${++zombieIdleImageNumber}).png`;

        if (zombieIdleImageNumber == 15){
            zombieIdleImageNumber = 1;
        }    
    }, 100);
}

var zombieWalkImageNumber = 0;
var zombieML = 90;
var zombieScale = -1;
var walkWorker  = 0;

function walkAnimation(){

    walkWorker = setInterval(()=>{
        
        document.getElementById("zombie").src = `assets/femaleZombie/Walk (${++zombieWalkImageNumber}).png`;

        if (zombieWalkImageNumber == 10){
            zombieWalkImageNumber = 1;
        }

        zombieWalkPosition();

        document.getElementById("zombie").style.marginLeft = `${zombieML}px`;

    },120)
}

function zombieWalkPosition(){
    if (zombieML > heroML + 50 && zombieAttackWorker == 0){

        zombieScale = -1;
        zombieML = zombieML - 5;

        document.getElementById("zombie").style.transform = `scalex(${zombieScale-=5})`;
    }

    if (zombieML < heroML - 50 && zombieAttackWorker == 0){

        zombieScale = +1;
        zombieML = zombieML + 5;
        
        document.getElementById("zombie").style.transform = `scalex(${zombieScale+=5})`;   
    }

}

var zombieAttackImageNumber = 0;
var zombieAttackWorker = 0;

function zombieAttack(){

    zombieAttackWorker = setInterval(()=>{

        if (zombieML <= heroML && walkWorker == 0 ){
            zombieScale = +1;
            document.getElementById("zombie").style.transform = `scalex(${zombieScale})`;
        }

        if (zombieML >= heroML && walkWorker == 0){
            zombieScale = -1;
            document.getElementById("zombie").style.transform = `scalex(${zombieScale})`;
        }

        document.getElementById("zombie").src = `assets/femaleZombie/Attack (${++zombieAttackImageNumber}).png`; 


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

        document.getElementById("zombie").src = `assets/femaleZombie/Dead (${++zombieDeadImageNumber}).png`;

        if (zombieDeadImageNumber == 12){
            clearInterval(zombieDeadWorker);
            alert("you Won");
        }
    },100)
}