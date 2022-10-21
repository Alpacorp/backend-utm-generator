const { response } = require("express");
const Audience = require("../models/Audience");

const createAudience = async (req, res = response) => {
  const audience = new Audience(req.body);

  try {
    const audienceDB = await audience.save();
    res.status(201).json({
      ok: true,
      audience: audienceDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

const getAudiences = async (req, res = response) => {
  const audiences = await Audience.find({}, "name shortname date").sort({
    date: -1,
  });
  res.json({
    ok: true,
    audiences,
  });
};

const updateAudience = async (req, res = response) => {
  const audienceId = req.params.id;

  try {
    const audienceDB = await Audience.findById(audienceId);
    if (!audienceDB) {
      return res.status(404).json({
        ok: false,
        msg: "Audience not found",
      });
    }

    const { name, shortname } = req.body;

    const audienceUpdated = await Audience.findByIdAndUpdate(
      audienceId,
      { name, shortname },
      { new: true }
    );

    res.json({
      ok: true,
      audience: audienceUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

const deleteAudience = async (req, res = response) => {
  const audienceId = req.params.id;

  try {
    const audienceDb = await Audience.findById(audienceId);
    if (!audienceDb) {
      return res.status(404).json({
        ok: false,
        msg: "Audience not found",
      });
    }

    await Audience.findByIdAndDelete(audienceId);

    res.json({
      ok: true,
      msg: "Audience deleted",
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
  createAudience,
  getAudiences,
  updateAudience,
  deleteAudience,
};
