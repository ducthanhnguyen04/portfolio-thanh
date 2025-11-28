import "./modal.css";
function Modal(handleCloseModal, modalContent) {
    return (
        <div className="modal_overlay" onClick={handleCloseModal}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <button className="close_btn" onClick={handleCloseModal}>×</button>
            <p>{modalContent}</p>
          </div>
        </div>
    )
}

export default Modal;