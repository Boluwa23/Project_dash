export const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-black uppercase tracking-wide">
        {title}
      </h1>
      {subtitle && <p className="text-[16px] text-black mt-1">{subtitle}</p>}
    </div>
  );
};
