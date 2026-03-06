import "./App.css";

function App() {
  return (
    <>
      <div className="page">
        <header className="header">
          <div className="headerContent">
            <div className="brand">ColorGridCreative</div>
            <p className="tagline">
              Embedded engineering teams and end-to-end product development for
              SaaS, commerce, and enterprise companies.
            </p>
          </div>
        </header>

        <main className="main">
          <section className="cardWrapper">
            <div className="card">
              <span className="cardLabel">Service 01</span>
              <h2>Embedded Engineering Teams</h2>
              <p>
                Dedicated engineering squads embedded directly into your
                company. Our developers integrate with your internal teams,
                tools, and workflows to operate as a true extension of your
                engineering organization.
              </p>
              <p>
                We help accelerate product delivery, increase development
                velocity, and scale your engineering capacity without the
                overhead of hiring.
              </p>
              <p>
                Our teams focus on building reliable, production-ready systems
                while maintaining high standards for architecture, testing, and
                code quality.
              </p>
            </div>

            <div className="card">
              <span className="cardLabel">Service 02</span>
              <h2>Product Development</h2>
              <p>
                End-to-end product development from idea to production. We
                partner with companies to design, build, and scale modern
                digital products.
              </p>
              <p>
                Our team covers the full development lifecycle including product
                architecture, user experience, full-stack engineering, and cloud
                deployment.
              </p>
              <p>
                We work closely with founders, product teams, and engineering
                leaders to turn ideas into reliable, production-ready platforms.
                Whether launching a new product, scaling a SaaS platform, or
                modernizing an existing system, we help startups and enterprises
                deliver high-quality software faster.
              </p>
            </div>
          </section>
        </main>

        <footer className="contactUs">
          <div className="contactInner">
            <span>Built to ship. Built to scale.</span>
              sales@ColorGridCreative.com
          </div>
        </footer>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        html, body, #root {
          margin: 0;
          padding: 0;
          min-height: 100%;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: #f7f7fb;
          color: #111827;
        }

        body {
          overflow-x: hidden;
        }

        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .header {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at top left, rgba(255,255,255,0.18), transparent 30%),
            linear-gradient(135deg, #b3123f 0%, #dc143c 55%, #7a1030 100%);
          color: white;
          padding: 72px 24px 56px;
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }

        .header::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px);
          background-size: 36px 36px;
          pointer-events: none;
        }

        .headerContent {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
        }

        .brand {
          font-size: clamp(34px, 6vw, 68px);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 0.95;
          margin-bottom: 18px;
        }

        .tagline {
          max-width: 760px;
          font-size: clamp(16px, 2vw, 21px);
          line-height: 1.6;
          margin: 0;
          color: rgba(255,255,255,0.92);
        }

        .main {
          flex: 1;
          background: #f7f7fb;
        }

        .cardWrapper {
          max-width: 1100px;
          margin: -36px auto 0;
          padding: 0 24px 56px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          position: relative;
          z-index: 2;
        }

        .card {
          background: rgba(255,255,255,0.94);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(17,24,39,0.08);
          border-radius: 22px;
          padding: 32px;
          box-shadow:
            0 10px 30px rgba(17,24,39,0.08),
            0 2px 10px rgba(17,24,39,0.04);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow:
            0 16px 40px rgba(17,24,39,0.12),
            0 4px 16px rgba(17,24,39,0.06);
        }

        .cardLabel {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #dc143c;
          background: rgba(220,20,60,0.08);
          border: 1px solid rgba(220,20,60,0.12);
          border-radius: 999px;
          padding: 8px 12px;
          margin-bottom: 18px;
        }

        .card h2 {
          margin: 0 0 18px;
          font-size: clamp(24px, 3vw, 32px);
          line-height: 1.15;
          color: #111827;
          letter-spacing: -0.03em;
        }

        .card p {
          margin: 0 0 16px;
          font-size: 17px;
          line-height: 1.75;
          color: #374151;
        }

        .card p:last-child {
          margin-bottom: 0;
        }

        .contactUs {
          background: #0f172a;
          color: white;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .contactInner {
          max-width: 1100px;
          margin: 0 auto;
          min-height: 88px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          font-size: 16px;
        }

        .contactInner span {
          color: rgba(255,255,255,0.78);
        }

        .contactInner a {
          color: white;
          text-decoration: none;
          font-weight: 700;
          padding: 10px 14px;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 12px;
          background: rgba(255,255,255,0.06);
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .contactInner a:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.28);
        }

        @media (max-width: 900px) {
          .header {
            padding: 56px 20px 44px;
          }

          .cardWrapper {
            grid-template-columns: 1fr;
            margin-top: -24px;
            padding: 0 20px 40px;
            gap: 20px;
          }

          .card {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .header {
            padding: 48px 16px 36px;
          }

          .brand {
            font-size: clamp(30px, 10vw, 44px);
          }

          .tagline {
            font-size: 15px;
            line-height: 1.6;
          }

          .cardWrapper {
            padding: 0 16px 28px;
            gap: 16px;
          }

          .card {
            padding: 20px;
            border-radius: 18px;
          }

          .card h2 {
            font-size: 22px;
          }

          .card p {
            font-size: 15px;
            line-height: 1.7;
          }

          .contactInner {
            padding: 16px;
            min-height: auto;
            align-items: flex-start;
          }

          .contactInner a {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}

export default App;