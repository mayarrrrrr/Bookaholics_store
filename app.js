document.addEventListener("DOMContentLoaded", () => {



    let form = document.getElementById("form");


   
    let buyButton = document.getElementById("buy")


    form.addEventListener("submit", function (e){
        e.preventDefault();

        let searchInput = document.getElementById("searchinput").value

        let originalName = searchInput.split(' ').join('')
        

        fetch(`https://www.googleapis.com/books/v1/volumes?q=${originalName}&key=AIzaSyDwifnw7NBPTZlGLgC3x1f6RK6M3v9nsEo`)
            .then((result) => result.json())
            .then((data) => {




                // Display single book data(title,description and author) 

                // 1.Title

                const title = document.getElementById("title");

                const newTitle = (data.items[0].volumeInfo.title)

                title.textContent = newTitle


                //  2.Description


                // A function to limit the number of words
                function limitWords(text, limit) {

                    const words = text.split(' ');

                    const truncatedText = words.slice(0, limit).join(' ');

                    return truncatedText + (words.length > limit ? '...' : '');
                }

                let description = document.getElementById("description")

                let newDescription = (data.items[0].volumeInfo.description);


                // Limit the number of words ()
                let limitedDescription = limitWords(newDescription, 40);

                console.log(limitedDescription);


                description.textContent = limitedDescription;




                //  3. Author
                let author = document.getElementById("author")

                let newAuthor = (data.items[0].volumeInfo.authors[0]);

                author.textContent = "Author :" + " " + newAuthor



                // 4.Image
                let oldBook = document.getElementById("book");

                let newBook = (data.items[0].volumeInfo.imageLinks.smallThumbnail);

                oldBook.src = newBook



                // Display availability of the book

                let paragraph1 = document.getElementById("availability1");

                let available = (data.items[0].accessInfo.epub.isAvailable);

                let paragraph2 = document.getElementById("availability2")

                let paragraph3 = document.getElementById("availability3")


                function availe(availabilityData) {

                    if (availabilityData !== true) {
                        return "Sorry!The book is not available in our store"
                    }
                    else {
                        return "The book is available"
                    }

                }
                paragraph1.textContent = availe(available)

                paragraph2.textContent = availe(available)

                paragraph3.textContent = availe(available)
                


                // Display images on the cards
                
                function setCardImage(index, cardId, data) {
                
                    let card = document.getElementById(cardId);

                    // Check if the index is within the range of data.items
                    if (index >= 0 && index < data.items.length) {
                        
                        let imageLink = data.items[index].volumeInfo.imageLinks.smallThumbnail;

                    
                        card.src = imageLink;
                    } else {
                        
                        console.error("Invalid index:", index);
                    }
                }

            
                setCardImage(1, "cardBook", data);

                setCardImage(2, "cardBook2", data);
                
                setCardImage(3, "cardBook3", data);















            })












    })
    // Buy Now button
    buyButton.addEventListener("click", () => {
        alert("To purchase ,please fill in the form in this page below.")
    })

    

    const orderButton = document.getElementById("orderButton")

    orderButton.addEventListener("click", () => {
        let searchValue = document.getElementById("clientName").value;
        

        alert(`${searchValue} your order is being processed.Payment is by cash on delivery.Thank you for shopping with us.`)
    })











})