const number = 142 + 24 * Math.round((MoonPhase(new Date()) % 180) / 12);
const img = `assets/images/phases/moon.0${number}.jpg`;
moonphase.src = img;

const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 2 : 1})`,
    };

    trailer.animate(keyframes, {
        duration: 800,
        fill: "forwards",
    });
};

window.onpointermove = (e) => {
    const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;
    animateTrailer(e, interacting);
};


const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)