import axios from 'axios';
// interface IResponse{
//     user: object;
//     account: object;
//     transations:object; 
// }

// axios.create({
//     baseURL: "https://zuka-app.herokuapp.com"
// });

interface IData{
    email:string;
    password:string;
}

export async function login(email: string, password: string):Promise<object | Error> {
    // console.warn(email, password);
    const response = await axios.post('https://zuka-app.herokuapp.com/user/login',{email, password});       
    // console.warn(response)

    if(response instanceof Object)
         return response.data;
    
    return new Error('User does not found');
}

export async function getAddress(id_user: string):Promise<object | Error> {

    if(!id_user){
        return new Error('Missing id_user');
    }
    const response = await axios.get(`https://zuka-app.herokuapp.com/user/address/${id_user}`);       

    if(response instanceof Object)
         return response.data;
    
    return new Error('User does not found');
}

export async function getAccount(id_user: string):Promise<Array<object>> {
    let url = 'https://zuka-app.herokuapp.com/account/' +id_user;
    console.log(url);
    const response = await axios.get(url);     
    console.log(response.data)
    return response.data;
}
