import axios from "axios";

export async function getImageColor(imgEl) {
  const options = {
    method: "GET",
    url: "https://color-extractor-for-apparel-2.p.rapidapi.com/colors",
    params: { image_url: imgEl },
    headers: {
      "X-RapidAPI-Host": "color-extractor-for-apparel-2.p.rapidapi.com",
      "X-RapidAPI-Key": "a575f727d4msh45e6e23a519b24ap1e3928jsn43b2927f65df",
    },
  };

  await axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
    });
}
