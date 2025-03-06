import InfoButtonListAll from '../../components/organism/info-button-list-all'
import './tech-stack.scss'

const development = {
    header: 'Code',
    headerIcon: 'code',
    items: [
        { title: 'Javascript', icon: 'javascript' },
        { title: 'Angular', icon: 'angular' },
        { title: 'React', icon: 'react' },
        { title: 'Nextjs', icon: 'nextjs' }

    ]
}

const styling = {
    header: 'Styling',
    headerIcon: 'styling',
    items: [
        { title: 'HTML', icon: 'html' },
        { title: 'Css', icon: 'css' },
        { title: 'Scss', icon: 'scss' },
        { title: 'Styled-Components', icon: 'styled-components', size: 30 }

    ]
}

const buildAndTesting = {
    header: 'Build and Testing',
    headerIcon: 'building',
    items: [
        { title: 'Eslint', icon: 'eslint' },
        { title: 'Prettier', icon: 'prettier' },
        { title: 'Webpack', icon: 'webpack' }

    ]
}

const versionControl = {
    header: 'Version Control',
    headerIcon: 'version-control',
    items: [
        { title: 'Git', icon: 'git' },
        { title: 'Github', icon: 'github' }

    ]
}

const otherTools = {
    header: 'Others',
    headerIcon: 'others',
    items: [
        { title: 'Jenkins', icon: 'jenkins' },
        { title: 'Postman', icon: 'postman' }
    ]
}

export default function TechStack() {
    const technologies: any = [development, styling, buildAndTesting];
    const others: any = [versionControl, otherTools]

    return (
        <div className="tech-stack-container">
            <InfoButtonListAll list={technologies}></InfoButtonListAll>

            <div className="tech-stack-content">
                <h1 className="tech-stack-title">Tech Stack</h1>

                <div className="tech-stack-list-container">
                    <InfoButtonListAll list={others}></InfoButtonListAll>
                </div>
            </div>
        </div>
    );

}