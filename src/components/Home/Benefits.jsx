import { benfites } from "../../data/benefits";
import BenefitCard from "./BenefitCard";

function Benefits() {
  return (
    <section>
      <div className="container bg-surface">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benfites.map((benfites) => {
            return <BenefitCard key={benfites.title} benfites={benfites} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
