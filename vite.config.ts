import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/photo-app-latest-devbox/", // 👈 Add this line
  server: {
    allowedHosts: [
      "rgyhv3-5174.csb.app", // Allow this host
      // You can add any other allowed hosts here if necessary
    ],
  },
});
