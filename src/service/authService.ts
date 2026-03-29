import { supabase } from "../../lib/supabase";
import { LoginParams } from "../types/authType";

export const signInApp = async ({ email, password }: LoginParams) => {

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })

    if (error) throw error;
    return data;
    
}

export const signUpApp = async ({ email, password }: LoginParams) => {

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
    })

    if (error) throw error;
    return data;
    
}

export const signOut = async () => {
    await supabase.auth.signOut();
}

export const getCurrentSession = async () => {
  const { data } = await supabase.auth.getSession();
  return data.session;
};