import Icon from '../../components/atoms/icons'
import '../contact-me/contact-me.scss'

export default function ContactMe() {
    return (
        <div className="contact-me">
            <div className='contact-me-container'>
                <h1>Contact Me</h1>
            </div>
            <div className='contact-card-container'>
                <div className='contact-card'>
                    <h1>Contact Me</h1>
                    <div className='contact-card-link'> <Icon icon='mail'></Icon><a href="mailto:your.email@example.com">barisik.melih@gmail.com</a></div>
                    <div className='contact-card-link'> <Icon icon='location'></Icon><p>Sakarya,Turkey</p></div>
                    <div className='contact-card-link'> <Icon icon='timer'></Icon> <p>UTC+3</p></div>
                </div>
                <div className='contact-card'>
                    <h1>Social links</h1>
                    <div className='contact-card-link'><Icon icon='linkedin'></Icon><a href="https://www.linkedin.com/in/melihbrsk/" target="_blank" rel="noopener noreferrer">
                        LinkedIn Profile</a></div>
                    <div className='contact-card-link'><Icon icon='github-white'></Icon> <a href="https://github.com/melihbarisik" target="_blank" rel="noopener noreferrer">
                        Github Profile</a></div>
                    <div className='contact-card-link'><Icon icon='medium'></Icon><a href="https://www.linkedin.com/in/melihbrsk/" target="_blank" rel="noopener noreferrer">
                        Medium Profile</a></div>
                </div>
            </div>
        </div>
    );
}