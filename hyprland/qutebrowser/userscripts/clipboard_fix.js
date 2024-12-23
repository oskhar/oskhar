document.addEventListener("click", function (event) {
  if (event.target.innerText === "Copy Code") {
    navigator.clipboard
      .writeText(event.target.parentElement.innerText)
      .then(() => console.log("Copied!"))
      .catch((err) => console.error("Failed to copy:", err));
  }
});
