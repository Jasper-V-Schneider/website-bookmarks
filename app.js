const button = document.querySelector("button.btn btn-primary");
const list = document.getElementById("list");

button.addEventListener("click", () => {
  const link = document.createElement("a");
  const li = document.createElement("li");
  link.href = document.getElementById("exampleInputEmail1").value;
  link.append(li);
  list.append(link);
});
