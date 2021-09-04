
let myleads = []

// turn the myleads string into an array
// push a new value to the array
// turn the array to string again









const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')

inputBtn.addEventListener("click", function(){
    
    myleads.push(inputEl.value)
    inputEl.value = ""
    //save the mylead array to localStorage
    // remember JSON.stringyfy()
localStorage.setItem("myleads", JSON.stringify(myleads))

    renderLeads()
    // to verify
    console.log(localStorage.getItem(myleads))
})

function renderLeads() {
    let listItems = " "

     for(let i=0; i< myleads.length; i++){

    //listItems += "<li><a target = '_blank' href='"+ myleads[i] +"'>" + myleads[i] + "</a></li>"
    listItems += `
    <li>

       <a 'target = '_blank' href ='$myleads[i]'> 
       ${myleads[i]}
      </a>
 
    </li> `
    
    
    
    }
    ulEl.innerHTML = listItems
}

