import ProviderCard from '@/components/provider-card';
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { providerService } from '@/service/providers.service'
import Link from 'next/link'

export default async function ProvidersPage() {
    const providers = await providerService.getAllProviders();
    return (
        <section className="container max-w-7xl mx-auto py-10">
            {/* Header */}
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold tracking-tight">Explore Providers</h1>
                <p className="mt-3 text-lg text-muted-foreground">
                    Choose a kitchen and explore their meals
                </p>
            </div>

            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {providers.map((p) => (
                    <ProviderCard key={p.id} providerDetails={p} />
                ))}
            </div>
        </section>
    )
}
