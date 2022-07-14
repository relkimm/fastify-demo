const Fastify = require("fastify");
const axios = require("axios");

const fastify = Fastify({
  logger: true,
});

fastify.get("/", (request, reply) => {
  axios.get("https://api.github.com/users/relkimm/repos").then((res) => {
    reply.send(res.data);
  });
});

fastify.listen({ port: 3000 }, (err, address) => {
  console.log(address);
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
