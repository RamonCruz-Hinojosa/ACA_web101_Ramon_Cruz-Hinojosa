const growimage = (clicked) => {
  console.log(clicked.classList);
  clicked.classList.toggle("growimage");
};
// there is definitely an easier way to do this with onclick stuff but this is what i came up with

const fadeaway = (fadeclick) => {
  console.log(fadeclick);
  fadeclick.classList.toggle("fadename");
};
