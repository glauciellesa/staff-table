/* ============== Fill Table ============== */
function init() {
    const url = 'https://raw.githubusercontent.com/glauciellesa/staff-table/master/data/funcionarios.json'
    axios.get(url).then(response => {
        console.log(response)
        fillStaffTable(response.data)
    }).catch(response => {
        console.log(response)
    })
}

function fillStaffTable(staff) {
    const tbody = document.querySelector('#staff tbody')
    staff.forEach(employee => {
        const tr = document.createElement("tr")
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


/* ============== Search Engine ============== */

