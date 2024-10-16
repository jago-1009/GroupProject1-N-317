import navStyles from './nav.module.css'
export default function Nav() {
    return (
        <nav className={navStyles.navBar}>
            <ul className={navStyles.navLinks}>
                <li><a href="/" className={navStyles.link}>Home</a></li>
                <li><a href="/" className={navStyles.link}>Link 2</a></li>
                <li><a href="/" className={navStyles.link}>Link 3</a></li>
                <li><a href="/" className={navStyles.link}>Link 4</a></li>
                <li><a href="/" className={navStyles.link}>Link 5</a></li>
                <li><a href="/" className={navStyles.link}>Link 6</a></li>
            </ul>
        </nav>
    )


}