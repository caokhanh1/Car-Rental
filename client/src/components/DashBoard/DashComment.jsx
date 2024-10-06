// import { useState, useEffect } from "react";
// import { Modal, Table, Button } from "flowbite-react";
// import { HiOutlineExclamationCircle } from "react-icons/hi";
// import axios from "axios";

// export default function DashComments() {
//   const [comments, setComments] = useState([]);
//   const [filteredComments, setFilteredComments] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [commentIdToDelete, setCommentIdToDelete] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Fetch comments from backend
//   useEffect(() => {
//     const fetchComments = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get("http://localhost:5130/api/comments");
//         setComments(response.data);
//         setFilteredComments(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching comments:", err);
//         setError("Failed to fetch comments.");
//         setLoading(false);
//       }
//     };

//     fetchComments();
//   }, []);

//   // Handle search
//   useEffect(() => {
//     if (searchTerm === '') {
//       setFilteredComments(comments);
//     } else {
//       const lowerSearchTerm = searchTerm.toLowerCase();
//       const filtered = comments.filter(comment =>
//         comment.content.toLowerCase().includes(lowerSearchTerm) ||
//         comment.postId.toLowerCase().includes(lowerSearchTerm) ||
//         comment.userId.toLowerCase().includes(lowerSearchTerm)
//       );
//       setFilteredComments(filtered);
//     }
//   }, [searchTerm, comments]);

//   // Handle delete
//   const handleDeleteComment = async () => {
//     try {
//       await axios.delete(`http://localhost:5130/api/comments/${commentIdToDelete}`);
//       setComments(prevComments => prevComments.filter(comment => comment.id !== commentIdToDelete));
//       setFilteredComments(prevComments => prevComments.filter(comment => comment.id !== commentIdToDelete));
//       setShowModal(false);
//     } catch (err) {
//       console.error("Error deleting comment:", err);
//       alert("Failed to delete comment.");
//       setShowModal(false);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 sm:px-8 mt-6">
//       <div className="py-8">
//         {/* Table Header */}
//         <div className="flex justify-between mb-4">
//           <h2 className="text-2xl font-semibold leading-tight">Comments</h2>
//           {/* Search */}
//           <input
//             type="text"
//             placeholder="Search..."
//             className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//         {/* Table */}
//         <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
//           <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
//             <table className="min-w-full leading-normal">
//               <thead>
//                 <tr>
//                   {/* Table Headers */}
//                   <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
//                     ID
//                   </th>
//                   <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
//                     Date Updated
//                   </th>
//                   <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
//                     Content
//                   </th>
//                   <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
//                     Likes
//                   </th>
//                   <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
//                     Post ID
//                   </th>
//                   <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
//                     User ID
//                   </th>
//                   <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Table Rows */}
//                 {filteredComments.map((comment) => (
//                   <tr key={comment.id}>
//                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                       <p className="text-gray-900 whitespace-no-wrap">{comment.id}</p>
//                     </td>
//                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                       <p className="text-gray-900 whitespace-no-wrap">{new Date(comment.updatedAt).toLocaleDateString()}</p>
//                     </td>
//                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                       <p className="text-gray-900 whitespace-no-wrap">{comment.content}</p>
//                     </td>
//                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                       <p className="text-gray-900 whitespace-no-wrap">{comment.numberOfLikes}</p>
//                     </td>
//                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                       <p className="text-gray-900 whitespace-no-wrap">{comment.postId}</p>
//                     </td>
//                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                       <p className="text-gray-900 whitespace-no-wrap">{comment.userId}</p>
//                     </td>
//                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                       <button
//                         onClick={() => {
//                           setShowModal(true);
//                           setCommentIdToDelete(comment.id);
//                         }}
//                         className="text-red-600 hover:text-red-900 mr-2"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             {/* Pagination - Optional */}
//             <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
//               <span className="text-xs xs:text-sm text-gray-900">
//                 Showing {1} to {filteredComments.length} of {comments.length} Entries
//               </span>
//               <div className="inline-flex mt-2 xs:mt-0">
//                 <button className="text-sm text-indigo-50 bg-indigo-600 px-4 py-2 rounded-l hover:bg-indigo-700">
//                   Prev
//                 </button>
//                 <button className="text-sm text-indigo-600 bg-indigo-100 px-4 py-2 hover:bg-indigo-200">
//                   Next
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Delete Confirmation Modal */}
//       <Modal
//         show={showModal}
//         onClose={() => setShowModal(false)}
//         popup
//         size="md"
//       >
//         <Modal.Header />
//         <Modal.Body>
//           <div className="text-center">
//             <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
//             <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
//               Are you sure you want to delete this comment?
//             </h3>
//             <div className="flex justify-center gap-4">
//               <Button color="failure" onClick={handleDeleteComment}>
//                 Yes, I m sure
//               </Button>
//               <Button color="gray" onClick={() => setShowModal(false)}>
//                 No, cancel
//               </Button>
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }
// src/components/DashComments.js
import { useState } from "react";
import { Modal, Button } from "flowbite-react";
import { HiOutlineExclamationCircle, HiTrash } from "react-icons/hi";

const initialComments = [
  { id: 1, updatedAt: '2024-09-24', content: 'Great service!', numberOfLikes: 23, postId: 'post1', userId: 'user1' },
  { id: 2, updatedAt: '2024-09-23', content: 'Easy to use and convenient.', numberOfLikes: 15, postId: 'post2', userId: 'user2' },
  { id: 3, updatedAt: '2024-09-22', content: 'Could be improved in some areas.', numberOfLikes: 9, postId: 'post3', userId: 'user3' },
  { id: 4, updatedAt: '2024-09-21', content: 'The pricing is a bit high.', numberOfLikes: 12, postId: 'post4', userId: 'user4' },
  { id: 5, updatedAt: '2024-09-20', content: 'Highly recommended for tourists!', numberOfLikes: 30, postId: 'post5', userId: 'user5' },
  { id: 6, updatedAt: '2024-09-19', content: 'Booking process was seamless.', numberOfLikes: 20, postId: 'post6', userId: 'user6' },
  { id: 7, updatedAt: '2024-09-18', content: 'Had some issues with customer support.', numberOfLikes: 7, postId: 'post7', userId: 'user7' },
  { id: 8, updatedAt: '2024-09-17', content: 'Cars are in great condition!', numberOfLikes: 25, postId: 'post8', userId: 'user8' },
  { id: 9, updatedAt: '2024-09-16', content: 'Will definitely rent again.', numberOfLikes: 18, postId: 'post9', userId: 'user9' },
  { id: 10, updatedAt: '2024-09-15', content: 'Overall a good experience.', numberOfLikes: 22, postId: 'post10', userId: 'user10' },
  // Thêm dữ liệu mẫu khác nếu cần
];

const DashComments = () => {
  const [comments, setComments] = useState(initialComments);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [commentIdToDelete, setCommentIdToDelete] = useState("");

  // Phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 5;

  // Tính tổng số trang
  // const totalPages = Math.ceil(comments.length / commentsPerPage);

  // Lấy các bình luận của trang hiện tại
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  // const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

  // Lọc dữ liệu dựa trên searchTerm
  const filteredComments = comments.filter(
    (comment) =>
      comment.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.postId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.userId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Tính tổng số trang sau khi lọc
  const filteredTotalPages = Math.ceil(filteredComments.length / commentsPerPage);

  // Lấy bình luận của trang hiện tại sau khi lọc
  const displayedComments = filteredComments.slice(indexOfFirstComment, indexOfLastComment);

  // Xử lý chuyển trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Xử lý xóa comment
  const handleDeleteComment = () => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentIdToDelete)
    );
    setShowModal(false);

    // Nếu xóa một comment khiến số trang giảm, cập nhật currentPage nếu cần
    if (filteredComments.length % commentsPerPage === 1 && currentPage === filteredTotalPages && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 mt-6">
      <div className="py-8">
        {/* Tiêu đề và tìm kiếm */}
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-semibold leading-tight">Comments</h2>
          <input
            type="text"
            placeholder="Search by content, Post ID, or User ID..."
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset về trang đầu khi tìm kiếm
            }}
          />
        </div>

        {/* Bảng hiển thị comments */}
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  {/* Tiêu đề cột */}
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    ID
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Date Updated
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Content
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Likes
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Post ID
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    User ID
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Dòng dữ liệu */}
                {displayedComments.map((comment) => (
                  <tr key={comment.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{comment.id}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{new Date(comment.updatedAt).toLocaleDateString()}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{comment.content}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{comment.numberOfLikes}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{comment.postId}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{comment.userId}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <button
                        onClick={() => {
                          setShowModal(true);
                          setCommentIdToDelete(comment.id);
                        }}
                        className="text-red-600 hover:text-red-900 flex items-center"
                      >
                        <HiTrash className="mr-1" /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {/* Thông báo khi không có dữ liệu */}
                {displayedComments.length === 0 && (
                  <tr>
                    <td colSpan="7" className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                      No comments found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Phần phân trang */}
            <div className="px-5 py-5 bg-white border-t flex flex-col sm:flex-row items-center sm:justify-between">
              <span className="text-xs sm:text-sm text-gray-900">
                Showing {filteredComments.length > 0 ? indexOfFirstComment + 1 : 0} to {Math.min(indexOfLastComment, filteredComments.length)} of {filteredComments.length} Entries
              </span>
              <div className="inline-flex mt-2 sm:mt-0">
                {/* Nút Prev */}
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`text-sm px-4 py-2 rounded-l border ${
                    currentPage === 1
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  Prev
                </button>

                {/* Các nút số trang */}
                {[...Array(filteredTotalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className={`text-sm px-4 py-2 border-t border-b border-gray-200 ${
                      currentPage === index + 1
                        ? "bg-indigo-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                {/* Nút Next */}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === filteredTotalPages || filteredTotalPages === 0}
                  className={`text-sm px-4 py-2 rounded-r border ${
                    currentPage === filteredTotalPages || filteredTotalPages === 0
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal xác nhận xóa */}
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

export default DashComments;
