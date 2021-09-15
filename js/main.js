const searchInput = document.querySelector('.search__input')
const input = document.getElementById("search")
const icon = document.getElementById("icon")
const suggestionBox =  document.querySelector('.autocomplete__box')

input.onkeyup = (e) => {
    // console.log(e.target.value)
    let userData = e.target.value //The target property of the Event interface is a reference to the object onto which the event was dispatched
    let emptyArray = []
    
    if(userData){
        emptyArray = countries.filter((data)=>{  //filter() method creates a new array with all elements that pass the test implemented by the provided function.
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        })
        // console.log(emptyArray)
        emptyArray = emptyArray.map((data)=>{ //The map() method calls a provided callbackFn function once for each element in an array, in order, and constructs a new array from the results
            return data = '<li>'+ data +'</li>'
        })
        // console.log(emptyArray)
        searchInput.classList.add('active')
        showSuggestions(emptyArray)
        let allList = suggestionBox.querySelectorAll('li')

        for (let i= 0; i < allList.length; i++) {
           allList[i].setAttribute("onclick", "select(this)")
        }
    } else{
        searchInput.classList.remove('active')
    }
}

function select(element){
    let selectUserData = element.textContent;
    // console.log(selectUserData)
    input.value = selectUserData
    searchInput.classList.remove('active')
}

function showSuggestions(list){
    let listData

    if(!list.length){
        userValue = input.value
        listData = '<li>'+ userValue +'</li>'
    } else{
        listData = list.join('')
    }

    suggestionBox.innerHTML = listData
 
}


