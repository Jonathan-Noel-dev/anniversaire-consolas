import { useEffect } from "react";
import { motion } from "motion/react";
import { Heart, Sparkles, Star, Gift, ArrowDown } from "lucide-react";
import confetti from "canvas-confetti";
import "./BirthdayReveal.css";
import Gallery from "./Gallery";
import GiftBox from "./GiftBox";
import SecretLetter from "./SecretLetter";
import MusicPlayer from "./MusicPlayer";
import FinalSurprise from "./FinalSurprise";

export default function BirthdayReveal() {

  useEffect(() => {
    const colors = ["#f4b5d0", "#e5b77e", "#ffffff", "#b99ae8"];

    confetti({
      particleCount: 130,
      spread: 100,
      origin: { y: 0.6 },
      colors,
    });

    const timer = setTimeout(() => {
      confetti({
        particleCount: 65,
        angle: 60,
        spread: 65,
        origin: { x: 0 },
        colors,
      });

      confetti({
        particleCount: 65,
        angle: 120,
        spread: 65,
        origin: { x: 1 },
        colors,
      });
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const scrollToLetter = () => {
    document.getElementById("lettre")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="birthday">

      {/* Décoration lumineuse */}
      <div className="birthday-glow glow-one" />
      <div className="birthday-glow glow-two" />

      <div className="birthday-stars">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 61) % 100}%`,
              animationDelay: `${(i % 5) * 0.7}s`,
            }}
          />
        ))}
      </div>

      {/* Célébration principale */}
      <section className="birthday-hero">

        <motion.div
          className="birthday-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >

          <motion.div
            className="birthday-crown"
            animate={{
              y: [0, -8, 0],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <Sparkles size={30} />
          </motion.div>

          <p className="birthday-small">
            ✦ AUJOURD'HUI EST TON JOUR ✦
          </p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Joyeux
            <span> anniversaire</span>
          </motion.h1>

          <motion.div
            className="birthday-name"
            initial={{ opacity: 0, letterSpacing: "15px" }}
            animate={{ opacity: 1, letterSpacing: "5px" }}
            transition={{ delay: 0.8, duration: 1.5 }}
          >
            CONSOLAS
          </motion.div>

          <div className="birthday-separator">
            <span />
            <Heart size={18} fill="currentColor" />
            <span />
          </div>

          <motion.div
            className="birthday-age"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <span>19</span>
            <small>ANS</small>
          </motion.div>

          <p className="birthday-description">
            Une nouvelle année, une nouvelle histoire,
            et mille belles raisons de sourire.
          </p>

          <motion.div
            className="birthday-date"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <Star size={13} />
            01 NOVEMBRE 2026
            <Star size={13} />
          </motion.div>

          <motion.button
            className="birthday-button"
            onClick={scrollToLetter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Gift size={18} />
            Découvrir ton message
            <ArrowDown size={16} />
          </motion.button>

        </motion.div>

      </section>

      {/* Lettre personnelle */}
      <section className="birthday-letter" id="lettre">

        <motion.div
          className="letter-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >

          <div className="letter-icon">
            <Heart size={24} fill="currentColor" />
          </div>

          <p className="letter-subtitle">
            QUELQUES MOTS POUR TOI
          </p>

          <h2>
            À toi, <span>Consolas...</span>
          </h2>

          <div className="letter-line" />

          <div className="letter-text">

            <p>
              Aujourd'hui est un jour particulier, car il célèbre
              une personne qui mérite de vivre de belles choses.
            </p>

            <p>
              19 ans… Une nouvelle année, de nouvelles aventures,
              de nouveaux rêves et, je l'espère, une multitude
              de raisons de sourire.
            </p>

            <p>
              Je ne sais pas si les mots suffiront à exprimer
              ce que je souhaite te transmettre, mais j'espère
              que cette petite surprise te fera plaisir.
            </p>

            <p>
              Que cette nouvelle année de ta vie soit remplie
              de bonheur, de belles rencontres, de réussite
              et de moments inoubliables.
            </p>

            <p className="letter-highlight">
              Continue de briller à ta manière.
              Le monde a encore tant de belles choses
              à te faire découvrir.
            </p>

          </div>

          <div className="letter-signature">
            <span>Avec beaucoup d'affection,</span>
            <Heart size={16} fill="currentColor" />
          </div>

          <p className="letter-end">
            JOYEUX ANNIVERSAIRE, CONSOLAS !
          </p>

        </motion.div>

      </section>
      <Gallery />
      <GiftBox />
      <SecretLetter />
      <FinalSurprise />

      <MusicPlayer />
    </main>
  );
}