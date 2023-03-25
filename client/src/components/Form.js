import {useForm} from 'react-hook-form'

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="category">Category</label>
      <input {...register('category', {required: true})} />
      {errors.category && <span>This field is required</span>}

      <label htmlFor="product_name">Product Name</label>
      <input {...register('product_name', {required: true})} />
      {errors.product_name && <span>This field is required</span>}

      <label htmlFor="SKU">SKU</label>
      <input {...register('SKU', {required: true})} />
      {errors.SKU && <span>This field is required</span>}

      <label htmlFor="description">Description</label>
      <input {...register('description', {required: true})} />
      {errors.description && <span>This field is required</span>}

      <label htmlFor="price">Price</label>
      <input {...register('price', {required: true})} />
      {errors.price && <span>This field is required</span>}

      <label htmlFor="discount">Discount</label>
      <input {...register('discount', {required: true})} />
      {errors.discount && <span>This field is required</span>}

      <button type="submit">Submit</button>
    </form>
  )
}
