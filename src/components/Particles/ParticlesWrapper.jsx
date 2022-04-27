import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './Particles.css'

export default function ParticlesWrapper() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "attract",
              parallax: { enable: false, force: 60, smooth: 10 }
            },
            
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            attract: { distance: 200, duration: 0.4, factor: 5 }
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#C0FFEE",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "right",
            enable: true,
            outModes: {
              default: "none",
            },
            random: true,
            speed: 1,
            straight: false,
            bounce: false
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type:  ["circle","triangle","edge","polygon"],
          },
          size: {
            value: { min: 1, max: 5 },
            anim: {
              speed: 1,
              enable: true,
              sync: false,
            }
          },
        },
        detectRetina: true,
      }}
    />
  );
}