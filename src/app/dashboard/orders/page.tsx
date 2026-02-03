import { OrderCard } from './order-card';
import { cancelOrder, getOrders } from './action';

export default async function OrdersPage() {
    const orders = await getOrders() ?? [];

    return (
        <section className="container max-w-7xl mx-auto py-10">
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold tracking-tight">My Orders</h1>
                <p className="mt-3 text-lg text-muted-foreground">
                    Track your recent orders and view details.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {orders.map((order) => (
                    <OrderCard
                        key={order.id}
                        order={order}
                    />
                ))}
            </div>
        </section>
    )
}
