function ShowMembercard(name, age, email, phone, membership) {
    let sections = [
        "Fiction",
        "Non-Fiction",
        "Science",
        "History",
        "Children"
    ];
    
    console.log("Library Sections:");
    for (let i = 0; i < sections.length; i++) {
        console.log(sections[i]);
    }

    let category = age < 13 ? "Junior" : "Regular";
    let fee = membership === "basic" ? 500 : (membership === "silver" ? 1000 : 1500);

    document.getElementById("output").innerHTML = 
        "<h2>Library Membership Card</h2>" +
        "Name: " + name + "<br>" +
        "Age: " + age + "<br>" +
        "Category: " + category + "<br>" +
        "Email: " + email + "<br>" +
        "Phone: " + phone + "<br>" +
        "Selected Plan: " + membership.toUpperCase() + "<br>" +
        "Applicable Fee: " + fee + " BDT<br><br>" +
        "<b>Library Sections:</b><br>" +
        sections.join("<br>");
}

document.addEventListener("submit", function (event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let membership = document.querySelector('input[name="membership"]:checked').value;
    
    ShowMembercard(name, age, email, phone, membership);
});