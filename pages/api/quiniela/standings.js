import axios from "axios";

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;
const API_BASE_URL = process.env.API_URL;

var config = {
  method: "get",
  url: `${API_BASE_URL}/leagues/table.json?competition_id=45&key=${API_KEY}&secret=${API_SECRET}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export default function standings(req, res) {
  axios(config)
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
