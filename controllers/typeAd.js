const { response } = require("express");
const TypeAd = require("../models/TypeAd");

const createTypeAd = async (req, res = response) => {
  const typeAd = new TypeAd(req.body);
  const { shortname } = req.body;
  const shortnameExists = await TypeAd.findOne({ shortname });

  if (shortnameExists) {
    return res.status(400).json({
      ok: false,
      msg: "Type Ad already exists",
    });
  }

  try {
    const typeAdDB = await typeAd.save();
    res.status(201).json({
      ok: true,
      typeAd: typeAdDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

const getTypeAd = async (req, res = response) => {
  const typeAd = await TypeAd.find().sort({ date: -1 });
  res.json({
    ok: true,
    typeAd,
  });
};

const updateTypeAd = async (req, res = response) => {
  const id = req.params.id;
  try {
    const typeAdDB = await TypeAd.findById(id);
    if (!typeAdDB) {
      return res.status(404).json({
        ok: false,
        msg: "Type Ad not found",
      });
    }
    const { name, shortname } = req.body;

    const typeAdUpdated = await TypeAd.findByIdAndUpdate(
      id,
      { name, shortname },
      { new: true }
    );
    res.json({
      ok: true,
      typeAd: typeAdUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

const deleteTypeAd = async (req, res = response) => {
  const id = req.params.id;
  try {
    const typeAdDB = await TypeAd.findById(id);
    if (!typeAdDB) {
      return res.status(404).json({
        ok: false,
        msg: "Type Ad not found",
      });
    }
    await TypeAd.findByIdAndDelete(id);
    res.json({
      ok: true,
      msg: "Type Ad deleted",
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
  createTypeAd,
  getTypeAd,
  updateTypeAd,
  deleteTypeAd,
};
