import {
  GiWallet,
  GiPayMoney,
  GiSwapBag,
  GiReceiveMoney,
} from "react-icons/gi";
import { HiOutlineDocumentReport } from "react-icons/hi";
export const SideBar = (props) => {
  const sidebarHandler = () => {
    console.log("clicked!!!");
  };
  return (
    <div className="sidenav ml-lg">
      <li className="avatar mb-lg">
        <GiSwapBag size="2em" />
      </li>
      <li className="avatar mb-lg">
        <GiPayMoney size="2em" onClick={sidebarHandler} />
      </li>
      <li className="avatar mb-lg">
        <HiOutlineDocumentReport size="2em" />
      </li>
      <li className="avatar mb-lg">
        <GiReceiveMoney size="2em" />
      </li>

      <li className="avatar mb-lg">
        <GiWallet size="2em" />
      </li>
    </div>
  );
};
