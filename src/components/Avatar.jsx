import {useContext} from "react";
import {ShmitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user} = useContext(ShmitterContext);

    return (
        <img className={`user-avatar ${size ?? ''}`} src={user.avatar} alt={user.name}/>
    )
}

export default Avatar;