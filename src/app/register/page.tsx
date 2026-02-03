import { SignupForm } from '@/components/signup-form'
import React from 'react'

export default function page() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-muted/30 py-10">
                <div className="w-full max-w-md rounded-lg border bg-background p-8 shadow-md">
                    <SignupForm />
                </div>
            </section>
  )
}
