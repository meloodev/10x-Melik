import { useState } from 'react';
import Modal from './components/Modal';
import './App.css';

const Modals = () => {
  const [modal, setModal] = useState(false);
  const [modalType, setmodalType] = useState('');

  const mess = {// მესეჯები მოდალისთვის
    red: 'red modal',
    green: 'green modal' 
  }

  const toggleModal = (type) => {
    setmodalType(type);
    setModal((prev) => !prev);
  }

  return (
    <>
      <div className="wrapper">
        <button onClick={() => toggleModal('red')} className="modal__one">Modal-1</button>
        <button onClick={() => toggleModal('green')} className="modal__two">Modal-2</button>
      </div>
      {modal && <Modal onClose={toggleModal} mess={mess[modalType]} />}
    </>
  )
}

export default Modals;