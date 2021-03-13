const resultspage = document.getElementById("results");

new URLSearchParams(window.location.search).forEach((value, name) => {
  resultspage.append(`${name} : ${value}`);
  resultspage.append(document.createElement("br"));
});
