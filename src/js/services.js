import axios from "axios";

let data = null 

export async function getData() {
    if (data === null) {
        const url = 'https://raw.githubusercontent.com/glauciellesa/staff-table/master/src/data/funcionarios.json'
        try {
            const response = await axios.get(url)
            data = response.data
        } catch (error) {
            console.log(error)
        }
    }
    return data
}
