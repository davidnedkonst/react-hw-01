import PropTypes from 'prop-types';
import css from './FriendistItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li>
            <span className="status">{isOnline}</span>
            <img
                className="avatar"
                src={avatar}
                alt="User avatar"
                width="48" />
            <p className="name">{name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string,
    isOnline: PropTypes.bool.isRequired
};