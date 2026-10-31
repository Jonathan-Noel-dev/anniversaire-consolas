import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { Sparkles, Heart } from "lucide-react";
import "./FinalSurprise.css";

export default function FinalSurprise() {
  const celebrate = () => {
    confetti({
      particleCount: 180,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#c9aa70", "#e1c795", "#d9a7c7", "#ffffff"],
    });
  };

  return (
    <section className="final-surprise">
      <motion.div
        className="final-sparkle"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles size={28} />
      </motion.div>

      <motion.p
        className="final-overline"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        UNE JOURNÉE QUI T'APPARTIENT
      </motion.p>

      <motion.h2
        className="final-number"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        19
      </motion.h2>

      <h3>Une nouvelle année, mille possibilités.</h3>

      <p className="final-message">
        Que cette nouvelle année de ta vie soit remplie de bonheur,
        de belles réussites, de moments inoubliables et de rêves réalisés.
        <br />
        <strong>Joyeux anniversaire, Consolas !</strong>
      </p>

      <Heart className="final-heart" size={25} />

      <button className="final-button" onClick={celebrate}>
        Célébrer encore !
      </button>

      <p className="final-signature">
        Avec une pensée particulière pour toi.
      </p>
    </section>
  );
}