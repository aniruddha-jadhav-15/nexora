function SectionHeader({ header, children }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-base font-bold text-text sm:text-2xl">{header}</h2>

      <div className="flex items-center gap-1.5 sm:gap-2">{children}</div>
    </div>
  );
}

export default SectionHeader;
