const elBTN = document.querySelector(".btn")
const elClearBTN = document.querySelector(".clearBtn")
let namesList = document.querySelector(".ListOf")



let nameInput = document.querySelector(".nameOf");
let surInput = document.querySelector(".surnameOf");
let dateInput = document.querySelector(".birthDate");

const html = [];



elBTN.addEventListener('click', () => {


        nameOf = nameInput.value;
        surname = surInput.value;
        birthDate = dateInput.value;
    
    html.push({nameOf, surname, birthDate});
    
    console.log({nameOf, surname, birthDate})
    console.log(html)

    const newArr = html.map((item) => {

        let list = `<li>${item.nameOf} ${item.surname} ${item.birthDate}</li>`
        return list
        
        
    })
    console.log(newArr)

    const list = newArr.join ('');
    console.log(list)

    let namesList = document.querySelector(".ListOf > ol")
    namesList.innerHTML = list;


})