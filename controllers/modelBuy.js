const { response } = require("express");
const ModelBuy = require("../models/ModelBuy");

const createModelBuy = async (req, res = response) => {
  const modelBuy = new ModelBuy(req.body);
  try {
    const modelBuyDB = await modelBuy.save();
    res.status(201).json({
      ok: true,
      model: modelBuyDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

const getModelBuys = async (req, res = response) => {
  const modelBuys = await ModelBuy.find({}, "name shortname");
  res.json({
    ok: true,
    modelBuys,
  });
};

const updateModelBuy = async (req, res = response) => {
  const modelBuyId = req.params.id;
  try {
    const modelBuyDB = await ModelBuy.findById(modelBuyId);
    if (!modelBuyDB) {
      return res.status(404).json({
        ok: false,
        msg: "Medium not found",
      });
    }
    const { name, shortname } = req.body;
    const modelBuyUpdated = await ModelBuy.findByIdAndUpdate(
      modelBuyId,
      { name, shortname },
      { new: true }
    );
    res.json({
      ok: true,
      model: modelBuyUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

const deleteModelBuy = async (req, res = response) => {
  const modelBuyId = req.params.id;
  try {
    const modelBuyDB = await ModelBuy.findById(modelBuyId);
    if (!modelBuyDB) {
      return res.status(404).json({
        ok: false,
        msg: "ModelBuy not found",
      });
    }
    await ModelBuy.findByIdAndDelete(modelBuyId);
    res.json({
      ok: true,
      msg: "ModelBuy deleted",
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
  createModelBuy,
  getModelBuys,
  updateModelBuy,
  deleteModelBuy,
};
