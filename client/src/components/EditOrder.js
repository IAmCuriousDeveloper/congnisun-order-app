import React from 'react'
import Form from './Form'
import {Route, Link, Routes, useParams} from 'react-router-dom'
function EditOrder() {
  const value = useParams().id
  console.log('@@@@@--->>', value)
  return (
    <div>
      <h1>EditOrder Page</h1>
      <Form />
    </div>
  )
}

export default EditOrder
