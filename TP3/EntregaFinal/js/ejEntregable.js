const knight = document.querySelector("#knight");
const screen = document.querySelector(".screen");
screen.classList.add("screen-animation");
let deathCount = 0;
let passCount = 0;
let live = true;
let lastAction = 3;

let enemies = [];
let jumping = false;
let canJump = true;
let canAttack = true;
let attacking;

let idle = true;

document.addEventListener("keypress", (e) => {
    if(!idle){
        return;
    }
    if(e.key == "w"){
        if(!canJump){
            return;
        }
        idle = false;
        knight.classList.toggle("knight-run");
        knight.classList.toggle("knight-jump");
        setTimeout(() => {
            idle = false;
            canJump = false;
            jumping = true;  
            lastAction = 1;   
        }, 100);
        setTimeout(() => {
            idle = true;
            jumping = false; 
        }, 500);
        setTimeout(() => {
            canJump = true;
            jumping = false;
            knight.classList.toggle("knight-jump");
            knight.classList.add("knight-run");
            idle = true;
            lastAction = 3;
        } ,900)
    } 
    if(e.key == "p"){
        if(canAttack == false){
            return;
        }
        canAttack = false;
        knight.classList.toggle("knight-run");
        knight.classList.toggle("knight-attack");
        setTimeout(() => {
            idle = false;
            attacking = true; 
            lastAction = 0;    
        }, 100);
        setTimeout(() => {
            attacking = false;
        }, 600);
        setTimeout(() => {
            knight.classList.toggle("knight-attack");
            knight.classList.add("knight-run");
            idle = true;
        } , 500)
        setTimeout(() => {
            canAttack = true;
        }, 800);
    }
});

let spawnTime = 1200;
let spawn = setInterval(() => {
    if(Math.random() >= 0.5){
        setTimeout(() => {
            if (idle && live) {
                console.log("you were killed");
                let deadKnight = document.createElement("div");
                if(lastAction == 1){
                    deadKnight.classList.add("knight-death-air");
                }
                else{
                    deadKnight.classList.add("knight-death");
                }
                screen.appendChild(deadKnight);
                screen.removeChild(knight);
                clearInterval(spawn);
                screen.classList.remove("screen-animation");
                live = false;
            }
        }, 4300)
        let zombie = document.createElement("div");
        screen.appendChild(zombie);
        zombie.classList.add("zombie");
        zombie.classList.add("zombie-walk");
        setTimeout(() => {
            if(jumping) {
                passCount++;
                console.log("more dificult");
            }
            if(attacking) {
                console.log("zombie killed");
                deathCount++;
                zombie.classList.add("zombie-death");
            }
            if (idle && live) {
                console.log("you were killed");
                let deadKnight = document.createElement("div");
                if(lastAction == 1){
                    deadKnight.classList.add("knight-death-air");
                }
                else{
                    deadKnight.classList.add("knight-death");
                }
                screen.appendChild(deadKnight);
                screen.removeChild(knight);
                clearInterval(spawn);
                screen.classList.remove("screen-animation");
                live = false;
            }
        }, 4100);
        setTimeout( () => {
            zombie.remove();
        }, 5000);
    }
}, spawnTime);





