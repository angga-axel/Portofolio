import "./contact.css";
import contactBackground from "../assets/contact-bg.mp4";

const contacts = [
  {
    name: "WhatsApp",
    description: "Chat langsung dengan saya",
    href: "https://wa.me/6281230629225",
    className: "whatsapp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.49 0 .15 5.34.15 11.9c0 2.1.55 4.15 1.6 5.95L.05 24l6.3-1.65a11.9 11.9 0 0 0 5.7 1.45h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.44-8.42ZM12.06 21.8c-1.78 0-3.52-.48-5.04-1.4l-.36-.21-3.74.98 1-3.65-.23-.37a9.88 9.88 0 0 1-1.52-5.25c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c-.01 5.45-4.45 9.89-9.91 9.89Z"
          fill="currentColor"
        />
        <path
          d="M17.46 14.39c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
          fill="currentColor"
        />
      </svg>
    ),
  },

  {
    name: "Email",
    description: "Kirim pesan melalui email",
    href: "mailto:anggasaja2807@gmail.com",
    className: "email",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },

  {
    name: "LinkedIn",
    description: "Terhubung secara profesional",
    href: "https://www.linkedin.com/in/muh-ichwan-dawan-angga-ramadhan-5096b6411",
    className: "linkedin",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.68H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V8.99H3.56v11.46H3.56Z"
          fill="currentColor"
        />
      </svg>
    ),
  },

  {
    name: "Instagram",
    description: "Lihat aktivitas di Instagram",
    href: "https://www.instagram.com/rawwwww_111",
    className: "instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="17.5"
          cy="6.5"
          r="1.2"
          fill="currentColor"
        />
      </svg>
    ),
  },

  {
    name: "Telegram",
    description: "Hubungi saya melalui Telegram",
    href: "https://t.me/upin_preman",
    className: "telegram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M21.8 3.2 18.5 20c-.25 1.18-.91 1.47-1.84.91l-5.07-3.74-2.45 2.36c-.27.27-.5.5-1.03.5l.37-5.17 9.42-8.51c.41-.37-.09-.58-.64-.21L5.62 13.38.62 11.82c-1.09-.34-1.11-1.09.23-1.61L20.4 2.67c.91-.34 1.71.21 1.4.53Z"
          fill="currentColor"
        />
      </svg>
    ),
  },

  {
    name: "GitHub",
    description: "Lihat project dan source code",
    href: "https://github.com/angga-axel",
    className: "github",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },

  /* =====================================================
     TIKTOK
  ===================================================== */

  {
    name: "TikTok",
    description: "Lihat saya melalui TikTok",
    href: "https://www.tiktok.com/@axelangga",
    className: "tiktok",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M16.6 5.82A4.94 4.94 0 0 1 14.1 3h-3.2v11.2a2.75 2.75 0 1 1-2.75-2.75c.29 0 .57.04.83.13V8.3a6.08 6.08 0 0 0-.83-.06A5.96 5.96 0 1 0 14.1 14V8.72a8.1 8.1 0 0 0 4.73 1.52V7.05a4.96 4.96 0 0 1-2.23-1.23Z"
          fill="currentColor"
        />
      </svg>
    ),
  },

  /* =====================================================
     SHOPEE
  ===================================================== */

  {
    name: "Shopee",
    description: "Lihat produk dan toko saya",
    href: "https://shopee.co.id/axel____",
    className: "shopee",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M17.5 7.5h-.63C16.44 5.48 14.7 4 12 4S7.56 5.48 7.13 7.5H6.5A2.5 2.5 0 0 0 4 10v8.5A2.5 2.5 0 0 0 6.5 21h11a2.5 2.5 0 0 0 2.5-2.5V10a2.5 2.5 0 0 0-2.5-2.5ZM12 5.5c1.77 0 2.97.88 3.36 2H8.64c.39-1.12 1.59-2 3.36-2Zm6.5 13a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v8.5Z"
          fill="currentColor"
        />
        <path
          d="M9.2 12.4c0-1.02.83-1.9 2.8-1.9 1.42 0 2.43.47 2.93 1.38l-1.18.68c-.32-.53-.88-.84-1.67-.84-.85 0-1.38.26-1.38.7 0 .43.4.6 1.58.82 1.62.3 2.54.86 2.54 2.25 0 1.28-1.08 2.1-2.9 2.1-1.55 0-2.67-.55-3.2-1.56l1.2-.69c.36.61 1.03.95 1.98.95.95 0 1.47-.28 1.47-.75 0-.43-.4-.63-1.55-.84-1.7-.31-2.62-.86-2.62-2.3Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

function Contact() {
  return (
    <section className="contact" id="contact">

      {/* =========================================
          VIDEO BACKGROUND
      ========================================= */}
      <video
        className="contact-video"
        src={contactBackground}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* =========================================
          BACKGROUND OVERLAY
      ========================================= */}
      <div className="contact-overlay"></div>

      {/* Decorative glow */}
      <div className="contact-bg contact-bg-one"></div>
      <div className="contact-bg contact-bg-two"></div>

      {/* =========================================
          CONTENT
      ========================================= */}
      <div className="contact-container">

        {/* HEADER */}
        <div className="contact-header">

          <span className="contact-label">
            CONTACT
          </span>

          <h2>
            Mari <span>Terhubung</span>
          </h2>

          <p>
            Punya project, ide, atau sekadar ingin berdiskusi?
            Hubungi saya melalui salah satu platform di bawah.
          </p>

        </div>

        {/* CONTACT CARDS */}
        <div className="contact-grid">

          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`contact-card ${contact.className}`}
            >

              <div className="contact-icon">
                {contact.icon}
              </div>

              <div className="contact-info">
                <h3>
                  {contact.name}
                </h3>

                <p>
                  {contact.description}
                </p>
              </div>

              <div className="contact-arrow">
                →
              </div>

            </a>
          ))}

        </div>

        {/* BOTTOM */}
        <div className="contact-bottom">

          <div className="contact-line"></div>

          <p>
            Open for collaboration, freelance & creative projects.
          </p>

          <div className="contact-line"></div>

        </div>

      </div>

    </section>
  );
}

export default Contact;