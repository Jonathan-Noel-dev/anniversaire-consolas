
import { motion } from "motion/react";
import { Heart, Sparkles } from "lucide-react";
import "./Intro.css";

export default function Intro({ onOpen }) {
  return (
    <main className="intro">

      <div className="intro-stars">
        {Array.from({ length: 35 }).map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="intro-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="intro-icon"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Heart size={22} fill="currentColor" />
        </motion.div>

        <p className="intro-subtitle">
          UNE PETITE SURPRISE POUR UNE PERSONNE SPÉCIALE
        </p>

        <h1>
          Chère <span>Consolas</span>
        </h1>

        <div className="intro-divider">
          <Sparkles size={16} />
        </div>

        <p className="intro-message">
          Quelque chose de merveilleux t'attend...
        </p>

        <motion.button
          className="intro-button"
          onClick={onOpen}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Découvrir ma surprise</span>
          <Heart size={16} />
        </motion.button>

        <p className="intro-footer">
          CRÉÉ AVEC ATTENTION · 1er NOVEMBRE 2026
        </p>
      </motion.div>
    </main>
  );
}
