function createNumberedList() {
    let ul = document.getElementById("features-grid");
    for (var i=1; i<=6; i++) {
        let li = document.createElement("li");
        let span = document.createElement("span");
        let number = document.createTextNode(i);
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        let title = document.createTextNode("Lorem ipsum");
        let p = document.createElement("p");
        let text = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        p.appendChild(text);
        h3.appendChild(title);
        div.appendChild(h3);
        div.appendChild(p);
        div.className = "grid-item-text";
        span.appendChild(number);
        span.className = "grid-item-number";
        li.appendChild(span);
        li.appendChild(div);
        li.className = "grid-item";
        ul.appendChild(li);
    }
}

createNumberedList();