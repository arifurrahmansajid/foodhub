"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { authClient } from "@/lib/auth-client";
import { cartService } from "@/service/cart.service";
import Link from "next/link";

export function MealCard(props) {
  const meal = props.mealDetails;
  const session = authClient.useSession();

  const addToCartHandler = () => {
    cartService.addToCart(meal);
  }

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 w-full">
        <div className="absolute inset-0 z-10 bg-black/20" />
        <img
          src={meal.image_url || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop"}
          alt={meal.name}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader className="flex-1">
        <CardAction>
          <p>${meal.price}</p>
        </CardAction>
        <CardTitle>{meal.name}</CardTitle>
        <CardDescription>
          {meal.details}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col gap-5 sm:flex-row">
        <Link href={`/meals/${meal.id}`}>
          <Button className="w-full cursor-pointer">  View Details</Button>
        </Link>
        {
          session?.data?.user?.role === "USER" && (
            <Button className="cursor-pointer" onClick={addToCartHandler}>
              Add to Cart
            </Button>
          )
        }
      </CardFooter>
    </Card>
  )
}
