const ContractTerms = () => {
  return (
    <div className="p-6 space-y-6 border rounded-lg bg-white shadow-md dark:bg-gray-800 w-2/4 mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
        Điều Khoản Hợp Đồng
      </h2>
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        <strong>1. Thời Gian Thuê Xe:</strong><br />
        Thời gian thuê xe được xác định rõ ràng trên hợp đồng và không được thay đổi mà không có sự đồng ý của cả hai bên.
      </p>
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        <strong>2. Giá Thuê Xe:</strong><br />
        Giá thuê xe đã được thỏa thuận và sẽ được tính theo từng ngày, tuần hoặc tháng tùy theo lựa chọn của khách hàng.<br />
        Khách hàng phải đặt cọc 30% tổng giá trị thuê xe.
      </p>
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        <strong>3. Quy Định Về Giao Nhận Xe:</strong><br />
        Khách hàng có trách nhiệm kiểm tra tình trạng xe trước khi nhận.<br />
        Xe phải được trả lại đúng hạn đã thỏa thuận trong hợp đồng.
      </p>
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        <strong>4. Phạt Nóng và Phạt Nguội:</strong><br />
        <em>Phạt Nóng:</em> Nếu khách hàng vi phạm luật giao thông và bị cảnh sát giao thông xử phạt ngay lập tức, tất cả các khoản phạt sẽ do khách hàng chịu trách nhiệm.<br />
        <em>Phạt Nguội:</em> Nếu khách hàng vi phạm luật giao thông và bị phạt sau (thông qua camera hoặc hệ thống giám sát), tất cả các khoản phạt sẽ do khách hàng chịu trách nhiệm. Chủ xe sẽ thông báo cho khách hàng về việc nhận được thông báo phạt và yêu cầu thanh toán trong vòng 7 ngày.
      </p>
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        <strong>5. Trách Nhiệm Của Khách Hàng:</strong><br />
        Khách hàng phải sử dụng xe đúng mục đích đã thỏa thuận và không được cho người khác mượn xe mà không có sự đồng ý của chủ xe.<br />
        Khách hàng phải bảo quản xe cẩn thận và chịu trách nhiệm về mọi hư hỏng phát sinh trong thời gian thuê.
      </p>
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        <strong>6. Bảo Hiểm:</strong><br />
        Xe được bảo hiểm theo quy định của pháp luật. Trong trường hợp xảy ra tai nạn, khách hàng phải thông báo ngay cho công ty cho thuê xe và chịu trách nhiệm trong việc xử lý các vấn đề liên quan.
      </p>
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        <strong>7. Điều Khoản Chấm Dứt Hợp Đồng:</strong><br />
        Hợp đồng có thể được chấm dứt nếu một trong hai bên không thực hiện đúng các điều khoản đã cam kết.
      </p>
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        <strong>8. Quyền và Nghĩa Vụ:</strong><br />
        Mọi tranh chấp phát sinh sẽ được giải quyết theo quy định của pháp luật Việt Nam.
      </p>
    </div>
  );
};

export default ContractTerms;
