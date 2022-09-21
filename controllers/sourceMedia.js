const { response } = require("express");
const SourceMedia = require("../models/SourceMedia");

const createSourceMedia = async (req, res = response) => {
  const sourceMedia = new SourceMedia(req.body);
  try {
    const sourceMediaDB = await sourceMedia.save();
    res.status(201).json({
      ok: true,
      source: sourceMediaDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

const getSourceMedia = async (req, res = response) => {
  const sourceMedia = await SourceMedia.find();
  res.json({
    ok: true,
    source: sourceMedia,
  });
};

const updateSourceMedia = async (req, res = response) => {
  const id = req.params.id;
  try {
    const sourceMediaDB = await SourceMedia.findById(id);
    if (!sourceMediaDB) {
      return res.status(404).json({
        ok: false,
        msg: "Source Media not found",
      });
    }
    const { name, idchanneltype } = req.body;
    const sourceMediaUpdated = await SourceMedia.findByIdAndUpdate(
      id,
      { name, idchanneltype },
      { new: true }
    );
    res.json({
      ok: true,
      source: sourceMediaUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

const deleteSourceMedia = async (req, res = response) => {
  const id = req.params.id;
  try {
    const sourceMediaDB = await SourceMedia.findById(id);
    if (!sourceMediaDB) {
      return res.status(404).json({
        ok: false,
        msg: "Source Media not found",
      });
    }
    await SourceMedia.findByIdAndDelete(id);
    res.json({
      ok: true,
      msg: "Source Media deleted",
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
  createSourceMedia,
  getSourceMedia,
  updateSourceMedia,
  deleteSourceMedia,
};
