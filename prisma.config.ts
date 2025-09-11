// prisma.config.ts

import { defineConfig } from "prisma/config";
import path from "node:path";
import "dotenv/config"; // Important for loading environment variables

export default defineConfig({
  schema: path.join(__dirname, "prisma", "schema"), // Specifies the directory of your schemas
  // Other optional configuration fields
});
