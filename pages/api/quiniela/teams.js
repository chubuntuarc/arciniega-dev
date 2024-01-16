import axios from "axios";

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;
const API_BASE_URL = process.env.API_URL;

var config = {
  method: "get",
  url: `${API_BASE_URL}/teams/listing.json?key=${API_KEY}&secret=${API_SECRET}&country_id=57&size=100`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export default function teams(req, res) {
  axios(config)
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
