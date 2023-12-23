function validateForm(name, phone) {
    const nameCheck = /^[a-zA-Z]+$/;
    const phoneCheck = /^\(\d{3}\) \d{3}-\d{4}$/;

    if(!nameCheck.test(name)) {
        alert("Invalid name, name should contain only letter");
        return false;  
    }

    if(!phoneCheck.test(phone)) {
        alert("Invalid phone number, the format should be (XXX)XXX-XXXX");
        return false;
    }

    return true;
}

function transform(phone) {
    return phone.replace(/\((\d{3})\)(\d{3})-(\d{4})/, "$1-$2-$3");
}

function displayformat(name, address, phone) {
    var transformed = transform(phone);
    const display = document.getElementById("display");

    display.innerHTML = `
        <h1> ${name} </h1>
        <h2> ${address} </h2>
        <h3> ${transformed} </h3>
    `;
}

document.getElementById("submit").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    if (validateForm(name, phone)) {
        displayformat(name, address, phone);
    }
});


//Problem2

function countCharacter() {
    var textArea = document.getElementById("textArea");
    var totalChars = document.getElementById("totalChars");
    var totalLetters = document.getElementById("totalLetters");

    var chars = textArea.value.length;
    totalChars.innerHTML = "Total Characters: " + chars;

    var letters = textArea.value.replace(/[^a-zA-Z]/g, '').length;
    totalLetters.innerHTML = "Total Letters: " + letters;
}

//Problem3

function createBookmarks() {
    const bookmarks = [
        { url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", secure: true },
        { url: "http://www.bccancer.bc.ca/", secure: false }
    ];

    var bookmarkDiv = document.getElementById("bookmarks");

    bookmarks.forEach(function(bookmark) {
        var p = document.createElement("p");

        var icon = document.createElement("span");
        if (bookmark.secure) {
            icon.innerHTML = '🔒 ';
            icon.style.color = "";
        } else {
            icon.innerHTML = '🔓 ';
            icon.style.color = 'red';
        }
        var link = document.createElement('a');
        link.href = bookmark.url;
        link.textContent = bookmark.url;

        p.appendChild(icon);
        p.appendChild(link);

        bookmarkDiv.appendChild(p);
    });
}    
createBookmarks();