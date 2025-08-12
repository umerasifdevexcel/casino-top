import HeroSection from "@/components/HeroSection";
import BrandCards from "@/components/BrandCards";
import ComparisonTable from "@/components/ComparisonTable";
import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Cryptocurrency Casino Reviews & Comparisons 2025",
  description: "Find the top-rated cryptocurrency casinos with our comprehensive reviews. Compare bonuses, games, security features, and user ratings to choose the perfect crypto casino for you.",
  keywords: ["cryptocurrency casino 2025", "best crypto casinos", "bitcoin casino reviews", "crypto gambling sites"],
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex gap-15 max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        {/* Main Content */}
        <div className="flex-1 min-w-0 space-y-8">
          <HeroSection />
          <ComparisonTable />
          <BrandCards />
        </div>

        {/* Right Sidebar */}
        <div className="hidden xl:block flex-shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
