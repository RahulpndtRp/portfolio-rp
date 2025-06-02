
// src/hooks/useContactForm.ts
import { useState } from 'react';
import { ContactForm } from '@/types';
import { validateEmail } from '@/lib/utils';

interface UseContactFormReturn {
    form: ContactForm;
    errors: Partial<ContactForm>;
    isSubmitting: boolean;
    isSuccess: boolean;
    updateField: (field: keyof ContactForm, value: string) => void;
    submitForm: () => Promise<void>;
    resetForm: () => void;
}

const initialForm: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
};

export function useContactForm(): UseContactFormReturn {
    const [form, setForm] = useState<ContactForm>(initialForm);
    const [errors, setErrors] = useState<Partial<ContactForm>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const updateField = (field: keyof ContactForm, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<ContactForm> = {};

        if (!form.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!form.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(form.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!form.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!form.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (form.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const submitForm = async (): Promise<void> => {
        if (!validateForm()) return;

        setIsSubmitting(true);
        setIsSuccess(false);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Here you would typically send the form data to your backend
            console.log('Form submitted:', form);

            setIsSuccess(true);
            setForm(initialForm);
        } catch (error) {
            console.error('Form submission error:', error);
            // Handle error (show toast, etc.)
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setForm(initialForm);
        setErrors({});
        setIsSuccess(false);
    };

    return {
        form,
        errors,
        isSubmitting,
        isSuccess,
        updateField,
        submitForm,
        resetForm
    };
}
