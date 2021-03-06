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

        forApartmentsList.style.visibility = 'hidden';

        Velocity(forHome,
            {
                opacity: 1,
                width: "800px"
            },
            {
                duration: 500,
                easy: 'easy',
                delay: 330

            });
        Velocity(forApartment,
            {
                opacity: 0.3,
                width: "200px"
            },
            {
                duration: 500,
                easy: 'easy',
                delay: 330
            });
        Velocity(forApartmentSq,
            {
                opacity: 0,
                marginTop: '350px'
            },
            {
                duration: 460,
                easy: 'easy'
            });

        Velocity(forApartmentTitle,
            {
                opacity: 0
            },
            {
                duration: 460,
                easy: 'easy'
            });

        Velocity(containerTitle,
            {
                opacity: 0,
                marginTop: '110px'
            },
            {
                duration: 460,
                easy: 'easy'
            });
        Velocity(forHomeSq,
            {
                opacity: 1,
                marginTop: "100px",
                marginLeft: '50px'
            },
            {
                duration: 500,
                delay: 830,
                easy: 'easy'
            });
        Velocity(forHomeTitle,
            {
                opacity: 1,
                marginTop: "-90px",
                marginLeft: "200px"
            },
            {
                duration: 500,
                delay: 830,
                easy: 'easy'
            });
        Velocity(forHomeList,
            {
                opacity: 1
            },
            {
                duration: 800,
                visibility: 'visible'
            })
        Velocity(forHomeList4,
            {
                opacity: 1,
                top: 0
            },
            {
                duration: 500,
                visibility: 'visible',
                delay: 800,
                easy: 'easy'
            })
        Velocity(forHomeList3,
            {
                opacity: 1,
                top: 0
            },
            {
                duration: 500,
                visibility: 'visible',
                delay: 1000,
                easy: 'easy'
            })
        Velocity(forHomeList2,
            {
                opacity: 1,
                top: 0
            },
            {
                duration: 500,
                visibility: 'visible',
                delay: 1200,
                easy: 'easy'
            })
        Velocity(forHomeList1,
            {
                opacity: 1,
                top: 0
            },
            {
                duration: 500,
                visibility: 'visible',
                delay: 1400,
                easy: 'easy'
            })


        //возвращаем к начальным значениям
        Velocity(forApartmentsList,
            {
                opacity: 0
            },
            {
                visibility: 'hidden'
            })
        Velocity(forApartmentsList4,
            {
                opacity: 0,
                top: 100
            },
            {
                visibility: 'hidden'
            })
        Velocity(forApartmentsList3,
            {
                opacity: 0,
                top: 100
            },
            {
                visibility: 'hidden'
            })
        Velocity(forApartmentsList2,
            {
                opacity: 0,
                top: 100
            },
            {
                visibility: 'hidden'
            })
        Velocity(forApartmentsList1,
            {
                opacity: 0,
                top: 100
            },
            {
                visibility: 'hidden'
            })
    }

    function animateApartments(node) {
        forApartmentTitle.style.display = 'block';
        forApartment.style.display = 'block';
        forApartmentsList.style.display = 'block';

        forHomeList.style.visibility = 'hidden';

        Velocity(forApartment,
            {
                opacity: 1,
                width: "800px"
            },
            {
                duration: 500,
                easy: 'easy',
                delay: 330

            });
        Velocity(forHome,
            {
                opacity: 0.3,
                width: "200px"
            },
            {
                duration: 500,
                easy: 'easy',
                delay: 330
            });
        Velocity(forHomeSq,
            {
                opacity: 0,
                marginTop: '350px'
            },
            {
                duration: 460,
                easy: 'easy'
            });
        // forApartmentSq.style.display = 'none';

        Velocity(forHomeTitle,
            {
                opacity: 0
            },
            {
                duration: 460,
                easy: 'easy'
            });
        // forApartmentTitle.style.display = 'none';

        Velocity(containerTitle,
            {
                opacity: 0,
                marginTop: '110px'
            },
            {
                duration: 460,
                easy: 'easy'
            });

        // containerTitle.style.display = 'none';

        Velocity(forApartmentSq,
            {
                opacity: 1,
                marginTop: "100px",
                marginLeft: '50px'
            },
            {
                duration: 500,
                delay: 830,
                easy: 'easy'
            });
        Velocity(forApartmentTitle,
            {
                opacity: 1,
                marginTop: "-90px",
                marginLeft: "200px"
            },
            {
                duration: 500,
                delay: 830,
                easy: 'easy'
            });

        Velocity(forApartmentsList,
            {
                opacity: 1
            },
            {
                duration: 800,
                visibility: 'visible'
            })
        Velocity(forApartmentsList4,
            {
                opacity: 1,
                top: 0
            },
            {
                duration: 500,
                visibility: 'visible',
                delay: 800,
                easy: 'easy'
            })
        Velocity(forApartmentsList3,
            {
                opacity: 1,
                top: 0
            },
            {
                duration: 500,
                visibility: 'visible',
                delay: 1000,
                easy: 'easy'
            })
        Velocity(forApartmentsList2,
            {
                opacity: 1,
                top: 0
            },
            {
                duration: 500,
                visibility: 'visible',
                delay: 1200,
                easy: 'easy'
            })
        Velocity(forApartmentsList1,
            {
                opacity: 1,
                top: 0
            },
            {
                duration: 500,
                visibility: 'visible',
                delay: 1400,
                easy: 'easy'
            })

            //возвращаем к начальным значениям
        Velocity(forHomeList,
            {
                opacity: 0
            },
            {
                visibility: 'hidden'
            })
        Velocity(forHomeList4,
            {
                opacity: 0,
                top: 100
            },
            {
                visibility: 'hidden'
            })
        Velocity(forHomeList3,
            {
                opacity: 0,
                top: 100
            },
            {
                visibility: 'hidden'
            })
        Velocity(forHomeList2,
            {
                opacity: 0,
                top: 100
            },
            {
                visibility: 'hidden'
            })
        Velocity(forHomeList1,
            {
                opacity: 0,
                top: 100
            },
            {
                visibility: 'hidden'
            })
    }
}


animation();
