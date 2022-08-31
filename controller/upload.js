const uploadFile = async (req, res) => {
  try {
    const { originalname: name, mimetype: type, size } = req.file

    res.status(200).json({ name, type, size })
  } catch (error) {
    console.log(error)
  }
}

module.exports = uploadFile
