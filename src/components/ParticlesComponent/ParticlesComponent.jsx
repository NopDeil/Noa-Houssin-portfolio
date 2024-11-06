import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.


const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#ecf0f1", 
        },
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: "#FFFFFF", 
        },
        move: {
          direction: "bottom",
          enable: true,
          speed: 5,
          outModes: {
            default: "out",
          },
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 400,
        },
        opacity: {
          value: { min: 0.05, max: 0.1 }, 
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 5, max: 15 }, 
          random: true,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
          },
          onClick: {
            enable: true,
            mode: "repulse", 
            },
        },
        modes: {
          bubble: {
            distance: 100,
            size: 8, 
            opacity: 1,
            color: {
              value: "#b24387", 
            },
          },
        },
      },
      detectRetina: false,
    }),
    []
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
