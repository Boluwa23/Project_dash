import React from 'react'

const customerdatabase = () => {
  const customers = [
    {
      id: "01",
      name: "John Doe",
      address: "23 Oba Adesida Road",
      phone: +2345678908,
      email: "johndoe@gmail.com",
    },
    {
      id: "02",
      name: "John Doe",
      address: "23 Oba Adesida Road",
      phone: +2345678908,
      email: "johndoe@gmail.com",
    },
    {
      id: "03",
      name: "John Doe",
      address: "23 Oba Adesida Road",
      phone: +2345678908,
      email: "johndoe@gmail.com",
    },
    {
      id: "04",
      name: "John Doe",
      address: "23 Oba Adesida Road",
      phone: +2345678908,
      email: "johndoe@gmail.com",
    },
    {
      id: "05",
      name: "John Doe",
      address: "23 Oba Adesida Road",
      phone: +2345678908,
      email: "johndoe@gmail.com",
    },
    {
      id: "06",
      name: "John Doe",
      address: "23 Oba Adesida Road",
      phone: +2345678908,
      email: "johndoe@gmail.com",
    },
    {
      id: "07",
      name: "John Doe",
      address: "23 Oba Adesida Road",
      phone: +2345678908,
      email: "johndoe@gmail.com",
    },
    {
      id: "08",
      name: "John Doe",
      address: "23 Oba Adesida Road",
      phone: +2345678908,
      email: "johndoe@gmail.com",
    },
    {
      id: "09",
      name: "John Doe",
      address: "23 Oba Adesida Road",
      phone: +2345678908,
      email: "johndoe@gmail.com",
    },
    {
      id: "10",
      name: "John Doe",
      address: "23 Oba Adesida Road",
      phone: +2345678908,
      email: "johndoe@gmail.com",
    },
    {
      id: "11",
      name: "John Doe",
      address: "23 Oba Adesida Road",
      phone: +2345678908,
      email: "johndoe@gmail.com",
    },
    {
      id: "12",
      name: "John Doe",
      address: "23 Oba Adesida Road",
      phone: +2345678908,
      email: "johndoe@gmail.com",
    },
  ];


  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-[30px] font-medium">CUSTOMER DATABASE</h1>
        <button className="text-white bg-blue-600 px-4 py-2 rounded-lg ">
          Export Customer's CSV
        </button>
      </div>

      <div className="overflow-x-auto border mt-8 border-gray-200 rounded-lg shadow-sm">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-600">
            <tr className="">
              <th className="text-white border p-2 border-gray-300  font-normal">
                ID
              </th>
              <th className="text-white border border-gray-300  p-2 font-normal">
                CUSTOMER NAME
              </th>
              <th className="text-white border border-gray-300  p-2 font-normal">
                CUSTOMER ADDRESS
              </th>
              <th className="text-white p-2 border-gray-300  font-normal">
                CUSTOMER PHONE NUMBER
              </th>
              <th className="text-white p-2 border-gray-300  font-normal">
                CUSTOMER EMAIL ADDRESS
              </th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr>
                <td className="px-6 py-4 border border-gray-300 text-sm text-gray-900 text-center">
                  {customer.id}
                </td>
                <td className="px-6 py-4 border border-gray-300  text-center text-sm text-gray-900">
                  {customer.name}
                </td>
                <td className="px-6 py-4 border border-gray-300  text-center text-sm text-gray-900">
                  {customer.address}
                </td>
                <td className="px-6 py-4 border border-gray-300  text-center text-sm text-gray-900">
                  {customer.phone}
                </td>
                <td className="px-6 py-4 border border-gray-300  text-center text-sm text-gray-900">
                  {customer.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default customerdatabase