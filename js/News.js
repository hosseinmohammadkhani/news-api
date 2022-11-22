class News{
    async queryAPI(newsName , from , to ,country , category , source){

        //creating new url
        let url = "https://newsapi.org/v2/"
        
        //if country and category and source don't exist
        if(country === "" && category === "" && source === ""){
            url += "everything?"
        }

        //if source exists:
        else if(source !== ""){
            if(newsName !== "" || country !== "" || category !== ""){
                htmlui.showMessage("Source cannot be mixed by 'name','country' and 'category' fields" , "alert alert-danger")
            }
            else if(newsName === "" && country === "" && category === ""){
                url += `top-headlines?sources=${source}&`
            }
        }
        else if(country !== "" || category !== ""){
            url += "top-headlines?"
        }      

        //if news name exists 
        if(newsName !== ""){
            newsName = newsName.replace(/\s+/g, '-').toLowerCase(); //replacing space with dash
            url += `q=${newsName}&`
        }
        //if from date exists
        if(from !== ""){
            url += `from=${from}&`
        }
        
        //if to date exists
        if(to !== ""){
            url += `to=${to}&`
        }

        //if country exists
        if(country !== ""){
            url += `country=${country}&`
        }

        //if category exists
        if(category !== ""){
            url += `category=${category}&`
        }



        //adding api key to url
        url += "apiKey=c7f2b1208e8446f5bc4fac04e86212d0"

        console.log(url);

        let response = await fetch(url) //wait until fetch response
        let json = await response.json() //wait until fetching json file
        return json

    }
}