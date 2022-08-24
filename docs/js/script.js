import '../css/style.css'
/* =========== Import services.js  =========== */
import {getData} from './services.js'

/* =========== Fill table =========== */
async function init() {
    const staff = await getData()
    fillStaffTable(staff)
    registerHandleEvents()
}

function createTbody(table) {
    const oldTbody = table.getElementsByTagName('tbody')
    if (oldTbody.length > 0) {
        table.removeChild(oldTbody[0])
    }
    return document.createElement('tbody')
}

function fillStaffTable(staff) {
    const table = document.getElementById('staff')
    const tbody = createTbody(table)
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
        tbody.append(tr)
        table.append(tbody)
    })
}

/* =========== Search input =========== */
async function filterStaffByKeyword(keyword) {
    const staff = await getData()
    const staffFiltered = staff.filter(employee => {
        const values = Object.values(employee)
        return values.some(value => {
            return String(value).toUpperCase().includes(keyword)
        })
    })
    fillStaffTable(staffFiltered)
}

function searchStaff() {
    const searchKeyword = document.getElementById('keyword').value?.toUpperCase()
    filterStaffByKeyword(searchKeyword)
}

function registerHandleEvents() {
    document.getElementById('search_button').addEventListener('click', searchStaff)
    document.getElementById('keyword').addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            searchStaff()
        }
    })
}

init()