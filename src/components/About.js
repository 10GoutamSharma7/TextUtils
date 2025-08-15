import React from 'react';
import '../styles/About.css';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function About(props) {
  return (
    <div className="about-container">
      <h1 className="about-title">About TextMaster 💡</h1>

      <p className="about-description">
        Welcome to <strong>TextUtils</strong> – your classroom-inspired text helper!  
        Here, you can edit, analyze, and play with your text easily.  
        Perfect for students, writers, and anyone who loves organized notes!
      </p>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Analyze Your Text 📝
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Count words, characters, letters, punctuation, highlight keywords, and even detect small errors—all in one friendly tool!
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Free & Easy to Use 🎀
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Completely free and accessible on any device. Just open your browser and start!
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Browser Friendly 🌈
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Works perfectly on Chrome, Edge, Firefox, Safari, and mobile devices!
            </div>
          </div>
        </div>
      </div>

      {/* Developer Section */}
      <div className="developer-section">
        <h2>Meet the Developer ✨</h2>
        <div className="developer-info">
          <div className="developer-image">
            <img src="https://www.themoviedb.org/t/p/original/kXgC9BSReLQnIA2NX9PhzNM2X2V.jpg" alt="Developer" />
          </div>
          <div className="developer-text">
            <p>
              Hi! I'm <strong>Goutam Sharma</strong>, a friendly developer who loves creating useful and fun web tools.
            </p>
            <p>
              I built TextUtils to make daily text editing and analyzing simple and enjoyable for everyone!
            </p>
            <div className="developer-contact">
              <a href="https://www.linkedin.com/in/goutam-sharma-ag10" target="_blank" rel="noreferrer" className="linkedin"><FaLinkedin /></a>
              <a href="https://github.com/10GoutamSharma7" target="_blank" rel="noreferrer" className="github"><FaGithub /></a>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer" className="instagram"><FaInstagram /></a>
              <a href="mailto:en22cs301374@medicaps.ac.in" className="email"><FaEnvelope /></a>
              <a href="tel:+91-6261496125" className="phone"><FaPhone /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



// import React from 'react';
// import '../styles/About.css'; // Assuming you have a CSS file for styling

// export default function About(props) {
//   return (
//     <div className="about-container">
//       <h1 className="about-title">About Us</h1>

//       <div className="accordion" id="accordionExample">
//         <div className="accordion-item">
//           <h2 className="accordion-header">
//             <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//               Analyze Your Text
//             </button>
//           </h2>
//           <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
//             <div className="accordion-body">
//               This is the first item’s accordion body. It is shown by default and can contain any HTML content.
//             </div>
//           </div>
//         </div>

//         <div className="accordion-item">
//           <h2 className="accordion-header">
//             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//               Free to Use
//             </button>
//           </h2>
//           <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//             <div className="accordion-body">
//               This is the second item’s accordion body. Users can access it easily on any browser.
//             </div>
//           </div>
//         </div>

//         <div className="accordion-item">
//           <h2 className="accordion-header">
//             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//               Browser Compatible
//             </button>
//           </h2>
//           <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//             <div className="accordion-body">
//               This is the third item’s accordion body. Fully compatible across modern browsers.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
