const fs = require('fs'); // Pull in the file system module

const dankmemes = fs.readFileSync(`${__dirname}/../client/spongegar.png`);
dankmemes.src = "/../client/spongegar.png";

const getDankMemes = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  //response.write('<img src="spongegar.png" alt="Spongegar">');
  response.write(dankmemes);
  //response.write('<img src="' + dankmemes.src + '" alt="Spongegar">');
  response.end();
};

module.exports.getDankMemes = getDankMemes;
