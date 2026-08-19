function BenefitCard({ benfites }) {
  const { icon: Icon, title, description } = benfites;

  return (
    <div className="flex  gap-3 border border-border rounded-lg px-2 py-3">
      <Icon />

      <div className="flex flex-col">
        <h4 className="text-body font-bold text-text">{title}</h4>
        <p className="text-small font-light text-text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
}

export default BenefitCard;
