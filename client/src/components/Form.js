import {useForm} from 'react-hook-form'
import {useState, useEffect} from 'react'
export default function Form() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const onSubmit = data => {
    console.log(data)
  }
  const categoryOptions = ['Clothing', 'Cosmetics', 'Electronics', 'Medicines']
  const productNameOptions = {
    Clothing: [
      {name: 'Woven Shirt', sku: '1234'},
      {name: 'T-Shirt', sku: '1235'},
      {name: 'Jeans', sku: '1236'},
      {name: 'Dress', sku: '1237'},
    ],
    Cosmetics: [
      {name: 'Lipstick', sku: '2234'},
      {name: 'Mascara', sku: '2235'},
      {name: 'Eyeliner', sku: '2236'},
      {name: 'Foundation', sku: '2237'},
    ],
    Electronics: [
      {name: 'Smartphone', sku: '3234'},
      {name: 'Laptop', sku: '3235'},
      {name: 'TV', sku: '3236'},
      {name: 'Headphones', sku: '3237'},
    ],
    Medicines: [
      {name: 'Pain Reliever', sku: '4234'},
      {name: 'Antibiotic', sku: '4235'},
      {name: 'Antacid', sku: '4236'},
      {name: 'Vitamin', sku: '4237'},
    ],
  }

  const [category, setCategory] = useState('')
  const [productName, setProductName] = useState('')
  const [sku, setSku] = useState('')
  useEffect(() => {
    const selectedProduct = productNameOptions[category]?.find(
      product => product.name === productName,
    )
    if (selectedProduct) {
      setSku(selectedProduct.sku)
    } else {
      setSku('')
    }
  }, [category, productName])

  const handleCategoryChange = event => {
    setCategory(event.target.value)
    setProductName('')
    setSku('')
  }

  const handleProductNameChange = event => {
    setProductName(event.target.value)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{maxWidth: '500px', margin: '0 auto'}}
    >
      <label htmlFor="category" style={{display: 'block', marginBottom: '5px'}}>
        Category
      </label>
      <select
        className="select"
        value={category}
        onChange={handleCategoryChange}
      >
        <option value="">Select a category</option>
        {categoryOptions.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {errors.category && (
        <span style={{color: 'red', fontSize: '14px', marginBottom: '10px'}}>
          This field is required
        </span>
      )}

      {category && (
        <label>
          Product Name:
          <select
            className="select"
            value={productName}
            onChange={handleProductNameChange}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              marginBottom: '10px',
              border: errors.SKU ? '1px solid red' : '1px solid #ccc',
            }}
          >
            <option value="">Select a product name</option>
            {productNameOptions[category].map(product => (
              <option key={product.name} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </label>
      )}
      {sku && (
        <label>
          SKU:
          <input
            className="input"
            type="text"
            value={sku}
            readOnly
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              marginBottom: '10px',
              border: errors.SKU ? '1px solid red' : '1px solid #ccc',
            }}
          />
        </label>
      )}

      {/* <label
        htmlFor="product_name"
        style={{display: 'block', marginBottom: '5px'}}
      >
        Product Name
      </label>
      <input
        {...register('product_name', {required: true})}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
          border: errors.product_name ? '1px solid red' : '1px solid #ccc',
        }}
      />
      {errors.product_name && (
        <span style={{color: 'red', fontSize: '14px', marginBottom: '10px'}}>
          This field is required
        </span>
      )} */}

      {/* <label htmlFor="SKU" style={{display: 'block', marginBottom: '5px'}}>
        SKU
      </label>
      <input
        {...register('SKU', {required: true})}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
          border: errors.SKU ? '1px solid red' : '1px solid #ccc',
        }}
      />
      {errors.SKU && (
        <span style={{color: 'red', fontSize: '14px', marginBottom: '10px'}}>
          This field is required
        </span>
      )} */}

      <label
        htmlFor="description"
        style={{display: 'block', marginBottom: '5px'}}
      >
        Description
      </label>
      <input
        {...register('description', {required: true})}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
          border: errors.description ? '1px solid red' : '1px solid #ccc',
        }}
      />
      {errors.description && (
        <span style={{color: 'red', fontSize: '14px', marginBottom: '10px'}}>
          This field is required
        </span>
      )}

      <label htmlFor="price" style={{display: 'block', marginBottom: '5px'}}>
        Price
      </label>
      <input
        {...register('price', {required: true})}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
          border: errors.price ? '1px solid red' : '1px solid #ccc',
        }}
      />
      {errors.price && (
        <span style={{color: 'red', fontSize: '14px', marginBottom: '10px'}}>
          This field is required
        </span>
      )}

      <label htmlFor="discount">Discount</label>
      <input
        {...register('discount', {required: true})}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
          border: errors.category ? '1px solid red' : '1px solid #ccc',
        }}
      />
      {errors.discount && <span>This field is required</span>}

      <label htmlFor="netPrice">Net Price</label>
      <input
        {...register('netPrice', {required: true})}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
          border: errors.category ? '1px solid red' : '1px solid #ccc',
        }}
      />
      {errors.netPrice && <span>This field is required</span>}

      <label htmlFor="tax">Tax</label>
      <input
        {...register('tax', {required: true})}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
          border: errors.category ? '1px solid red' : '1px solid #ccc',
        }}
      />
      {errors.tax && <span>This field is required</span>}

      <label htmlFor="quantity">Quantity</label>
      <input
        {...register('quantity', {required: true})}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
          border: errors.category ? '1px solid red' : '1px solid #ccc',
        }}
      />
      {errors.quantity && <span>This field is required</span>}

      <label htmlFor="shippingType">Shipping Type</label>
      <input
        {...register('shippingType', {required: true})}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
          border: errors.category ? '1px solid red' : '1px solid #ccc',
        }}
      />
      {errors.shippingType && <span>This field is required</span>}

      <label htmlFor="totalAmountCharged">Total Amount Charged</label>
      <input
        {...register('totalAmountCharged', {required: true})}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
          border: errors.category ? '1px solid red' : '1px solid #ccc',
        }}
      />
      {errors.totalAmountCharged && <span>This field is required</span>}

      <label htmlFor="estimatedDelivery">Estimated Delivery</label>
      <input
        type="date"
        {...register('estimatedDelivery', {required: true})}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
          border: errors.category ? '1px solid red' : '1px solid #ccc',
        }}
      />
      {errors.estimatedDelivery && <span>This field is required</span>}

      <label htmlFor="customerName">Customer Name</label>
      <input
        {...register('customerName', {required: true})}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
          border: errors.category ? '1px solid red' : '1px solid #ccc',
        }}
      />
      {errors.customerName && <span>This field is required</span>}

      <label htmlFor="dob">DOB</label>
      <input
        type="date"
        {...register('dob', {required: true})}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
          border: errors.category ? '1px solid red' : '1px solid #ccc',
        }}
      />
      {errors.dob && <span>This field is required</span>}

      <label htmlFor="statusUpdate">statusUpdate</label>
      <input
        type="checkbox"
        {...register('statusUpdate', {required: true})}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
          border: errors.category ? '1px solid red' : '1px solid #ccc',
        }}
      />
      {errors.dob && <span>This field is required</span>}

      <label htmlFor="deliverySignature">deliverySignature</label>
      <input
        type="checkbox"
        {...register('deliverySignature', {required: true})}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
          border: errors.category ? '1px solid red' : '1px solid #ccc',
        }}
      />
      {errors.dob && <span>This field is required</span>}

      <label htmlFor="phoneNumber">phoneNumber</label>
      <input
        type="number"
        {...register('phoneNumber', {required: true})}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
          border: errors.category ? '1px solid red' : '1px solid #ccc',
        }}
      />
      {errors.dob && <span>This field is required</span>}

      <button type="submit" style={{marginTop: '10px'}}>
        Submit
      </button>
    </form>
  )
}
