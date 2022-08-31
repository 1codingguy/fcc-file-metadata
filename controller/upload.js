const uploadFile = async (req, res) => {
  try {
    // to do something with the upload file here
    res.status(200).json(req.body)
  } catch (error) {
    console.log(error)
  }
}

module.exports = uploadFile
