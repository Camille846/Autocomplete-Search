const searchContainer = document.querySelector('.search__container')
const input = document.getElementById("search")
const icon = document.getElementById("icon")
const autocompBox =  document.querySelector('.autocomplete__box')

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
        console.log(emptyArray)
    }
}
