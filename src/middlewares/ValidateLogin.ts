import { sign } from 'jsonwebtoken';
import { findOne } from '../models/Users';


export const login = async (data: {username: String; password: String}): Promise<Object> => {
    const name: String = data.username;
    const pass: String = data.password;

    const validate: Object = findOne(name);

    if(!validate){
        return {error: 'User not found', status: 401}
    }
    if(validate.password === pass){

    }

    return <Object>{};

}