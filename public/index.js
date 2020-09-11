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

function validateEmail(e) {
    e.preventDefault();
    let email = document.getElementById("email");
    let placeholder = document.getElementById("placeholder");
    if (!email.value) {
        placeholder.style.color = "#9B9B9B";
        placeholder.innerHTML = "EMAIL";
        email.className = "search-box"
    } else if (validateEmailRegex(email.value)){
        placeholder.style.color = "#9B9B9B";
        placeholder.innerHTML = "EMAIL";
        email.className = "search-box valid"
    } else {
        placeholder.style.color = "#DC0015";
        placeholder.innerHTML = "Please add a valid email address";
        email.className = "search-box"
    }
    
}

function validateEmailRegex(email) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        return true;
    }
    return false;
}

function submitEmail(e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
    //searchEmail(email);
    searchEmail(email);
}

function searchEmail(email) {
    fetch(`https://ltv-data-api.herokuapp.com/api/v1/records.json?email=${email}`)
    .then(function(response) {
        console.log(response)
        return response.json();
    })
    .then(function(myJson) {
        if (myJson) {
            displaySuccessfulResult(myJson);
        } else {
            displayEmptyResult();
        }
    })
    .catch((error) => {
        console.log(error);
    });
}

function displaySuccessfulResult() {

}

function displaySuccessfulResult() {

}

function displayEmptyResult() {
    alert("No results were found for this email.");
}

createNumberedList();
