const button = document.getElementById("startButton");

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");
const screen5 = document.getElementById("screen5");
const screen6 = document.getElementById("screen6");

const answerInput = document.getElementById("answer1");
const checkButton = document.getElementById("checkAnswer");
const result = document.getElementById("result");

const answerInput2 = document.getElementById("answer2");
const checkButton2 = document.getElementById("checkAnswer2");
const result2 = document.getElementById("result2");

const answerInput3 = document.getElementById("answer3");
const checkButton3 = document.getElementById("checkAnswer3");
const result3 = document.getElementById("result3");

const giftBox = document.getElementById("giftBox");

const ticketLeft = document.getElementById("ticketLeft");
const ticketRight = document.getElementById("ticketRight");

const background = document.getElementById("background");

for(let i = 0; i < 150; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDuration =
        (Math.random() * 3 + 2) + "s";

    star.style.animationDelay =
        Math.random() * 5 + "s";

    background.appendChild(star);

}

function nextScreen(currentScreen, nextScreen){

    gsap.to(currentScreen,{

        duration:0.8,

        opacity:0,

        scale:0.9,

        onComplete:()=>{

            currentScreen.classList.add("hidden");

            nextScreen.classList.remove("hidden");

            gsap.from(nextScreen,{

                duration:0.8,

                opacity:0,

                scale:0.8

            });

        }

    });

}

button.addEventListener("click",()=>{

    nextScreen(screen1,screen2);

});

checkButton.addEventListener("click", () => {

    const answer = answerInput.value.trim().toLowerCase();

    if (answer === "остановка") {

        result.textContent="Умничка ❤️";

        setTimeout(()=>{

            nextScreen(screen2,screen3);

        },1000);

    } else {

        result.textContent = "Попробуй ещё 😊";

    }

});

checkButton2.addEventListener("click", () => {

    const answer = answerInput2.value.trim().toLowerCase();

    if (answer === "секвойя") {

        result2.textContent = "Правильно ❤️";

        setTimeout(() => {

            nextScreen(screen3, screen4);

        }, 1000);

    } else {

        result2.textContent = "Попробуй ещё 😊";

    }

});

checkButton3.addEventListener("click", () => {

    const answer = answerInput3.value.trim();

    if (
        answer === "16.05.2026" ||
        answer === "16/05/2026" ||
        answer === "16-05-2026"
    ) {

        result3.textContent = "Правильно ❤️";

        setTimeout(() => {

            nextScreen(screen4, screen5);

        }, 1000);

    } else {

        result3.textContent = "Почти... Вспомни этот особенный день ❤️";

    }

});

giftBox.addEventListener("click", () => {

    gsap.to(giftBox, {

        duration: 0.3,
        scale: 1.3,
        repeat: 5,
        yoyo: true,
        rotation: 8,

        onComplete: () => {

            gsap.to(giftBox, {

                duration: 0.5,
                scale: 3,
                opacity: 0,

                onComplete: () => {

                    confetti({
                        particleCount: 250,
                        spread: 130,
                        origin: { y: 0.6 }
                    });

                    nextScreen(screen5, screen6);

                    setTimeout(() => {

                        gsap.from(ticketLeft, {

                            x: -800,
                            opacity: 0,
                            rotation: -25,
                            duration: 1.2,
                            ease: "back.out(1.7)"

                        });

                        gsap.from(ticketRight, {

                            x: 800,
                            opacity: 0,
                            rotation: 25,
                            duration: 1.2,
                            ease: "back.out(1.7)"

                        });

                    }, 300);

                }

            });

        }

    });

});