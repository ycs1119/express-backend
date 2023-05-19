const FormData = require('form-data');

const fs = require('fs');
const path = require('path');
const https = require('https');
const axios = require('axios');
const download = require('images-downloader').images;

export async function removeBg(inputPath: string) {

  let response = await download([inputPath], 'uploads/old');
  const oldPath = response?.[0].filename;

  const formData = new FormData();
  formData.append('size', 'auto');
  formData.append('image_file', fs.createReadStream(oldPath), path.basename(oldPath));

  response = await axios({
    method: 'post',
    url: 'https://api.remove.bg/v1.0/removebg',
    data: formData,
    responseType: 'arraybuffer',
    headers: {
      ...formData.getHeaders(),
      'X-Api-Key': '8W8Fme1KAPN5tQT5n1MdieXw',
    },
    encoding: null
  });

  if (response?.status === 200) {
    await fs.writeFileSync(`uploads/new/${path.basename(inputPath)}`, response.data);
  }
}
