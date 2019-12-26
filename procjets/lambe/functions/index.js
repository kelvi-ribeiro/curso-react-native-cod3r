const functions = require('firebase-functions');
const cors = require('corsi')({ origin: true })
const fs = require('fs')
const uuid = require('uuid-v4')
const { Storage } = require('@google-cloud/storage')
const storage = new Storage({
  projectId: 'lambe-cod3r-kelvi',
  keyFilename: 'lambe-cod3r-kelvi.json'
})

exports.uploadImage = functions.https.onRequest((request, response) => {
  cors(request, response, () => {

  })
});
