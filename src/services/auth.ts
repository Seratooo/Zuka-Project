import axios from 'axios';

// interface IRequest{
//     email: string;
//     password: string;

// }

interface IResponse{
    user: object; 
}

const Axios = axios.create({
    baseURL: "https://zuka-app.herokuapp.com/",
});

export default Axios;

export async function signIn():Promise<void>{

    console.warn("Logando");
}