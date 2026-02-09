import React, { useRef, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Countdown from "./components/countdown";

import bg1 from "/img/background1.jpg";
import bg2 from "/img/background2.jpg";
import bg3 from "/img/background3.jpg";
import bg4 from "/img/background4.jpg";
import bg5 from "/img/background5.jpg";
import bg6 from "/img/background6.jpg";
import card from "/img/card.png";
import bni from "/img/BNI.png";
import cincin from "/img/cincin.png";
import bunga1 from "/img/flower1.png";
import bunga2 from "/img/flower2.png";
import cewekcowok1 from "/img/cewekcowok1.jpeg";
import cewekcowok2 from "/img/cewekcowok2.jpeg";
import cewekcowok3 from "/img/cewekcowok3.jpeg";
import cewekcowok4 from "/img/cewekcowok4.jpeg";
import cewekcowok5 from "/img/cewekcowok5.jpeg";

import music from "/music/Elvis Presley - Can't Help Falling In Love (Official Audio).mp3";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarPlus } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const styles = {
  container: {
    width: "100%",
    maxWidth: "463px",
    minHeight: "100vh",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    overflowX: "hidden",
    scrollBehavior: "smooth",
    position: "relative",
  },
  section1: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 1rem",
    textAlign: "center",
    zIndex: "20",
    backgroundSize: "cover",
  },
  bunga1: {
    marginTop: "9rem",
    margin: "0 auto",
  },
  section1Text: {
    color: "#000000",
    fontFamily: "Playfair Display",
    marginBottom: "0.3rem",
  },
  section1Title: {
    fontSize: "2.5rem",
    fontFamily: "Marck Script",
    fontWeight: "bold",
    color: "#000000",
    marginBottom: "0.3rem",
  },
  section1Subtitle: {
    color: "#000000",
    fontFamily: "Roboto",
    marginBottom: "3rem",
  },
  toText: {
    color: "#000000",
    fontFamily: "Playfair Display",
  },
  guestName: {
    fontSize: "1.6rem",
    fontWeight: "600",
    fontFamily: "Marck Script",
    color: "#000000",
    marginBottom: "0.4rem",
  },
  button: {
    backgroundColor: "#E6D3A3",
    padding: "0.3rem 2.6rem",
    borderRadius: "0.3rem",
    fontSize: "1rem",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#5c3e33",
    fontFamily: "Roboto",
  },
  section2: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    zIndex: "10",
    backgroundSize: "cover",
  },
  section2bungaContainer: {
    position: "relative",
    width: "220px",
    height: "50px",
    marginBottom: "15rem",
  },
  bunga: {
    position: "absolute",
    top: "0",
    left: "0",
  },
  bunga2: {
    opacity: "0.7",
  },
  section3: {
    position: "relative",
    width: "100%",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
  },
  section3Bg: {
    height: "100vh",
    width: "100%",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 1rem",
    textAlign: "center",
    backgroundSize: "cover",
  },
  roundedCard: {
    backgroundColor: "#FDFAF6",
    width: "23rem",
    height: "40rem",
    borderRadius: "14rem",
    border: "10px solid #A9A9A9",
    color: "#334443",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    textAlign: "center",
    padding: "0 1.5rem",
  },
  cardH5: {
    fontSize: "1rem",
    fontFamily: "Roboto",
  },
  cardH1: {
    fontSize: "3rem",
    fontFamily: "Marck Script",
    fontWeight: "bold",
  },
  cardH3: {
    fontSize: "2rem",
  },
  section3BgBrown: {
    height: "35rem",
    width: "100%",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 1rem",
    backgroundColor: "#FDFAF6",
  },
  bunga1Large: {
    width: "120px",
    height: "160px",
    marginBottom: "1rem",
  },
  weFoundLove: {
    color: "#334443",
    fontSize: "1.4rem",
    marginBottom: "1.4rem",
    fontWeight: "bold",
    fontFamily: "Playfair Display",
  },
  arRumText: {
    color: "#334443",
    fontSize: "13px",
    marginBottom: "1.4rem",
    fontFamily: "Roboto",
  },
  arRumAyat: {
    color: "#334443",
    marginBottom: "2rem",
    fontSize: "14px",
    fontFamily: "Playfair Display",
  },
  section3Bg4: {
    height: "50rem",
    width: "100%",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 1rem",
    backgroundSize: "cover",
  },
  roundedCard2: {
    backgroundColor: "#FDFAF6",
    width: "23rem",
    height: "48rem",
    borderRadius: "14rem",
    border: "10px solid #A9A9A9",
    color: "#334443",
  },
  brideGroom: {
    fontSize: "2rem",
    marginBottom: "1.4rem",
    fontWeight: "bold",
    fontFamily: "Playfair Display",
  },
  wasallam: {
    fontSize: "14px",
    marginBottom: "1.4rem",
    fontFamily: "Roboto",
  },
  brideName: {
    fontSize: "3rem",
    fontFamily: "Marck Script",
    fontWeight: "bold",
  },
  familyText: {
    fontSize: "1rem",
    fontFamily: "Playfair Display",
  },
  andSign: {
    fontSize: "5rem",
    fontFamily: "Marck Script",
    fontWeight: "bold",
  },
  section3BgBrownLarge: {
    height: "70rem",
    width: "100%",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 1rem",
    backgroundColor: "#F9F5F0",
  },
  eventCard: {
    width: "25rem",
    height: "33rem",
    borderRadius: "1rem",
    marginBottom: "2rem",
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "0 1.5rem",
    backgroundSize: "cover",
  },
  ringImg: {
    width: "90px",
    height: "70px",
    marginBottom: "0.5rem",
  },
  akadTitle: {
    color: "#334443",
    fontSize: "1.8rem",
    marginBottom: "0.5rem",
    fontWeight: "bold",
  },
  eventDate: {
    color: "#334443",
    fontSize: "1.4rem",
    marginBottom: "0.5rem",
    fontWeight: "600",
    fontFamily: "Roboto",
  },
  eventTime: {
    color: "#334443",
    fontSize: "1.1rem",
    marginBottom: "5rem",
    fontWeight: "600",
    fontFamily: "Roboto",
  },
  eventLocationTitle: {
    color: "#334443",
    fontSize: "14px",
    marginBottom: "0.5rem",
    fontWeight: "bold",
    fontFamily: "Playfair Display",
  },
  eventLocation: {
    color: "#334443",
    fontSize: "14px",
    marginBottom: "0.5rem",
  },
  openMapsBtn: {
    backgroundColor: "#E6D8C3",
    color: "#334443",
    padding: "0.5rem 1rem",
    borderRadius: "1rem",
    fontSize: "1rem",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2rem",
  },
  countdownSection: {
    height: "20rem",
    width: "100%",
    backgroundColor: "#FDFAF6",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 1rem",
  },
  countdownTitle: {
    color: "#334443",
    fontSize: "2rem",
    marginBottom: "1.5rem",
    fontWeight: "bold",
    fontFamily: "Marck Script",
  },
  saveCalendarBtn: {
    backgroundColor: "#543022",
    color: "#ffffff",
    padding: "0.8rem 0.4rem",
    borderRadius: "5rem",
    fontSize: "0.9rem",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2rem",
    marginTop: "2rem",
  },
  ourMomentSection: {
    width: "100%",
    backgroundColor: "#F9F5F0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "2rem 1rem",
  },
  ourMomentTitle: {
    fontSize: "3rem",
    marginBottom: "1rem",
    color: "#334443",
    marginLeft: "8rem",
    fontWeight: "bold",
    fontFamily: "Marck Script",
  },
  imageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "0.5rem",
    width: "100%",
    maxWidth: "425px",
  },
  gridItem1: {
    gridColumn: "1 / 2",
    gridRow: "1 / 2",
    height: "150px",
  },
  gridItem2: {
    gridColumn: "2 / 3",
    gridRow: "1 / 2",
    height: "150px",
  },
  gridItem3: {
    gridColumn: "1 / 2",
    gridRow: "2 / 3",
    height: "150px",
  },
  gridItem4: {
    gridColumn: "2 / 3",
    gridRow: "2 / 4",
    height: "305px",
  },
  gridItem5: {
    gridColumn: "1 / 2",
    gridRow: "3 / 4",
    height: "150px",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "0.5rem",
  },
  weddingGiftSection: {
    height: "25rem",
    width: "100%",
    backgroundColor: "#F9F5F0",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 1rem",
  },
  weddingGiftTitle: {
    color: "#334443",
    fontSize: "2.4rem",
    marginBottom: "0.6rem",
    fontWeight: "bold",
    fontFamily: "Marck Script",
  },
  giftText: {
    color: "#334443",
    fontSize: "14px",
    marginBottom: "1.4rem",
    fontWeight: "600",
    fontFamily: "Roboto",
  },
  cardContainer: {
    width: "22.2rem",
    height: "14rem",
    backgroundSize: "cover",
  },
  bniLogo: {
    width: "100px",
    marginTop: "1.5rem",
    marginLeft: "14rem",
  },
  accountInfo: {
    marginTop: "5.5rem",
    marginRight: "12rem",
    position: "relative",
  },
  accountNumber: {
    fontSize: "1.3rem",
    marginBottom: "0.4rem",
    fontWeight: "bold",
  },
  accountName: {
    fontSize: "1.3rem",
    fontWeight: "400",
  },
  copyBtn: {
    position: "absolute",
    top: "1rem",
    left: "15rem",
    backgroundColor: "#969490",
    color: "#fff",
    padding: "0.5rem 1.5rem",
    borderRadius: "0.3rem",
    fontSize: "0.9rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bestWishesSection: {
    height: "40rem",
    width: "100%",
    backgroundColor: "#FDFAF6",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 1rem",
  },
  bestWishesTitle: {
    color: "#334443",
    fontSize: "3.6rem",
    marginBottom: "0.4rem",
    fontFamily: "Marck Script",
    fontWeight: "bold",
  },
  bestWishesText: {
    color: "#334443",
    fontSize: "15px",
    marginBottom: "0.8rem",
    fontFamily: "Roboto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: "1rem",
    borderRadius: "0.5rem",
    width: "100%",
    maxWidth: "420px",
    margin: "0 auto",
    marginBottom: "1.2rem",
  },
  formInput: {
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "0.3rem",
    padding: "0.5rem 0.8rem",
    marginBottom: "0.8rem",
    fontSize: "0.9rem",
  },
  formTextarea: {
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "0.3rem",
    padding: "0.5rem 0.8rem",
    marginBottom: "0.8rem",
    fontSize: "0.9rem",
    height: "6rem",
    resize: "none",
  },
  formBtnContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  sendBtn: {
    backgroundColor: "#5c3e33",
    color: "#fff",
    padding: "0.5rem 1.5rem",
    borderRadius: "0.3rem",
    fontSize: "0.9rem",
  },
  footerSection: {
    width: "100%",
    height: "40rem",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 1rem",
    backgroundSize: "cover",

    paddingBottom: "10rem", // geser ke atas sedikit
  },
  footerText: {
    color: "#334443",
    fontSize: "14px",
    marginBottom: "0.5rem",
    fontWeight: "600",
    fontFamily: "Roboto",
  },
  footerTitle: {
    color: "#334443",
    marginBottom: "0.5rem",
    fontSize: "1.2rem",
    fontFamily: "Playfair Display",
  },
  coupleName: {
    color: "#334443",
    fontSize: "1.4rem",
    fontWeight: "bold",
    fontFamily: "Playfair Display",
  },
  // copyrightSection: {
  //   height: "10rem",
  //   width: "100%",
  //   backgroundColor: "#FDFAF6",
  //   backgroundPosition: "center",
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   padding: "0 1rem",
  // },
  // copyrightTitle: {
  //   color: "#334443",
  //   fontSize: "1.2rem",
  //   marginBottom: "0.8rem",
  //   fontWeight: "bold",
  // },
  // copyrightText: {
  //   color: "#334443",
  //   fontSize: "0.9rem",
  // },
};

// Media queries to make it responsive
const responsiveStyles = `
  @media (max-width: 480px) {
    .responsive-card {
      width: 90%;
      height: auto;
      padding: 1rem;
    }
    .responsive-title {
      font-size: 2rem;
    }
    .responsive-text {
      font-size: 12px;
    }
    .responsive-grid {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 120px;
    }
    .responsive-bunga-large {
        width: 100px;
        height: 100px;
    }
    .responsive-ml {
      margin-left: 0;
      text-align: center;
    }
  }
`;

// Insert the CSS into the document head
const styleSheet = document.createElement("style");
styleSheet.innerText = responsiveStyles;
document.head.appendChild(styleSheet);

export default function App() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const btnRef = useRef(null);
  const bunga1Ref = useRef(null);
  const bunga2Ref = useRef(null);
  const audioRef = useRef(null);

  const [guestName, setGuestName] = useState("");

  const playAnimation = () => {
    const tl = gsap.timeline();

    // Section 1 keluar ke atas
    tl.to(section1Ref.current, {
      y: "-100%",
      duration: 1,
      ease: "power2.inOut",
    });

    // Section 2 masuk
    tl.fromTo(
      section2Ref.current,
      { y: "100%", opacity: 1 },
      { y: "0%", opacity: 1, duration: 1, ease: "power2.inOut" },
      "<"
    );

    // bunga kiri ke kiri, kanan ke kanan
    tl.to(bunga1Ref.current, {
      x: "-150",
      duration: 1,
      ease: "power2.out",
    });
    tl.to(
      bunga2Ref.current,
      {
        x: "150",
        duration: 1,
        ease: "power2.out",
      },
      "<"
    );

    // Zoom seluruh layar Section 2
    tl.to(section2Ref.current, {
      scale: 3, // perbesar section
      opacity: 0,
      duration: 1.5,
      ease: "power3.inOut",
      transformOrigin: "center center",
      onComplete: () => {
        // Mulai putar musik
        if (audioRef.current) {
          audioRef.current.play().catch((err) => {
            console.log("Autoplay error:", err);
          });
        }
      },
    });

    // Setelah zoom selesai → sembunyikan Section 1 & 2
    tl.to(section2Ref.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        section1Ref.current.style.display = "none";
        section2Ref.current.style.display = "none";
        section3Ref.current.style.display = "block";
        window.scrollTo({ top: 0, behavior: "auto" }); // pindah ke section 3
        const children = section3Ref.current.querySelectorAll(
          "#div, #img, #text, #form"
        );
        children.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 80%", // elemen mulai terlihat 20%–30%
                toggleActions: "play none none none", // hanya sekali
              },
            }
          );
        });

        ScrollTrigger.refresh();
      },
    });
  };

  useEffect(() => {
    // ambil query param `to`
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to");
    if (to) {
      setGuestName(decodeURIComponent(to));
    }

    // pasang event listener untuk tombol
    const btn = btnRef.current;
    if (btn) {
      const handleClick = (e) => {
        e.preventDefault();
        playAnimation();
      };
      btn.addEventListener("click", handleClick);

      // cleanup event listener biar gak dobel
      return () => {
        btn.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return (
    <div style={styles.container}>
      <audio ref={audioRef} src={music} loop />

      {/* Section 1 */}
      <section
        ref={section1Ref}
        style={{ ...styles.section1, backgroundImage: `url(${bg1})` }}
      >
        <img
          src={bunga1}
          style={styles.bunga1}
          alt=""
          width="80"
          height="120"
        />

        <h4 style={styles.section1Text}>THE WEDDING OF</h4>

        <h2 style={styles.section1Title}>Arga & Maya</h2>

        <h4 style={styles.section1Subtitle}>MINGGU, 12 Oktober 2025</h4>

        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <p style={styles.toText}>Kepada Yth:</p>
          <p style={{ ...styles.toText, marginBottom: "0.4rem" }}>
            Bpk/Ibu/Saudara/i
          </p>
          <p style={styles.guestName}>{guestName}</p>
          <p style={{ ...styles.toText, marginBottom: "1rem" }}>Di Tempat</p>
        </div>

        <a href="#" ref={btnRef} style={styles.button}>
          <FaEnvelopeOpenText style={{ marginRight: "0.5rem" }} />
          Buka Undangan
        </a>
      </section>

      {/* Section 2 */}
      <section
        ref={section2Ref}
        style={{ ...styles.section2, backgroundImage: `url(${bg2})` }}
      >
        <div style={styles.section2bungaContainer}>
          <img
            ref={bunga1Ref}
            src={bunga1}
            alt=""
            style={styles.bunga}
            width="220"
            height="50"
          />
          <img
            ref={bunga2Ref}
            src={bunga2}
            alt=""
            style={{ ...styles.bunga, ...styles.bunga2 }}
            width="220"
            height="50"
          />
        </div>
      </section>

      {/* Section 3 (scrollable) */}
      <section
        ref={section3Ref}
        style={{ ...styles.section3, display: "none" }}
      >
        <div style={{ ...styles.section3Bg, backgroundImage: `url(${bg3})` }}>
          <div style={styles.roundedCard} id="div">
            <div style={styles.cardContent}>
              <h5 style={styles.cardH5}>THE WEDDING OF</h5>
              <h1 style={styles.cardH1}>Maya</h1>
              <h3 style={styles.cardH3}>&</h3>
              <h1 style={styles.cardH1}>Arga</h1>
              <h5 style={styles.cardH5}>MINGGU, 12 Oktober 2025</h5>
            </div>
          </div>
        </div>

        <div style={styles.section3BgBrown}>
          <img src={bunga1} alt="" style={styles.bunga1Large} id="img" />
          <h2 style={styles.weFoundLove} id="text">
            WE FOUND LOVE
          </h2>
          <p style={styles.arRumText} id="text">
            "Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya
            <br />
            untukmu pasangan hidup dari jenismu sendiri supaya kamu dapat
            <br />
            ketenangan hati dan dijadikannya kasih sayang di antara kamu.
            <br /> Sesungguhnya yang demikian itu menjadi tanda-tanda
            kebesaran-Nya
            <br />
            bagi orang-orang yang berpikir."
          </p>
          <p style={styles.arRumAyat} id="text">
            QS.Ar-Rum Ayat 21
          </p>
        </div>

        <div style={{ ...styles.section3Bg4, backgroundImage: `url(${bg4})` }}>
          <div style={styles.roundedCard2} id="div">
            <div style={styles.cardContent}>
              <h2 style={styles.brideGroom}>
                BRIDE &<br />
                GROOM
              </h2>
              <p style={styles.wasallam}>
                Assalamu'alaikum Warahmatullahi Wabarakatuh
                <br />
                Dengan mohon rahmat dan ridho Allah Swt. kami
                <br />
                bermaksud mengundang Bapak/Ibu/Saudara/i untuk
                <br />
                menghadiri acara pernikahan putra-putri kami:
              </p>
              <h1 style={styles.brideName}>Maya</h1>
              <h3
                style={{
                  ...styles.familyText,
                  fontSize: "1.2rem",
                  fontWeight: "500",
                }}
              >
                Maya Yunita
              </h3>
              <p style={styles.familyText}>
                Putri Ketiga dari
                <br />
                Bpk. Soengkoboeno & Ibu Oyat Tamiya
              </p>
              <h1 style={styles.andSign}>&</h1>
              <h1 style={styles.brideName}>Arga</h1>
              <h3
                style={{
                  ...styles.familyText,
                  fontSize: "1.2rem",
                  fontWeight: "500",
                }}
              >
                Arga
              </h3>
              <p style={{ ...styles.familyText, marginBottom: "3rem" }}>
                Putra Ketiga dari
                <br />
                Bpk. Azwir & Ibu Soejatmiko
              </p>
            </div>
          </div>
        </div>

        <div style={styles.section3BgBrownLarge}>
          <div
            style={{ ...styles.eventCard, backgroundImage: `url(${bg6})` }}
            id="div"
          >
            <img src={cincin} alt="" style={styles.ringImg} />
            <h1 style={styles.akadTitle}>AKAD NIKAH</h1>
            <h3 style={styles.eventDate}>Minggu, 12 Oktober 2025</h3>
            <h5 style={styles.eventTime}>Pukul: 09.00 WIB</h5>
            <h5 style={styles.eventLocationTitle}>Bertempat Hotel Ayana</h5>
            <p style={styles.eventLocation}>
              SKY at AYANA Resort
              <br />
              Bali, Indonesia
            </p>
            <a
              href="https://maps.app.goo.gl/WoAnE99b2ydQu8ic9"
              target="_blank"
              style={styles.openMapsBtn}
            >
              <FaMapMarkerAlt style={{ marginRight: "0.5rem" }} /> OPEN MAPS
            </a>
          </div>
          <div
            style={{ ...styles.eventCard, backgroundImage: `url(${bg6})` }}
            id="div"
          >
            <h1 style={styles.akadTitle}>RESEPSI</h1>
            <h3 style={styles.eventDate}>Minggu, 12 Oktober 2025</h3>
            <h5 style={styles.eventTime}>Pukul: 11.00 WIB s.d selesai</h5>
            <h5 style={styles.eventLocationTitle}>Bertempat Hotel Ayana</h5>
            <p style={styles.eventLocation}>
              SKY at AYANA Resort
              <br />
              Bali, Indonesia
            </p>
            <a
              href="https://maps.app.goo.gl/WoAnE99b2ydQu8ic9"
              target="_blank"
              style={styles.openMapsBtn}
            >
              <FaMapMarkerAlt style={{ marginRight: "0.5rem" }} /> OPEN MAPS
            </a>
          </div>
        </div>

        <div style={styles.countdownSection}>
          <div id="div">
            <h2 style={styles.countdownTitle}>Counting The Day</h2>
            <Countdown />
            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+of+Maya+%26+Arga&dates=20251012T020000Z/20251012T050000Z&details=Resepsi+Pernikahan&location=Rw.+Panjang,+Bojonggede,+Bogor"
              style={styles.saveCalendarBtn}
            >
              <FaCalendarPlus style={{ marginRight: "0.5rem" }} /> SIMPAN DI
              KALENDER
            </a>
          </div>
        </div>

        <div style={styles.ourMomentSection}>
          <h2
            style={{ ...styles.ourMomentTitle, marginLeft: "8rem" }}
            id="text"
          >
            Our Moment
          </h2>

          <div style={styles.imageGrid} id="div">
            {/* Landscape */}
            <div style={styles.gridItem3}>
              <img src={cewekcowok3} alt="" style={styles.imageStyle} />
            </div>

            {/* Portraits */}
            <div style={styles.gridItem4}>
              <img src={cewekcowok1} alt="" style={styles.imageStyle} />
            </div>
            <div style={styles.gridItem5}>
              <img src={cewekcowok2} alt="" style={styles.imageStyle} />
            </div>

            {/* Landscape */}
            <div style={styles.gridItem2}>
              <img src={cewekcowok5} alt="" style={styles.imageStyle} />
            </div>
            <div style={styles.gridItem1}>
              <img src={cewekcowok4} alt="" style={styles.imageStyle} />
            </div>
          </div>
        </div>

        <div style={styles.weddingGiftSection}>
          <h2 style={styles.weddingGiftTitle} id="text">
            Wedding gift
          </h2>
          <p style={styles.giftText} id="text">
            Bagi bapak/ibu/saudara/i yang ingin mengirimkan hadiah
            <br />
            pernikahan dapat melalui nomer rekening di bawah ini
          </p>
          <div
            style={{ ...styles.cardContainer, backgroundImage: `url(${card})` }}
            id="div"
          >
            <img src={bni} alt="" style={styles.bniLogo} />
            <div style={styles.accountInfo}>
              <h2 style={styles.accountNumber}>1910263748</h2>
              <h2 style={styles.accountName}>Maya Yunita</h2>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("1910263748");
                  alert("Nomor rekening berhasil disalin!");
                }}
                style={styles.copyBtn}
              >
                <FaCopy style={{ marginRight: "0.5rem" }} /> Salin
              </button>
            </div>
          </div>
        </div>

        <div style={styles.bestWishesSection}>
          <img
            src={bunga1}
            alt=""
            style={{ ...styles.bunga1Large, marginTop: "1.2rem" }}
            id="img"
          />
          <h1 style={styles.bestWishesTitle} id="text">
            Best Wishes
          </h1>
          <p style={styles.bestWishesText} id="text">
            Sampaikan do'a dan ucapan terbaik anda
          </p>
          <form
            onSubmit={() => {
              setTimeout(() => {
                window.location.reload(); // reload halaman setelah submit
              }, 500); // kasih jeda biar data terkirim dulu
            }}
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd8fpO_H2mBoHtz_J9ODtQZ4SmUDrrMl8FbsDPh-OUMIIGpYg/formResponse"
            method="POST"
            style={styles.form}
            id="form"
          >
            {/* Input nama tamu */}
            <input
              type="text"
              placeholder="Nama Tamu"
              name="entry.73155143"
              id="nama_tamu"
              style={styles.formInput}
            />

            {/* Select konfirmasi */}
            <select
              name="entry.2128657294"
              id="kehadiran"
              style={styles.formInput}
            >
              <option value="">Konfirmasi Kehadiran</option>
              <option value="hadir">Hadir</option>
              <option value="tidak_hadir">Tidak Hadir</option>
            </select>

            {/* Textarea ucapan */}
            <textarea
              name="entry.945093395"
              id="ucapan"
              placeholder="Tulis ucapan"
              style={styles.formTextarea}
            ></textarea>

            {/* Tombol kirim */}
            <div style={styles.formBtnContainer}>
              <button type="submit" style={styles.sendBtn}>
                Kirim
              </button>
            </div>
          </form>
        </div>

        <div
          style={{ ...styles.footerSection, backgroundImage: `url(${bg5})` }}
        >
          <h2 style={styles.footerText}>Terima Kasih</h2>
          <p style={styles.footerText} id="text">
            Merupakan suatu kebahagian dan kehormatan bagi kami, apabila
            <br />
            Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu
            <br />
            kepada kami
          </p>
          <h2 style={styles.footerTitle} id="text">
            KAMI YANG BERBAHAGIA
          </h2>
          <h1 style={styles.coupleName} id="text">
            Arga & Maya
          </h1>
        </div>

        {/* <div style={styles.copyrightSection}></div> */}
      </section>
    </div>
  );
}
