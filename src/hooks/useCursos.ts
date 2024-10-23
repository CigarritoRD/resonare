import { useContext } from "react";
import { CursoContext } from "../context/cursos-context";



const useCursos = () => {
    const context = useContext(CursoContext);

    // Verificar si el contexto es null
    if (!context) {
      throw new Error('useCursos debe ser utilizado dentro de un CursoProvider');
    }
  
    // Desetructurar las propiedades después de verificar que el contexto no es null 
    const { cursos, obtenerCursos, suscribirteACurso, obtenerCursosSuscrito, eliminarCursoSuscrito, crearCurso, editarCurso, eliminarCurso, buscarCursos } = context;
  
    return { cursos, obtenerCursos, suscribirteACurso, obtenerCursosSuscrito, eliminarCursoSuscrito, crearCurso, editarCurso, eliminarCurso, buscarCursos};
  };
                        

export default useCursos                                