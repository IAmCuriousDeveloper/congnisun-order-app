import React from 'react'
import DataTable from 'react-data-table-component'
import {useEffect, useState} from 'react'
import {FaPenAlt, FaTrash} from 'react-icons/fa'
import EditOrder from './EditOrder'
import {Route, Link, Routes, useParams} from 'react-router-dom'
// import DeleteModal from './DeleteModal'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Index() {
  const columns = [
    {
      name: 'Catagory',
      selector: row => row.category,
      sortable: true,
    },
    {
      name: 'SKU',
      selector: row => row.SKU,
      sortable: true,
    },
    {
      name: 'Description',
      selector: row => row.description,
      sortable: true,
    },
    {
      name: 'Discount',
      selector: row => row.discount,
      sortable: true,
    },
    {
      name: 'Price',
      selector: row => row.price,
      sortable: true,
    },
    {
      name: 'productName',
      selector: row => row.product_name,
      sortable: true,
    },
    {
      name: 'description',
      selector: row => row.description,
      sortable: true,
    },
    {
      name: 'shippingType',
      selector: row => row.shippingType,
      sortable: true,
    },
    {
      name: 'phoneNumber',
      selector: row => row.phoneNumber,
      sortable: true,
    },
    {
      name: 'EditItem',
      selector: row => {
        return (
          <Link to={`editOrder/${row._id}`}>
            <FaPenAlt></FaPenAlt>
          </Link>
        )
      },
    },
    {
      name: 'DeleteItem',
      selector: row => {
        return (
          <button
            onClick={() => {
              setDeleteItemId(row._id)
              setShow(true)
              // trigger delete modal here
            }}
          >
            Delete
          </button>
        )
      },
    },
  ]
  const [data, setData] = useState([])
  const [deleteItemId, setDeleteItemId] = useState(null)
  const [show, setShow] = useState(false)

  const handleClose = () => {
    setShow(false)
  }

  const handledelete = () => {
    const handleDelete = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/order/${deleteItemId}`,
          {
            method: 'delete',
          },
        )
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    handleDelete()
    setShow(false)
  }
  const handleShow = () => setShow(true)
  console.log('deleteId--->', deleteItemId)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/orders')
        const data = await response.json()
        setData(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      <h1>All Orders here</h1>

      <Link to={'/addOrder'}>
        <Button variant="primary">Add Orders</Button>
      </Link>
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationPerPage={5}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>hey it can be revert</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handledelete}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Index
