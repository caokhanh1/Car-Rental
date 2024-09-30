import { Modal, Table, Button } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function DashComments() {
  const [comments, setComments] = useState([
    {
      _id: "1",
      updatedAt: "2024-09-24",
      content: "Great service!",
      numberOfLikes: 23,
      postId: "post1",
      userId: "user1",
    },
    {
      _id: "2",
      updatedAt: "2024-09-23",
      content: "Easy to use and convenient.",
      numberOfLikes: 15,
      postId: "post2",
      userId: "user2",
    },
    {
      _id: "3",
      updatedAt: "2024-09-22",
      content: "Could be improved in some areas.",
      numberOfLikes: 9,
      postId: "post3",
      userId: "user3",
    },
    {
      _id: "4",
      updatedAt: "2024-09-21",
      content: "The pricing is a bit high.",
      numberOfLikes: 12,
      postId: "post4",
      userId: "user4",
    },
    {
      _id: "5",
      updatedAt: "2024-09-20",
      content: "Highly recommended for tourists!",
      numberOfLikes: 30,
      postId: "post5",
      userId: "user5",
    },
    {
      _id: "6",
      updatedAt: "2024-09-19",
      content: "Booking process was seamless.",
      numberOfLikes: 20,
      postId: "post6",
      userId: "user6",
    },
    {
      _id: "7",
      updatedAt: "2024-09-18",
      content: "Had some issues with customer support.",
      numberOfLikes: 7,
      postId: "post7",
      userId: "user7",
    },
    {
      _id: "8",
      updatedAt: "2024-09-17",
      content: "Cars are in great condition!",
      numberOfLikes: 25,
      postId: "post8",
      userId: "user8",
    },
    {
      _id: "9",
      updatedAt: "2024-09-16",
      content: "Will definitely rent again.",
      numberOfLikes: 18,
      postId: "post9",
      userId: "user9",
    },
    {
      _id: "10",
      updatedAt: "2024-09-15",
      content: "Overall a good experience.",
      numberOfLikes: 22,
      postId: "post10",
      userId: "user10",
    },
  ]);

  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [commentIdToDelete, setCommentIdToDelete] = useState("");

  const handleShowMore = async () => {
    // Simulate loading more comments
  };

  const handleDeleteComment = async () => {
    // Simulate deleting the comment
    setComments((prevComments) =>
      prevComments.filter((comment) => comment._id !== commentIdToDelete)
    );
    setShowModal(false);
  };

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      {comments.length > 0 ? (
        <>
          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell>Date updated</Table.HeadCell>
              <Table.HeadCell>Comment content</Table.HeadCell>
              <Table.HeadCell>Number of likes</Table.HeadCell>
              <Table.HeadCell>PostId</Table.HeadCell>
              <Table.HeadCell>UserId</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
            </Table.Head>
            {comments.map((comment) => (
              <Table.Body className="divide-y" key={comment._id}>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>
                    {new Date(comment.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>{comment.content}</Table.Cell>
                  <Table.Cell>{comment.numberOfLikes}</Table.Cell>
                  <Table.Cell>{comment.postId}</Table.Cell>
                  <Table.Cell>{comment.userId}</Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setCommentIdToDelete(comment._id);
                      }}
                      className="font-medium text-red-500 hover:underline cursor-pointer"
                    >
                      Delete
                    </span>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className="w-full text-teal-500 self-center text-sm py-7"
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <p>You have no comments yet!</p>
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this comment?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeleteComment}>
                Yes, I'm sure
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
