const trainer = require("./trainerSchema");
const jwt = require("jsonwebtoken");

const multer = require("multer");
const tutorial = require("./tutorial");
// const cart = require('../user/cart_model')

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("video");

//registration

const addTutorial = (req, res) => {
  let date = new Date();
  const newtrainer = new tutorial({
    title: req.body.title,

    category: req.body.category,
    video: req.file,
    pgmid: req.body.pgmid,
    trainerid: req.body.trainerid,

    description: req.body.description,
    date: date,
    chapterNo: req.body.chapterNo,
  });
  newtrainer
    .save()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Inserted successfully",
        data: data,
      });
    })
    .catch((err) => {
      if (err.code == 11000) {
        res.json({
          status: 500,
          msg: " already registered with us. Please try to Log in",
          Error: err,
        });
      } else {
        res.json({
          status: 500,
          msg: "Please enter all the mandatory fields",
          Error: err,
        });
      }
    });
};
//newTrainer Registration -- finished

//View all tutorials

const viewtutorials = (req, res) => {
  tutorial
    .find({ isactive: true })
    .populate("trainerid")
    .populate("pgmid")
    .exec()
    .then((data) => {
      if (data.length > 0) {
        res.json({
          status: 200,
          msg: "Data obtained successfully",
          data: data,
        });
      } else {
        res.json({
          status: 200,
          msg: "No Data obtained ",
        });
      }
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Data not obtained",
        Error: err,
      });
    });
};

// view tutorials finished

//view tutorial by trainer
const viewtutorialByTrainerId = (req, res) => {
  tutorial
    .find({ isactive: true, trainerid: req.params.id })
    .populate("pgmid")
    .exec()
    .then((data) => {
      if (data.length > 0) {
        res.json({
          status: 200,
          msg: "Data obtained successfully",
          data: data,
        });
      } else {
        res.json({
          status: 200,
          msg: "No Data obtained ",
        });
      }
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Data not obtained",
        Error: err,
      });
    });
};

//view tutorial by trainer
const viewtutorialByPgmId = (req, res) => {
  tutorial
    .find({ isactive: true, pgmid: req.params.id })
    .populate("trainerid")
    .exec()
    .then((data) => {
      if (data.length > 0) {
        res.json({
          status: 200,
          msg: "Data obtained successfully",
          data: data,
        });
      } else {
        res.json({
          status: 200,
          msg: "No Data obtained ",
        });
      }
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Data not obtained",
        Error: err,
      });
    });
};
//View  tutorial by ID

const viewTutorialById = (req, res) => {
  tutorial
    .findOne({ _id: req.params.id })
    .populate("trainerid")
    .exec()
    .then((data) => {
      console.log(data);
      res.json({
        status: 200,
        msg: "Data obtained successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: 500,
        msg: "No Data obtained",
        Error: err,
      });
    });
};

//Remove  Trainer by ID

const removeTutorialById = (req, res) => {
  tutorial
    .findByIdAndDelete({ _id: req.body.id })
    .exec()
    .then((data) => {
      console.log(data);
      res.json({
        status: 200,
        msg: "Data removed  successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: 500,
        msg: "No Data obtained",
        Error: err,
      });
    });
};

//View all  tutorial requests by pgm id

const viewTutorialRequestsByPgmId = (req, res) => {
  tutorial
    .find({ isactive: false, pgmid: req.params.id })
    // .populate("trainerid")
    // .populate("pgmid")
    .exec()
    .then((data) => {
      if (data.length > 0) {
        res.json({
          status: 200,
          msg: "Data obtained successfully",
          data: data,
        });
      } else {
        res.json({
          status: 200,
          msg: "No Data obtained ",
        });
      }
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Data not Inserted",
        Error: err,
      });
    });
};
//trainer Approval by admin
const Approvetutorial = (req, res) => {
  tutorial
    .findByIdAndUpdate(
      { _id: req.params.id },
      {
        isactive: true,
      }
    )
    .exec()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Updated successfully",
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Data not Updated",
        Error: err,
      });
    });
};

module.exports = {
  addTutorial,
  viewtutorials,
  removeTutorialById,
  viewTutorialById,
  upload,
  viewTutorialRequestsByPgmId,
  viewtutorialByTrainerId,
  Approvetutorial,
  viewtutorialByPgmId,
};
