import { component$, $ } from '@builder.io/qwik';
import { useDocumentHead, useLocation, } from '@builder.io/qwik-city';
import { useOnDocument } from '@builder.io/qwik';
/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
declare global {
  interface Window {
    particlesJS: any;
    navigation?: any;
  }
}

export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  useOnDocument('load', $(() => {
    window.particlesJS("particles-js", {
      particles: {
        number: { value: 1200, density: { enable: true, value_area: 1200 } },
        color: { value: "#ffffff" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
          image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
          value: 1,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 600 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: false, mode: "bubble" },
          onclick: { enable: true, mode: "repulse" },
          resize: false,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: { distance: 400, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    });
  }))

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
      <script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    </>
  );
});
