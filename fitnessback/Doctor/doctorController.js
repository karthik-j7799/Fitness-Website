const doctors = require("./doctorSchema");
const jwt = require("jsonwebtoken");

//registration
const multer = require("multer");
const customerSchema = require("../Customer/customerSchema");
const gymSchema = require("../Gym/gymSchema");

const trainerSchema = require("../Tranier/trainerSchema");
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

const registerDoctor = async (req, res) => {
  let cust = await customerSchema.find({ email: req.body.email });
  let tr = await trainerSchema.find({ email: req.body.email });
  let gym = await gymSchema.find({ email: req.body.email });
  // console.log(dr);
  if (cust.length > 0 || tr.length > 0 || gym.length > 0) {
    res.json({
      status: 500,
      msg: "Mail id already registered with us. Please try to Log in",
    });
  } else {
    let images = req.file.filename;

    const newDoctors = new doctors({
      name: req.body.name,
      aadhar: req.body.aadhar,
      specialization: req.body.specialization,
      contact: req.body.contact,
      email: req.body.email,
      password: req.body.password,
      certificate: images,
    });
    newDoctors
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
//Doctors Registration -- finished
//login
const secret = "your-secret-key"; // Replace this with your own secret key

const createToken = (user) => {
  return jwt.sign({ userId: user._id }, secret, { expiresIn: "1h" });
};

const login = (req, res) => {
  const { email, password } = req.body;

  doctors.findOne({ email }, (err, user) => {
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

//View all Approved doctors

const viewApprovedDoctors = (req, res) => {
  doctors
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
        msg: "Data not Inserted",
        Error: err,
      });
    });
};

//View all  doctor requests

const viewDoctorRequests = (req, res) => {
  doctors
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

// view viewDoctors finished
//update doctors by id
const editDoctorById = (req, res) => {
  // let data1=requireAuth(req,res)
  // console.log(data1);

  doctors
    .findByIdAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        aadhar: req.body.aadhar,
        contact: req.body.contact,
        specialization: req.body.specialization,
        
        email: req.body.email,
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

//Doctor Approval by admin
const ApproveDoctor = (req, res) => {
  // let data1=requireAuth(req,res)
  // console.log(data1);

  doctors
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

//view doctors by id
const viewDoctorById = (req, res) => {
  doctors
    .findById({ _id: req.params.id })
    .exec()
    .then((data) => {
      res.json({
        status: 200,
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Data not obtained",
        Error: err,
      });
    });
};
//Remove  doctor by ID
const removeDoctorById = (req, res) => {
  doctors
    .findByIdAndDelete({ _id: req.params.id })
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

const deleteDrById = (req, res) => {
  doctors
    .findByIdAndDelete({ _id: req.params.id })
    .exec()
    .then((data) => {
      console.log(data);
      res.json({
        status: 200,
        msg: "Data removed successfully",
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
//forgotvPawd Customer by id
const forgotPwd = (req, res) => {
  doctors
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
  registerDoctor,
  login,
  requireAuth,
  removeDoctorById,
  viewApprovedDoctors,
  viewDoctorRequests,
  upload,
  ApproveDoctor,
  editDoctorById,
  viewDoctorById,
  forgotPwd,
  deleteDrById,
};
