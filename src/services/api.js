/* 
    Configuraciones y funciones para realizar llamadas a la API 
    en este caso la API a usar es Supabase
*/
import { createClient } from "@supabase/supabase-js";
const supabaseKey = import.meta.env.VITE_SUPABASE_ENON_KEY;
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

export const supabase_client = createClient(supabaseUrl, supabaseKey);