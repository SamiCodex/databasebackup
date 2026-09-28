const express = require("express");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/students");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());
app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send(`
    <h1>Complete Student REST API with JWT Protection</h1>
    <p>This API supports JWT Authentication and Authorization.</p>
    <ul>
      <li>GET /api/students (Public)</li>
      <li>GET /api/students/:id (Public)</li>
      <li>POST /api/students (Protected)</li>
      <li>PATCH /api/students/:id (Protected)</li>
      <li>DELETE /api/students/:id (Protected)</li>
      <li>POST /api/auth/register</li>
      <li>POST /api/auth/login</li>
    </ul>
  `);
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
