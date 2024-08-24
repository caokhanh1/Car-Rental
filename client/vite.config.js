import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:7104", // Địa chỉ của API .NET
        changeOrigin: true, // Thay đổi nguồn gốc yêu cầu để khớp với `target`
        secure: false, // Bỏ qua kiểm tra SSL nếu cần (chỉ dùng khi phát triển)
      },
    },
  },
});
