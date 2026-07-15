import "./Modal.css";

function Modal({ title, onClose, children }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-box__head">
          <h2>{title}</h2>
          <button className="modal-box__close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-box__body">{children}</div>
      </div>
    </div>
  );
}

export default Modal;