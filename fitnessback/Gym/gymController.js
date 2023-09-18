const gym = require("./gymSchema");
const jwt = require("jsonwebtoken");
const booking = require("./gymBooking");
const mongoose = require("mongoose");
const doctorSchema = require("../Doctor/doctorSchema");
const customerSchema = require("../Customer/customerSchema");
const trainerSchema = require("../Tranier/trainerSchema");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const addImages = (req, res) => {
  console.log(req.files);

  gym
    .findByIdAndUpdate({ _id: req.params.id }, { img: req.files })
    .exec()
    .then((data1) => {
      res.json({
        status: 200,
        msg: "Updated successfully",
        data: data1,
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

//registration

const registerGym = async (req, res) => {
  let cust = await customerSchema.find({ email: req.body.email });
  let tr = await trainerSchema.find({ email: req.body.email });
  let dr = await doctorSchema.find({ email: req.body.email });
  console.log(dr);
  if (dr.length > 0 || tr.length > 0 || cust.length > 0) {
    res.json({
      status: 500,
      msg: "Mail id already registered with us. Please try to Log in",
    });
  } else {
    const newGym = new gym({
      name: req.body.name,
      regno: req.body.regno,
      city: req.body.city,

      contact: req.body.contact,
      email: req.body.email,
      password: req.body.password,
      district: req.body.district,
    });
    newGym
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
//newGym Registration -- finished
//login
const secret = "your-secret-key"; // Replace this with your own secret key

const createToken = (user) => {
  return jwt.sign({ userId: user._id }, secret, { expiresIn: "1h" });
};

const login = (req, res) => {
  const { email, password } = req.body;

  gym.findOne({ email }, (err, user) => {
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

const viewGyms = (req, res) => {
  gym
    .find()
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

// view Gyms finished

//update gym by id
const editGymById = (req, res) => {
  gym
    .findByIdAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        city: req.body.city,
        contact: req.body.contact,
        email: req.body.email,
        district: req.body.district,
      }
    )
    .exec()
    .then((data1) => {
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
//View  Gym by ID

const viewGymById = (req, res) => {
  gym
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

//Remove  Gym by ID

const removeGymById = (req, res) => {
  gym
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

//gym Booking
const bookGym = (req, res) => {
  let date = new Date();
  const newGym = new booking({
    cid: req.body.cid,
    gymid: req.body.gymid,
    message: req.body.message,
    date: date,
  });
  newGym
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
};
//view gym reqs by gym id

const viewGymReqsById = (req, res) => {
  booking
    .find({ gymid: req.params.id, isactive: false })
    .populate("cid")
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

//approve gym booking reqs
const acceptGymReqsById = (req, res) => {
  booking
    .findByIdAndUpdate({ _id: req.params.id }, { isactive: true })
    .exec()
    .then((data) => {
      console.log(data);
      res.json({
        status: 200,
        msg: "Data updated successfully",
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
//delete gym members
const deleteGymMembersById = (req, res) => {
  booking
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
//view gym reqs by Customer

const viewGymReqsByCustId = (req, res) => {
  booking
    .find({ custid: req.params.id })
    .populate("gymid")
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

const ViewGymMembers = (req, res) => {
  booking
    .find({ gymid: req.params.id, isactive: true })
    .populate("cid")
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

module.exports = {
  registerGym,
  login,
  requireAuth,
  viewGyms,
  removeGymById,
  viewGymById,
  editGymById,
  viewGymReqsByCustId,
  viewGymReqsById,
  acceptGymReqsById,
  bookGym,
  upload,
  addImages,
  ViewGymMembers,
  deleteGymMembersById
};
