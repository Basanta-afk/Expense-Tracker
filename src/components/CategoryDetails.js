import { MdEmojiFoodBeverage } from "react-icons/md";
import { RiBillFill } from "react-icons/ri";
import { FaShopify } from "react-icons/fa";
import { GiTicket, GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
export const CategoryDetails = (props) => {
  return (
    <div className="CategoryDetails flex justify-between">
      <div className="category-list ma-lg flex">
        <div className="card ma-lg">
          <div className="category-items">
            <li className="puntu">
              <input type="checkbox" />
              <MdEmojiFoodBeverage />
              <label htmlFor="Food">Food</label>
            </li>
            <hr />
            <li className="puntu">
              <input type="checkbox" />
              <RiBillFill />
              <label htmlFor="">Bills and Utils</label>
            </li>
            <hr />
            <li className="puntu">
              <input type="checkbox" />
              <FaShopify />
              <label htmlFor="">Shopping</label>
            </li>
            <hr />
            <li className="puntu">
              <input type="checkbox" />
              <GiTicket />
              <label htmlFor="">Entertainment</label>
            </li>
            <hr />
            <li className="puntu">
              <input type="checkbox" />
              <GiPerspectiveDiceSixFacesRandom />
              <label htmlFor="">Others</label>
            </li>
            <hr />
          </div>
        </div>

        <div className="card ma-lg">
          <div className="category-details">
            <div className="title">
              <MdEmojiFoodBeverage />
              Expense for <br />
              <span className="pa-lg">Food</span>
            </div>
            <hr />
            <div className="description flex items-center">
              <div className="info">
                <h1>Octber 23rd, 2021</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
                  quis quod similique ipsam nemo consequuntur modi enim,
                  incidunt dolorum vero distinctio ullam dignissimos explicabo.
                  Eos, obcaecati ullam. Nesciunt, sapiente velit?
                </p>
              </div>
              <div className="expenseAmt">
                <h1>Rs.250000</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
