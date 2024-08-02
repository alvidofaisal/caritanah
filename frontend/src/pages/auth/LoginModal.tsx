"use client";

import { useState } from "react";
import { useAuthForm } from "./useAuthForm";
import { signIn } from "next-auth/react";
import { Dialog } from "@radix-ui/react-dialog";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
    const {formState, updateForm} = useAuthForm({
        email: "",
        password: "",
        error: "",
        isLoading: false
    });

    //  3. Create login functions:
    //      - handle email/password login
    //      - handle google login
    //      - handle facebook login
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();``
        updateForm({ error: "", isLoading: true });

        try {
            // Make the API call
            const result = await signIn('credentials', {
                redirect: false,
                email: formState.email,
                password: formState.password,
            });

            if (result?.error) {
                updateForm({ error: "Invalid email or password" });
            } else {
                onClose();
            }
        } catch (error) {
            console.error("Login error:", error);
            updateForm({ error: "An error occured during login. Please try again." })
        } finally {
            updateForm({ isLoading: false });
        }
    };

    const handleGoogleLogin = () => {
        signIn('google', { callbackUrl: '/' });
    };

    const handleFacebookLogin = () => {
        signIn('facebook', { callbackUrl: '/' });
    };
    // 4. Create component structure:
    //      - Dialog container
    //      - Form with email and password inputs
    //      - Login button
    //      - Error display
    //      - Social Login options
    return (
        <Dialog open={isOpen} onOpenChange={onClose}></Dialog>

    )
}






// 5. Add event handlers:
//      - Form submission
//      - Input changes
//      - Social login button clicks

// 6. Style the component
