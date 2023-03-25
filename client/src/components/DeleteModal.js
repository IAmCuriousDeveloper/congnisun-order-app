// import Modal from 'react-bootstrap/Modal'
// export default function DeleteModal({itemId, onClose}) {
//   const handleDelete = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/products/${itemId}`, {
//         method: 'DELETE',
//       })
//       const data = await response.json()
//       console.log(data)
//       onClose()
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Modal heading</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//         <Button variant="primary" onClick={handleClose}>
//           Save Changes
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   )
// }
