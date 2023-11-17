window.onload = () => {

    const watchElement = document.querySelector('#watch');
    const time = document.querySelector("#time");
    const heart = document.querySelector(".heart");

    const watch = {
        getColorUrl: function(color) {
            const colorUrls = new Map([
                ["black","https://i.imgur.com/iOeUBV7.png"],
                ["red","https://i.imgur.com/PTgQlim.png"],
                ["blue","https://i.imgur.com/Mplj1YR.png"],
                ["purple","https://i.imgur.com/xSIK4M8.png"],
                ["pink","https://i.imgur.com/Zygu7I3.png"]
            ]);

            return colorUrls.get(color);
        },
        setWatchColor: function(colorLink, color) {
            watchElement.setAttribute('src', colorLink);
            watchElement.setAttribute('alt', color);
        },
        timer: function() {
            let startTimer = function() {
                const date = new Date();
                time.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            };

            time.style.visibility = "visible";
            heart.style.visibility = "hidden";

            return setInterval(startTimer, 0);
        },
        hearRate: function () {
            time.style.visibility = "hidden";
            heart.style.visibility = "visible";
        }
    }

    const colorButtons = document.querySelectorAll('.color li');

    colorButtons.forEach((value)=> {
        value.addEventListener('click', () => {
            let attr = value.getAttribute('id');


            let colorLink = watch.getColorUrl(attr);

            watch.setWatchColor(colorLink, attr);
        });
    });

    const timerBtn = document.querySelector('#timerBtn');
    const heartBtn = document.querySelector('#heartRateBtn');


    timerBtn.addEventListener('click', () => {
        watch.timer();
    });

    heartBtn.addEventListener('click', () => {
        watch.hearRate();
    });



    //start timer as the page loads
    watch.timer();

};
 


