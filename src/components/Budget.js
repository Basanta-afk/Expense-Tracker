import { GiWallet } from "react-icons/gi";
export const Budget = (props) => {
  return (
    <div className="Budget ma-lg">
      <div className="card ma-lg">
        <div className="available-balance flex justify-between ">
          <h1>Available Balance</h1>
          <h1>Rs.17000</h1>
        </div>
      </div>

      <div className="card ma-lg">
        <div className="Add-wallet flex justify-between">
          <h1>Add Money To Wallet </h1>
          <h1>
            <GiWallet />
          </h1>
        </div>
      </div>
    </div>
  );
};
