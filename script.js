

// const bodyReference = document.getElementsByClassName("m-2")[0]
// const newList = document.createElement("ul")
// bodyReference.appendChild(newList)


const addToList = (x) => {
    
}


const deleteCard = (i) => {
    const deleteButton = document.getElementsByClassName("pulsante-scarta")[i]
    deleteButton.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.parentElement.remove()
        // oppure   e.target.closest(".col-4").remove()  dovrebbe trovarti il match più vicino tra l'elemento su cui lo chiamate e il selettore CSS che inserite tra le ()
    })
}



const renderBooks = (books) => {

    books.forEach((book,index) => {
        
        const boxCard = document.createElement("div")
        boxCard.classList.add("col-4")
        const extBox = document.getElementById("external-box-card")
        extBox.appendChild(boxCard)
        boxCard.innerHTML =
        `<div class="card px-0" style="height:570px">
        <img src="${book.img}" class="card-img-top" alt="libri">
        <div class="card-body">
        <h6 class="card-title">${book.title}</h6>
        <p class="card-text">Price : ${book.price} €</p>
        <a href="#" class="btn btn-primary pulsante-scarta">Scarta</a>
        <a href="#" class="btn btn-secondary button-add-to-list">Compra ora!</a>
        </div>
        </div>`
        
        deleteCard(index)  

        // addToList(index)

        const addToListButton = document.getElementsByClassName("button-add-to-list")[index]
        addToListButton.addEventListener("click", () => {

            const listShopping = document.getElementById("shopping-list")
            const nameBook = book.title
            const newLi = document.createElement("li")
            newLi.innerText = nameBook
            
            listShopping.appendChild(newLi)

        })
    })
    
}


fetch("https://striveschool-api.herokuapp.com/books")

.then((response) => {
    
        if (response.ok) {

            return response.json()

        } else {

            throw new Error("sciso")

        }
    })

    .then((wubbaLubba) => {


        renderBooks(wubbaLubba)



    })


    .catch((eee) => {
        console.log("Errore booogh", eee)
        // const mainBox = document.getElementsByClassName("container")[0]
        // let alertBox
        // alertBox.innerHTML = `<div class="alert alert-danger" role="alert">
        // Errore gravissssimo!
        // </div>`
        // mainBox.appendChild(alertBox)
    })