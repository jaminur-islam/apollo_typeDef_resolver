const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./typeDefs/typeDefs");
const resolvers = require("./resolvers/resolvers");
const mongoose = require("mongoose");

const startServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/sagor" });
  app.use((req, res) => {
    res.send("the server was running ");
  });

  await mongoose.connect("mongodb://localhost:27017/my_new_db", {
    useUNifiedTopology: true,
    useNewUrlParser: true,
  });

  console.log("mongodb connect successfully");

  app.listen(5000, () => {
    console.log("Your server is running port 4000");
  });
};
startServer();
