import {
  AiFillGithub,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillGoogleCircle,
} from "react-icons/ai";
export const Login = (props) => {
  return (
    <section className=" ">
      <div className="mb-lg">
        <img
          src="https://codescandy.com/geeks-bootstrap-5/assets/images/brand/logo/logo.svg"
          alt="Logo"
        />
      </div>
      <div className="">
        <div className="login-title title ">Sign in</div>
        <div className="mb-lg">
          <label htmlFor="">Don't you have account? Sign up</label>
        </div>
        <form className=" ">
          <div className="roma mb-sm">
            <label>Username or email</label>
            <br />
            <input type="text" className={""} placeholder={""} />
          </div>
          <div className="roma mb-sm">
            <label>Password</label>
            <br />
            <input type={"password"} className={""} placeholder={""} />
          </div>
          <div className="flex justify-between">
            <input type="checkbox" name="Remember me" id="RM" />
            <label htmlFor="Remember me" className="pr-lg">
              Remember me
            </label>
            <href>Forgot your password?</href>
          </div>
          <div className="button-area flex mt-xl mb-md">
            <button className="btn primary full-width">Sign in</button>
          </div>
          <div className="flex-centered">
            <div className="justify-between">
              <AiFillGithub />
              <AiFillFacebook />
              <AiFillTwitterCircle />
              <AiFillGoogleCircle />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
