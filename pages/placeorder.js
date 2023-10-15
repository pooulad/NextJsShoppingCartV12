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
