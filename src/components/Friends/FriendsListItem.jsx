import PropTypes from 'prop-types';
import css from './FriendsListItem.module.css';

export default function FriendsListItem({ friends }) {
  return friends.map(painting => {
    return (
      <li className={css.item} key={painting.id}>
        {painting.isOnline ? (
          <span className={`${css.status} ${css.isOnline}`}></span>
        ) : (
          <span className={`${css.status} ${css.isOffline}`}></span>
        )}

        <img
          className={css.avatar}
          src={painting.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={css.name}>{painting.name}</p>
      </li>
    );
  });
}

FriendsListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
