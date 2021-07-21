import * as Drive from '../database/drive';
import { verify } from 'jsonwebtoken'

export const findOne = async (data: String): Promise<Object>=>{
    let UserName: String = data; 
    const result: Object = await Drive.findOne(UserName);
    return <Object>result;
};

export const logged = async (data: String): Promise<Object>=>{
    let UserName: String = data;
    const result: Object = await Drive.findOne(UserName);

    if(result.loggedIn){
        const token: String = result.loggedIn;
        const dc: Object = verify(token);
    }
    return <Object>
}
