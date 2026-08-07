import React, { useEffect } from 'react';
import './contact.css';

export function Contact() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) (e.target as HTMLElement).style.animationPlayState = 'running';
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.office-card, .info-card').forEach(el => {
      (el as HTMLElement).style.animationPlayState = 'paused';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-page-wrapper">
      <div className="bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <main className="contact-page">
        {/* HERO */}
        <section className="contact-hero" style={{ padding: '20px 24px 10px' }}>
          <div className="section-pill" style={{ marginBottom: '16px' }}>
            <span className="pill-dot"></span>
            Get In Touch
          </div>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '10px' }}>
            We'd love to <em>hear from you.</em>
          </h1>
          <p className="hero-sub" style={{ marginBottom: '20px', fontSize: '0.9rem' }}>
            Whether you're a student, parent, school, or investor — our team is here to listen, support, and grow together.
          </p>
          <div className="divider-line" style={{ marginBottom: '20px' }}></div>
        </section>

        <div className="contact-body" style={{ padding: '0 24px 20px', maxWidth: '900px' }}>
          <p className="info-intro" style={{ marginBottom: '24px', fontSize: '0.9rem' }}>
            Saral Vidhya is on a mission to democratize quality education across India. Reach us through any of the channels below — we typically respond within 24 hours.
          </p>

          {/* CONTACT CARDS */}
          <div className="info-cards" style={{ marginBottom: '20px', gap: '16px' }}>
            <div className="info-card" style={{ padding: '20px' }}>
              <div className="card-icon icon-green" style={{ width: '40px', height: '40px', fontSize: '1rem' }}>📧</div>
              <div className="card-text">
                <span className="card-label">Email Us</span>
                <span className="card-value" style={{ fontSize: '0.9rem' }}>
                  <a href="mailto:info@saralvidhya.com">info@saralvidhya.com</a>
                </span>
              </div>
            </div>

            <div className="info-card" style={{ padding: '20px' }}>
              <div className="card-icon icon-peach" style={{ width: '40px', height: '40px', fontSize: '1rem' }}>📞</div>
              <div className="card-text">
                <span className="card-label">Landline</span>
                <span className="card-value" style={{ fontSize: '0.9rem' }}>
                  
                </span>
              </div>
            </div>

            <div className="info-card" style={{ gridColumn: '1 / -1', maxWidth: '100%', padding: '20px' }}>
              <div className="card-icon icon-gold" style={{ width: '40px', height: '40px', fontSize: '1rem' }}>📍</div>
              <div className="card-text">
                <span className="card-label">Headquarters</span>
                <span className="card-value" style={{ fontSize: '0.9rem' }}>Plot No. 29, 2nd Floor, M One, Buwaneswari Society, Survey Number-41/11, Hi-Tech-city, Khananmet, Telangana - 500081</span>
              </div>
            </div>
          </div>

          {false && (
            <>
              {/* OFFICE CARDS */}
              <div className="office-strip">
                <p className="strip-label">Our Presence</p>
                <div className="office-cards">
                  <div className="office-card">
                    <span className="office-tag hq">Headquarters</span>
                    <p className="office-name">Hyderabad</p>
                    <p className="office-addr">Plot No. 29, 2nd Floor, M One<br />Buwaneswari Society, Survey Number-41/11<br />Hi-Tech-city, Khananmet, Telangana — 500081</p>
                  </div>

                  <div className="office-card">
                    <span className="office-tag">Regional Office</span>
                    <p className="office-name">Visakhapatnam</p>
                    <p className="office-addr">Rushikonda Tech Park,<br />MVP Colony, Visakhapatnam<br />Andhra Pradesh — 530017</p>
                  </div>

                  <div className="office-card">
                    <span className="office-tag">Upcoming</span>
                    <p className="office-name">Bengaluru</p>
                    <p className="office-addr">Koramangala Innovation Hub<br />5th Block, Bengaluru<br />Karnataka — 560034</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* FOOTER CTA */}
          <div className="footer-cta" style={{ padding: '24px 40px', marginBottom: '10px', borderRadius: '20px' }}>
            <div className="cta-text">
              <h3 style={{ fontSize: '1.4rem', marginBottom: '4px' }}>Ready to start learning?</h3>
              <p style={{ fontSize: '0.85rem' }}>Join thousands of students already experiencing personalized, AI-powered education.</p>
            </div>
            <div className="cta-btns">
              <a href="/" className="btn-light" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>🏠 Back to Home</a>
              <a href="/#cta" className="btn-outline-light" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>Get Started →</a>
            </div>
          </div>
        </div>

        <div className="bottom-bar">
          © 2025 Saral Vidhya. Learning Simplified.
        </div>
      </main>
    </div>
  );
}
