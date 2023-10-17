import Link from 'next/link'

function ProductItem({ item, addToCart }) {
  return (
    <div className='bg-white rounded-xl mb-5 block'>
      <Link href={`/product/${item.slug}`}>
        <a>
          <img src={item.image} className='rounded-t-xl' />
        </a>
      </Link>
      <div className='flex flex-col items-center justify-center p-5'>
        <Link href={`/product/${item.slug}`}>
          <a>
            <h2 className='text-lg'>{item.title}</h2>
          </a>
        </Link>
        <p className='p-2'>{item.price}</p>
        <button
          onClick={() => addToCart(item)}
          className='rounded-xl bg-gray-700 text-white px-4 py-2'
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductItem
