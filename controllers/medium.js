const { response } = require("express");
const Medium = require("../models/Medium");

const createMedium = async (req, res = response) => {
  const medium = new Medium(req.body);
  try {
    const mediumDB = await medium.save();
    res.status(201).json({
      ok: true,
      medium: mediumDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

const getMediums = async (req, res = response) => {
  const mediums = await Medium.find({}, "name idchanneltype");
  res.json({
    ok: true,
    mediums,
  });
};

const updateMedium = async (req, res = response) => {
  const mediumId = req.params.id;
  try {
    const mediumDB = await Medium.findById(mediumId);
    if (!mediumDB) {
      return res.status(404).json({
        ok: false,
        msg: "Medium not found",
      });
    }
    const { name, idchanneltype } = req.body;
    const mediumUpdated = await Medium.findByIdAndUpdate(
      mediumId,
      { name, idchanneltype },
      { new: true }
    );
    res.json({
      ok: true,
      medium: mediumUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

const deleteMedium = async (req, res = response) => {
  const mediumId = req.params.id;
  try {
    const mediumDB = await Medium.findById(mediumId);
    if (!mediumDB) {
      return res.status(404).json({
        ok: false,
        msg: "Medium not found",
      });
    }
    await Medium.findByIdAndDelete(mediumId);
    res.json({
      ok: true,
      msg: "Medium deleted",
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
  createMedium,
  getMediums,
  updateMedium,
  deleteMedium,
};
