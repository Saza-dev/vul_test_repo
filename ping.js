const express = require("express");
const { exec } = require("child_process");
const app = express();

app.use(express.json());

app.post("/api/ping", (req, res) => {
  const target = req.body.target;
  exec(`ping -c 4 ${target}`, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).send(`Command failed: ${stderr}`);
    }
    res.send(`Result:\n${stdout}`);
  });
});

app.listen(3000, () => { 
  console.log("Ping service running on port 3000");
});
