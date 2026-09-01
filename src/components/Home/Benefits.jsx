import { benfites } from "../../data/benefits";
import BenefitCard from "./BenefitCard";

function Benefits() {
  return (
    <section className="py-6 md:py-8">
      <div className="container">
        <div className="grid grid-cols-2 gap-3 rounded-2xl border border-border bg-surface p-3 sm:gap-4 sm:p-4 lg:grid-cols-4">
          {benfites.map((benefit) => (
            <BenefitCard key={benefit.title} benfites={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
