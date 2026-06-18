import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="ptv-header">
        <img
          src="/logos/pariah-tv-logo.PNG"
          alt="PariahTV Logo"
          className="ptv-header-logo"
        />
        <div className="ptv-live-tag">LIVE 8.5K</div>
      </header>

      <Component {...pageProps} />
    </>
  );
}
