const express = require('express');
const router = express.Router();
const DataSchema = require('../model/dataScheme')


//Uses model Schema Mongoose for MongoDB to get 
//all instances of the data created from DataSchema
router.get('/', async (req, res, next) => {
    try {
      res.setHeader('Access-Control-Allow-Origin', '*');
      const data = await DataSchema.find({});
      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  });
  

router.post('/', async (req, res, next) => {


    //Checks if data is of type number
    if(!typeof req.body.AirQ === 'number'){
        return console.log('AirQ is not a number')
    }

    if(!(typeof req.body.Humidity === 'number')){
        res.status(404).json({
            Error: 'Outside allowed parameters'
        }
    )
        return console.log('Humidity is not a number')
    }

    if(!(typeof req.body.Temperature === 'number')){
        res.status(404).json({
            Error: 'Outside allowed parameters'
        }
    )
        return console.log('Temperature is not a number')
    }

    if(!(typeof req.body.AirQuality === 'number')){
        res.status(404).json({
            Error: 'Outside allowed parameters'
        }
    )
        return console.log('AirQuality is not a number')
    }

    if(!(typeof req.body.zone === 'number')){
        res.status(404).json({
            Error: 'Outside allowed parameters'
        }
    )
        return console.log('zone is not a number')

    }

    // Checks if data is in range.
    if(req.body.Humidity > 6 || req.body.Humidity < 1){
        res.status(404).json({
            Error: 'Outside allowed parameters'
        })
        return console.log('Humidity outside parameters ' + req.body.Humidity)
    }
    if(req.body.Temperature > 6 || req.body.Temperature < 1){
        res.status(404).json({
            Error: 'Outside allowed parameters'
        })
        return console.log('Temperature outside parameters ' + req.body.Temperature)

    }
    if(req.body.AirQuality > 6 || req.body.AirQuality < 1){
        res.status(404).json({
            Error: 'Outside allowed parameters'
        })
        return console.log('AirQuality outside parameters ' + req.body.AirQuality)

    }
    if(req.body.zone > 16 || req.body.zone < 1){
        res.status(404).json({
            Error: 'Outside allowed parameters'
        })
        return console.log('zone outside parameters ' + req.body.zone)

  }

  try{
    const item = await DataSchema.create(req.body)
    res.status(200).json({
        item
      });

  }catch(error){

    res.status(500).json({
        Error: error
    })

  }

  });
  

module.exports = router;
