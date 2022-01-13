import axios from 'axios';

// interface IRequest{
//     email: string;
//     password: string;

// }

interface IResponse{
    user: object; 
}

axios.create({
    baseURL: "http://192.168.0.53:8080/",
});

export async function signIn():Promise<void>{

    console.warn("Logando");
}