const express = require('express');
const router = express.Router();
const Log = require('../models/logs');


router.get('/:id/edit', async (req, res) => {
  try {
    const log = await Log.findById(req.params.id);
    if (!log) {
      return res.status(404).send('Log not found');
    }
    res.render('Edit', { log });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching the log for editing.');
  }
});


router.put('/:id', async (req, res) => {
  try {
    const logId = req.params.id;
    const updatedLog = {
      title: req.body.title,
      entry: req.body.entry,
      shipIsBroken: req.body.shipIsBroken === 'true',
    };
    const result = await Log.findByIdAndUpdate(logId, updatedLog, { new: true });
    if (!result) {
      return res.status(404).send('Log not found');
    }
    res.redirect(`/logs/${logId}`); // Redirect to the show page after update
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while updating the log.');
  }
});

module.exports = router;
