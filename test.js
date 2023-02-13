

const mongoose = require("mongoose");
mongoose.set('strictQuery', false); 
const Schema = mongoose.Schema;


mongoose.connect("mongodb://127.0.0.1:27017/pcat-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const PhotoSchema = new Schema({
    title: String,
    description: String,
});


  const Photo = mongoose.model('Photo', PhotoSchema);


  Photo.create({
    title : 'Photo Title 1',
    description : 'Photo description 1 lorem ipsum',
  });

//read a photo 
  Photo.find({}, (err, data) => {
    console.log(data);
  });

//update photo
/*
const id = '63ea40339fa664c6a5fe9d99';
Photo.findByIdAndUpdate(
    id,
    {
        title: 'Fotoğraf Güncellemesi',
        description : 'Fotoğraf açıklaması',
    },
    {
        new : true
    },
    (err,data) => 
    {
        console.log(data);
    }
);
*/

const id = '63ea400763fa7444576aa094';
Photo.findByIdAndRemove(id,(err,data) =>
{
    console.log('Photo kaldırıldı');
});