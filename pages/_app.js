import "@/styles/globals.css";
import NavBar from "@/pages/components/nav.js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <div className="text-3xl">
        Hey, thanks for visiting
      </div>
      <p>
        <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://grahamrowe.dev/">grahamrowe.dev</a> is still under construction...
      </p>
      <p>
        So, in the meantime checkout my <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://github.com/grrowe">github</a> and <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.linkedin.com/in/gmrowewebdev/">linkedin</a>
      </p>
      <Component {...pageProps} />
    </>
  );
}
