import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_ZnulstQiP97D@ep-broad-heart-a1hc2ahx-pooler.ap-southeast-1.aws.neon.tech/ai-short-video-generator?sslmode=require&channel_binding=require',
  },
});
