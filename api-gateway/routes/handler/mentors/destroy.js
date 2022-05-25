const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_COURSE } = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
  try {
    const id = req.params.id;
    const mentors = await api.delete(`/api/mentors/${id}`);
    return res.json(mentors.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res
        .status(500)
        .json({ status: "error", message: "services unavailable" });
    }

    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};