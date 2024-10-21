import z from "zod";

export const signUpSchema = z.object({  
    nombre: z.string( { message: 'El nombre no puede tener numeros'})
    .regex(/^[^0-9]*$/, { message: "El nombre no puede contener números" })
    .min(3 ,{message: 'El nombre debe tener al menos 3 caracteres'}),

    apellido: z.string({ message: 'El apellido no puede tener numeros'})
    .regex(/^[^0-9]*$/, { message: "El apellido no puede contener números" })
    .min(3 ,{message: 'El apellido debe tener al menos 3 caracteres'}),
 
    email: z.string().email({message: 'correo electronico no valido'}),

    password: z.string().min(8 ,{message: 'la contraseña debe tener al menos 8 caracteres'}),

    confirmPassword: z.string().min(8,{message: 'la contraseña debe tener al menos 8 caracteres'})
    
}).refine(data => data.password === data.confirmPassword, {
    message: 'las contraseñas no coinciden',
    path: ['confirmPassword'],
}) ;
