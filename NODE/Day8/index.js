import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
const app=express()
app.use(cors())
app.use(express.json())
const PORT=process.env.PORT||5000
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})




// 1. What is a Schema?

// A Schema defines the structure of documents in a MongoDB collection.

// It tells:

// what fields exist
// their data types
// validations (required, default, etc.)





// 2. What is a Model?

// A Model is a wrapper created from a schema that lets you interact with the database.

// 👉 Think:

// Schema = blueprint
// Model = actual tool to read/write data









// What is find()?

// find() is a query method used to retrieve documents.

// 👉 Example:

// Product.find({ price: { $gt: 1000 } })
//   .then(data => console.log(data));

// This returns all products with price > 1000








// Model-based Methods (Common Ones)
// These are methods you use on models:
// Create
// Model.create()new Model().save()
// Read
// Model.find()Model.findOne()Model.findById()
// Update
// Model.updateOne()Model.updateMany()Model.findByIdAndUpdate()
// Delete
// Model.deleteOne()Model.deleteMany()Model.findByIdAndDelete()

// 5. Amazon Product Model (Example)
// const mongoose = require("mongoose");const amazonProductSchema = new mongoose.Schema({  title: {    type: String,    required: true  },  price: {    type: Number,    required: true  },  brand: String,  rating: {    type: Number,    default: 0  },  inStock: {    type: Boolean,    default: true  },  category: String,  createdAt: {    type: Date,    default: Date.now  }});const AmazonProduct = mongoose.model("AmazonProduct", amazonProductSchema);

// 6. Netflix User Data Model
// const netflixUserSchema = new mongoose.Schema({  username: {    type: String,    required: true  },  email: {    type: String,    required: true,    unique: true  },  password: {    type: String,    required: true  },  subscriptionType: {    type: String,    enum: ["Basic", "Standard", "Premium"],    default: "Basic"  },  profiles: [    {      name: String,      age: Number    }  ],  watchHistory: [    {      title: String,      watchedAt: Date    }  ],  createdAt: {    type: Date,    default: Date.now  }});const NetflixUser = mongoose.model("NetflixUser", netflixUserSchema);

// 7. Insert Product into MongoDB
// Method 1: Using create()
// AmazonProduct.create({  title: "iPhone 15",  price: 79999,  brand: "Apple",  rating: 4.5,  category: "Electronics"}).then(data => console.log("Product Added:", data)).catch(err => console.log(err));

// Method 2: Using save()
// const product = new AmazonProduct({  title: "Samsung TV",  price: 45000,  brand: "Samsung"});product.save()  .then(data => console.log("Saved:", data))  .catch(err => console.log(err));

// Quick Summary


// Schema → structure of data




// 5. Amazon Product Model (Example)
// const mongoose = require("mongoose");

// const amazonProductSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   price: {
//     type: Number,
//     required: true
//   },
//   brand: String,
//   rating: {
//     type: Number,
//     default: 0
//   },
//   inStock: {
//     type: Boolean,
//     default: true
//   },
//   category: String,
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// const AmazonProduct = mongoose.model("AmazonProduct", amazonProductSchema);




// 6. Netflix User Data Model
// const netflixUserSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   subscriptionType: {
//     type: String,
//     enum: ["Basic", "Standard", "Premium"],
//     default: "Basic"
//   },
//   profiles: [
//     {
//       name: String,
//       age: Number
//     }
//   ],
//   watchHistory: [
//     {
//       title: String,
//       watchedAt: Date
//     }
//   ],
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// const NetflixUser = mongoose.model("NetflixUser", netflixUserSchema);




// 7. Insert Product into MongoDB
// Method 1: Using create()
// AmazonProduct.create({
//   title: "iPhone 15",
//   price: 79999,
//   brand: "Apple",
//   rating: 4.5,
//   category: "Electronics"
// })
// .then(data => console.log("Product Added:", data))
// .catch(err => console.log(err));
// Method 2: Using save()
// const product = new AmazonProduct({
//   title: "Samsung TV",
//   price: 45000,
//   brand: "Samsung"
// });

// product.save()
//   .then(data => console.log("Saved:", data))
//   .catch(err => console.log(err));