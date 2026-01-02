const express = require("express");
const app = express();

app.use(express.json());
const crudRoutes = require("./routes/crud"); // middleware
app.use("/employees", crudRoutes);
app.get('/',(req,res)=>{
  res.send("Student Management API is running");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
