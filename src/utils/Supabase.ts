import { createClient, type AuthError, type Session, type User } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase

export interface authContextType {
	user: User | null;
	login: ({
		emailInput, passwordInput,
	}: { emailInput: string; passwordInput: string; }) => Promise<void>;
	logout: () => Promise<void>;
	signUp: ({
		nombre, apellido, email, password, passwordconfirmation,
	}: {
		nombre: string;
		apellido: string;
		email: string;
		password: string;
		passwordconfirmation: string;
	}) => Promise<{ user: User | null; session: Session | null; } | undefined>;
	isLoading: boolean;
	error: AuthError | undefined;
}
