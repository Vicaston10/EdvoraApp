import axios from 'axios'

let baseUrl = "https://assessment-edvora.herokuapp.com";

function getProducts() {
    axios.get(baseUrl)
        .then(res => {
            localStorage.setItem("EDVORAPRODUCTS", JSON.stringify(res.data))
            var groupedProduct = groupProducByName(res.data, 'product_name')
            return groupedProduct
         
        })
}

function groupProducByName(list, key) {
    return list.reduce((hash, obj) => ({...hash, [obj[key]]:( hash[obj[key]] || [] ).concat(obj)}), {})
}

export default {getProducts};