const axios = require('axios');
const api_key = `9b4V7GqPvj8MtNh9x165FjzGJQvImDzu`;
let searchTerm = process.argv[2];

axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${searchTerm}&limit=1`).then(resp=>{
    console.log(resp.data.data[0].bitly_url);
}).catch(err=>console.log(err));

