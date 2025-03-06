import '../home/home.scss'

export default function HomePage() {
    return (
        <div className="portfolio-container">
            <div className="hero-section">
                <h1 className="name">Melih Ensar Barışık</h1>
                <h2 className="title">Software Engineer</h2>

                <div className="scrolling-words-container">
                    <div className="scrolling-words-box">
                        <ul>
                            <li>Developing</li>
                            <li>CSS/SASS</li>
                            <li>Angular, Angular Material</li>
                            <li>React, Nextjs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}