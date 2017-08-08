function animation() {
    const containerTitle = document.getElementById("container--title");
    const container = document.getElementById('container');

    const forHome = document.getElementById("forHome");
    const forApartment = document.getElementById("forApartment");

    const forHomeSq = document.getElementById("forHome--square");
    const forApartmentSq = document.getElementById("forApartment--square");

    const forHomeTitle = document.getElementById("forHome--title");
    const forApartmentTitle = document.getElementById("forApartment--title");

    const forHomeList = document.getElementById('forHome--list');
    container.onclick = function (ev) {
        let target = event.target;

        if (target.className == 'forHome') {
            animateHome(target);
        }
        if (target.className == 'forApartment') {
            animateApartments(target);
        }
        else return;
    }

    function animateHome(node) {
        Velocity(forHome,
            {
                width: "80%"
            },
            {
                duration: 1000,

            });
        Velocity(forApartment,
            {
                width: "20%"
            },
            {
                duration: 1000,

            });
        Velocity(forApartmentSq,
            {
                opacity: 0,
                marginTop: '350px'
            },
            {
                duration: 1000
            });
        Velocity(forApartmentTitle,
            {
                opacity: 0
            },
            {
                duration: 1000
            });
        Velocity(containerTitle,
            {
                opacity: 0,
                marginTop: '110px'
            },
            {
                duration: 1000
            });
        Velocity(forHomeSq,
            {
                opacity: 1,
                marginTop: "100px",
                marginLeft: '50px'
            },
            {
                duration: 1000,
                delay: 300
            });
        Velocity(forHomeTitle,
            {
                opacity: 1,
                marginTop: "-90px",
                marginLeft: "200px"
            },
            {
                duration: 1000,
                delay: 300
            });
        Velocity(forHomeList,
            {
                opacity: 1
            },
            {
                duration: 1000,
                display: 'block'
            })
    }

    function animateApartments(node) {
        Velocity(forApartment,
            {
                width: '80%'
            },
            {
                duration: 2000
            })
        Velocity(forHome,
            {
                width: '20%'
            },
            {
                duration: 2000
            })
    }
}


animation();
