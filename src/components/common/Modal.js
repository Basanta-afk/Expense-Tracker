export const Modal = (props) => {
  return (
    <div className="modal flex fullscreen top left justify-center items-center fixed">
      <div
        className="backdrop full-width full-height absolute left top"
        onClick={props.hide}
      ></div>
      <div className="content card relative">{props.children}</div>
    </div>
  );
};
