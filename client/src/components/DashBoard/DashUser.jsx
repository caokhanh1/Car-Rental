import { Modal, Table, Button } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle, HiOutlineSearch } from "react-icons/hi";

export default function DashUsers() {
  // Sample user data (5 users)
  const [users, setUsers] = useState([
    {
      id: 1,
      dateCreated: "2023-09-01",
      userImage: "https://via.placeholder.com/40",
      username: "john_doe",
      email: "john@example.com",
    },
    {
      id: 2,
      dateCreated: "2023-09-02",
      userImage: "https://via.placeholder.com/40",
      username: "jane_smith",
      email: "jane@example.com",
    },
    {
      id: 3,
      dateCreated: "2023-09-03",
      userImage: "https://via.placeholder.com/40",
      username: "samuel_lee",
      email: "samuel@example.com",
    },
    {
      id: 4,
      dateCreated: "2023-09-04",
      userImage: "https://via.placeholder.com/40",
      username: "alice_wong",
      email: "alice@example.com",
    },
    {
      id: 5,
      dateCreated: "2023-09-05",
      userImage: "https://via.placeholder.com/40",
      username: "bob_jones",
      email: "bob@example.com",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Function to handle delete click
  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    // Perform delete action here
    setUsers(users.filter((user) => user.id !== selectedUser.id));
    setShowModal(false);
    setSelectedUser(null);
  };

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      <Table hoverable className="shadow-md">
        <Table.Head>
          <Table.HeadCell>Date created</Table.HeadCell>
          <Table.HeadCell>User image</Table.HeadCell>
          <Table.HeadCell>Username</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Delete</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {users.map((user) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={user.id}
            >
              <Table.Cell>{user.dateCreated}</Table.Cell>
              <Table.Cell>
                <img
                  src={user.userImage}
                  alt={user.username}
                  className="w-10 h-10 object-cover bg-gray-500 rounded-full"
                />
              </Table.Cell>
              <Table.Cell>{user.username}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>
                <span
                  className="font-medium text-red-500 hover:underline cursor-pointer"
                  onClick={() => handleDeleteClick(user)}
                >
                  Delete
                </span>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>Delete User</Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete {selectedUser?.username}?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleConfirmDelete}>
                Yes, Im sure
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
