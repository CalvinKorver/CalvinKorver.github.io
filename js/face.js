require('../node_modules/aws-sdk/dist/aws-sdk');
var AWS = window.AWS;
   
   function handleUp() {
       console.log("pressed sub");
        var bucket = new AWS.S3({params: {Bucket: 'BUCKET_NAME'}});
        var fileChooser = document.getElementById('file');
        var file = fileChooser.files[0];
        if (file) {
            
            var params = {Key: 'FILE_NAME', ContentType: file.type, Body: file};
            
            bucket.upload(params).on('httpUploadProgress', function(evt) {
                console.log("Uploaded :: " + parseInt((evt.loaded * 100) / evt.total)+'%');
            
            }).send(function(err, data) {
                alert("File uploaded successfully.");
            });
        }
        return false;
   }