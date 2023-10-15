import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useContext } from 'react'
import { CartContext } from '../context/Cart'
import Layout from '../components/Layout'
import CheckoutWizard from '../components/CheckoutWizard'
  const router = useRouter()

  const { state } = useContext(CartContext)

  const { cart } = state
  const { shippingData, paymentMethod, cartItems } = cart

  async function placeOrderHandler() {
    const totalPrice = cartItems.reduce(
      (acc, cur) => acc + cur.qty * cur.price,
      0
    )

    await fetch('/api/orders', {
      method: 'POST',
      body: JSON.stringify({
        orderItems: cartItems,
        shippingData,
        paymentMethod,
        totalPrice,
      }),
      headers: { 'Content-Type': 'application/json' },
    })

    router.push('/order-completed')
  }
      <CheckoutWizard activeStep={3} />
      <h1 className='mb-4 text-xl'>Place Order</h1>
