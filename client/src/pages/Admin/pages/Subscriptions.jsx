// Importing React Packages
import { useEffect } from "react";

// Importing Custom Hooks
import { useSubscription } from "../../../hooks/useSubscription";

// Importing Local Files
import TiltCard from "./Subscriptions/TiltCard";
import CreateSubscription from "./Subscriptions/CreateSubscription";

export default function Subscriptions() {
  // Variables
  const subs = [
    {
      name: "Basic",
      fees: "Rs.1,999",
      duration: "per month",
      subscription: "1 Month Subscription",
      features: ["upto 2 Hours Daily"],
      more: "Learn More",
    },
    {
      name: "Professional",
      fees: "Rs.1,499",
      duration: "per month",
      subscription: "3 Month Subscription",
      features: ["upto 4 Hours Daily", "Access to Spa"],
      more: "Learn More",
    },
    {
      name: "Ninja",
      fees: "Rs.999",
      duration: "per month",
      subscription: "6 Month Subscription",
      features: ["6+ Hours Daily", "Access to Spa", "A Personal Locker"],
      more: "Learn More",
    },
  ];

  // Custom Hooks
  const { AllSubscriptions } = useSubscription();

  // useEffect
  useEffect(() => {
    const handleRefresh = async () => {
      const res = await AllSubscriptions();
      console.log("res: ", res);
      
    }

    handleRefresh();
  }, []);

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-4xl">Become a Subscriber</h1>
        <span>Subscribe to get the Best features for your own benefits</span>
      </div>

      <div className="flex gap-4 flex-wrap">
        {subs.map((e, i) => {
          return <TiltCard key={i} data={e} />;
        })}

        <CreateSubscription />
      </div>

      <div>
        <span>
          Re-Subscribe 15 Days before your subscription runs out to add 2 more
          days per month.
        </span>
      </div>
    </div>
  );
}
