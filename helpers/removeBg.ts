const FormData = require('form-data');

const fs = require('fs');
const path = require('path');
const axios = require('axios');

export async function removeBg(inputPath: string) {
  const formData = new FormData();
  formData.append('size', 'auto');
  formData.append('image_file', fs.createReadStream(inputPath), path.basename(inputPath));

  const response = await axios({
    method: 'post',
    url: 'https://api.remove.bg/v1.0/removebg',
    data: formData,
    responseType: 'arraybuffer',
    headers: {
      ...formData.getHeaders(),
      'X-Api-Key': 'INSERT_YOUR_API_KEY_HERE',
    },
    encoding: null
  });

  console.log(response?.data);
}
