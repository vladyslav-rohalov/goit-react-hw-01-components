import PropTypes from 'prop-types';
import css from './FriendsListItem.module.css';

export default function FriendsListItem({ id, isOnline, avatar, name }) {
  return (
    <li className={css.item} key={id}>
      {isOnline ? (
        <span className={`${css.status} ${css.isOnline}`}></span>
      ) : (
        <span className={`${css.status} ${css.isOffline}`}></span>
      )}

      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
