import React,{ createContext } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Config from '../../Config';


const API = Config.api
export const UserContext = createContext()

function UserContextProvider({children}) {

    const createUser =async payload=>{
        try {
           await axios({
               method: 'post',
               url : `${API}/signup`,
               body: payload
           }) 
        } catch (error) {
            return error
        }
    }
    return (
        <UserContext.UserContextProvider
            value ={
                createUser
            }
        >
            {children}   
        </UserContext.UserContextProvider>
    )
}

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default UserContextProvider

