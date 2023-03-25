import React from 'react'
import DataTable from 'react-data-table-component'
import {useEffect, useState} from 'react'
import {FaPenAlt, FaTrash} from 'react-icons/fa'
import EditOrder from './EditOrder'
import {Route, Link, Routes, useParams} from 'react-router-dom'

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
      return <button>Delete</button>
    },
  },
]

function Index() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/products')
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
      <h1>Data here</h1>
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationPerPage={5}
      />
    </div>
  )
}

export default Index
