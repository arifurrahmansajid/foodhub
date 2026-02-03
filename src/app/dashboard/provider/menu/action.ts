"use server"
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";



export async function getMealsForCurrentProvider() {
  const cookieStore = await cookies();


  const provider = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/providers/me`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });

  const providerData = await provider.json();

  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/providers/${providerData.id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });

  const result = await data.json();

  return result.meals;
}

export async function deleteMealAction(mealId: string) {

  const cookieStore = await cookies();


  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/provider/meals/${mealId}`, {
    method: "DELETE",
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });



  revalidatePath("/dashboard/provider/menu");
}