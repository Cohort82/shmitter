import {useContext} from "react";
import {ShmitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user, changeAvatar, changeName} = useContext(ShmitterContext);

    return (
        <img
            onClick={() => {
                const url = prompt('Enter avatar url');
                changeAvatar(url);
            }}
            onContextMenu={e => {
                e.preventDefault();
                const newName = prompt('Enter new name');
                changeName(newName);
            }}
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt={user.name}
        />
    )
}

export default Avatar;