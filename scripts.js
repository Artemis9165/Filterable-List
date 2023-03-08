const userInput = document.querySelector('input')

userInput.addEventListener('input',filterNames)

const filterNames = () => {
    const userValue = document.querySelector('input').value.toLowerCase;
    const ulnames = document.querySelector('#names')
    const names = document.querySelectorAll('.collection-item')

    for(let i = 0; i<names.length; i++){
        const name = document.querySelector('a');
        if(name.value.toLowerCase() != userValue){
            names[i].style.visibility = 'hidden'
        } else {
            names[i].style.visibility = 'visible'
        }
    }
}