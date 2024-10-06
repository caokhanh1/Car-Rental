
import { useState } from "react";
import { Modal, Button, TextInput, Label } from "flowbite-react";
import { HiOutlineExclamationCircle, HiPlus } from "react-icons/hi";

const initialCoupons = [
  { id: 1, code: 'DISCOUNT10', discountAmount: 10, expiryDate: '2024-12-31', status: 'Active' },
  { id: 2, code: 'SAVE20', discountAmount: 20, expiryDate: '2024-11-30', status: 'Inactive' },
  { id: 3, code: 'FREESHIP', discountAmount: 0, expiryDate: '2024-10-15', status: 'Active' },
  // Thêm dữ liệu mẫu khác nếu cần
];

export default function DashCoupon() {
  const [coupons, setCoupons] = useState(initialCoupons);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newCoupon, setNewCoupon] = useState({
    code: '',
    discountAmount: '',
    expiryDate: '',
    status: 'Active',
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [couponIdToDelete, setCouponIdToDelete] = useState("");

  // Lọc dữ liệu dựa trên searchTerm
  const filteredCoupons = coupons.filter(
    (coupon) =>
      coupon.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coupon.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coupon.discountAmount.toString().includes(searchTerm.toLowerCase()) ||
      coupon.expiryDate.includes(searchTerm)
  );

  // Xử lý thay đổi trong form tạo mã giảm giá
  const handleChange = (e) => {
    setNewCoupon({
      ...newCoupon,
      [e.target.id]: e.target.value,
    });
  };

  // Xử lý tạo mã giảm giá mới
  const handleCreateCoupon = () => {
    if (!newCoupon.code || !newCoupon.discountAmount || !newCoupon.expiryDate) {
      alert("Vui lòng điền đầy đủ thông tin mã giảm giá.");
      return;
    }

    const newId = coupons.length > 0 ? coupons[coupons.length - 1].id + 1 : 1;
    const createdCoupon = {
      id: newId,
      code: newCoupon.code,
      discountAmount: parseFloat(newCoupon.discountAmount),
      expiryDate: newCoupon.expiryDate,
      status: newCoupon.status,
    };

    setCoupons([...coupons, createdCoupon]);
    setNewCoupon({ code: '', discountAmount: '', expiryDate: '', status: 'Active' });
    setShowModal(false);
  };

  // Xử lý xóa mã giảm giá
  const handleDeleteCoupon = () => {
    setCoupons((prevCoupons) =>
      prevCoupons.filter((coupon) => coupon.id !== couponIdToDelete)
    );
    setShowDeleteModal(false);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 mt-6">
      <div className="py-8">
        {/* Tiêu đề và tìm kiếm */}
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-semibold leading-tight">Coupons</h2>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button onClick={() => setShowModal(true)} gradientDuoTone="cyanToBlue">
              <HiPlus className="mr-2" /> Add Coupon
            </Button>
          </div>
        </div>

        {/* Bảng hiển thị coupons */}
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
                    Code
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Discount Amount (%)
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Expiry Date
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Status
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Dòng dữ liệu */}
                {filteredCoupons.map((coupon) => (
                  <tr key={coupon.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{coupon.id}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{coupon.code}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{coupon.discountAmount}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{new Date(coupon.expiryDate).toLocaleDateString()}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {coupon.status === 'Active' ? (
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                          <span className="relative">{coupon.status}</span>
                        </span>
                      ) : (
                        <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                          <span aria-hidden="true" className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                          <span className="relative">{coupon.status}</span>
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <button
                        onClick={() => {
                          setShowDeleteModal(true);
                          setCouponIdToDelete(coupon.id);
                        }}
                        className="text-red-600 hover:text-red-900 mr-2"
                      >
                        Delete
                      </button>
                      {/* Nếu muốn thêm chức năng Edit, bạn có thể thêm nút Edit ở đây */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Phần phân trang - Tùy chọn */}
            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
              <span className="text-xs xs:text-sm text-gray-900">
                Showing {filteredCoupons.length > 0 ? 1 : 0} to {filteredCoupons.length} of {coupons.length} Entries
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

      {/* Modal Tạo Mã Giảm Giá */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>Create New Coupon</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <div>
              <Label htmlFor="code" value="Coupon Code" />
              <TextInput
                id="code"
                type="text"
                placeholder="Enter coupon code"
                value={newCoupon.code}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="discountAmount" value="Discount Amount (%)" />
              <TextInput
                id="discountAmount"
                type="number"
                placeholder="e.g., 10 for 10%"
                value={newCoupon.discountAmount}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="expiryDate" value="Expiry Date" />
              <TextInput
                id="expiryDate"
                type="date"
                value={newCoupon.expiryDate}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="status" value="Status" />
              <select
                id="status"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={newCoupon.status}
                onChange={(e) => setNewCoupon({ ...newCoupon, status: e.target.value })}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="failure" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button onClick={handleCreateCoupon}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Xác Nhận Xóa */}
      <Modal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this coupon?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeleteCoupon}>
                Yes, Im sure
              </Button>
              <Button color="gray" onClick={() => setShowDeleteModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
