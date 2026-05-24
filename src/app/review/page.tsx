import Comparison from "@/components/review/comparison";
import CustomerSupport from "@/components/review/customer-support";
import EaseOfUse from "@/components/review/ease-of-use";
import FeaturesBreakdown from "@/components/review/features-breakdown";
import FinalVerdict from "@/components/review/final-verdict";
import PerformanceTest from "@/components/review/performance-test";
import PricingReview from "@/components/review/pricing-review";
import ProsCons from "@/components/review/pros-cons";
import QuickOverview from "@/components/review/quick-overview";
import ReviewHero from "@/components/review/review-hero";
import WhoIsItFor from "@/components/review/who-is-it-for";

export default function ReviewPage() {
  return (
    <main>
      <ReviewHero />
      <QuickOverview/>
      <ProsCons/>
      <FeaturesBreakdown/>
      <PerformanceTest/>
      <PricingReview/>
      <EaseOfUse/>
      <CustomerSupport/>
      <Comparison/>
      <WhoIsItFor/>
      <FinalVerdict/>
    </main>
  );
}