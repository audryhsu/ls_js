/*
input: array of objects that represent movie releases
output: array of objs that contain ly id and title kv pairs
rule:
- filter only movies with id AND title property
- only return id and title prop
algo:
- for each movie obj, check if id AND title are present
  - if either is not present, skip to next
  - else create a new obj with only title and id properties
    - push new obj to result array
*/


let newReleases = [
  {
    id: 70111470,
    title: 'Die Hard',
    boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [5.0],
    bookmark: [{ id:432534, time:65876586 }],
  },
  {
    id: 0,
    title: 'The Chamber',
    boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: 'Fracture',
    boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [5.0],
    bookmark: [{ id:432534, time:65876586 }],
  },
];

function processReleaseData(data) {
  let processedData = data.filter(movie => movie['id'] !== undefined && movie['title'])
    .map(movie => {
      return {
        id: movie.id,
        title: movie.title
      };
    });
  console.log(processedData);
  return processedData;
}

processReleaseData(newReleases);

// should return:
[{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];
