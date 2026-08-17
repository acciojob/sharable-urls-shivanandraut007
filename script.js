// your code here
document.getElementById("button").addEventListener("click", function (e) {
  e.preventDefault(); // stop page reload if inputs are inside a <form>

  const name = document.getElementById("name").value.trim();
  const year = document.getElementById("year").value.trim();

  let baseUrl = "https://localhost:8080/";
  let params = [];

  if (name !== "") {
    params.push("name=" + encodeURIComponent(name));
  }
  if (year !== "") {
    params.push("year=" + encodeURIComponent(year));
  }

  let finalUrl = baseUrl;
  if (params.length > 0) {
    finalUrl += "?" + params.join("&");
  }

  document.getElementById("url").textContent = finalUrl;
});