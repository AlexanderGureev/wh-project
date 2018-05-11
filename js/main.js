var btn = document.getElementsByClassName("button");

Array.prototype.forEach.call(btn, item => {
    item.addEventListener("click", (e) => {

    var coords = item.getBoundingClientRect();
    var max = Math.max(item.offsetWidth, item.offsetHeight);
    var div = document.createElement("div");
    div.className = "ps";
    div.style.width = max + "px";
    div.style.height = max + "px";

    div.style.left = e.clientX - coords.left - max / 2  + "px";
    div.style.top = e.clientY - coords.top - max / 2 + "px";

    item.appendChild(div);

    setTimeout(function(){
      div.remove();
    }, 600);
  });
});
