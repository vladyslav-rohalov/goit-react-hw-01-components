import UserCard from './components/UserCard/UserCard';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/Friends/FriendList';
import Transactions from './components/Transations/Transactions';
import user from './data/userData.json';
import stats from './data/statData.json';
import friends from './data/friendsData.json';
import transactions from './data/transactionsData.json';

export default function App() {
  return (
    <div>
      <UserCard
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <div>
        <Statistics title="Upload stats" stats={stats} />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <Transactions transactions={transactions} />
      </div>
    </div>
  );
}
