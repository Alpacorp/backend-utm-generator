const { response } = require("express");
const Strategy = require("../models/Strategy");

const createStrategy = async (req, res = response) => {
  const strategy = new Strategy(req.body);
  try {
    const strategyDB = await strategy.save();
    res.status(201).json({
      ok: true,
      strategy: strategyDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

const getStrategy = async (req, res = response) => {
  const strategy = await Strategy.find();
  res.json({
    ok: true,
    strategy,
  });
};

const updateStrategy = async (req, res = response) => {
  const id = req.params.id;
  try {
    const strategyDB = await Strategy.findById(id);
    if (!strategyDB) {
      return res.status(404).json({
        ok: false,
        msg: "Strategy not found",
      });
    }
    const { name, shortname } = req.body;
    const strategyUpdated = await Strategy.findByIdAndUpdate(
      id,
      { name, shortname },
      { new: true }
    );
    res.json({
      ok: true,
      strategy: strategyUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

const deleteStrategy = async (req, res = response) => {
  const id = req.params.id;
  try {
    const strategyDB = await Strategy.findById(id);
    if (!strategyDB) {
      return res.status(404).json({
        ok: false,
        msg: "Strategy not found",
      });
    }
    await Strategy.findByIdAndDelete(id);
    res.json({
      ok: true,
      msg: "Strategy deleted",
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
  createStrategy,
  getStrategy,
  updateStrategy,
  deleteStrategy,
};
