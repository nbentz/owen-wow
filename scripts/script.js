document.addEventListener("DOMContentLoaded", function(){
    particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 30,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": ["image","image2"],
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "./imgs/owen.png",
              "width": 200,
              "height": 200
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 120,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 60,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 20,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "window",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "onresize": {
              "enable": true,
              "density_auto": true,
              "density_area": 400 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
            }
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 130,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
    });

    
    
    let body = document.getElementById("body");
    body.addEventListener("click", playSound);
    body.addEventListener( "touchstart" , playsound);

    document.body.onkeydown = function(e){
        if(e.keyCode === 13 || e.keyCode === 32){
            body.click();
        }
    }
    
    //plays a random sound file from /sounds
    function playSound(){
        let i = getRandomInt(4);
        console.log(i);
        let sound = new Audio();
        sound.src = "./sounds/wow0" + i + ".mp3";
        sound.play();
    }

    //returns a number from 1 through max
    function getRandomInt(max) {
        return 1 + Math.floor(Math.random() * Math.floor(max));
    }    
});