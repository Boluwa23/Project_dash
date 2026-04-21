import React from 'react'
import { Plus } from "lucide-react";

const sdatabase = () => {

  const suppilers = [
    {
      id: "01",
      name: "Learn Africa PLC",
      email: "info@learnafrica.com",
      phone: "+23456746532",
      contactperson: "John Arikere",
      contactemail: "john@gmail.com",
      address: "23 Oke Oda Street",
      city: "Akure",
      state: "ondo",
      country: "Nigeria",
      bank: "First Bank",
      accountnumber: 23446578,
      bankcode: 609,
      sortcode: 3541,
      bankaddress: "23 Oke Oda Street",
      bankcity: "Akure",
      bankstate: "ondo",
      bankcountry: "Nigeria",
    },
    {
      id: "02",
      name: "Learn Africa PLC",
      email: "info@learnafrica.com",
      phone: "+23456746532",
      contactperson: "John Arikere",
      contactemail: "john@gmail.com",
      address: "23 Oke Oda Street",
      city: "Akure",
      state: "ondo",
      country: "Nigeria",
      bank: "First Bank",
      accountnumber: 23446578,
      bankcode: 609,
      sortcode: 3541,
      bankaddress: "23 Oke Oda Street",
      bankcity: "Akure",
      bankstate: "ondo",
      bankcountry: "Nigeria",
    },
    {
      id: "03",
      name: "Learn Africa PLC",
      email: "info@learnafrica.com",
      phone: "+23456746532",
      contactperson: "John Arikere",
      contactemail: "john@gmail.com",
      address: "23 Oke Oda Street",
      city: "Akure",
      state: "ondo",
      country: "Nigeria",
      bank: "First Bank",
      accountnumber: 23446578,
      bankcode: 609,
      sortcode: 3541,
      bankaddress: "23 Oke Oda Street",
      bankcity: "Akure",
      bankstate: "ondo",
      bankcountry: "Nigeria",
    },
    {
      id: "04",
      name: "Learn Africa PLC",
      email: "info@learnafrica.com",
      phone: "+23456746532",
      contactperson: "John Arikere",
      contactemail: "john@gmail.com",
      address: "23 Oke Oda Street",
      city: "Akure",
      state: "ondo",
      country: "Nigeria",
      bank: "First Bank",
      accountnumber: 23446578,
      bankcode: 609,
      sortcode: 3541,
      bankaddress: "23 Oke Oda Street",
      bankcity: "Akure",
      bankstate: "ondo",
      bankcountry: "Nigeria",
    },
    {
      id: "05",
      name: "Learn Africa PLC",
      email: "info@learnafrica.com",
      phone: "+23456746532",
      contactperson: "John Arikere",
      contactemail: "john@gmail.com",
      address: "23 Oke Oda Street",
      city: "Akure",
      state: "ondo",
      country: "Nigeria",
      bank: "First Bank",
      accountnumber: 23446578,
      bankcode: 609,
      sortcode: 3541,
      bankaddress: "23 Oke Oda Street",
      bankcity: "Akure",
      bankstate: "ondo",
      bankcountry: "Nigeria",
    },
    {
      id: "06",
      name: "Learn Africa PLC",
      email: "info@learnafrica.com",
      phone: "+23456746532",
      contactperson: "John Arikere",
      contactemail: "john@gmail.com",
      address: "23 Oke Oda Street",
      city: "Akure",
      state: "ondo",
      country: "Nigeria",
      bank: "First Bank",
      accountnumber: 23446578,
      bankcode: 609,
      sortcode: 3541,
      bankaddress: "23 Oke Oda Street",
      bankcity: "Akure",
      bankstate: "ondo",
      bankcountry: "Nigeria",
    },
    {
      id: "07",
      name: "Learn Africa PLC",
      email: "info@learnafrica.com",
      phone: "+23456746532",
      contactperson: "John Arikere",
      contactemail: "john@gmail.com",
      address: "23 Oke Oda Street",
      city: "Akure",
      state: "ondo",
      country: "Nigeria",
      bank: "First Bank",
      accountnumber: 23446578,
      bankcode: 609,
      sortcode: 3541,
      bankaddress: "23 Oke Oda Street",
      bankcity: "Akure",
      bankstate: "ondo",
      bankcountry: "Nigeria",
    },
    {
      id: "08",
      name: "Learn Africa PLC",
      email: "info@learnafrica.com",
      phone: "+23456746532",
      contactperson: "John Arikere",
      contactemail: "john@gmail.com",
      address: "23 Oke Oda Street",
      city: "Akure",
      state: "ondo",
      country: "Nigeria",
      bank: "First Bank",
      accountnumber: 23446578,
      bankcode: 609,
      sortcode: 3541,
      bankaddress: "23 Oke Oda Street",
      bankcity: "Akure",
      bankstate: "ondo",
      bankcountry: "Nigeria",
    },
    {
      id: "09",
      name: "Learn Africa PLC",
      email: "info@learnafrica.com",
      phone: "+23456746532",
      contactperson: "John Arikere",
      contactemail: "john@gmail.com",
      address: "23 Oke Oda Street",
      city: "Akure",
      state: "ondo",
      country: "Nigeria",
      bank: "First Bank",
      accountnumber: 23446578,
      bankcode: 609,
      sortcode: 3541,
      bankaddress: "23 Oke Oda Street",
      bankcity: "Akure",
      bankstate: "ondo",
      bankcountry: "Nigeria",
    },
    {
      id: "10",
      name: "Learn Africa PLC",
      email: "info@learnafrica.com",
      phone: "+23456746532",
      contactperson: "John Arikere",
      contactemail: "john@gmail.com",
      address: "23 Oke Oda Street",
      city: "Akure",
      state: "ondo",
      country: "Nigeria",
      bank: "First Bank",
      accountnumber: 23446578,
      bankcode: 609,
      sortcode: 3541,
      bankaddress: "23 Oke Oda Street",
      bankcity: "Akure",
      bankstate: "ondo",
      bankcountry: "Nigeria",
    },
    {
      id: "11",
      name: "Learn Africa PLC",
      email: "info@learnafrica.com",
      phone: "+23456746532",
      contactperson: "John Arikere",
      contactemail: "john@gmail.com",
      address: "23 Oke Oda Street",
      city: "Akure",
      state: "ondo",
      country: "Nigeria",
      bank: "First Bank",
      accountnumber: 23446578,
      bankcode: 609,
      sortcode: 3541,
      bankaddress: "23 Oke Oda Street",
      bankcity: "Akure",
      bankstate: "ondo",
      bankcountry: "Nigeria",
    },
    {
      id: "12",
      name: "Learn Africa PLC",
      email: "info@learnafrica.com",
      phone: "+23456746532",
      contactperson: "John Arikere",
      contactemail: "john@gmail.com",
      address: "23 Oke Oda Street",
      city: "Akure",
      state: "ondo",
      country: "Nigeria",
      bank: "First Bank",
      accountnumber: 23446578,
      bankcode: 609,
      sortcode: 3541,
      bankaddress: "23 Oke Oda Street",
      bankcity: "Akure",
      bankstate: "ondo",
      bankcountry: "Nigeria",
    },
  ];

  const handleStatusChange = (id, newStatus) => {
    setsuppilers(
      suppilers.map((p) => (p.id === id ? { ...p, status: newStatus } : p))
    );
  };

  return (
    <div>
      <div className="p-6">
        <div className="flex justify-between">
          <h1 className="text-[30px] font-medium mb-4">SUPPILER DATABASE</h1>
          <button className="border flex bg-blue-700  rounded-lg text-white items-center px-4 py-2 mb-4 ">
            <Plus />
            Export Product CSV
          </button>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-700 ">
              <tr>
                <th className=" text-xs font-medium text-white uppercase text-nowrap">
                  ID
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Suppiler Name
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Email Address
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Suppiler Phone Number
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Contact Person
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Contact Email
                </th>
                <th className="px-3 py-3  text-xs font-medium text-white uppercase text-nowrap">
                  Address
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  City
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  State
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Country
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Bank Name
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Account Number
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Bank Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Sort Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Bank Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Bank city
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Bank State
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Bank Country
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y  divide-gray-200">
              {suppilers.map((suppiler) => (
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {suppiler.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 text-nowrap">
                    {suppiler.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
                    {suppiler.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 text-nowrap">
                    {suppiler.phone}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
                    {suppiler.contactperson}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
                    {suppiler.contactemail}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
                    {suppiler.address}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
                    {suppiler.city}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500  text-nowrap">
                    {suppiler.state}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
                    {suppiler.country}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
                    {suppiler.bank}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
                    {suppiler.accountnumber}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
                    {suppiler.bankcode}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
                    {suppiler.sortcode}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
                    {suppiler.bankaddress}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
                    {suppiler.bankcity}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
                    {suppiler.bankstate}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
                    {suppiler.bankcountry}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default sdatabase