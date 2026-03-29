import { router } from "expo-router";
import { useState } from "react";
import { signInApp } from "../service/authService";

type AuthState = {
  loading: boolean;
  error: string | null;
};

export const viewModelSignIn = () => {
    
    const [state, setState] = useState<AuthState>({
        loading: false,
        error: null,
    });

    const signIn = async (email: string, password: string) => {
        
        try {
            setState({ loading: true, error: null });
            await signInApp({email, password});
            router.replace("/(home)/home")
        } catch (err: any) {

            if (err instanceof Error) {
                setState({
                    loading: false,
                    error: err.message
                });
            } else {
                setState({
                    loading: false,
                    error: err
                });
            }

        } finally {
            setState({ loading: false, error: null });
        }

    };

    return {
        signIn,
        loading: state.loading,
        error: state.error,
    };

};