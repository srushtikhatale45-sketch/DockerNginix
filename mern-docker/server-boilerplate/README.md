- npm init
- npm i express
- npm i mongoose --> object modeling for nodejs

# Mongoose - Mongodb object modeling for Node js:

- docs link : https://mongoosejs.com/
- Writing MongoDB validation
- casting
- business logic boilerplate was drag

So, Mongoose.

# create db connection :

- db connection
  main().catch((err) => console.log(err.message));
  async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("database connected successfully...");
  }

# Schema and Model and CRUD :

# Deploy MERN on live Cloud Server

vercel.json file -> config
https://shadowsmith.com/thoughts/how-to-deploy-an-express-api-to-vercel
