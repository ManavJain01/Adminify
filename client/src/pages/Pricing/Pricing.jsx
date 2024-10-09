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
      benefits: [
        "Watermark free",
        "Bot detection"
      ]
    },
    {
      tag: "Custom Pricing",
      headline: "Scale",
      description: "Unlock specific features designed for growing businesses.",
      price: "₹ 1000",
      value: 1000,
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
      price: "₹ 2000",
      value: 2000,
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