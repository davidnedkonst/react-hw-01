import Profile from "./Profile/Profile";
import user from "temp/user.json";

import Statistics from "./Statistics/Statistics";
import data from "temp/data.json";

import FriendList from "./FriendList/FriendList";
import friends from "temp/friends.json";

import TransactionsHistory from "./TransactionsHistory/TransactionsHistory";
import transactions from "temp/transactions.json";

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Statistics" stats={data} />

      <Statistics stats={data} />
      
      {/* /* <FriendList friends={friends} /> */}
      
      {/* <TransactionsHistory items={transactions}/> */ }
    </div>
  );
};
