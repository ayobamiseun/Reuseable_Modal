import { useState, useCallback } from 'react'
import Modal from './component/Modal/'
import './App.css'
import Button from './component/Button/Button';

function App() {
  const [isShowingModal, setIsShowingModal] = useState(false)

     const handleCloseModal = useCallback(() => {
       setIsShowingModal(false);
     }, []);

     const handleOpenModal = useCallback(() => {
       setIsShowingModal(true);
     }, []);

  return (
    <>
   
   <Button onClick={handleOpenModal} name="open modal" />
      <Modal
        show={isShowingModal}
        onClose={handleCloseModal}
       
      />
    </>
  )
}

export default App
