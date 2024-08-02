import { useState } from "react";

interface AuthFormState {
    email: string;
    password: string;
    confirmPassword: string;
    error: string;
    isLoading: boolean;
    isSuccess: boolean;
}

export function useAuthForm(initialState: Partial<AuthFormState> = {}) { // The parameter is optional and should be a partial (some or all properties) of AuthFormState
    // useState hook to manage the form state
    const [formState, setFormState] = useState<AuthFormState>({
        email: "",
        password: "",
        confirmPassword: "",
        error: "",
        isLoading: false,
        isSuccess: false,
        ...initialState
    });

    // Update function
    const updateForm = (updates: Partial<AuthFormState>) => {
        // Combine previous state with the provided updates, overwriting any existing values with the new ones
        setFormState(prev => ({ ...prev, ...updates }));
    };

    // Password matching validation
    const validatePassword = () => {
        if (formState.password != formState.confirmPassword) {
            updateForm({ error: "Password do not match. Please try again."});
            return false;
        }
        return true;
    }

    return { formState, updateForm, validatePassword };
}