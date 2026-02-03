import { FeaturedMeals } from "@/components/featured-meals";
import { FeaturedProviders } from "@/components/featured-providers";
import { HeroSection } from "@/components/hero-component";
import { TrustSection } from "@/components/trust-section";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <div className="container max-w-7xl mx-auto py-10">
        <FeaturedMeals />
        <FeaturedProviders />
        <TrustSection />
      </div>
    </div>
  );
}
