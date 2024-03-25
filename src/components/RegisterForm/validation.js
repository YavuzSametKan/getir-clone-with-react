import { object, string, number } from 'yup'

const phoneRegExp = /^\+?[1-9]\d{1,10}$/

const contactSchema = object({
    phoneNumber: string().matches(phoneRegExp, 'Geçerli bir telefon numarası değil.').required('Lütfen telefon numaranı gir.')
})

export default contactSchema