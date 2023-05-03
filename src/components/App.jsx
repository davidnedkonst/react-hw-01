import { FriendList } from "./FriendList/FriendList";
import { FriendListItem } from "./FriendListItem/FiendListItem";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { TransactionsHistory } from "./TransactionsHistory/TransactionsHistory";

export const App = () => {
  return (
    <>
      {Profile}
      {Statistics}
      {FriendList}
      {FriendListItem}
      {TransactionsHistory}
    </>
  );
};
