const doctorSchema = require("../Doctor/doctorSchema");
const gymSchema = require("../Gym/gymSchema");
const trainerSchema = require("../Tranier/trainerSchema");
const customers = require("./customerSchema");
const progresses = require("./progressSchema");

const jwt = require("jsonwebtoken");
const multer = require("multer");
const progressSchema = require("./progressSchema");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("img");
const secret = "your-secret-key";

//registration
const registerCustomer = async (req, res) => {
  let dr = await doctorSchema.find({ email: req.body.email });
  let tr = await trainerSchema.find({ email: req.body.email });
  let gym = await gymSchema.find({ email: req.body.email });
  console.log(dr);
  if (dr.length > 0 || tr.length > 0 || gym.length > 0) {
    res.json({
      status: 500,
      msg: "Mail id already registered with us. Please try to Log in",
    });
  } else {
    let date = new Date();
    const newCustomer = new customers({
      name: req.body.name,
      gender: req.body.gender,
      city: req.body.city,
      district: req.body.district,
      contact: req.body.contact,
      email: req.body.email,
      password: req.body.password,
      pincode: req.body.pincode,
      dateofjoin: date,
      age: req.body.age,
      height: req.body.height,
      weight: req.body.weight,
    });
    newCustomer
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
//Customer Registration -- finished

//Login customers
const createToken = (user) => {
  return jwt.sign({ userId: user._id }, secret, { expiresIn: "1h" });
};

const login = (req, res) => {
  const { email, password } = req.body;

  customers.findOne({ email }, (err, user) => {
    if (err) {
      return res.status(500).json({ msg: "Something went wrong" });
    }

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    if (user.password != password) {
      return res.status(500).json({ msg: "Password Mismatch !!" });
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

//Login Custome --finished

//View all Customers

const viewCustomers = (req, res) => {
  customers
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
        msg: "Data not Inserted",
        Error: err,
      });
    });
};

// view Customers finished

//update Customer by id
const editCustomerById = (req, res) => {
  customers
    .findByIdAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        age: req.body.age,
        city: req.body.city,
        pincode: req.body.pincode,
        district: req.body.district,
        contact: req.body.contact,
        email: req.body.email,
        height: req.body.height,
        weight: req.body.weight,
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

// view cust by id
const viewCustomerById = (req, res) => {
  customers
    .findById({ _id: req.params.id })
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

const deleteCustomerById = async(req, res) => {
  await customers
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
    await progressSchema.deleteMany({cid : req.params.id})
    .exec()
    .then((data) => {
      console.log(data);
      // res.json({
      //   status: 200,
      //   msg: "Data removed successfully",
      //   data: data,
      // });
    })
    .catch((err) => {
      console.log(err);
      // res.json({
      //   status: 500,
      //   msg: "No Data obtained",
      //   Error: err,
      // });
    });
};
//forgotvPawd Customer by id
const forgotPwd = (req, res) => {
  customers
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

//registration
const addCustUpdate = (req, res) => {
  let date = new Date();
  const newprogresses = new progresses({
    cid: req.params.id,
    date: date,
    img: req.file,
    comment: req.body.comment,
  });
  newprogresses
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

// view cust progress by id
const viewCustomerProgressById = (req, res) => {
  progresses
    .findById({ _id: req.params.id })
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


// view cust progress by customer id
const viewCustomerProgressByCustId = (req, res) => {
  progresses
    .find({ cid: req.params.id })
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


// delete cust progress by id
const deleteCustomerProgressById = (req, res) => {
  progresses
    .findByIdAndDelete({ _id: req.params.id })
    .exec()
    .then((data) => {
      console.log(data);
      res.json({
        status: 200,
        msg: "Data deleted successfully",
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

// view cust progress by id
const viewCustomerProgressforHome = (req, res) => {
  progresses
    .find({})
    .sort({ date: -1 })
    .limit(5)
    .populate('cid')
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
  registerCustomer,
  login,
  viewCustomers,
  viewCustomerProgressforHome,
  editCustomerById,
  upload,
  requireAuth,
  forgotPwd,
  viewCustomerById,
  deleteCustomerById,
  addCustUpdate,
  viewCustomerProgressById,
  deleteCustomerProgressById,
  viewCustomerProgressByCustId
};
