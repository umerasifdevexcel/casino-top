import HeroSection from "@/components/HeroSection";
import BrandCards from "@/components/BrandCards";
import ComparisonTable from "@/components/ComparisonTable";
import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Best Cryptocurrency Casino Reviews & Comparisons 2025",
  description: "Find the top-rated cryptocurrency casinos with our comprehensive reviews. Compare bonuses, games, security features, and user ratings to choose the perfect crypto casino for you.",
  keywords: ["cryptocurrency casino 2025", "best crypto casinos", "bitcoin casino reviews", "crypto gambling sites"],
  openGraph: {
    type: 'website',
    title: 'Best Cryptocurrency Casino Reviews & Comparisons 2025',
    description: 'Find the top-rated cryptocurrency casinos with our comprehensive reviews. Compare bonuses, games, security features, and user ratings to choose the perfect crypto casino for you.',
    siteName: 'CasinoTop',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Cryptocurrency Casino Reviews & Comparisons 2025',
    description: 'Find the top-rated cryptocurrency casinos with our comprehensive reviews. Compare bonuses, games, security features, and user ratings to choose the perfect crypto casino for you.',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex gap-15 max-w-[1400px] mx-auto  lg:px-6 sm:px-8">
        {/* Main Content */}
        <div className="flex-1 min-w-0 space-y-8">
          {/* Breadcrumb Navigation */}
          <Breadcrumb className="pt-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-gray-600 hover:text-gray-900">
                  Casino Top
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/crypto" className="text-gray-600 hover:text-gray-900">
                  Crypto
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-900 font-medium">
                  USA
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
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
