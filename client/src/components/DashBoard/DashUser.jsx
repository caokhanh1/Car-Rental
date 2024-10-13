import { useState, useEffect } from "react";
import { Modal, Button, TextInput, Label } from "flowbite-react";
import { HiOutlineExclamationCircle, HiPencil, HiTrash } from "react-icons/hi";
import axios from "axios";

export default function DashUsers() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [showEditModal, setShowEditModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    axios
      .get("/api/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEdit = (user) => {
    setCurrentUser(user);
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    axios
      .put(`/api/users/${currentUser.id}`, currentUser)
      .then(() => {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === currentUser.id ? currentUser : user
          )
        );
        setShowEditModal(false);
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  const handleDelete = (id) => {
    setUserIdToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    axios
      .delete(`/api/users/${userIdToDelete}`)
      .then(() => {
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user.id !== userIdToDelete)
        );
        setShowDeleteModal(false);
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 mt-6">
      <div className="py-8">
        {/* Table Header */}
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-semibold leading-tight">
            User Statistics
          </h2>
          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
        {/* Table */}
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th scope="col" className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    ID
                  </th>
                  <th scope="col" className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Name
                  </th>
                  <th scope="col" className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                  >
                    Email
                  </th>
                  <th scope="col" className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                  >
                    Role
                  </th>
                  <th scope="col" className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                  >
                    Status
                  </th>
                  <th scope="col" className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {user.id}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {user.name}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {user.email}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span
                        className={`relative inline-block px-3 py-1 font-semibold text-${
                          user.role === "Administrator"
                            ? "red"
                            : user.role === "Editor"
                            ? "blue"
                            : "green"
                        }-900 leading-tight`}
                      >
                        <span
                          aria-hidden="true"
                          className={`absolute inset-0 bg-${
                            user.role === "Administrator"
                              ? "red"
                              : user.role === "Editor"
                              ? "blue"
                              : "green"
                          }-200 opacity-50 rounded-full`}
                        ></span>
                        <span className="relative">{user.role}</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {user.status === "Active" ? (
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">{user.status}</span>
                        </span>
                      ) : (
                        <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">{user.status}</span>
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex space-x-2">
                      <button
                        onClick={() => handleEdit(user)}
                        className="text-indigo-600 hover:text-indigo-900 flex items-center"
                      >
                        <HiPencil className="mr-1" /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="text-red-600 hover:text-red-900 flex items-center"
                      >
                        <HiTrash className="mr-1" /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Pagination */}
            <div className="px-5 py-5 bg-white border-t flex flex-col sm:flex-row items-center sm:justify-between">
              <span className="text-xs sm:text-sm text-gray-900">
                Showing {indexOfFirstUser + 1} to{" "}
                {Math.min(indexOfLastUser, filteredUsers.length)} of{" "}
                {filteredUsers.length} Entries
              </span>
              <div className="inline-flex mt-2 sm:mt-0">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className={`text-sm px-4 py-2 leading-tight ${
                      currentPage === index + 1
                        ? "bg-indigo-600 text-white"
                        : "bg-white text-indigo-600 border-indigo-600"
                    } border border-r-0 hover:bg-indigo-600 hover:text-white`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <Modal show={showEditModal} onClose={() => setShowEditModal(false)}>
          <Modal.Header>Edit User</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <div>
                <Label htmlFor="name" value="Name" />
                <TextInput
                  id="name"
                  type="text"
                  value={currentUser.name}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, name: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="email" value="Email" />
                <TextInput
                  id="email"
                  type="email"
                  value={currentUser.email}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, email: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="role" value="Role" />
                <TextInput
                  id="role"
                  type="text"
                  value={currentUser.role}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, role: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="status" value="Status" />
                <TextInput
                  id="status"
                  type="text"
                  value={currentUser.status}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, status: e.target.value })
                  }
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleSaveEdit}>Save Changes</Button>
            <Button onClick={() => setShowEditModal(false)} color="gray">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <Modal show={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
          <Modal.Header>
            <HiOutlineExclamationCircle className="h-6 w-6 text-red-600" />
            Confirm Delete
          </Modal.Header>
          <Modal.Body>
            <p>
              Are you sure you want to delete this user? This action cannot be
              undone.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={confirmDelete} color="failure">
              Confirm
            </Button>
            <Button onClick={() => setShowDeleteModal(false)} color="gray">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
