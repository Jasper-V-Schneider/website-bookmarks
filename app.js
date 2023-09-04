const button = document.getElementById("submit-button-jasper");
const list = document.getElementById("list");
const input = document.getElementById("exampleInputEmail1");
const radio = document.getElementById("http");
const radioS = document.getElementById("https");
let transferProtocol;

function addWebsite() {
  if (radio.checked) {
    transferProtocol = "http://";
  } else if (radioS.checked) {
    transferProtocol = "https://";
  } else {
    alert("Please select a transfer protocol!");
  }
  if (input.value == "") {
    alert('"" is not a website!');
  } else {
    let li = document.createElement("li");
    let link = document.createElement("a");
    link.href = transferProtocol + input.value;
    li.append(link);
    link.innerText = input.value;
    list.appendChild(li);
  }
}
