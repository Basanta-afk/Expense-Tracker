import { Charts } from "./Charts";

export const InfoCards = (props) => {
  return (
    <>
      <div className="card-items flex ma-lg">
        <div className="card ma-lg">
          <div className="title">Today</div>
          <div className="expenseAmt">
            <h1>Rs.5000</h1>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            </p>
          </div>
        </div>

        <div className="card ma-lg">
          <div className="title">This Week</div>
          <div className="expenseAmt">
            <h1>Rs.15000</h1>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            </p>
          </div>
        </div>

        <div className="card ma-lg">
          <div className="title">This Month</div>
          <div className="expenseAmt">
            <h1>Rs.25000</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerumx
            </p>
          </div>
        </div>
      </div>

      <div className="chart-card ma-lg">
        <div className="card ma-lg">
          <details>
            <summary>
              <Charts />
            </summary>
          </details>
        </div>
      </div>

      {/* <div className="chart-card ma-lg">
        <div className="card ma-lg">
          <details>
            <summary>
              <Charts />
            </summary>
          </details>
        </div>
      </div> */}

      {/* <div className="chart-card ma-lg">
        <div className="card ma-lg">
          <details>
            <summary>
              <Charts />
            </summary>
          </details>
        </div>
      </div> */}
    </>
  );
};
