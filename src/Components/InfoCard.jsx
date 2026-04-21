export const InfoCard = ({ fields }) => {
  return (
    <div className="p-4 mb-6">
      <div className="grid gap-y-3 gap-x-8">
        {fields.map((field, index) => (
          <div key={index} className="flex">
            <span className="text-sm text-black w-36">{field.label}</span>
            {field.isBadge ? (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-500 text-white">
                {field.value}
              </span>
            ) : (
              <span className="text-sm font-semibold text-gray-900">
                {field.value}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
