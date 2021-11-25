// import { Modal } from "./common/Modal";
// import { useState } from "react/cjs/react.development";
// import { AddExpensesForm } from "./AddExpensesForm";

import { Budget } from "./Budget";
import { CategoryDetails } from "./CategoryDetails";
import { NavBar } from "./common/NavBar";
import { SideBar } from "./common/SideBar";
import { InfoCards } from "./InfoCards";

export const Dashboard = (props) => {
  // const [isAppear, setIsAppear] = useState();
  // const showModal = () => setIsAppear(true);
  // const hideModal = () => {
  //   setIsAppear(false);
  // };
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="dashboardArea bg-accent">
        <InfoCards />
        <CategoryDetails />
        <Budget />
      </div>

      {/* <div className="button-area">
        <button className="btn" onClick={showModal}>
          Add Expenses
        </button>
      </div>
      {isAppear && (
        <Modal hide={hideModal}>
          <AddExpensesForm />
        </Modal>
      )} */}
    </>
  );
};
