const pgmSchema = require("../Tranier/pgmSchema");
let subscriptionSchema = require("./subscriptionSchema");

//subscribe a pgm

const subscribePgm = (req, res) => {
  let date = new Date();
  const subscription = new subscriptionSchema({
    cid: req.body.cid,
    date: date,
    pid: req.body.pid,
  });
  subscription
    .save()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Inserted successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Please enter all the mandatory fields",
        Error: err,
      });
    });
};

//View my subscriptions

const viewSubscriptionsByCId = (req, res) => {
  subscriptionSchema
    .find({ cid: req.params.id, isactive: true })
    .populate("pid")
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

const unsubscribePgmByCId = (req, res) => {
  subscriptionSchema
    .findOneAndDelete(
      { cid: req.params.id, pid: req.body.pid },
    )
    .exec()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Updated successfully",
        data: data,
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

// add rating to mentor by  cid
const addRating = (req, res) => {
  let newRate = parseInt(req.body.rating);
  let rating = 0;
  pgmSchema
    .findById({ _id: req.params.id })
    .exec()
    .then((data) => {
      rating = data.rating;
      if (data.rating != 0) rating = (rating + newRate) / 2;
      else rating = newRate;
      console.log(rating);
      pgmSchema
        .findByIdAndUpdate(
          { _id: req.params.id },
          {
            rating: rating,
          }
        )
        .exec()
        .then((data) => {
          res.json({
            status: 200,
            msg: "Data obtained successfully",
            data: data,
          });
        })
        .catch((err) => {
          res.json({
            status: 500,
            msg: "Data not Inserted",
            Error: err,
          });
        });
    });
};

//View my unsub pgms

const viewUnSubscriptionsByCId = async (req, res) => {
  let mids = [];
  let op = [];
  await subscriptionSchema
    .find({ cid: req.params.id })
    .exec()
    .then((data) => {
      data.map((x) => mids.push(x.pid));
      console.log("from subsri", mids);

      pgmSchema
        .find({ isactive: true })
        .exec()
        .then((data2) => {
          for (let i = 0; i < data2.length; i++) {
            for (let j = 0; j < mids.length; j++) {
              if (mids[j] != data2[j]._id)
                if (!op.includes(data2[j])) op.push(data2[j]);
            }
          }
          console.log("from op", op);
          res.json({
            status: 200,
            msg: "Data obtained successfully",
            data: op,
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

// vie w subscriptions for Trainer by trainer id
const viewMysubscriptions = (req, res) => {
  subscriptionSchema
    .find({ trainerid: req.body.id, isactive: true })
    .populate("pid")
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
  subscribePgm,
  unsubscribePgmByCId,
  viewMysubscriptions,
  viewSubscriptionsByCId,
  viewUnSubscriptionsByCId,
  addRating,
};
