//variables or classes
let htmlui = new HTMLUI();
let newsAPI = new News();







//event listeners
function eventListeners(){
    document.querySelector("#submitBtn").addEventListener("click" , search)
}
eventListeners();








//functions
function search(){

    //having access to value of news name
    let newsName = document.querySelector("#news-name").value

    //having access to value of dates
    let from = document.querySelector("#from").value
    let to = document.querySelector("#to").value

    //having access to value of country
    let country = document.querySelector("#country").value

    //having access to value of category
    let category = document.querySelector("#category").value

    //having access to value of source
    let source = document.querySelector("#source").value


    if(newsName !== "" || country !== "" || category !== "" || source !== ""){
        newsAPI.queryAPI(newsName , from , to , country , category , source)
        .then(news => {
            if(news.status === "error"){
                htmlui.showMessage("API Error" , "alert alert-danger")
            }
            else if(news.status === "ok"){

                //creating news array
                let newsArray = news.articles

                if(newsArray.length > 0){
                    htmlui.showNews(newsArray)
                }
                else if(newsArray.length === 0){
                    htmlui.showMessage("There are no news about this topic" , "alert alert-danger")
                }
            }
        })
        
    }
    else{
        htmlui.showMessage("Fill at least one field(except for 'from' and 'to')" , "alert alert-danger")
    }
}