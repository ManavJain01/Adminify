// Importing local Images
import free from "./imgs/FREE.webp"
import membership from "./imgs/membership.png"
import vip from "./imgs/vip.jpg"

// Importing local files
import Prices from "./components/Prices"
import PricesComparison from "./components/PricesComparison";

export default function Pricing() {
  const plans = [
    {
      tag: "Free Forever",
      headline: "Launch",
      description: "Access basic features suitable for individuals and small businesses.",
      price: "Free",
      value: 0,
      img: free,
      benefits: [
        "Watermark free",
        "Bot detection"
      ]
    },
    {
      tag: "Custom Pricing",
      headline: "Scale",
      description: "Unlock specific features designed for growing businesses.",
      price: "₹ 5000",
      value: 5000,
      img: membership,
      benefits: [
        "Everything in Launch plus:",
        "Session management and security policies",
        "Custom domain",
        "Email and community support",
      ]
    },
    {
      tag: "Pro Plan",
      headline: "Enterprise",
      description: "Tailored solutions for enterprises with Advanced features.",
      price: "₹ 10000",
      value: 10000,
      img: vip,
      benefits: [
        "Everything in Scale plus:",
        "Unlimited environments",
        "Prioritized integration requests",
        "Custom agreements",
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-80 px-10 py-20">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-5xl">Affordable Plans to Fit Your Needs</h1>
          <p>Choose from our flexible pricing options designed to suit businesses of all sizes. Get the best features at competitive rates without any hidden costs. Start growing your business today!</p>
        </div>

        <Prices plans={plans} />
      </div>

      <PricesComparison plans={plans} />
    </div>
  )
}