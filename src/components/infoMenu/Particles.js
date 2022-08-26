import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";
import "./infoMenu.css"

const ParticlesComponent = (props) => {
 
  const options = useMemo(() => {
    
    return {
      particles: {
        number: {
          value: 12,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#e0bff0"
        },
        shape: {
          type: "triangle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "./61a4a37be1903c41e5367244efc33d48.png",
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            opacity_min: 0,
            sync: false
          }
        },
        size: {
          value: 100,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            size_min: 0.3,
            sync: false
          }
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble"
          },
          onclick: {
            enable: true,
            mode: "repulse"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3
          },
          repulse: {
            distance: 400,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    };
  }, []);

  
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    
  }, []);

  
  return <Particles className="part" id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
