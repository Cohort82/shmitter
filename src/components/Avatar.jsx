import {useDispatch, useSelector} from "react-redux";
import {changeAvatar, changeName} from "../actions/userActions.js";

const Avatar = ({size}) => {
    const {avatar, name} = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <img
            onClick={() => {
                const url = prompt('Enter avatar url');
                dispatch(changeAvatar(url));
            }}
            onContextMenu={e => {
                e.preventDefault();
                const newName = prompt('Enter new name');
                dispatch(changeName(newName));
            }}
            className={`user-avatar ${size ?? ''}`}
            src={avatar}
            alt={name}
        />
    )
}

export default Avatar;