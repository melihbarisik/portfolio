import '../experiences/experiences.scss'

export default function Experiences() {
    const experiences = [
        { title: 'Software Engineer', company: 'Vodafone via Pia', year: '2021 - Present', content: 'Utilized Angular/React to develop features and resolve defects for the omni-channel platform, contact center operations, and product catalog. Delivered high-quality solutions aligned with customer requirements, enhancing integration and user experience.' },
        { title: 'Angular Developer Intern', company: 'Andasis', year: '2021 - 2021', content: 'During my internship I developed myself about Linux. I have researched about Angular. As a project, I created custom spinner.' },
    ];

    return (
        <div className='experiences-container'>
            <h1>My Experiences</h1>
            <div className='experinces-card-container'>
                {experiences.map((exp, index) => (
                    <div className='experinces-card' key={index}>
                        <h2>{exp.title}</h2>
                        <p>{exp.company}</p>
                        <p>{exp.year}</p>
                        <br />
                        <p>{exp.content}</p>
                    </div>
                ))}
            </div>

        </div >
    );
}