const { response } = require("express");
const Channel = require("../models/Channel");

const createChannel = async (req, res = response) => {
  const channel = new Channel(req.body);

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
  const channels = await Channel.find({}, "name shortname");
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

    const { name, shortname } = req.body;

    const channelUpdated = await Channel.findByIdAndUpdate(
      channelId,
      { name, shortname },
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
