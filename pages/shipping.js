import React from 'react'
import Layout from '../components/Layout'
import CheckoutWizard from '../components/CheckoutWizard'

function shipping() {
  return (
    <Layout title="Shipping">
        <CheckoutWizard activeStep={1} />
    </Layout>
  )
}

export default shipping