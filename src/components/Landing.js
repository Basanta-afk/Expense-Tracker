import { Login } from "./auth/Login";
import { Modal } from "./common/Modal";
import { useState } from "react/cjs/react.development";

export const Landing = (props) => {
  const [isAppear, setIsAppear] = useState();
  const showModal = () => setIsAppear(true);
  const hideModal = () => {
    setIsAppear(false);
  };
  return (
    <div className="bg-accent">
      <section className="fullscreen flex-centered">
        <div className="landing-img">
          <img src="" alt="A svg of a money bag" />
        </div>
        <div className="button-area">
          <button className="btn bg-primary" onClick={showModal}>
            Continue
          </button>
        </div>
        {isAppear && (
          <Modal hide={hideModal}>
            <Login />
          </Modal>
        )}
      </section>
    </div>
  );
};
