import PageContainer from "@/components/PageContainer/PageContainer"
import VipCardServices from "./vip-card-services/VipCardServices"

export default function VipCard() {
  return (
    <PageContainer>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">VIP Card Benefits</h1>
        <p className="text-gray-700 mb-8 max-w-3xl">
          Our exclusive VIP Card gives you access to special discounts and privileges at our partner restaurants and
          services. Enjoy premium experiences at discounted rates throughout your stay.
        </p>

        <VipCardServices />
    </PageContainer>
  )
}
