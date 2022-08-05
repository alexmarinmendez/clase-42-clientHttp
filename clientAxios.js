import axios from 'axios'

// axios('http://localhost:8080/testinterno')
//     .then(result => console.log(result.data))

// axios.get('http://localhost:8080/testinterno', {
//     //no es req.params, sino req.query
//     params: {  
//         ID: 12345
//     }
// }).then(result => console.log(result))

axios('http://localhost:8080/testpost', {
    method: 'POST',
    //req.body
    data: {
        first_name: "Zoila",
        last_name: "Baca"
    }
}).then(result => console.log(result.data))