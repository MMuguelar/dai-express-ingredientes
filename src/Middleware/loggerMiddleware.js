function loggerMiddleware(req, res, next) {
    const start = Date.now();
  
    res.on('finish', () => {
      const end = Date.now();
      const elapsed = end - start;
      console.log(`Tiempo transcurrido: ${elapsed}ms`);
    });
  
    next();
  }
  
 export default Middle;
  