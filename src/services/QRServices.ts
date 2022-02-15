import axios from 'axios';

export async function generateQR(email: string, amount: number){
    const data = {
        email,
        amount
    }
    const url = `https://api.qrserver.com/v1/create-qr-code/?data=${data}&size=[250]x[250]`;
    
    const response = await axios.post(url);
    
}