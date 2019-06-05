export default (err, req, res, next) => {
  console.log(err);

  if (err.name === 'ResourceNotFoundError') {
    res.status(err.statusCode);
    res.send({
      title: err.name,
      message: err.message,
      data: err.data,
      // trace: err.expose ? err : undefined
    });
  } else {
    res.status(500);
    res.send({
      title: err.name,
      message: err.message,
      data: err
    })
  }

}
