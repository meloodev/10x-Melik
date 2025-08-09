import './modal.css';
const Modal = ({ onClose, mess }) => {
  
    const handleBgClick = (e) => {
        if (e.target.classList.contains('modal')) {
            onClose();
        }
    }
    return (
        <div onClick={handleBgClick} className="modal">
            <div className="modal__inner">
                <h2 className="moda__header">{mess}</h2>
                <button onClick={onClose}>close</button>
            </div>
        </div>
    )
}
export default Modal;