import PropTypes from 'prop-types';

import { FriendListItem } from "components/FriendListItem/FiendListItem";

export function FriendList({ friends }) {
    return (
        <ul className="friend-list">
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
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
};