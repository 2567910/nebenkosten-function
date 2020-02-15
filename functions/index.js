const functions = require('firebase-functions');

const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.onFileChange = functions.storage.object().onFinalize(event => {
    const bucket = event.bucket
    const contentType = event.contentType
    const filePath = event.name
    console.log(contentType + " on file: " + bucket);
 console.log("changing file");
 return
});

exports.onFileDelete = functions.storage.object().onDelete(event => {
    console.log("deleting file");
    return;
  });
