// Most optimize way
const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  // console.log(event.target.tagName)

  if (event.target.tagName === "BUTTON") {
    document.body.style.backgroundColor = event.target.id;
  }
});
