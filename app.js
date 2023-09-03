const button = document.getElementById("submit-button-jasper");
const list = document.getElementById("list");
const input = document.getElementById("exampleInputEmail1");

function addWebsite() {
  if (input.value == "") {
    alert('"" is not a website!');
  } else {
    let li = document.createElement("li");
    let link = document.createElement("a");
    link.href = input.value;
    li.append(link);
    link.innerText = input.value;
    list.appendChild(li);
  }
}
