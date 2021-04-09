let { createRandomString } = require("../lib/createRandomString");
let models = require("../model");

let shortenUrl = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let urlExists = await models.Url.findOne({
        url: req.body.url,
      });
      if (urlExists) {
        resolve({
          status: 200,
          data: urlExists,
        });
      } else {
        let url = new models.Url();
        url.url = req.body.url;
        url.shortenedUrl = await createRandomString();
        url = await url.save();
        resolve({
          status: 200,
          data: url,
        });
      }
    } catch (err) {
      reject({ status: 200, message: err.message });
    }
  });
};

let getUrl = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(req.params);
      let url = await models.Url.findOne({
        shortenedUrl: req.params.shortenedUrl,
      });
      if (url) {
        resolve({
          status: 200,
          data: url,
        });
      } else {
        resolve({
          status: 200,
          message: "URL does not exist",
        });
      }
    } catch (err) {
      reject({ status: 200, message: err.message });
    }
  });
};

module.exports = {
  shortenUrl,
  getUrl,
};
