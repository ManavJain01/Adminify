// Importing local files
import PricesProductCard from "./PricesProductCard";

export default function Prices({plans = []}) {
  return (
    <div className="flex flex-col md:flex-row gap-10 justify-center">
      {plans.map((e, i) => {
        return(
          <PricesProductCard key={i} index={i} item={e} length={plans.length} />
        )
      })}
    </div>
  )
}