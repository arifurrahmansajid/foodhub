import { LoginForm } from '@/components/login-form'
import React from 'react'

export default function LoginPage() {
    return (
        <section className="flex min-h-screen items-center justify-center bg-muted/30 py-10">
            <div className="w-full max-w-md rounded-lg border bg-background p-8 shadow-md">
                <LoginForm />
            </div>
        </section>

    )
}
