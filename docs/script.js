/* =========== Fill table =========== */
function init() {
    const url = 'https://raw.githubusercontent.com/glauciellesa/staff-table/master/docs/data/funcionarios.json'
    axios.get(url).then(response => {
        fillStaffTable(response.data)  
    }).catch(response => {
        console.log(response)
    })
}

function fillStaffTable(staff) {
    const tbody = document.querySelector('#staff tbody')
    staff.forEach(employee => {
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <td> ${employee.id} </td>
            <td> ${employee.nome} </td>
            <td> ${employee.sobrenome} </td>
            <td> ${employee.email} </td>
            <td> ${employee.genero} </td>
            <td> ${employee.cidade} </td>
            <td> ${employee.pais} </td>
            <td> ${employee.empresa} </td>
            <td> ${employee.salario} </td>
        `
        tbody.appendChild(tr)
    })
}

init()

/* =========== Search input =========== */
function getInputElement(keyword) {
    const arrayTrs = document.querySelectorAll('tr')
    arrayTrs.forEach((elemTr) => {
        elemTr.classList.remove('hidden')
        if(!elemTr.innerText.toUpperCase().includes(keyword)) {
            elemTr.classList.add('hidden')
        }
    })
}

function searchStaff(){
    const searchKeyword = document.getElementById('keyword').value?.toUpperCase()
    getInputElement(searchKeyword)
}

document.getElementById('search_button').addEventListener('click', searchStaff)
document.getElementById('keyword').addEventListener('keypress', e => {
    if(e.key === 'Enter'){
        searchStaff()
    }
})
