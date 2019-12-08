export function Success (msg) {
  const obj = typeof msg === "string" ? {
    body: JSON.stringify(msg)
  } : msg;
  obj.statusCode = 200;
  return obj;
};

export function Failure (err){
  const res = {};
  const {errorMessage, errorType} = err;
  if (errorMessage === "Unexpected end of JSON input"){
    res.statusCode = 403;
  }
  res.body = JSON.stringify({errorMessage, errorType});
  return res;
}