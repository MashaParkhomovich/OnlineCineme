const API_KEY = 'e697b453087c50669357f7bb4bb06443';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';

// https://api.themoviedb.org/3/movie/550?api_key=e697b453087c50669357f7bb4bb06443

const getData = url => {
  return fetch(url)
    .then(response => {
      if(response.ok){
        return response.json()
      }
      throw `Что-то пошло не так, ошибка ${response.status}`
    })
    
    .catch(err => console.error(err))
};




export const getTriends = async (type = 'all', period = 'day', page = 1) => {
  const url = `${BASE_URL}/trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  return await getData(url);  
};

export const getTop = async (type, page = 1) => {
  const url = `${BASE_URL}${type}/top_rated?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  return await getData(url);  
}; 

export const getPopular = async (type, page = 1) => {
  const url = `${BASE_URL}${type}/popular?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  return await getData(url);  
};