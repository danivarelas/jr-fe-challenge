
function createNumberedList() {
    let ul = document.getElementById("features-grid");
    if (ul) {
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
}

function submitEmail(e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        searchEmail(email);
    }
}

function searchEmail(email) {
    console.log("Searching for email...")
    fetch(`https://ltv-data-api.herokuapp.com/api/v1/records.json?email=${email}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        if ((json) && (!Array.isArray(json))) {
            window.location.href = `result.html?email=${email}`;
        } else {
            alert(`No results were found for "${email}"`);
        }
    })
    .catch(function(error) {
        console.log(error);
        alert("An unexpected error occurred in the server.");
        window.location.href = `index.html`;
    });
}

createNumberedList();
