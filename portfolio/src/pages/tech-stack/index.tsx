import InfoButtonListAll from '../../components/organism/info-button-list-all'
import './tech-stack.scss'

const development = {
    header: 'Code',
    headerIcon: 'code',
    items: [
        { title: 'Javascript', icon: 'javascript', size: 18 },
        { title: 'Typescript', icon: 'typescript', size: 18 },
        { title: 'Java', icon: 'java', size: 18 },
        { title: 'Angular', icon: 'angular', size: 18 },
        { title: 'React', icon: 'react', size: 18 },
        { title: 'Nextjs', icon: 'nextjs', size: 18 }

    ]
}

const styling = {
    header: 'Styling',
    headerIcon: 'styling',
    items: [
        { title: 'HTML', icon: 'html', size: 18 },
        { title: 'Css', icon: 'css', size: 18 },
        { title: 'Scss', icon: 'scss', size: 18 },
        { title: 'Styled-Components', icon: 'styled-components', size: 30 }

    ]
}

const buildAndTesting = {
    header: 'Build and Testing',
    headerIcon: 'building',
    items: [
        { title: 'Eslint', icon: 'eslint', size: 18 },
        { title: 'Prettier', icon: 'prettier', size: 18 },
        { title: 'Webpack', icon: 'webpack', size: 18 }

    ]
}

const versionControl = {
    header: 'Version Control',
    headerIcon: 'version-control',
    items: [
        { title: 'Git', icon: 'git', size: 18 },
        { title: 'Github', icon: 'github', size: 18}

    ]
}

const otherTools = {
    header: 'Others',
    headerIcon: 'others',
    items: [
        { title: 'Jenkins', icon: 'jenkins', size: 18 },
        { title: 'Postman', icon: 'postman', size: 18 }
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