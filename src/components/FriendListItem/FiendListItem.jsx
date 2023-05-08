import PropTypes from 'prop-types';
import css from './FriendistItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className={css.item}>
            <span className={isOnline ? css.online : css.offline}></span>
            <img
                className={css.avatar}
                src={avatar}
                alt="User avatar"
                width="48px" />
            <p className={css.name}>{name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string,
    isOnline: PropTypes.bool.isRequired
};