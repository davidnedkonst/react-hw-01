import PropTypes from 'prop-types';
import { FriendCard, Avatar, Name, Led } from './FriendListItem.styled'

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <FriendCard>
            <Led isOnline={isOnline}></Led>
            <Avatar
                src={avatar}
                alt="User avatar"
                width="48px" />
            <Name>{name}</Name>
        </FriendCard>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string,
    isOnline: PropTypes.bool.isRequired
};