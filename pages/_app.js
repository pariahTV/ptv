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
      </header>

      <Component {...pageProps} />
    </>
  );
}
