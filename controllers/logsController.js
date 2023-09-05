const express = require('express');
const router = express.Router();
const Log = require('../models/logs');


router.get('/new', (req, res) => {
    res.render('New');
  });
 
  router.post('/', async (req, res) => {
    try {
      const newLog = new Log({
        title: req.body.title,
        entry: req.body.entry,
        shipIsBroken: req.body.shipIsBroken === 'true',
      });
  
      await newLog.save();
  
      res.redirect('/logs');
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while saving the log.');
    }
  });
  
  router.get('/', async (req, res) => {
    try {
      const logs = await Log.find();
      res.render('Index', { logs });
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while fetching logs.');
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const log = await Log.findById(req.params.id);
      if (!log) {
        return res.status(404).send('Log not found');
      }
      res.render('Show',{log});
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while fetching the log.');
    }
  });  

  router.delete('/:id', async (req, res) => {
    try {
        const logId = req.params.id;
        const deletedLog = await Log.findByIdAndDelete(logId);

        if (!deletedLog) {
            return res.status(404).send('Log not found');
        }

        res.redirect('/logs');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while deleting the log.');
    }
});

module.exports = router;

    