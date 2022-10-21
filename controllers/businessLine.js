const { response } = require("express");
const BusinessLine = require("../models/BusinessLine");

const createBusinessLine = async (req, res = response) => {
  const businessLine = new BusinessLine(req.body);
  const { shortname } = req.body;
  const shortnameExists = await BusinessLine.findOne({ shortname });

  if (shortnameExists) {
    return res.status(400).json({
      ok: false,
      msg: "Business Line shortname already exists",
    });
  }

  try {
    const businessLineDB = await businessLine.save();
    res.status(201).json({
      ok: true,
      businessLine: businessLineDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

const getBusinessLines = async (req, res = response) => {
  const businessLines = await BusinessLine.find({}, "name shortname date").sort(
    {
      date: -1,
    }
  );
  res.json({
    ok: true,
    businessLines,
  });
};

const updateBusinessLine = async (req, res = response) => {
  const businessLineId = req.params.id;

  try {
    const businessLineDB = await BusinessLine.findById(businessLineId);
    if (!businessLineDB) {
      return res.status(404).json({
        ok: false,
        msg: "Business line not found",
      });
    }

    const { name, shortname } = req.body;

    const businessLineUpdated = await BusinessLine.findByIdAndUpdate(
      businessLineId,
      { name, shortname },
      { new: true }
    );

    res.json({
      ok: true,
      businessLine: businessLineUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

const deleteBusinessLine = async (req, res = response) => {
  const businessLineId = req.params.id;

  try {
    const businessLineDB = await BusinessLine.findById(businessLineId);
    if (!businessLineDB) {
      return res.status(404).json({
        ok: false,
        msg: "Business line not found",
      });
    }

    await BusinessLine.findByIdAndDelete(businessLineId);

    res.json({
      ok: true,
      msg: "Business line deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

module.exports = {
  createBusinessLine,
  getBusinessLines,
  updateBusinessLine,
  deleteBusinessLine,
};
