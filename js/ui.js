class HTMLUI{
    constructor(){
        this.result = document.querySelector("#result")
    }

    showMessage(message , className){

        //creating new div
        let div = document.createElement("div")

        //adding message to div 
        div.appendChild(document.createTextNode(message))

        //adding classes to div
        div.setAttribute("class" , className)

        //adding div to errorForm 
        document.querySelector("#errorForm").appendChild(div)

        setTimeout(() => {div.remove()} , 6000)

    }
    showNews(newsArray){

        newsArray.forEach(articles => {
            console.log(articles);
            this.result.innerHTML += `
            <div class="col-md-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <img src="${articles.urlToImage}" class="img-fluid">
                    <h2 class="card-title text-center">${articles.title.split('-',1)}</h2>
                    <h3 class="card-text lead textto-info">Author: ${articles.author}</h3>
                    <p class="card-text lead textto-info">Description: ${articles.description}</p>
                    <span class="badge badge-primary">Source: ${articles.source.name}</span>
                    <br>
                    <a href="${articles.url}" target="_blank" class="btn btn-primary btn-block">Continue...</a>
                </div>
            </div>
        </div>
`

        })
    }
}