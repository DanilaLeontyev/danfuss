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

    const homeNextProposal = document.getElementById('homeNextProposal');
    const apartNextProposal = document.getElementById('apartNextProposal');

    const chooseSection = document.getElementById('chooseSection');
    const chooseSection1 = document.getElementById('chooseSectionApart');

    forHome.addEventListener('click', animateHome);
    forApartment.addEventListener('click', animateApartments);

    let closeAnimationHome = false; // для отмены анимации
    let closeAnimationApart = false; // для отмены анимаци

    function animateHome() {
        forHome.style.display = 'block';
        forHomeTitle.style.display = 'block';
        forHomeList.style.display = 'block';
        chooseSection.style.display = 'none';
        chooseSection1.style.display = 'none';

        forApartmentsList.style.visibility = 'hidden';
        if (closeAnimationHome === false) {

            Velocity(forHome,
                {
                    opacity: 1,
                    width: "80%"
                },
                {
                    duration: 500,
                    easy: 'easy',
                    delay: 330

                });
            Velocity(forApartment,
                {
                    opacity: 0.3,
                    width: "20%"
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

            Velocity(apartNextProposal,
                {
                    opacity: 0.5,
                    left: "4%"
                },
                {
                    duration: 800,
                    visibility: 'visible',
                    delay: 1000,
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
            Velocity(homeNextProposal,
                {
                    opacity: 0,
                    left: "90%"
                },
                {
                    duration: 800,
                    visibility: 'hidden',
                    easy: 'easy'
                })
        }
        
        closeAnimationHome = true;
        closeAnimationApart = false;
    }

    function animateApartments() {
        forApartmentTitle.style.display = 'block';
        forApartment.style.display = 'block';
        forApartmentsList.style.display = 'block';
        chooseSection.style.display = 'none';
        chooseSection1.style.display = 'none';

        forHomeList.style.visibility = 'hidden';

        if (closeAnimationApart === false) {
            Velocity(forApartment,
                {
                    opacity: 1,
                    width: "80%"
                },
                {
                    duration: 500,
                    easy: 'easy',
                    delay: 330

                });
            Velocity(forHome,
                {
                    opacity: 0.3,
                    width: "20%"
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


            Velocity(forHomeTitle,
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

            Velocity(homeNextProposal,
                {
                    opacity: 0.5,
                    left: '84%'
                },
                {
                    duration: 800,
                    visibility: 'visible',
                    delay: 1000,
                    easy: 'easy'
                })

            Velocity(apartNextProposal,
                {
                    opacity: 0,
                    left: 0
                },
                {
                    duration: 800,
                    visibility: 'hidden',
                    easy: 'easy'
                })
        }

        closeAnimationApart = true;
        closeAnimationHome = false;
    }
}


animation();
