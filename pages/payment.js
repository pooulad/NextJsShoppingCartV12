import { useRouter } from 'next/router'
import { useState, useContext } from 'react'
import Cookies from 'js-cookie'
import { CartContext } from '../context/Cart'
import Layout from '../components/Layout'
import CheckoutWizard from '../components/CheckoutWizard'

function PaymentPage() {
    const { state, dispatch } = useContext(CartContext)

    const { cart } = state
    const { paymentMethod } = cart

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')

    const router = useRouter()

