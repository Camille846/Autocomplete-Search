const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]

const searchContainer = document.querySelector('.search__container')
const input = document.getElementById("search")
const icon = document.getElementById("icon")

function autocomplete(inp, arr) {
    var currentFocus

    input.addEventListener("input", function(e) {
        let a, b, i, val = this.value;

        // closeAllLists();

        if (!val) { 
            return false;
        }

        currentFocus = -1;
        
        // Create div element 
        a = document.createElement("div")
        a.setAttribute("id", this.id + "autocomplete-box")
        a.setAttribute("class","autocomplete__items")
        this.parentNode.appendChild(a);

        for (let i = 0; i < arr.length; i++) {
            //check if the item starts with the same letters as the text field value:
            if(arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()){
                /*create a DIV element for each matching element:*/
                b = document.createElement("div")
                // To make the matching letters bold:
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>"
                b.innerHTML += arr[i].substr(val.length)
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

                // execute a function when the user clicks on the DIV element
                b.addEventListener("click", function(e){
                    //insert the value for the autocomplete text field
                    inp.value = this.getElementsByTagName("input")[0].value;
                })
                a.appendChild(b)
                closeAllLists();
            }
        }
    })

    input.addEventListener("keydown", function(e){
        var x = document.getElementById(this.id + "autocomplete-box");
        if (x) x = x.getElementsByTagName("div");
        if (e.key == 40) {
            // If the arrow DOWN key is pressed, increase the currentFocus variable
            currentFocus++;
            addActive(x);
            
        } else if (e.key == 38) { //up
            currentFocus--;
            //and and make the current item more visible:
            addActive(x);
        } else if (e.key == 13) {
            //If the ENTER key is pressed, prevent the form from being submitted
            e.preventDefault();
        } if (currentFocus > -1) {
            if (x) x[currentFocus].click();
        }
    })

    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

autocomplete('document.getElementById("search")', countries)