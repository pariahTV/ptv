// pages/_app.js
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div id="pariah-glass-root">
      <Component {...pageProps} />
    </div>
  );
}
