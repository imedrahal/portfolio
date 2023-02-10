import "./testimonials.scss";

export default function Testiomonials() {
  const data = [
    {
      id:1,
      name:"javascript",
      img:"assets/js1.png"
    },
    {
      id:2,
      name:"React Js",
      img:"assets/react.png"
    },
    {
      id:3,
      name:"react-native",
      img:"assets/react-native.png"
    },
    {
      id:4,
      name:"Vue Js",
      img:"assets/Vue.png"
    },
    {
      id:5,
      name:"node.Js and express.Js ",
      img:"assets/express.png"
    },
    {
      id:6,
      name:" mysql",
      img:"assets/mysql.png"
    },
    {
      id:7,
      name:"MonogoDB",
      img:"assets/mongo.png"
    },
    {
      id:8,
      name:"cloudinary",
      img:"assets/cloudinary.png"
    },
    {
      id:9,
      name:"jwt",
      img:"assets/jwt.png"
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
