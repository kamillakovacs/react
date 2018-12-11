const express = require('express'),
  app = express(), 
  PORT = 3000;

app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});

module.exports = app;