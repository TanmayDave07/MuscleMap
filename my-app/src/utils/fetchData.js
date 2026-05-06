export const exerciseOptions =  {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd23753a7b9msh719ce5254e02a23p1f1b7fjsn0c492e66bdb9',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
	}
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'd23753a7b9msh719ce5254e02a23p1f1b7fjsn0c492e66bdb9'
  }
};