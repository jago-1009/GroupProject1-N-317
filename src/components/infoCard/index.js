import infoCardStyles from "./infoCard.module.css";

export default function InfoCard({title, content, href}) {
    return (<div className={infoCardStyles.infoCard}>
        <a href={href} className={infoCardStyles.link}>
        <h2 className={infoCardStyles.title}>{title}</h2>
        <p className={infoCardStyles.content}>{content}</p>
        </a>
        <svg width="0" height="0" viewBox="0 0 463 558" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <clipPath id="rounded">
            <path d="M41.57 23.8328C-9.46601 0.544297 8.92375 125.596 8.92375 125.596C8.92375 125.596 -8.15861 209.67 8.92375 245.805C26.0061 281.94 202.868 337.392 184.48 266.94C166.093 196.488 224.32 103.14 190.609 30.0459C156.899 -43.0477 92.606 47.1213 41.57 23.8328Z" stroke="black"/>
</clipPath>
</defs>
</svg>


    </div> )}