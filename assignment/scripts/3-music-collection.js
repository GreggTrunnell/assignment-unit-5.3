console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection=[];
let olderAlbums=[];

function addToCollection(collection, title, artist, yearPublished){
      let album={
        title: title,
        artist: artist,
        yearPublished: yearPublished,
      }
   collection.push(album);
    return album;
}//end of addToCollection function


console.log(addToCollection(myCollection, 'Ruins', 'First Aid Kit', 2018));
console.log(addToCollection(myCollection, 'OK Computer', 'Radiohead', 1997));
console.log(addToCollection(myCollection, 'The Universal Want', 'Doves', 2020));
console.log(addToCollection(myCollection, 'Jubilee', 'Japanese Breakfast', 2021));
console.log(addToCollection(myCollection, 'Lift Your Skinny Fists Like Antennas to Heavan', 'Godspeed You! Black Emperor', 2000));
console.log(addToCollection(myCollection, 'A Moon Shaped Pool', 'Radiohead', 2016));
console.log(addToCollection(myCollection, 'Stay Gold', 'First Aid Kit', 2014));
console.log(myCollection);

console.log(addToCollection(olderAlbums, 'The Wall', 'Pink Floyd', 1979 ));
console.log(addToCollection(olderAlbums, 'Bridge Over Troubled Water', 'Simon and Garfunkel', 1970));
console.log(addToCollection(olderAlbums, 'Lola Versus Powerman and the Moneygoround, Part One.', 'The Kinks', 1970));
console.log(olderAlbums);


//Collection argument shows any array of album objects. 
function showCollection(collection){
  //loop through collection. Will be using myCollection for the argument.
      for (let i = 0; i < collection.length; i++)
  //con.log each album with string like: title by artist, published in yearspublished.
  //It will need to access each item in album object.
   console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`)
      }//end showCollection function

console.log(showCollection(myCollection));
console.log(showCollection(olderAlbums));
//All the output looks correct except at the end of this log I get an undefined. Trying to find out why.




//Will need two arguments. A collection of albums to search. And artists to find in said collection.
function findByArtist(collection, artist){
  //create an empty array to hold matches      
       let matchingArtistsAlbums=[];
  //Loop through collection and add artists albums to array if its the same artist
    for (i = 0; i < collection.length; i++){
      if (collection[i].artist === artist){
        matchingArtistsAlbums.push(collection[i]);
      }
    }
    return matchingArtistsAlbums;
}  //end of findByArtist function

console.log(findByArtist(myCollection, 'First Aid Kit'));
console.log(findByArtist(myCollection, 'Radiohead'));
console.log(findByArtist(myCollection, 'Doves'));
console.log(findByArtist(myCollection, 'Beach House'));


// function search(collection, searchCriteria){

// }




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
