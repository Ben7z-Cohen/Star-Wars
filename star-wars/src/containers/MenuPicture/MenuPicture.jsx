import React from './node_modules/react'
import { useFetch } from '../../server/ServerFetch'

//Todo: handle error and uploaded image from the user 
const MenuPicture = ({ userName, onClick }) => {

    const { response, error } = useFetch(`https://ui-avatars.com/api/?name=${userName}&background=000000&color=0b8793`, {})

    return (
        <div class="pointer">
            <img
                src={response ? response.url : "http://tachyons.io/img/logo.jpg"}
                class="br-100 h2 w2" alt="avatar"
                onClick={onClick} />
        </div>
    )
}
export default MenuPicture
