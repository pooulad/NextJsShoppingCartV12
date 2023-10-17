import { useRouter } from 'next/router'
import { useState, useContext } from 'react'
import Cookies from 'js-cookie'

import { Store } from '../context/Cart'

import Layout from '../components/Layout'
import CheckoutWizard from '../components/CheckoutWizard'

function PaymentPage() {
  const { state, dispatch } = useContext(Store)

  const { cart } = state
  const { paymentMethod } = cart

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')

  const router = useRouter()

  function submitHandler(event) {
    event.preventDefault()

    if (!selectedPaymentMethod) {
      alert('Please Select Payment Method')
    }

    dispatch({ type: ' SAVE_PAYMENT_METHOD', payload: selectedPaymentMethod })

    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        paymentMethod: selectedPaymentMethod,
      })
    )

    router.push('/placeorder')
  }

  const methods = ['Gateway', 'Offline Payment']

  return (
    <Layout title='Payment Page'>
      <CheckoutWizard activeStep={2} />
      <form className='mx-auto max-w-screen-md' onSubmit={submitHandler}>
        <h2 className='mb-4 text-xl'>Payment Method</h2>
        {methods.map((item) => (
          <div key={item} className='mb-4'>
            <input
              name='paymentMethod'
              className='p-2 outline-none focus:ring-0'
              id={item}
              type='radio'
              checked={selectedPaymentMethod === item}
              onChange={() => setSelectedPaymentMethod(item)}
            />
            <label className='p-2' htmlFor={item}>
              {item}
            </label>
          </div>
        ))}
        <div className='mb-4 flex justify-between'>
          <button
            onClick={() => router.push('/shipping')}
            type='button'
            className='rounded-xl bg-gray-300 text-gray-700 px-4 py-2 w-28'
          >
            Back
          </button>
          <button className='rounded-xl bg-gray-700 text-white px-4 py-2 w-28'>
            Next
          </button>
        </div>
      </form>
    </Layout>
  )
}

export default PaymentPage
