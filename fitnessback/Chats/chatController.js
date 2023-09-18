let chat = require("./chatSchema");

//subscribe a pgm

const createChat = (req, res) => {
  let date = new Date();
  const newChat = new chat({
    cid: req.body.cid,
    date: date,
    drid: req.body.drid,
    tid: req.body.tid,
    from: req.body.from,
    msg: req.body.msg,
  });
  newChat
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

const viewChatForDrwithCust = (req, res) => {
  chat
    .find({ cid: req.body.cid, drid: req.body.drid })
    .populate("cid")
    .populate("drid")
    .sort({ date: +1 })
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
        err: err,
      });
    });
};
//trainer and cust
const viewChatForTrainerwithCust = (req, res) => {
  chat
    .find({ cid: req.body.cid, tid: req.body.tid })
    .populate("cid")
    .populate("tid")
    .sort({ date: 1 })
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
        err: err,
      });
    });
};

//finished
const ViewPatientstoChat = (req, res) => {
  chat
    .find({ drid: req.params.id })
    .populate("cid")
    .sort({ date: +1 })
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
        err: err,
      });
    });
};

//view customers to chat
const ViewCustomerstoChat = (req, res) => {
  chat
    .find({ tid: req.params.id })
    .populate("cid")
    .sort({ date: 1 })
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
        err: err,
      });
    });
};
//finished
//view trainers to chat
const ViewTrainerstoChat = (req, res) => {
  chat
    .find({ cid: req.params.id })
    .populate("tid")
    .sort({ date: 1 })
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
        err: err,
      });
    });
};
//finished
const viewCustomersforDr = async (req, res) => {
  const arr = [];
  await chat
    .distinct("cid", { drid: req.params.id })
    .exec()
    .then((data) => {
      console.log("datas", data);
      arr.push(data);
      res.json({
        status: 200,
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        err: err,
      });
    });
};

module.exports = {
  createChat,
  viewChatForDrwithCust,
  ViewPatientstoChat,
  viewCustomersforDr,
  viewChatForTrainerwithCust,
  ViewCustomerstoChat,
  ViewTrainerstoChat
};
