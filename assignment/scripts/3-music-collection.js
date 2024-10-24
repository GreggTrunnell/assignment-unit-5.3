console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection=[];

function addToCollection(collection, title, artist, yearPublished){
      let record={
        title: title,
        artist: artist,
        yearPublished: yearPublished,
      }
   collection.push(record);
    return record;
}//end of addToCollection

let album1=addToCollection(myCollection, 'OK Computer', 'Radiohead', 1997);
console.log(album1);

let album2=addToCollection(myCollection, 'Lost Souls', 'Doves', 2000);
console.log(album2);

let album3=addToCollection(myCollection, 'Jubilee', 'Japanese Breakfast', 2021);
console.log(album3);

let album4=addToCollection(myCollection, 'Lift Your Skinny Fists Like Antennas to Heavan', 'Godspeed You! Black Emperor', 2000);
console.log(album4);

let album5=addToCollection(myCollection, 'A Moon Shaped Pool', 'Radiohead', 2016);
console.log(album5);

let album6=addToCollection(myCollection, 'The Gods We Can Touch', 'Aurora', 2022);
console.log(album6);

console.log(myCollection);

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
