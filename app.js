document.addEventListener("DOMContentLoaded", () => {



    let form = document.getElementById("form");


    let bookDisplay = document.getElementById("book-display");
    let buyButton = document.getElementById("buy")


    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let searchInput = document.getElementById("searchinput").value
        let originalName = searchInput.split(' ').join('')
        // google.books.load({"language":"en"});











    })
    // Buy Now button
    buyButton.addEventListener("click", () => {
        alert("To purchase ,please fill in the form in this page below.")
    })

    const orderForm = document.getElementById("orderForm");

    const orderButton = document.getElementById("orderButton")

    orderButton.addEventListener("click", () => {
        let searchValue = document.getElementById("clientName").value;

        alert(`${searchValue} your order is being processed.Payment is by cash on delivery.Thank you for shopping with us.`)
    })











})