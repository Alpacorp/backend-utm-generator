const { response } = require("express");
const Channel = require("../models/Channel");

const createChannel = async (req, res = response) => {
  const channel = new Channel(req.body);
  const { idchanneltype, shortname } = req.body;

  const idchannelTypeExists = await Channel.findOne({ idchanneltype });
  const shortnameExists = await Channel.findOne({ shortname });

  if (idchannelTypeExists || shortnameExists) {
    return res.status(400).json({
      ok: false,
      msg: "Values already exists",
    });
  }

  try {
    const channelDB = await channel.save();
    res.status(201).json({
      ok: true,
      channel: channelDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

const getChannels = async (req, res = response) => {
  const channels = await Channel.find(
    {},
    "name shortname idchanneltype date"
  ).sort({
    date: -1,
  });
  res.json({
    ok: true,
    channels,
  });
};

const updateChannel = async (req, res = response) => {
  const channelId = req.params.id;

  try {
    const channelDB = await Channel.findById(channelId);
    if (!channelDB) {
      return res.status(404).json({
        ok: false,
        msg: "Channel not found",
      });
    }

    const { name, shortname, idchanneltype } = req.body;

    const channelUpdated = await Channel.findByIdAndUpdate(
      channelId,
      { name, shortname, idchanneltype },
      { new: true }
    );

    res.json({
      ok: true,
      channel: channelUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

const deleteChannel = async (req, res = response) => {
  const channelId = req.params.id;

  try {
    const channelDB = await Channel.findById(channelId);
    if (!channelDB) {
      return res.status(404).json({
        ok: false,
        msg: "Channel not found",
      });
    }

    await Channel.findByIdAndDelete(channelId);

    res.json({
      ok: true,
      msg: "Channel deleted",
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
  createChannel,
  getChannels,
  updateChannel,
  deleteChannel,
};
