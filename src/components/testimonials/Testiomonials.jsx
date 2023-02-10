import "./testimonials.scss";
import js from "../../images/js1.png";
import react from "../../images/react.png";
import reactNative from "../../images/react-native.png";
import Vue from "../../images/Vue.png";
import express from "../../images/express.png";
import mysql from "../../images/mysql.png";
import mongo from "../../images/mongo.png";
import jwt from "../../images/jwt.png";
import cloudinary from "../../images/cloudinary.png";

export default function Testiomonials() {
  const data = [
    {
      id:1,
      name:"javascript",
      img:js
    },
    {
      id:2,
      name:"React Js",
      img:react
    },
    {
      id:3,
      name:"react-native",
      img:reactNative
    },
    {
      id:4,
      name:"Vue Js",
      img:Vue
    },
    {
      id:5,
      name:"node.Js and express.Js ",
      img:express
    },
    {
      id:6,
      name:" mysql",
      img:mysql
    },
    {
      id:7,
      name:"MonogoDB",
      img:mongo
    },
    {
      id:8,
      name:"cloudinary",
      img:cloudinary
    },
    {
      id:9,
      name:"jwt",
      img:jwt
    },
    
  
  ]
  return (
    <div className="testimonials" id="testimonials">
      <h1>Technologies</h1>
      <div className="container" >
      {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"} style={{backgroundColor:"#D2D8D5" , marginLeft:"1%"}}>
            <div className="top">
              
              <img
                className="user"
                src={d.img}
                alt=""
              />
            </div>
            
            <div className="bottom">
              <h3>{d.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
