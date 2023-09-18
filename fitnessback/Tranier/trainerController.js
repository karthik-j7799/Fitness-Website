const trainer = require("./trainerSchema");
const jwt = require("jsonwebtoken");

const multer = require("multer");
const gymSchema = require("../Gym/gymSchema");
const doctorSchema = require("../Doctor/doctorSchema");

const customerSchema = require("../Customer/customerSchema");

// const cart = require('../user/cart_model')

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("certificate");

//registration

const registerTrainer = async (req, res) => {
  let cust = await customerSchema.find({ email: req.body.email });
  let gym = await gymSchema.find({ email: req.body.email });
  let dr = await doctorSchema.find({ email: req.body.email });
  console.log(dr);
  if (dr.length > 0 || gym.length > 0 || cust.length > 0) {
    res.json({
      status: 500,
      msg: "Mail id already registered with us. Please try to Log in",
    });
  } else {
    const newtrainer = new trainer({
      name: req.body.name,
      gender: req.body.gender,
      age: req.body.age,
      certificate: req.file,
      contact: req.body.contact,
      email: req.body.email,
      password: req.body.password,
      aadhar: req.body.aadhar,
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
            msg: "Mail id already registered with us. Please try to Log in",
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
  }
};
//newTrainer Registration -- finished
//login
const secret = "your-secret-key"; // Replace this with your own secret key

const createToken = (user) => {
  return jwt.sign({ userId: user._id }, secret, { expiresIn: "1h" });
};

const login = (req, res) => {
  const { email, password } = req.body;

  trainer.findOne({ email }, (err, user) => {
    if (err) {
      return res.status(500).json({ msg: "Something went wrong" });
    }

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    if (user.password != password) {
      return res.status(500).json({ msg: "Password Mismatch " });
    }

    const token = createToken(user);

    res.status(200).json({ user, token });
  });
};

//validate
//const secret = 'your-secret-key'; // Replace this with your own secret key

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  console.log("t1", token);
  console.log("secret", secret);
  if (!token) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  jwt.verify(token, secret, (err, decodedToken) => {
    console.log(decodedToken);
    if (err) {
      return res.status(401).json({ messamsgge: "Unauthorized", err: err });
    }

    req.user = decodedToken.userId;
    next();
    return res.status(200).json({ msg: "ok", user: decodedToken.userId });
  });
  console.log(req.user);
};
//end validate

//View all viewGyms

const viewTrainers = (req, res) => {
  trainer
    .find({ isactive: true })
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

// view Trainer finished

//update Trainer by id
const editTrainerById = (req, res) => {
  trainer
    .findByIdAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
        contact: req.body.contact,
        email: req.body.email,
      }
    )
    .exec()
    .then((data1) => {
      res.json({
        status: 200,
        msg: "Updated successfully",
        data:data1
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
//View  Trainer by ID

const viewTrainerById = (req, res) => {
  trainer
    .findOne({ _id: req.params.id })
    .exec()
    .then((data) => {
      emps = data;
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

const removeTrainerById = (req, res) => {
  trainer
    .findByIdAndDelete({ _id: req.params.id })
    .exec()
    .then((data) => {
      emps = data;
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

//View all  Trainer requests

const viewTrainerRequests = (req, res) => {
  trainer
    .find({ isactive: false })
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
const ApproveTrainer = (req, res) => {
  trainer
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

//forgotvPawd Customer by id
const forgotPwd = (req, res) => {
  trainer
    .findOneAndUpdate(
      { email: req.body.email },
      {
        password: req.body.password,
      }
    )
    .exec()
    .then((data) => {
      if (data != null)
        res.json({
          status: 200,
          msg: "Updated successfully",
        });
      else
        res.json({
          status: 500,
          msg: "User Not Found",
        });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: 500,
        msg: "Data not Updated",
        Error: err,
      });
    });
};

module.exports = {
  registerTrainer,
  login,
  requireAuth,
  viewTrainers,
  removeTrainerById,
  viewTrainerById,
  editTrainerById,
  upload,
  viewTrainerRequests,
  ApproveTrainer,
  forgotPwd,
};
