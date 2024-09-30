import { useState } from "react";

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Administrator', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Inactive' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Subscriber', status: 'Active' },
  { id: 4, name: 'Emily Davis', email: 'emily@example.com', role: 'Contributor', status: 'Active' },
  { id: 5, name: 'William Brown', email: 'william@example.com', role: 'Subscriber', status: 'Inactive' },
  // Add more data as needed
];
export default function DashUsers() {
  // Sample user data (5 users)
  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     dateCreated: "2023-09-01",
  //     userImage: "https://via.placeholder.com/40",
  //     username: "john_doe",
  //     email: "john@example.com",
  //   },
  //   {
  //     id: 2,
  //     dateCreated: "2023-09-02",
  //     userImage: "https://via.placeholder.com/40",
  //     username: "jane_smith",
  //     email: "jane@example.com",
  //   },
  //   {
  //     id: 3,
  //     dateCreated: "2023-09-03",
  //     userImage: "https://via.placeholder.com/40",
  //     username: "samuel_lee",
  //     email: "samuel@example.com",
  //   },
  //   {
  //     id: 4,
  //     dateCreated: "2023-09-04",
  //     userImage: "https://via.placeholder.com/40",
  //     username: "alice_wong",
  //     email: "alice@example.com",
  //   },
  //   {
  //     id: 5,
  //     dateCreated: "2023-09-05",
  //     userImage: "https://via.placeholder.com/40",
  //     username: "bob_jones",
  //     email: "bob@example.com",
  //   },
  // ]);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter data based on search term
  const filteredData = data.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.status.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container mx-auto px-4 sm:px-8 mt-6">
      <div className="py-8">
        {/* Table Header */}
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-semibold leading-tight">User Statistics</h2>
          {/* Optional: Add Search or Filters Here */}
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* Table */}
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  {/* Table Headers */}
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Table Rows */}
                {data.map((user) => (
                  <tr key={user.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{user.id}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{user.name}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{user.email}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                        <span className="relative">{user.role}</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {user.status === 'Active' ? (
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                          <span className="relative">{user.status}</span>
                        </span>
                      ) : (
                        <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                          <span aria-hidden="true" className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                          <span className="relative">{user.status}</span>
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
                      <button className="text-red-600 hover:text-red-900">Delete</button>
                    </td>
                  </tr>
                ))}
                {/* Add more rows as needed */}
              </tbody>
            </table>
            {/* Pagination */}
            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
              <span className="text-xs xs:text-sm text-gray-900">
                Showing {1} to {data.length} of {data.length} Entries
              </span>
              <div className="inline-flex mt-2 xs:mt-0">
                <button className="text-sm text-indigo-50 bg-indigo-600 px-4 py-2 rounded-l hover:bg-indigo-700">
                  Prev
                </button>
                <button className="text-sm text-indigo-600 bg-indigo-100 px-4 py-2 hover:bg-indigo-200">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
