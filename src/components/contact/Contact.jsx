import { useState } from "react";
import "./contact.scss";
import contact from "../../images/contact-us.jpg";
import emailjs from "emailjs-com";
import swal from "sweetalert";

export default function Contact() {
  // const [message, setMessage] = useState(false);
  const [to_name, setTo_name] = useState("");
  const [from_name, setFrom_name] = useState("");
  const [send, setSend] = useState("");
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailContent = {
      to_name: to_name,
      from_name: from_name,
      send: send,
    };

    emailjs
      .send(
        "service_g990vnf",
        "template_7i8200a",
        emailContent,
        "7c3QScS6N7Cqt4vWv"
      )
      .then(
        (res) => {
          console.log(res.text);

          swal({
            title: "Thanks!",
            text: " I'll reply as soon as possible!",
          });
          setSend("");
          setFrom_name("");
          setTo_name("");
          setMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact"
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%'
    }}>
      <div className="left">
        <img src={contact} alt="" />
      </div>
      <div className="right">
        <h2>Contact us</h2>
        <form onSubmit={handleSubmit}>
          <label style={{ marginLeft: "-230px", marginTop: "50px",fontFamily:'Raleway' }}>
            your name
          </label>
          <input
            placeholder="your name"
            type="text"
            tabindex="1"
            onChange={(e) => {
              setFrom_name(e.target.value);
            }}
            value={from_name}
          />
          <label style={{ marginLeft: "-230px", fontFamily:'Raleway' }}>your email</label>

          <input
            type="email"
            placeholder="Email"
            tabindex="2"
            onChange={(e) => {
              setTo_name(e.target.value);
            }}
            value={to_name}
          />
          <label style={{ marginLeft: "-210px", fontFamily:'Raleway' }}>your message</label>

          <textarea
            placeholder="Message"
            tabindex="3"
            onChange={(e) => {
              setSend(e.target.value);
            }}
            value={send}
          ></textarea>
          <button 
           type="submit"
           class="btn btn-outline-warning"
            // onClick={submitInfo}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}