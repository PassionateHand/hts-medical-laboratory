import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FlaskConical,
  HeartPulse,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Phone,
  ShieldCheck,
  Stethoscope,
  TestTube2,
  X,
} from "lucide-react";
import "./styles.css";

const services = [
  {
    icon: FlaskConical,
    title: "Clinical Chemistry",
    text: "Routine and specialised chemistry testing presented with a clear, patient-friendly experience.",
  },
  {
    icon: Microscope,
    title: "Scan Services",
    text: "Convenient diagnostic support for patients who need accessible screening services.",
  },
  {
    icon: TestTube2,
    title: "Haematology & Blood Group Serology",
    text: "Blood-related testing and grouping services for everyday health needs and screening.",
  },
  {
    icon: ShieldCheck,
    title: "Medical Microbiology",
    text: "Microbiology services designed around careful sample handling and dependable laboratory workflow.",
  },
  {
    icon: CheckCircle2,
    title: "Pre-Employment & STD Screening",
    text: "Screening services for employment requirements and personal health awareness.",
  },
  {
    icon: HeartPulse,
    title: "Know Your Number",
    text: "A practical wellness check to help you stay informed about key health measurements.",
  },
  {
    icon: Stethoscope,
    title: "Full Body Massage",
    text: "A dedicated wellness service for relaxation and body care.",
  },
  {
    icon: ShieldCheck,
    title: "Blood Banking",
    text: "Blood banking support as part of HTS Medical Laboratory's service offering.",
  },
];

const highlights = [
  ["8am–6pm", "Monday–Saturday"],
  ["8+", "Core service areas"],
  ["Lekki", "Ikate, Lagos"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="HTS Medical Laboratory home">
            <img src="https://res.cloudinary.com/dzzl28aef/image/upload/v1791051245/HTS_laboratory_LOGO_ww6jpf.png" alt="HTS Medical Laboratory" />
          </a>

          <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Primary navigation">
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#process" onClick={closeMenu}>How it works</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-cta" href="tel:+2348107729353" onClick={closeMenu}>
              <Phone size={16} /> Call HTS
            </a>
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-media">
            <img src="https://res.cloudinary.com/dzzl28aef/image/upload/v1791053202/hero-lab_w5javb.jpg" alt="Laboratory professionals working with diagnostic equipment" />
          </div>
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="hero-copy reveal">
              <p className="eyebrow"><span /> HTS MEDICAL LABORATORY</p>
              <h1>Health care begins with <em>knowing.</em></h1>
              <p className="hero-lead">
                Laboratory, screening, blood banking and wellness services delivered
                with a calm, professional experience in Ikate, Lekki.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Find our laboratory <ArrowRight size={18} />
                </a>
                <a className="button button-glass" href="tel:+2348107729353">
                  <Phone size={17} /> +234 810 772 9353
                </a>
              </div>
              <div className="hero-trust">
                <span><CheckCircle2 size={16} /> Patient-focused service</span>
                <span><CheckCircle2 size={16} /> Monday–Saturday</span>
              </div>
            </div>

            <aside className="hero-card reveal">
              <div className="pulse-mark"><HeartPulse size={23} /></div>
              <span className="mini-label">TODAY AT HTS</span>
              <strong>8am – 6pm</strong>
              <p>Monday to Saturday</p>
              <div className="card-line" />
              <p className="card-location"><MapPin size={15} /> Ikate, Lekki, Lagos</p>
            </aside>
          </div>

          <div className="hero-wave" aria-hidden="true" />
        </section>

        <section className="quick-strip">
          <div className="container quick-grid">
            {highlights.map(([value, label]) => (
              <div className="quick-item" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
            <a className="quick-link" href="mailto:htsmlab@gmail.com">
              <Mail size={17} /> htsmlab@gmail.com
            </a>
          </div>
        </section>

        <section className="section intro-section" id="about">
          <div className="container intro-grid">
            <div className="intro-visual reveal">
              <div className="image-frame main-image">
                <img src="https://res.cloudinary.com/dzzl28aef/image/upload/v1791052379/I_live_in_one_of_the_most_medically_advanced_countries_in_the_world__A_country_that_has_access_to_the_most_advanced_medical_equipment_and_the_most_successful_medical_cures_ever_produced_and_I_get_it_for_free_oafhbw.jpg" alt="Laboratory blood testing" />
              </div>
              <div className="floating-note">
                <div className="note-icon"><Microscope size={19} /></div>
                <div>
                  <strong>Care + clarity</strong>
                  <span>A more reassuring lab experience</span>
                </div>
              </div>
              <div className="outline-ring" />
            </div>

            <div className="intro-copy reveal">
              <p className="section-kicker">WHY HTS</p>
              <h2>A modern laboratory experience, built around people.</h2>
              <p>
                HTS Medical Laboratory brings diagnostic and wellness services into
                one accessible destination. The focus is simple: make every visit
                feel organised, welcoming and easy to understand.
              </p>
              <div className="feature-list">
                <div><CheckCircle2 size={20} /><span>Convenient location beside BusyMinds School, Kusela Road.</span></div>
                <div><CheckCircle2 size={20} /><span>Broad laboratory, screening and wellness service offering.</span></div>
                <div><CheckCircle2 size={20} /><span>Clear opening hours and direct contact channels.</span></div>
              </div>
              <a className="text-link" href="#contact">Visit HTS Medical Laboratory <ArrowRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <p className="section-kicker">OUR SERVICES</p>
                <h2>One destination for everyday health needs.</h2>
              </div>
              <p>
                From laboratory testing to screening, blood banking and wellness,
                explore the services listed in the HTS Medical Laboratory profile.
              </p>
            </div>

            <div className="services-grid">
              {services.map(({ icon: Icon, title, text }, index) => (
                <article className="service-card reveal" style={{ "--delay": `${index * 55}ms` }} key={title}>
                  <div className="service-number">{String(index + 1).padStart(2, "0")}</div>
                  <div className="service-icon"><Icon size={22} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="service-arrow"><ArrowRight size={16} /></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-banner">
          <div className="container feature-banner-grid">
            <div className="banner-copy reveal">
              <p className="section-kicker light">HEALTH OF THE SICK</p>
              <h2>Know more. Feel more prepared.</h2>
              <p>
                Whether you are coming for routine testing, screening, blood-related
                services or wellness, HTS gives you a single point of contact.
              </p>
              <a className="button button-white" href="#contact">Contact HTS <ArrowRight size={18} /></a>
            </div>
            <div className="banner-images reveal">
              <img src="https://res.cloudinary.com/dzzl28aef/image/upload/v1791052379/Spot_Patterns_Reduce_Stress_Take_Control_ynzjgv.jpg" alt="Healthcare consultation" />
              <img src="https://res.cloudinary.com/dzzl28aef/image/upload/v1791052379/%D8%B1%D8%A7%D8%B2_%D8%AF%D9%82%D8%AA_%D8%AF%D8%B1_%D8%A7%D9%93%D8%B2%D9%85%D8%A7%DB%8C%D8%B4%DA%AF%D8%A7%D9%87_%D9%87%D8%A7%DB%8C_%D9%BE%D8%B2%D8%B4%DA%A9%DB%8C__%D8%A7%D8%AA%D9%88%D8%A7%D9%93%D9%86%D8%A7%D9%84%D8%A7%DB%8C%D8%B2%D8%B1_%D8%A8%DB%8C%D9%88%D8%B4%DB%8C%D9%85%DB%8C_%DA%86%DB%8C%D8%B3%D8%AA____%D8%A7%D9%93%DB%8C%D8%A7_%D9%85%DB%8C_%D8%AF%D8%A7%D9%86%DB%8C%D8%AF_%D8%A7%D8%AA%D9%88%D8%A7%D9%93%D9%86%D8%A7%D9%84%D8%A7%DB%8C%D8%B2%D8%B1_%D8%A8%DB%8C%D9%88%D8%B4%DB%8C%D9%85%DB%8C_%DA%86%DA%AF%D9%88%D9%86%D9%87_%D8%AF%D9%86%DB%8C%D8%A7%DB%8C_%D8%A7%D9%93%D8%B2%D9%85%D8%A7%DB%8C%D8%B4%DA%AF%D8%A7%D9%87_%D9%87%D8%A7%DB%8C_%D9%BE%D8%B2%D8%B4%DA%A9%DB%8C_%D8%B1%D8%A7_%D9%85_wkgkmj.jpg" alt="Wellness massage service" />
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <div className="section-heading centered reveal">
              <p className="section-kicker">HOW IT WORKS</p>
              <h2>A straightforward visit from start to finish.</h2>
              <p>Use the direct contact details below to plan your visit or ask about a service.</p>
            </div>

            <div className="process-grid">
              {[
                ["01", "Choose your service", "Review the services above and decide what you need before visiting."],
                ["02", "Contact HTS", "Call +234 810 772 9353 or +234 813 559 2806 for enquiries."],
                ["03", "Visit the laboratory", "Find HTS at Zontal Shopping Complex beside BusyMinds School."],
              ].map(([number, title, text]) => (
                <div className="process-card reveal" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy reveal">
              <p className="section-kicker light">CONTACT HTS</p>
              <h2>Ready when you are.</h2>
              <p>
                Reach the laboratory directly for service enquiries, opening hours
                and directions.
              </p>
              <div className="contact-actions">
                <a className="button button-white" href="tel:+2348107729353"><Phone size={18} /> Call now</a>
                <a className="button button-outline-white" href="mailto:htsmlab@gmail.com"><Mail size={18} /> Email us</a>
              </div>
            </div>

            <div className="contact-panel reveal">
              <div className="contact-row">
                <div className="contact-icon"><MapPin size={19} /></div>
                <div><span>LOCATION</span><strong>Zontal Shopping Complex beside BusyMinds School, Kusela Road, Ikate, Elegushi, Lekki, Lagos</strong></div>
              </div>
              <div className="contact-row">
                <div className="contact-icon"><Phone size={19} /></div>
                <div><span>PHONE</span><strong>+234 810 772 9353 · +234 813 559 2806</strong></div>
              </div>
              <div className="contact-row">
                <div className="contact-icon"><Clock3 size={19} /></div>
                <div><span>OPENING TIME</span><strong>Monday to Saturday · 8am – 6pm</strong></div>
              </div>
              <div className="contact-row">
                <div className="contact-icon"><Mail size={19} /></div>
                <div><span>EMAIL</span><strong>htsmlab@gmail.com</strong></div>
              </div>
              <div className="contact-socials">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a>
                <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok">♪</a>
                <span>HTS Med Lab</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <img src="https://res.cloudinary.com/dzzl28aef/image/upload/v1791051245/HTS_laboratory_LOGO_ww6jpf.png" alt="HTS Medical Laboratory" className="footer-logo" />
            <p>Health of the sick.</p>
          </div>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="copyright">© {new Date().getFullYear()} HTS Medical Laboratory. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
