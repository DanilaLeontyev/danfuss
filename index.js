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
    const forHomeList1 = document.getElementById('homeList--item_1');
    const forHomeList2 = document.getElementById('homeList--item_2');
    const forHomeList3 = document.getElementById('homeList--item_3');
    const forHomeList4 = document.getElementById('homeList--item_4');

    const forApartmentsList = document.getElementById('forApartments--list');
    const forApartmentsList1 = document.getElementById('apartmentsList--item_1');
    const forApartmentsList2 = document.getElementById('apartmentsList--item_2');
    const forApartmentsList3 = document.getElementById('apartmentsList--item_3');
    const forApartmentsList4 = document.getElementById('apartmentsList--item_4');

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
        forHome.style.display = 'block';
        forHomeTitle.style.display = 'block';
        forHomeList.style.display = 'block';
        forApartmentsList.style.display = 'none';
        
        Velocity(forHome,
            {
                width: "80%"
            },
            {
                duration: 1000,
                easy: 'easy'

            });
        Velocity(forApartment,
            {
                width: "20%"
            },
            {
                duration: 1000,
                easy: 'easy'

            });
        Velocity(forApartmentSq,
            {
                opacity: 0,
                marginTop: '350px'
            },
            {
                duration: 1000,
                display: 'none'
            });

        // forApartmentSq.style.display = 'none';

        Velocity(forApartmentTitle,
            {
                opacity: 0
            },
            {
                duration: 1000,
                display: 'none'
            });

        // forApartmentTitle.style.display = 'none';

        Velocity(containerTitle,
            {
                opacity: 0,
                marginTop: '110px'
            },
            {
                duration: 1000,
                display: 'none'
            });

            // containerTitle.style.display = 'none';

        Velocity(forHomeSq,
            {
                opacity: 1,
                marginTop: "100px",
                marginLeft: '50px'
            },
            {
                duration: 1000,
                delay: 400,
                easy: 'easy'
            });
        Velocity(forHomeTitle,
            {
                opacity: 1,
                marginTop: "-90px",
                marginLeft: "200px"
            },
            {
                duration: 1000,
                delay: 400,
                easy: 'easy'
            });
        Velocity(forHomeList4,
            {
                opacity: 1,
                top: 0
            },
            {
                duration: 1000,
                display: 'block',
                delay: 400,
                easy: 'easy'
            })
        Velocity(forHomeList3,
            {
                opacity: 1,
                top: 0
            },
            {
                duration: 1000,
                display: 'block',
                delay: 600,
                easy: 'easy'
            })
        Velocity(forHomeList2,
            {
                opacity: 1,
                top: 0
            },
            {
                duration: 1000,
                display: 'block',
                delay: 800,
                easy: 'easy'
            })
        Velocity(forHomeList1,
            {
                opacity: 1,
                top: 0
            },
            {
                duration: 1000,
                display: 'block',
                delay: 1000,
                easy: 'easy'
            })
    }

    function animateApartments(node) {
        forApartment.style.display = 'block';
        forApartmentTitle.style.display = 'block';
        forApartmentsList.style.display = 'block';
        forHomeList.style.display = 'none'; 

        Velocity(forApartment,
            {
                width: '80%'
            },
            {
                duration: 1000,
                easy: 'easy'
            })
        Velocity(forHome,
            {
                width: '20%'
            },
            {
                duration: 1000,
                easy: 'easy'
            })
        Velocity(forHomeSq,
            {
                opacity: 0,
                y: '+=350px'
            },
            {
                duration: 500,
                display: 'none',
                easy: 'easy'
            });
        Velocity(forHomeTitle,
            {
                opacity: 0
            },
            {
                duration: 1000,
                display: 'none',
                easy: 'easy'
            });
        Velocity(containerTitle,
            {
                opacity: 0,
                marginTop: '110px',
                easy: 'easy'
            },
            {
                duration: 1000,
                display: 'none',
                easy: 'easy'
            });
        Velocity(forApartmentSq,
            {
                opacity: 1,
                marginTop: '100px',
                marginLeft: '50px'
            },
            {
                duration: 1000,
                delay: 500,
                display: 'block',
                easy: 'easy'
            });
        Velocity(forApartmentTitle,
            {
                opacity: 1,
                marginTop: "-90px",
                marginLeft: "200px"
            },
            {
                duration: 1000,
                delay: 500,
                display: 'block',
                easy: 'easy'
            });
        Velocity(forApartmentsList4,
            {
                opacity: 1,
                top: 0
            },
            {
                duration: 1000,
                display: 'block',
                delay: 400,
                easy: 'easy'
            })
        Velocity(forApartmentsList3,
            {
                opacity: 1,
                top: 0
            },
            {
                duration: 1000,
                display: 'block',
                delay: 600,
                easy: 'easy'
            })
        Velocity(forApartmentsList2,
            {
                opacity: 1,
                top: 0
            },
            {
                duration: 1000,
                display: 'block',
                delay: 800,
                easy: 'easy'
            })
        Velocity(forApartmentsList1,
            {
                opacity: 1,
                top: 0
            },
            {
                duration: 1000,
                display: 'block',
                delay: 1000,
                easy: 'easy'
            })
    }
}


animation();
