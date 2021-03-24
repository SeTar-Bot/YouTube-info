const fetch = require('node-fetch');
let options = { method: "Get" };

const info = function(id, key)
{
  if(!id || !key) return new Error('Id or Key cannot be empty.);
  if(typeof id != 'string' || typeof key != 'string') return new Error('Inputs should be string.');
  let result;
  fetch(url, settings) 
    .then(res => res.json())
    .then((json) => {
      return result = {
            Subscribers: json.items[0].statistics.subscriberCount,
            TotalViews: json.items[0].statistics.viewCount,
            TotalVideos: json.items[0].statistics.videoCount
        };
    });
}
