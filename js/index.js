document.addEventListener('DOMContentLoaded', ()=>{
    fetching()
    })

        
    function fetching() {
        fetch('https://api.github.com/search/users?q=octocat', {
            headers: {
                "Accept":"application/vnd.github.v3+json"
            }
        }) 
        .then((resp) => resp.json())
        .then((data) => {
            const form = document.querySelector('#github-form')
            form.addEventListener('submit', (e) => {
                let txtVal = document.getElementById('search').value //finds the value of the searched item
                for (const num in data.items){ // num returns a number from 0++
                    
                    if (data.items[num].login === txtVal){ 
                    listNode = document.getElementById('user-list'), //gets the ID of the ul where we will put the user name
                    liNode = document.createElement("li") //creates the li element
                    liNode.innerText = `${data.items[num].login}` // adds element to the list //should not add txtVal but instead the user info
                    listNode.append(liNode) //appends the li to the ul 

                    img = document.createElement('img') //gets the users avatar and appends it with the username
                    img.src = data.items[num].avatar_url
                    listNode.append(img)
                    
                    }
                }
                e.preventDefault()
              }) 
            })
        }
/*
``` what needs to happen ```
fetch all the info
get username from submit
filter through the fetch info
match username to userName in the fetch data
return userName data
``` Psudocode ```



*/