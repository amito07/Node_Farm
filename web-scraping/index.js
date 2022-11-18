const https = require("https");
const fs = require("fs");

const request = https.request(
  {
    hostname: "en.wikipedia.org",
    port: 443,
    path: "/wiki/World_Wide_Web",
    method: "GET",
  },
  (result) => {
    let gg = "";
    result.on("data", (databuffer) => {
      const partialHTML = databuffer.toString();
      gg += partialHTML;
    });

    result.on("end", () => {
      fs.writeFile("../web-scraping/output.txt", gg, (err) => {
        if (err) throw err;
      });
    });
  }
);

request.on("error", (error) => {
  console.error(error);
});

request.end();
