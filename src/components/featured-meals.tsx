import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { mealService } from "@/service/meal.service"
import { MealCard } from "./meal-card";

export async function FeaturedMeals() {
    const res = await mealService.getAllMeals({});

    const featuredMeals = res.data.slice(0, 5);

    return (
        <section className="border-b bg-muted/30">
            <div className="container max-w-7xl mx-auto py-12 sm:py-16">
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Featured Meals
                    </h2>
                </div>
                <Carousel className="w-full">
                    <CarouselContent className="-ml-4">
                        {featuredMeals.map((meal) => (
                            <CarouselItem
                                key={meal.id}
                                className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                            >
                                <MealCard mealDetails={meal} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

        </section>


    )
}
