    const { state, dispatch } = useContext(CartContext)

    const { cart } = state
    const { paymentMethod } = cart

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')

    const router = useRouter()

