const userInput = document.querySelector('input')
const filterNames = () => {
    const userValue = document.querySelector('input').value.toLowerCase();
    console.log(userValue)
    const ulnames = document.querySelector('#names')
    const names = document.querySelectorAll('.collection-item')

    for(let i = 0; i<names.length; i++){
        const name = names[i].querySelector('a');
        if(userValue == ""){
            names[i].style.display = 'block'
        }else if(name.innerText.toLowerCase().indexOf(userValue) > -1){
            names[i].style.display = 'block'
        } else{
            names[i].style.display = 'none'
        }
    }
}
userInput.addEventListener('input',filterNames)
