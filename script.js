var isStart = false;
var isForward = false;
var isBackward = false;

function start(event){
    
    
    if (event.key === "Enter" && isStart === false){
        isStart = true;
        timer();    
        clearInterval(zombieIdleWorker);
        walkAnimation();       
    }

    if (event.key === "d" && isStart === true && isForward === false){
        isForward = true;
        isBackward = false;
        heroScale = +1;
        clearInterval(heroIdleWorker);
        clearInterval(RunWorker);
        heroRun();
    }
    
    if (event.key === "a" && isStart === true && isBackward === false){
        isBackward = true;
        isForward = false;
        heroScale = -1;
        clearInterval(heroIdleWorker);
        clearInterval(RunWorker);
        heroRun();

    }
    
    if (event.key === " " && isStart === true){
        
    }
}

var timeWorker = false;
var remainTime = 50;

function timer(){
    console.log("timeWorker working");
    timeWorker = setInterval(()=>{
        if(remainTime !== 0){
            document.getElementById("timer").innerHTML = `Time:${--remainTime}`;
        }

        if(remainTime === 0){
            document.getElementById("gameOver").style.display = "block";
            // window.location.reload();
        }
    },1000)
}

var heroIdleImageNumber = 0;
var heroIdleWorker = false;
function heroIdleAnimation(){

    heroIdleWorker = setInterval(()=>{
        
        document.getElementById("hero").src = `assets/hero/Idle (${++heroIdleImageNumber}).png`;

        if (heroIdleImageNumber === 10){
            heroIdleImageNumber = 1;
        }
    }, 100)  
}    

var runImage = 0;
var heroML = 60;
var heroScale;
var RunWorker = false;
var forRunner = false;
var backRunner = false;

function heroRun(){

    RunWorker = setInterval(()=>{
        if (heroML <= 95 && heroML > 0 && heroScale === -1){
            heroML = heroML - 0.5;
            // document.getElementById("hero").style.left = `${heroML}%`;
        }
        else if (heroML < 95 && heroML >= 0 && heroScale === +1){
            heroML = heroML + 0.5;
            // document.getElementById("hero").style.left = `${heroML}%`;
        }
        document.getElementById("hero").style.left = `${heroML}%`;

        document.getElementById("hero").src = `assets/hero/Run (${++runImage}).png`;
        document.getElementById("hero").style.transform = `scaleX(${heroScale})`;
        if (runImage === 10){
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
var heroAttackWorker = false;
var attackCount = 0;

function heroAttack(){

    heroAttackWorker = setInterval(()=>{

        if (heroAttackImageNumber === 10){
            heroAttackImageNumber = 1;
            heroAttackWorker = false;
            clearInterval(heroAttackWorker)
        }

        if (zombieML + 3 >= heroML && heroML >= zombieML - 3){
            attackCount++;
        }
        
        document.getElementById("hero").src = `assets/hero/Attack (${++heroAttackImageNumber}).png`;
        document.getElementById("hero").style.transform = `scaleX(${heroScale})`;
    }, 80)
}

var zombieIdleImageNumber = 0;
var zombieIdleWorker = false;

function zombieIdleAnimation(){

    zombieIdleWorker = setInterval(()=>{

        document.getElementById("zombie").src = `assets/femaleZombie/Idle (${++zombieIdleImageNumber}).png`;

        if (zombieIdleImageNumber === 15){
            zombieIdleImageNumber = 1;
        }    
    }, 100);
}

var zombieWalkImageNumber = 1;
var zombieML = 90;
var zombieScale = -1;
var walkWorker  = false;

function walkAnimation(){

    walkWorker = setInterval(()=>{

        if (zombieWalkImageNumber === 10){
            zombieWalkImageNumber = 1;
        }
        if(zombieML <= 96 && zombieML >= 0){
            zombieWalkPosition();
        }
        if (heroML - 4 <= zombieML && heroML + 4 >= zombieML ){
            console.log("HI")
            clearInterval(walkWorker);
            zombieAttack();
        }

        if(zombieML > heroML){
            zombieScale = -1
        }
        else{
            zombieScale = +1
        }

        document.getElementById("zombie").src = `assets/femaleZombie/Walk (${zombieWalkImageNumber++}).png`;
        document.getElementById("zombie").style.transform = `scaleX(${zombieScale})`;

    },120)
}

function zombieWalkPosition(){
    zombieAttackWorker = false

    if (zombieML > heroML && zombieML > 0 ){

        zombieScale = -1;
        zombieML = zombieML - 0.3;

        document.getElementById("zombie").style.transform = `scalex(${zombieScale})`;
        document.getElementById("zombie").style.left = `${zombieML}%`;
    }

    if (zombieML < heroML &&  zombieML < 96 ){

        zombieScale = +1;
        zombieML = zombieML + 0.3;
        
        document.getElementById("zombie").style.transform = `scalex(${zombieScale})`;
        document.getElementById("zombie").style.left = `${zombieML}%`;
    }
}

var zombieAttackImageNumber = 0;
var zombieAttackWorker = false;

function zombieAttack(){

    zombieAttackWorker = setInterval(()=>{

        if(heroML - 6 > zombieML || heroML + 6 < zombieML){
            clearInterval(zombieAttackWorker)
            walkAnimation();
        }

        if (zombieML <= heroML && walkWorker === false ){
            zombieScale = +1;
            document.getElementById("zombie").style.transform = `scalex(${zombieScale})`;
        }
        else if (zombieML >= heroML && walkWorker === false){
            zombieScale = -1;
            document.getElementById("zombie").style.transform = `scalex(${zombieScale})`;
        }

        document.getElementById("zombie").src = `assets/femaleZombie/Attack (${++zombieAttackImageNumber}).png`; 

        if (zombieAttackImageNumber === 8){
            zombieAttackImageNumber = 1;
        }
    }, 120)
}

var zombieDeadImageNumber = 0;
var zombieDeadWorker = false;

function zombieDead(){

    zombieDeadWorker = setInterval(()=>{

        document.getElementById("zombie").src = `assets/femaleZombie/Dead (${++zombieDeadImageNumber}).png`;

        if (zombieDeadImageNumber === 12){
            clearInterval(zombieDeadWorker);
            alert("you Won");
        }
    },100)
}