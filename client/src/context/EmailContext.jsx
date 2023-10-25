import { proxy } from 'valtio'

const state = proxy({
    email: "",
    emailVerificado: false
})


export default state