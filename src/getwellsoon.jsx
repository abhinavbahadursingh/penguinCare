import React from "react";
import { motion } from "framer-motion";
import styles from "./GetWellSoonPage.module.css";

export default function GetWellSoonPage() {
  const hearts = new Array(8).fill(0).map((_, i) => ({ id: i }));

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        {/* Decorative tech-grid background */}
        <div className={styles.techBg}>
          <svg className={styles.fullSvg} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#f472b6" stopOpacity="0.12" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#g)" />
            <g stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1">
              <path d="M10 30 H300 M20 80 H400 M60 150 H600" />
              <path d="M700 20 V320 M520 60 V500" />
            </g>
          </svg>
        </div>

        {/* Floating hearts */}
        {hearts.map((h, idx) => (
          <motion.div
            key={h.id}
            initial={{ y: 30, opacity: 0, scale: 0.7 }}
            animate={{ y: -220 - idx * 20, opacity: [0, 1, 0.9], scale: [0.7, 1, 0.95] }}
            transition={{
              duration: 5 + idx * 0.6,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: idx * 0.4,
            }}
            className={`${styles.heart} ${styles[`left${idx}`]}`}
          >
            <div className={styles.heartCircle}>
              <svg viewBox="0 0 24 24" className={styles.heartSvg} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 21s-8-4.7-8-11.1S7.3 3 12 7.2 20 4 20 9.9 12 21 12 21z"
                  fill="#ff7ab6"
                />
              </svg>
            </div>
          </motion.div>
        ))}

        <div className={styles.mainContent}>
          {/* Left card */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={styles.leftCard}
          >
            <div className={styles.header}>
              <div className={styles.icon}>❤</div>
              <div>
                <h1 className={styles.title}>A Little Care for Penguin</h1>
                <p className={styles.subtitle}>Technology + care = speedy recovery 💫</p>
              </div>
            </div>

            <div className={styles.textContent}>
              <p>Hey beautiful hoooman —</p>
              <p>
                Jldii se theek ho jaao cutie.!!. Ye ek chota sa recovery post meri trf se taakii chotu sii shayad smile hi laa saku u ke face pr... Chotu sa code powder jisse u thoda accha feel kro.! And bhot bhot bhoot saari accha walla vibes...!!
                Strong Penguin.!! Jldi se shii ho jaaa.!! Jldi shii hoge tbhi jldi phir next hackathon me challenge..!💀 ( majaak krr rha ).
              </p>

              <blockquote className={styles.quote}>
                <p className={styles.quoteTitle}>Get Well Soon 🌸</p>
                <p>Jldii se shiii or jaao bhoooottt sarraaaa smile kro kush rho phir..!!.</p>
              </blockquote>

              <p className={styles.ps}>Ye button press kro and Smile kro abhh..!! ek baar spam krke bhi dekhna.. ❤️</p>
            </div>

            <div className={styles.actions}>
              <button
                onClick={() => {
                  try {
                    const c = document.createElement("canvas");
                    c.style.position = "fixed";
                    c.style.left = 0;
                    c.style.top = 0;
                    c.style.pointerEvents = "none";
                    c.width = window.innerWidth;
                    c.height = window.innerHeight;
                    document.body.appendChild(c);
                    const ctx = c.getContext("2d");
                    const pieces = [];
                    for (let i = 0; i < 80; i++) {
                      pieces.push({
                        x: Math.random() * c.width,
                        y: -20 - Math.random() * 200,
                        r: 6 + Math.random() * 6,
                        vx: -3 + Math.random() * 6,
                        vy: 2 + Math.random() * 5,
                        color: [`#ff7ab6`, `#7c3aed`, `#06b6d4`, `#f59e0b`][Math.floor(Math.random() * 4)],
                      });
                    }
                    let t = 0;
                    function draw() {
                      ctx.clearRect(0, 0, c.width, c.height);
                      pieces.forEach((p) => {
                        p.x += p.vx;
                        p.y += p.vy + 0.6;
                        p.vy *= 0.99;
                        ctx.beginPath();
                        ctx.fillStyle = p.color;
                        ctx.ellipse(p.x, p.y, p.r, p.r * 0.7, 0, 0, Math.PI * 2);
                        ctx.fill();
                      });
                      t++;
                      if (t < 160) requestAnimationFrame(draw);
                      else document.body.removeChild(c);
                    }
                    draw();
                  } catch (e) {
                    console.warn(e);
                  }
                }}
                className={styles.button}
              >
                Smile Cutie Penguin 🎉
              </button>
            </div>
          </motion.div>

          {/* Right card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className={styles.rightCard}
          >
            <div className={styles.rightInner}>
              <div className={styles.rightHeader}>
                <div className={styles.rightIcon}>⌘</div>
                <div>
                  <h3 className={styles.rightTitle}>Tech Letter</h3>
                  <p className={styles.rightSubtitle}>A little digital warmth.</p>
                </div>
              </div>

              <div className={styles.stats}>
                <div className={styles.statRow}>
                  <span>Healing bytes</span>
                  <span className={styles.statValue}>99% ❤️</span>
                </div>
                <div className={styles.progress}>
                  <div className={styles.progressBar} />
                </div>

                <div className={styles.grid}>
                  <div>☕ Cozy Coffee</div>
                  <div>📚 Calm reads</div>
                  <div>🫧 Soft music</div>
                </div>
              </div>

              <div className={styles.badge}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15 8H9L12 2Z" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Sending Bhot saraa care..!</span>
              </div>
            </div>

            <div id="message" className={styles.messageBox}>
              <p>U ko pta h u smile 1X to me smile 3000X —</p>
              <p>U ko pta h u happy 1X me to me happy 3000X —</p>
              <p>U ko pta h u  preshan 1X to me preshan 3000X—</p>
              <p className={styles.messageMain}>to abbh ekdm acche se rest kro apni bhot saari care kro and kushh rho bhot sara..!!</p>
              <p className={styles.messageFooter}>— with all my care & a little bit of code</p>
            </div>
          </motion.div>
        </div>

        <div className={styles.footer}>
          <div>Made with ❤️ </div>
          <div className={styles.footerLinks}>
            </div>
        </div>
      </div>
    </div>
  );
}