const cors_api_url = 'https://cors-anywhere.herokuapp.com/';

function searchEmail(email, search) {
    fetch(`${cors_api_url}https://ltv-data-api.herokuapp.com/api/v1/records.json?email=${email}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        if ((json) && (!Array.isArray(json))) {
            createResultComponents(json);
        } else {
            if (search) {
                alert(`No results were found for "${email}"`);
            } else {
                window.location.href = `index.html`;
            }
        }
    })
    .catch(function(error) {
        console.log(error);
        alert("An unexpected error occurred in the server. Redirecting to home page...");
        window.location.href = `index.html`;
    });
}

function submitEmail(e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        searchEmail(email, true);
    }
}

function createResultComponents(user) {
    let address = user.address;
    let description = user.description;
    let email = user.email;
    let first_name = user.first_name;
    let last_name = user.last_name;
    let phone_numbers = user.phone_numbers;
    let relatives = user.relatives;
    console.log(address)
    createTitleResult(first_name, last_name, description);
    createAddressResult(address);
    createPhoneResult(phone_numbers);
    createEmailResult(email);
    createRelativesResult(relatives);
}

function createTitleResult (first_name, last_name, description) {
    let title = document.getElementById("title-result");
    title.innerHTML = "";
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let text = document.createTextNode(`${first_name} ${last_name}, 35`);
    h3.appendChild(text);
    text = document.createTextNode(description);
    p.appendChild(text);
    title.appendChild(h3);
    title.appendChild(p);
}

function createAddressResult (result) {
    let address = document.getElementById("address-result");
    address.innerHTML = "";
    let h4 = document.createElement("h4");
    let p = document.createElement("p");
    let text = document.createTextNode(`Address`);
    h4.appendChild(text);
    text = document.createTextNode(`${result}`);
    p.appendChild(text);
    address.appendChild(h4);
    address.appendChild(p);
}

function createPhoneResult (results) {
    let phone_numbers = document.getElementById("phones-result");
    phone_numbers.innerHTML = "";
    let h4 = document.createElement("h4");
    let text = document.createTextNode(`Phone Numbers`);
    h4.appendChild(text);
    phone_numbers.appendChild(h4);
    results.forEach(function(number) {
        let p = document.createElement("p");
        let a = document.createElement("a");
        //<a href="tel:123-456-7890">123-456-7890</a>
        text = document.createTextNode(`${number}`);
        a.appendChild(text);
        a.href = `tel:${number}`;
        p.appendChild(a);
        phone_numbers.appendChild(p);
    });
}

function createEmailResult (result) {
    let email = document.getElementById("email-result");
    email.innerHTML = "";
    let h4 = document.createElement("h4");
    let p = document.createElement("p");
    let text = document.createTextNode(`Email`);
    h4.appendChild(text);
    text = document.createTextNode(`${result}`);
    p.appendChild(text);
    email.appendChild(h4);
    email.appendChild(p);
}

function createRelativesResult (results) {
    let relatives = document.getElementById("relatives-result");
    relatives.innerHTML = "";
    let h4 = document.createElement("h4");
    let text = document.createTextNode(`Relatives`);
    h4.appendChild(text);
    relatives.appendChild(h4);
    results.forEach(function(number) {
        let p = document.createElement("p");
        text = document.createTextNode(`${number}`);
        p.appendChild(text);
        relatives.appendChild(p);
    });
}

const url = new URL(window.location.href);
const email = url.searchParams.get("email");
if (email) {
    searchEmail(email, false);
} else {
    window.location.href = `index.html`;
}
