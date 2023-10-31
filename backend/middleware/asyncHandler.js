const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;

//for handling asynchronous fucn that mongoose uses 
// it ll resolve the promise if it does it just calls the next piece of middleware