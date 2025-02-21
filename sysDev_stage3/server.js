const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 
app.use(cors()); 

app.get("/", (req, res) => {
  res.json({ message: "SysDev API is running!" });
});

// Import routes
const memberRoutes = require("./routes/members");
const projectsRoutes = require("./routes/projects");

app.use("/api/members", memberRoutes);
app.use("/api/projects", projectsRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
