import css from './FriendsList.module.css';
import FriendsListItem from './FriendsListItem';

export default function FriendsList({ friends }) {
  return (
    <ul className={css.friendList}>
      <FriendsListItem friends={friends} />
    </ul>
  );
}
