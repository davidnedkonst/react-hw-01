import PropTypes from 'prop-types';

import FriendListItem from "components/FriendListItem/FiendListItem";
import { FriendCardList } from './FriedList.styled';

export default function FriendList({ friends }) {
    return (
        <FriendCardList>
            {friends.map(
                ({ id, avatar, name, isOnline }) => {
                    return (
                        <FriendListItem
                            key={id}
                            avatar={avatar}
                            name={name}
                            isOnline={isOnline}
                        />
                    );
                }
            )}
        </FriendCardList>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
};