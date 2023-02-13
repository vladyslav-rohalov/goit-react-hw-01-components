import css from './FriendsList.module.css';
import FriendsListItem from './FriendsListItem';

export default function FriendsList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        const { id, isOnline, avatar, name } = friend;
        return (
          <FriendsListItem
            key={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
          />
        );
      })}
    </ul>
  );
}
