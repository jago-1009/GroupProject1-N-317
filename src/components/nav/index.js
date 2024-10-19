import navStyles from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={navStyles.mainNav}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/characteristics">Characteristics</a>
        </li>
        <li>
          <a href="/habitat">Habitat/Diet</a>
        </li>
        <li>
          <a href="/science">Science</a>
        </li>
        <li>
          <a href="/culture">Culture</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
