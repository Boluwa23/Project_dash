import React from 'react'

const employeedatabase = () => {

  const employee = [
    {
      id: "01",
      name: "Learn Africa PLC",
      role: "Owner",
      email: "info@learnafrica.com",
      phone: "+2340755444",
      address: "No 5, Oba-Adesida lane, Akure",
      city: "Akure",
      state: "Ondo",
      country: "Nigeria",
      contact: "Mr.Akinwale Ojo",
      eaddress: "23 Oke Oda Street",
      access: "Super User",
      accesstype: "all",
    },
    {
      id: "02",
      name: "Learn Africa PLC",
      role: "Owner",
      email: "info@learnafrica.com",
      phone: "+2340755444",
      address: "No 5, Oba-Adesida lane, Akure",
      city: "Akure",
      state: "Ondo",
      country: "Nigeria",
      contact: "Mr.Akinwale Ojo",
      eaddress: "23 Oke Oda Street",
      access: "Super User",
      accesstype: "all",
    },
    {
      id: "03",
      name: "Learn Africa PLC",
      role: "Owner",
      email: "info@learnafrica.com",
      phone: "+2340755444",
      address: "No 5, Oba-Adesida lane, Akure",
      city: "Akure",
      state: "Ondo",
      country: "Nigeria",
      contact: "Mr.Akinwale Ojo",
      eaddress: "23 Oke Oda Street",
      access: "Super User",
      accesstype: "all",
    },
    {
      id: "04",
      name: "Learn Africa PLC",
      role: "Owner",
      email: "info@learnafrica.com",
      phone: "+2340755444",
      address: "No 5, Oba-Adesida lane, Akure",
      city: "Akure",
      state: "Ondo",
      country: "Nigeria",
      contact: "Mr.Akinwale Ojo",
      eaddress: "23 Oke Oda Street",
      access: "Super User",
      accesstype: "all",
    },
    {
      id: "05",
      name: "Learn Africa PLC",
      role: "Owner",
      email: "info@learnafrica.com",
      phone: "+2340755444",
      address: "No 5, Oba-Adesida lane, Akure",
      city: "Akure",
      state: "Ondo",
      country: "Nigeria",
      contact: "Mr.Akinwale Ojo",
      eaddress: "23 Oke Oda Street",
      access: "Super User",
      accesstype: "all",
    },
    {
      id: "06",
      name: "Learn Africa PLC",
      role: "Owner",
      email: "info@learnafrica.com",
      phone: "+2340755444",
      address: "No 5, Oba-Adesida lane, Akure",
      city: "Akure",
      state: "Ondo",
      country: "Nigeria",
      contact: "Mr.Akinwale Ojo",
      eaddress: "23 Oke Oda Street",
      access: "Super User",
      accesstype: "all",
    },
    {
      id: "07",
      name: "Learn Africa PLC",
      role: "Owner",
      email: "info@learnafrica.com",
      phone: "+2340755444",
      address: "No 5, Oba-Adesida lane, Akure",
      city: "Akure",
      state: "Ondo",
      country: "Nigeria",
      contact: "Mr.Akinwale Ojo",
      eaddress: "23 Oke Oda Street",
      access: "Super User",
      accesstype: "all",
    },
    {
      id: "08",
      name: "Learn Africa PLC",
      role: "Owner",
      email: "info@learnafrica.com",
      phone: "+2340755444",
      address: "No 5, Oba-Adesida lane, Akure",
      city: "Akure",
      state: "Ondo",
      country: "Nigeria",
      contact: "Mr.Akinwale Ojo",
      eaddress: "23 Oke Oda Street",
      access: "Super User",
      accesstype: "all",
    },
    {
      id: "09",
      name: "Learn Africa PLC",
      role: "Owner",
      email: "info@learnafrica.com",
      phone: "+2340755444",
      address: "No 5, Oba-Adesida lane, Akure",
      city: "Akure",
      state: "Ondo",
      country: "Nigeria",
      contact: "Mr.Akinwale Ojo",
      eaddress: "23 Oke Oda Street",
      access: "Super User",
      accesstype: "all",
    },
    {
      id: "10",
      name: "Learn Africa PLC",
      role: "Owner",
      email: "info@learnafrica.com",
      phone: "+2340755444",
      address: "No 5, Oba-Adesida lane, Akure",
      city: "Akure",
      state: "Ondo",
      country: "Nigeria",
      contact: "Mr.Akinwale Ojo",
      eaddress: "23 Oke Oda Street",
      access: "Super User",
      accesstype: "all",
    },
    {
      id: "11",
      name: "Learn Africa PLC",
      role: "Owner",
      email: "info@learnafrica.com",
      phone: "+2340755444",
      address: "No 5, Oba-Adesida lane, Akure",
      city: "Akure",
      state: "Ondo",
      country: "Nigeria",
      contact: "Mr.Akinwale Ojo",
      eaddress: "23 Oke Oda Street",
      access: "Super User",
      accesstype: "all",
    },
    {
      id: "12",
      name: "Learn Africa PLC",
      role: "Owner",
      email: "info@learnafrica.com",
      phone: "+2340755444",
      address: "No 5, Oba-Adesida lane, Akure",
      city: "Akure",
      state: "Ondo",
      contact: "Mr.Akinwale Ojo",
      eaddress: "23 Oke Oda Street",
      access: "Super User",
      accesstype: "all",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-[27px] font-medium">EMPLOYEE DATABASE</h1>
        <button className="bg-blue-600 px-4 py-2 rounded-lg text-white">
          Export Employee CSV
        </button>
      </div>

      <div className="overflow-x-auto mt-8 border border-gray-200 rounded-lg shadow-sm">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-700 ">
            <tr>
              <th className=" text-xs text-white border p-2 border-gray-300  font-normal text-nowrap">
                ID
              </th>
              <th className="text-xs text-white border p-2 border-gray-300  font-normal text-nowrapp">
                FULL NAME
              </th>
              <th className=" text-xs text-white border p-2 border-gray-300  font-normal text-nowrap">
                ROLE
              </th>
              <th className=" text-xs text-white border p-2 border-gray-300  font-normal text-nowrap">
                EMAIL ADDRESS
              </th>
              <th className=" text-xs text-white border p-2 border-gray-300  font-normal text-nowrap">
                PHONE NUMBER
              </th>
              <th className="text-xs text-white border p-2 border-gray-300  font-normal text-nowrap">
                CONTACT ADDRESS
              </th>
              <th className="text-xs text-white border p-2 border-gray-300  font-normal text-nowrap">
                CITY
              </th>
              <th className=" text-xs text-white border p-2 border-gray-300  font-normal text-nowrap">
                STATE
              </th>
              <th className=" text-xs text-white border p-2 border-gray-300  font-normal text-nowrap">
                COUNTRY
              </th>
              <th className="text-xs text-white border p-2 border-gray-300  font-normal text-nowrap">
                EMERGENCY CONTACT
              </th>
              <th className=" text-xs text-white border p-2 border-gray-300  font-normal text-nowrap">
                EMERGENCY ADDRESS
              </th>
              <th className=" text-xs text-white border p-2 border-gray-300  font-normal text-nowrap">
                ACCESS
              </th>
              <th className=" text-xs text-white border p-2 border-gray-300  font-normal text-nowrap">
                ACCESS TYPE
              </th>
            </tr>
          </thead>

          <tbody className="bg-white   divide-gray-200">
            {employee.map((employer) => (
              <tr>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center">
                  {employer.id}
                </td>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center text-nowrap">
                  {employer.name}
                </td>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center text-nowrap">
                  {employer.role}
                </td>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center text-nowrap">
                  {employer.email}
                </td>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center text-nowrap">
                  {employer.phone}
                </td>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center text-nowrap">
                  {employer.address}
                </td>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center text-nowrap">
                  {employer.city}
                </td>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center text-nowrap">
                  {employer.state}
                </td>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center text-nowrap">
                  {employer.country}
                </td>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center text-nowrap">
                  {employer.contact}
                </td>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center text-nowrap">
                  {employer.eaddress}
                </td>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center text-nowrap">
                  {employer.access}
                </td>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center text-nowrap">
                  {employer.access}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default employeedatabase