export default {
  respond: function(res, status = 200) {
    return function(data) {
      console.log(data);
      if (data == null) {
        return res.status(404).json({status: 404, message: "Not found!"})
      }
      res.status(status).json(data);
    }
  },

  notFound: function(res, status = 404) {
    return function(data) {
      console.log(data)
      if (data == null) {
        return res.status(status).json({status: 404, message: "Not found!"})
      }
      return data
    }
  },

  handleError: function(res, status = 500) {
    return function(err, message) {
      console.log("Error: ",err);
      if (err == null) {
        return res.status(status).json({status: 404, message: "Not found!"})
      }
      res.status(status).json({status: status, message: message });
    }
  }
}