import { FriendList } from "./FriendList/FriendList";
import { FriendListItem } from "./FriendListItem/FiendListItem";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { TransactionsHistory } from "./TransactionsHistory/TransactionsHistory";

// import { user } from "../temp/user";

export const App = () => {
  return (
    <>
      <Profile
        username={"123"} />
      {/* {Statistics}
      {FriendList}
      {FriendListItem}
      {TransactionsHistory} */}
    </>
  );
};
