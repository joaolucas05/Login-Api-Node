//Todas as Querys e conexoes vao aqui
import { Conection } from './connect';

export const getAll = () =>{
    const Connection: Object = Conection();
    if(Conection.connected === true){
        return {data: 'named'};
    }
    
}

export const findOne = (username: String): Object =>{
    const Connection: Object = Conection();
    if(Connection.connected === true){
        //Switch 
        const data: Object = {'username': username,'password': 'jl050602', loggedIn: 'sdadfadfa5a5dafkasf'};
        return <Object>data;
    }

    return <Object>{error: 'Connection Rejected', code: 500};
    
}
