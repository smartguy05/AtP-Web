const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
jsonServer.rewriter('src/testing/routes.json');

server.use(jsonServer.defaults());
server.use(router);

router.render = (req, res) => {
  const value = res.locals.data;
  let count = 1;
  let status = res.statusCode ?? 200;
  if (Array.isArray(value)) {
    count = value.length;
    if (!count) {
      status = 204;
    }
  }
  res.jsonp({
    value,
    status,
    count
  });
}

server.listen(3000, () => {
  console.log('JSON server is running');
});
