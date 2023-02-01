import axios, {isCancel, AxiosError} from 'axios';

const loginUser = async (login, password) => {


    const res = await  axios.post('http://localhost:4000/auth/login',{
        email: login,
        password: password
    }, {
        headers: {
            Authorization: ""
        }
    })


    const user = await axios.get(`http://localhost:4000/users/${res.data.userId}`, {
        headers:{
            Authorization: `Bearer ${res.data.accessToken}`
        }

    })


    // localStorage.setItem('user', JSON.stringify(res.data))

    return user.data
}



export {
    loginUser
}

// const loginUser = (login, password) => {
//
//
//     return axios.post('http://localhost:4000/auth/login', {
//         email: login, password: password
//     }, {
//         headers: {
//             Authorization: ""
//         }
//     })
//         .then(data => {
//             console.log(data)
//             axios.get(`http://localhost:4000/users/${data.data.userId}`, {
//                 headers: {
//                     Authorization: `Bearer ${data.data.accessToken}`
//                 }
//             })
//                 .catch(error => console.log(error))
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// }


