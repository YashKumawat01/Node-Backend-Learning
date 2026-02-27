const express = require("express");
const fs = require("fs");
const app = express();
const port = 8000;

const FILE = "./MOCK_DATA (1).json";
const users = require(FILE);

// ================== Middleware ================
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Custom Middleware

app.use((req,res,next)=>{
  fs.appendFile("log.txt",`${Date.now()}: ${req.method} : ${req.path}\n`,(err,data)=>{
    next();
  })
  // next();
})

// Main Page
app.get("/", (req, res) => {
  return res.send("Server is For Users");
});

//================ HTML users page ================
app.get("/users", (req, res) => {
  const html = `
  <ul>
  ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>
  `;
  res.send(html);
});

// ================= USERS COLLECTION =================

app.route("/api/users")

  // GET ALL
  .get((req, res) => {
    return res.json(users);
  })

  // CREATE
  .post((req, res) => {
    const body = req.body;

    // ID generation
    const maxId = users.reduce((max, u) => Math.max(max, u.id), 0);

    const newUser = {
      id: maxId + 1,
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      gender: body.gender,
      job_title: body.job_title,
    };

    users.push(newUser);

    fs.writeFile(FILE, JSON.stringify(users, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "File write failed" });

      return res.json({ status: "success", user: newUser });
    });
  });

// ================= SINGLE USER =================

app.route("/api/users/:id")

  // GET ONE
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((u) => u.id === id);

    if (!user) return res.status(404).json({ error: "User not found" });

    return res.json(user);
  })

  // PATCH
  .patch((req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex((u) => u.id === id);

    if (index === -1) {
      return res.status(404).json({ error: "User not found" });
    }

    users[index] = {
      ...users[index],
      ...req.body,
    };

    fs.writeFile(FILE, JSON.stringify(users, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "File update failed" });

      return res.json({
        status: "success",
        updated: users[index],
      });
    });
  })

  // DELETE
  .delete((req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex((u) => u.id === id);

    if (index === -1) {
      return res.status(404).json({ error: "User not found" });
    }

    const deletedUser = users.splice(index, 1);

    fs.writeFile(FILE, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to update file" });
      }

      return res.json({
        status: "success",
        deleted: deletedUser[0],
      });
    });
  });

app.listen(port, () => console.log(`Server is Started at Port : ${port}`));