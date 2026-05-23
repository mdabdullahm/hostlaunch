import Benefits from "@/components/home/benefits";
import CTASection from "@/components/home/cta-section";
import CustomerReviews from "@/components/home/customer-reviews";
import Hero from "@/components/home/hero";
import HostingPlans from "@/components/home/hosting-plans";
import KeyFeatures from "@/components/home/key-features";
import WhyBluehost from "@/components/home/why-bluehost";

export default function Home() {
  return (
    <main className="pt-14">
      <Hero/>
      <WhyBluehost/>
      <HostingPlans/>
      <KeyFeatures/>  
      <Benefits/>
      <CustomerReviews/>
      <CTASection/>
    </main>
  );
}
