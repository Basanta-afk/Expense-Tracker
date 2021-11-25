export const AddExpensesForm = (props) => {
  return (
    <section className="left">
      <div className="title mb-lg">Expenses</div>
      <div className="form-area">
        <div className="form-group mb-md">
          <label htmlFor="ExpenseTitle">ExpenseTitle</label>
          <input type="text" className={""} placeholder={"Title"} />
        </div>
        <div className="form-group mb-md">
          <label htmlFor="ExpenseAmount">ExpenseAmount</label>
          <input type="number" className={""} placeholder={"Amount"} />
        </div>
        <div className="form-group">
          <label htmlFor="Date">Date</label>
          <input type="date" className={""} placeholder={"Amount"} />
        </div>
        <div className="button-area mt-md">
          <button className="btn full-width bg-primary">Add</button>
        </div>
      </div>
    </section>
  );
};
