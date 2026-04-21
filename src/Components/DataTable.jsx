export const DataTable = ({ columns, data, title, titleHighlight }) => {
  return (
    <div className="mb-6">
      {title && (
        <h3 className="text-[23px] font-medium text-gray-900 mb-4">
          {title}{" "}
          {titleHighlight && (
            <span className="text-blue-500">{titleHighlight}</span>
          )}
        </h3>
      )}

      <div className="rounded-lg overflow-hidden border border-gray-200 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-500 text-nowrap">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`text-white font-semibold text-xs uppercase tracking-wider px-4 py-3 text-left ${
                    column.className || ""
                  }`}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className="bg-white hover:bg-gray-50 border-b border-gray-200"
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="text-sm  text-nowrap text-gray-900 px-4 py-3"
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
