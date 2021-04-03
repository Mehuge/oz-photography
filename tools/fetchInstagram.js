const Instagram = require('instagram-web-api');
const fs = require('fs');

async function getInstagramPhotos() {
  const client = new Instagram({
    username: process.env.INSTAGRAM_USERID,
    password: process.env.INSTAGRAM_PASSWORD
  });
  await client.login();
  const response = await client.getPhotosByUsername({
    username: 'oz._photography_'
  });
  return response.user.edge_owner_to_timeline_media.edges.reduce((acc, o) => {
    if (o.node.__typename == 'GraphImage') {
      acc.push(o.node.display_url);
    }
    return acc;
  }, []);
}

(async function() {
  const photos = await getInstagramPhotos();
  fs.writeFileSync('db/instagram.json', JSON.stringify(photos.slice(0,10),null,2));
})();
