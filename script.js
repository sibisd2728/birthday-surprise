/* =====================================================
   BIRTHDAY WEBSITE
===================================================== */


/* =====================================================
   CONFIGURATION
===================================================== */

const CONFIG = {


    /* GIRLFRIEND NAME */

    girlfriendName:
        "Brindha",


    /* BIRTHDAY */

    birthdayMonth:
        1,

    birthdayDay:
        30,


    /* LITTLE SURPRISE MESSAGE */

    littleSurpriseMessage: `

There is something I wanted
to tell you...

You are one of the most
beautiful parts of my life.

I hope this little surprise
makes you smile today. ❤️

Happy Birthday, my love.

`,


    /* FINAL MESSAGE */

    finalMessage: `

Happiest Birthday, ammu ❤️

I first saw her at the gym, and for the first two or three weeks, I barely noticed anything beyond her presence. But one day, I looked into her eyes—and it was literally **“boom”** for me. For a moment, it felt like my heart had stopped. I found myself wanting to look at her again and again, without even knowing why.

A few months later, something unexpectedly cute happened. My gym trainer gave her my AirPods, and she playfully hid them from me and ran away. When I finally got close to her and looked into her eyes, that same feeling came rushing back. My heart literally stopped for a second. That moment stayed in my mind.

And then, after two or three months, something I never expected happened—**she proposed to me.**

I honestly never imagined that she would be the one to say it first. But when she did, something inside me changed.

From that moment, I wanted to become a better person for her. I had my flaws, and I wasn't always the best version of myself. But being with her made me want to change. I started becoming a better person—not because she forced me to, but because she made me want to be better.

And as we started spending more time together, I noticed something beautiful about her too. **She started changing for me.**

Whenever something I didn't like hurt me, she would actually try to understand it and change it for me. And honestly, I know that isn't something everyone would do. The fact that she cared enough about my feelings to make those changes meant so much to me.

That's when I realized that this wasn't just about having feelings for each other. We were both slowly becoming better versions of ourselves for each other.

And then came the day that made everything official.

**23 March 2026 — the day we became us.**

Since that day, I've been travelling through this journey with you, one day at a time. And now, I'm looking forward to another special date:

**30 January 2027 — your birthday.**

From the day I first saw your eyes to the day we became a couple, and from that day until now, every little moment has become a part of our story.

And this isn't just about where we've been.

**I'm travelling with you toward everything that's still waiting for us.**


Happy Birthday ❤️

`,


    /* MUSIC */

    backgroundMusic:
        "assets/music/birthday.mp3"

};



/* =====================================================
   MEMORY DATA
===================================================== */

const memories = [


    {
        type:
            "image",

        title:
            "Our First Memory",

        media:
            "assets/images/photo1.jpg",

        message:
            "Some memories are simple... but somehow they become the ones we remember forever. ❤️"
    },


    {
        type:
            "image",

        title:
            "That Beautiful Smile",

        media:
            "assets/images/photo2.jpg",

        message:
            "Your smile has a way of making even an ordinary moment feel special. 🌹"
    },


    {
        type:
            "video",

        title:
            "My Favorite Moment",

        media:
            "assets/videos/video1.mp4",

        message:
            "I could watch this moment again and again. ❤️"
    },


    {
        type:
            "image",

        title:
            "A Little Memory",

        media:
            "assets/images/photo3.jpg",

        message:
            "Maybe it's just a photo... but for me, it holds an entire memory. 💕"
    },


    {
        type:
            "image",

        title:
            "You & Me",

        media:
            "assets/images/photo4.jpg",

        message:
            "Somewhere between all the little moments, you became one of my favorite parts of life. ❤️"
    },


    {
        type:
            "image",

        title:
            "Forever Memory",

        media:
            "assets/images/photo5.jpg",

        message:
            "If I could keep one thing forever, it would be the happiness in these moments. 🌹"
    }

];



/* =====================================================
   GET ELEMENTS
===================================================== */

const countdownPage =
    document.getElementById(
        "countdownPage"
    );


const birthdayReveal =
    document.getElementById(
        "birthdayReveal"
    );


const memoryPage =
    document.getElementById(
        "memoryPage"
    );


const finalPage =
    document.getElementById(
        "finalPage"
    );


const memoryModal =
    document.getElementById(
        "memoryModal"
    );


const memoryContainer =
    document.getElementById(
        "memoryContainer"
    );


const backgroundMusic =
    document.getElementById(
        "backgroundMusic"
    );


const musicButton =
    document.getElementById(
        "musicButton"
    );


const littleSurpriseButton =
    document.getElementById(
        "littleSurpriseButton"
    );


const surpriseModal =
    document.getElementById(
        "surpriseModal"
    );


const surpriseBackground =
    document.getElementById(
        "surpriseBackground"
    );


const closeSurprise =
    document.getElementById(
        "closeSurprise"
    );


const surpriseMessage =
    document.getElementById(
        "surpriseMessage"
    );


const openSurpriseButton =
    document.getElementById(
        "openSurpriseButton"
    );


const closeButton =
    document.getElementById(
        "closeButton"
    );


const modalBackground =
    document.getElementById(
        "modalBackground"
    );


const finalMessageButton =
    document.getElementById(
        "finalMessageButton"
    );


const replayButton =
    document.getElementById(
        "replayButton"
    );



/* =====================================================
   VARIABLES
===================================================== */

let countdownInterval =
    null;

let musicPlaying =
    false;



/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* NAME */

        document.getElementById(
            "birthdayName"
        ).textContent =
            CONFIG.girlfriendName;


        /* FINAL MESSAGE */

        document.getElementById(
            "finalMessage"
        ).textContent =
            CONFIG.finalMessage;


        /* MUSIC */

        backgroundMusic.src =
            CONFIG.backgroundMusic;


        /* MEMORY CARDS */

        createMemoryCards();


        /*
            REAL WEBSITE:

            Keep this:
        */

        startCountdown();


        /*
            TESTING:

            If you want to immediately
            see Page 2, temporarily use:

            showBirthdayReveal();

            instead of:

            startCountdown();
        */

    }
);



/* =====================================================
   GET NEXT BIRTHDAY
===================================================== */

function getNextBirthday() {


    const now =
        new Date();


    let year =
        now.getFullYear();


    let birthday =
        new Date(

            year,

            CONFIG.birthdayMonth - 1,

            CONFIG.birthdayDay,

            0,

            0,

            0

        );


    if (now >= birthday) {


        year++;


        birthday =
            new Date(

                year,

                CONFIG.birthdayMonth - 1,

                CONFIG.birthdayDay,

                0,

                0,

                0

            );

    }


    return birthday;

}



/* =====================================================
   COUNTDOWN
===================================================== */

function startCountdown() {


    const targetDate =
        getNextBirthday();


    clearInterval(
        countdownInterval
    );


    function updateCountdown() {


        const now =
            new Date();


        const difference =
            targetDate.getTime() -
            now.getTime();


        /*
            BIRTHDAY ARRIVED
        */

        if (difference <= 0) {


            clearInterval(
                countdownInterval
            );


            showBirthdayReveal();


            return;

        }


        /* DAYS */

        const days =
            Math.floor(

                difference /
                (
                    1000 *
                    60 *
                    60 *
                    24
                )

            );


        /* HOURS */

        const hours =
            Math.floor(

                (
                    difference /
                    (
                        1000 *
                        60 *
                        60
                    )
                ) % 24

            );


        /* MINUTES */

        const minutes =
            Math.floor(

                (
                    difference /
                    (
                        1000 *
                        60
                    )
                ) % 60

            );


        /* SECONDS */

        const seconds =
            Math.floor(

                (
                    difference /
                    1000
                ) % 60

            );


        /*
            UPDATE SCREEN
        */

        document.getElementById(
            "days"
        ).textContent =
            String(days)
                .padStart(2, "0");


        document.getElementById(
            "hours"
        ).textContent =
            String(hours)
                .padStart(2, "0");


        document.getElementById(
            "minutes"
        ).textContent =
            String(minutes)
                .padStart(2, "0");


        document.getElementById(
            "seconds"
        ).textContent =
            String(seconds)
                .padStart(2, "0");

    }


    updateCountdown();


    countdownInterval =
        setInterval(
            updateCountdown,
            1000
        );

}



/* =====================================================
   BIRTHDAY REVEAL
===================================================== */

function showBirthdayReveal() {


    countdownPage.classList.add(
        "hidden"
    );


    birthdayReveal.classList.remove(
        "hidden"
    );


    createPetals();

}



/* =====================================================
   FALLING PETALS
===================================================== */

function createPetals() {


    const container =
        document.getElementById(
            "petalContainer"
        );


    setInterval(
        function () {


            const petal =
                document.createElement(
                    "div"
                );


            petal.className =
                "petal";


            petal.textContent =
                Math.random() > .5
                    ? "🌸"
                    : "🌹";


            petal.style.left =
                Math.random() * 100 +
                "%";


            petal.style.fontSize =
                (
                    12 +
                    Math.random() * 18
                ) +
                "px";


            petal.style.animationDuration =
                (
                    4 +
                    Math.random() * 5
                ) +
                "s";


            container.appendChild(
                petal
            );


            setTimeout(
                function () {

                    petal.remove();

                },
                10000
            );


        },
        350
    );

}



/* =====================================================
   LITTLE SURPRISE
===================================================== */

littleSurpriseButton.addEventListener(
    "click",
    function () {


        /*
            Put message into paper
        */

        surpriseMessage.textContent =
            CONFIG.littleSurpriseMessage;


        /*
            Show popup
        */

        surpriseModal.classList.remove(
            "hidden"
        );


        /*
            Stop background scrolling
        */

        document.body.style.overflow =
            "hidden";

    }
);



/* =====================================================
   CLOSE LITTLE SURPRISE
===================================================== */

closeSurprise.addEventListener(
    "click",
    function () {


        surpriseModal.classList.add(
            "hidden"
        );


        document.body.style.overflow =
            "";

    }
);



/* =====================================================
   CLICK OUTSIDE PAPER
===================================================== */

surpriseBackground.addEventListener(
    "click",
    function () {


        surpriseModal.classList.add(
            "hidden"
        );


        document.body.style.overflow =
            "";

    }
);



/* =====================================================
   OPEN MAIN SURPRISE
===================================================== */

openSurpriseButton.addEventListener(
    "click",
    function () {


        birthdayReveal.classList.add(
            "hidden"
        );


        memoryPage.classList.remove(
            "hidden"
        );


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* =====================================================
   CREATE MEMORY CARDS
===================================================== */

function createMemoryCards() {


    memoryContainer.innerHTML =
        "";


    memories.forEach(
        function (
            memory,
            index
        ) {


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "memory-card";


            const icon =
                memory.type === "video"
                    ? "🎥"
                    : "📸";


            card.innerHTML = `

                <div class="card-number">

                    ${String(index + 1)
                        .padStart(2, "0")}

                </div>


                <div class="card-icon">

                    ${icon}

                </div>


                <h2>

                    ${memory.title}

                </h2>


                <p>

                    Tap to open ❤️

                </p>

            `;


            card.addEventListener(
                "click",
                function () {

                    openMemory(
                        memory
                    );

                }
            );


            memoryContainer.appendChild(
                card
            );

        }
    );

}



/* =====================================================
   OPEN MEMORY
===================================================== */

function openMemory(
    memory
) {


    const modalMedia =
        document.getElementById(
            "modalMedia"
        );


    const modalTitle =
        document.getElementById(
            "modalTitle"
        );


    const modalMessage =
        document.getElementById(
            "modalMessage"
        );


    /*
        CLEAR OLD MEDIA
    */

    modalMedia.innerHTML =
        "";


    /*
        TITLE
    */

    modalTitle.textContent =
        memory.title;


    /*
        MESSAGE
    */

    modalMessage.textContent =
        memory.message;



    /* IMAGE */

    if (
        memory.type ===
        "image"
    ) {


        const image =
            document.createElement(
                "img"
            );


        image.src =
            memory.media;


        image.alt =
            memory.title;


        modalMedia.appendChild(
            image
        );

    }



    /* VIDEO */

    if (
        memory.type ===
        "video"
    ) {


        const video =
            document.createElement(
                "video"
            );


        video.src =
            memory.media;


        video.controls =
            true;


        video.autoplay =
            true;


        video.muted =
            true;


        video.playsInline =
            true;


        modalMedia.appendChild(
            video
        );

    }


    /*
        SHOW MODAL
    */

    memoryModal.classList.remove(
        "hidden"
    );


    document.body.style.overflow =
        "hidden";

}



/* =====================================================
   CLOSE MEMORY
===================================================== */

function closeMemory() {


    const video =
        document.querySelector(
            "#modalMedia video"
        );


    if (video) {

        video.pause();

        video.currentTime =
            0;

    }


    memoryModal.classList.add(
        "hidden"
    );


    document.body.style.overflow =
        "";

}



/* =====================================================
   CLOSE MEMORY BUTTON
===================================================== */

closeButton.addEventListener(
    "click",
    closeMemory
);



/* =====================================================
   CLICK MEMORY BACKGROUND
===================================================== */

modalBackground.addEventListener(
    "click",
    closeMemory
);



/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {


        if (

            event.key === "Escape" &&

            !memoryModal
                .classList
                .contains("hidden")

        ) {

            closeMemory();

        }


        if (

            event.key === "Escape" &&

            !surpriseModal
                .classList
                .contains("hidden")

        ) {


            surpriseModal
                .classList
                .add("hidden");


            document.body.style.overflow =
                "";

        }

    }
);



/* =====================================================
   MUSIC
===================================================== */

musicButton.addEventListener(
    "click",
    function () {


        if (!musicPlaying) {


            backgroundMusic
                .play()
                .then(
                    function () {


                        musicPlaying =
                            true;


                        musicButton.textContent =
                            "🔊";

                    }
                )
                .catch(
                    function () {


                        alert(
                            "Click the music button again to start the music."
                        );

                    }
                );

        }


        else {


            backgroundMusic.pause();


            musicPlaying =
                false;


            musicButton.textContent =
                "🎵";

        }

    }
);



/* =====================================================
   FINAL MESSAGE
===================================================== */

finalMessageButton.addEventListener(
    "click",
    function () {


        memoryPage.classList.add(
            "hidden"
        );


        finalPage.classList.remove(
            "hidden"
        );


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* =====================================================
   REPLAY
===================================================== */

replayButton.addEventListener(
    "click",
    function () {


        finalPage.classList.add(
            "hidden"
        );


        memoryPage.classList.add(
            "hidden"
        );


        birthdayReveal.classList.add(
            "hidden"
        );


        countdownPage.classList.remove(
            "hidden"
        );


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });


        startCountdown();

    }
);