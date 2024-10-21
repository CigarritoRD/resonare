import z from 'zod'

export const loginSchema = z.object({
    email: z.string().email({message: 'correo electronico no valido'}),
    password: z.string().min(6,{message: 'la contraseña debe tener al menos 6 caracteres'})
})