

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      cursos: {
        Row: {
          descripcion: string | null
          estado: string | null
          fecha_creacion: string | null
          id: number
          id_profesor: string | null
          membresia_requerida: number | null
          miniatura: string | null
          titulo: string
        }
        Insert: {
          descripcion?: string | null
          estado?: string | null
          fecha_creacion?: string | null
          id?: number
          id_profesor?: string | null
          membresia_requerida?: number | null
          miniatura?: string | null
          titulo: string
        }
        Update: {
          descripcion?: string | null
          estado?: string | null
          fecha_creacion?: string | null
          id?: number
          id_profesor?: string | null
          membresia_requerida?: number | null
          miniatura?: string | null
          titulo?: string
        }
        Relationships: [
          {
            foreignKeyName: "cursos_id_profesor_fkey"
            columns: ["id_profesor"]
            isOneToOne: false
            referencedRelation: "profesores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cursos_membresia_requerida_fkey"
            columns: ["membresia_requerida"]
            isOneToOne: false
            referencedRelation: "membresias"
            referencedColumns: ["id"]
          },
        ]
      }
      estudiantes: {
        Row: {
          fecha_inscripcion: string | null
          id: string
          id_membresia_actual: number | null
        }
        Insert: {
          fecha_inscripcion?: string | null
          id: string
          id_membresia_actual?: number | null
        }
        Update: {
          fecha_inscripcion?: string | null
          id?: string
          id_membresia_actual?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "estudiantes_id_membresia_actual_fkey"
            columns: ["id_membresia_actual"]
            isOneToOne: false
            referencedRelation: "membresias"
            referencedColumns: ["id"]
          },
        ]
      }
      membresias: {
        Row: {
          beneficios: string | null
          descripcion: string | null
          duracion: number
          id: number
          nombre: string
          precio_mensual: number
        }
        Insert: {
          beneficios?: string | null
          descripcion?: string | null
          duracion: number
          id?: number
          nombre: string
          precio_mensual: number
        }
        Update: {
          beneficios?: string | null
          descripcion?: string | null
          duracion?: number
          id?: number
          nombre?: string
          precio_mensual?: number
        }
        Relationships: []
      }
      pagos: {
        Row: {
          fecha_pago: string | null
          id: number
          id_estudiante: string | null
          id_membresia: number | null
          metodo_pago: string | null
          monto: number
        }
        Insert: {
          fecha_pago?: string | null
          id?: number
          id_estudiante?: string | null
          id_membresia?: number | null
          metodo_pago?: string | null
          monto: number
        }
        Update: {
          fecha_pago?: string | null
          id?: number
          id_estudiante?: string | null
          id_membresia?: number | null
          metodo_pago?: string | null
          monto?: number
        }
        Relationships: [
          {
            foreignKeyName: "pagos_id_estudiante_fkey"
            columns: ["id_estudiante"]
            isOneToOne: false
            referencedRelation: "estudiantes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pagos_id_membresia_fkey"
            columns: ["id_membresia"]
            isOneToOne: false
            referencedRelation: "membresias"
            referencedColumns: ["id"]
          },
        ]
      }
      profesores: {
        Row: {
          bio: string | null
          especialidad: string | null
          fecha_registro: string | null
          foto_perfil: string | null
          id: string
        }
        Insert: {
          bio?: string | null
          especialidad?: string | null
          fecha_registro?: string | null
          foto_perfil?: string | null
          id: string
        }
        Update: {
          bio?: string | null
          especialidad?: string | null
          fecha_registro?: string | null
          foto_perfil?: string | null
          id?: string
        }
        Relationships: []
      }
      suscripciones: {
        Row: {
          estado: string | null
          fecha_inscripcion: string | null
          id: number
          id_curso: number | null
          id_estudiante: string | null
        }
        Insert: {
          estado?: string | null
          fecha_inscripcion?: string | null
          id?: number
          id_curso?: number | null
          id_estudiante?: string | null
        }
        Update: {
          estado?: string | null
          fecha_inscripcion?: string | null
          id?: number
          id_curso?: number | null
          id_estudiante?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inscripciones_id_curso_fkey"
            columns: ["id_curso"]
            isOneToOne: false
            referencedRelation: "cursos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inscripciones_id_estudiante_fkey"
            columns: ["id_estudiante"]
            isOneToOne: false
            referencedRelation: "estudiantes"
            referencedColumns: ["id"]
          },
        ]
      }
      topicos: {
        Row: {
          descripcion: string | null
          fecha_creacion: string | null
          id: number
          id_curso: number | null
          titulo: string
        }
        Insert: {
          descripcion?: string | null
          fecha_creacion?: string | null
          id?: number
          id_curso?: number | null
          titulo: string
        }
        Update: {
          descripcion?: string | null
          fecha_creacion?: string | null
          id?: number
          id_curso?: number | null
          titulo?: string
        }
        Relationships: [
          {
            foreignKeyName: "topicos_id_curso_fkey"
            columns: ["id_curso"]
            isOneToOne: false
            referencedRelation: "cursos"
            referencedColumns: ["id"]
          },
        ]
      }
      videos: {
        Row: {
          descripcion: string | null
          duracion: number
          fecha_subida: string | null
          id: number
          id_topico: number | null
          orden: number
          titulo: string
          video_url: string
        }
        Insert: {
          descripcion?: string | null
          duracion: number
          fecha_subida?: string | null
          id?: number
          id_topico?: number | null
          orden: number
          titulo: string
          video_url: string
        }
        Update: {
          descripcion?: string | null
          duracion?: number
          fecha_subida?: string | null
          id?: number
          id_topico?: number | null
          orden?: number
          titulo?: string
          video_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "videos_id_topico_fkey"
            columns: ["id_topico"]
            isOneToOne: false
            referencedRelation: "topicos"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
