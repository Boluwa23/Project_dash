import { Download } from "lucide-react";

export const ExportButton = ({ label, onClick }) => {
    const handleExportCSV = () => {
      // CSV export logic
      console.log("Exporting CSV...");
      alert("CSV export functionality to be implemented");

    };
  return (
    <button
      label="Export CSV"
      onClick={handleExportCSV}
      className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors cursor-pointer"
    >
      <Download className="w-4 h-4" />
      {label}
    </button>
  );  
};   
