
// console.log(searchbox);
// console.log(storeitems);
// console.log(receipe);
// console.log(receipeName);


const searchDish = () => {
    const searchbox = document.getElementById("search-dish").value.toLowerCase();
    const storeitems = document.getElementById('recipe--list');
    const receipe = document.querySelectorAll('.receipe');
    const receipeName = storeitems.getElementsByTagName('h2');

    for (let i = 0; i < receipeName.length ; i++){
        let match = receipe[i].getElementsByTagName('h2')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toLowerCase().indexOf(searchbox) > -1) {
                receipe[i].style.display = "";
            } else {
                receipe[i].style.display = "none";
            }
        }
    }
}

