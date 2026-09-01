function BenefitCard({ benfites }) {
  const { icon: Icon, title, description } = benfites;

  return (
    <div className="group flex flex-col items-center rounded-xl border border-border bg-background p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md sm:flex-row sm:items-start sm:text-left">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-5 w-5" />
      </div>

      <div className="mt-3 sm:ml-3 sm:mt-0">
        <h4 className="text-sm font-semibold text-text sm:text-base">
          {title}
        </h4>

        <p className="mt-1 text-xs leading-5 text-text-secondary sm:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

export default BenefitCard;
