import { useContext } from "react"
import { AuthContext } from "../context/auth-context"



const useUser = () => {
    const context = useContext(AuthContext);

    // Verificar si el contexto es null
    if (!context) {
      throw new Error('useUser debe ser utilizado dentro de un AuthProvider');
    }
  
    // Desestructurar las propiedades después de verificar que el contexto no es null
    const { login, logout, user, signUp, isLoading, error } = context;
  
    return { login, logout, user, signUp, isLoading, error};
  };


export default useUser