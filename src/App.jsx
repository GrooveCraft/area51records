import './area51.scss'
import Area51Logo from './assets/area51records.png'
import { SiDiscogs } from "react-icons/si";
import { RiSoundcloudLine } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const socials = {
  facebook: 'https://www.facebook.com/p/Area-51-Records-100057043856413/',
  discogs: 'https://www.discogs.com/seller/area51/profile',
}

const icons = {
  facebook: <FaFacebook />,
  discogs: <SiDiscogs />,
  soundcloud: <RiSoundcloudLine />,
  discord: <FaDiscord />,
  github: <FaGithub />,
}

const company = {
  name: 'Area 51 Records',
  address: '65 South Street, Braintree, Essex, United Kingdom',
  phone: '01376331701',
  email: ''
}

const wrapNumber = (value, num = 5) => {
  return [value.slice(0, num), " ", value.slice(num)].join('')
}

const App = () => (
  <>
    <header>
      {Area51Logo && (
        <img src={Area51Logo} alt="Area 51 Logo" className="logo" />
      )}
    </header>
    <footer>
      <div className="socials">
        {Object.entries(socials).map(([key, value]) =>
          <div key={key} className={`social-item social-item-${key}`}>
            <a href={value} target="_blank" rel="noopener noreferrer">
              {icons[key]}
            </a>
          </div>
        )}
      </div>
      <div className="company">
        {Object.entries(company).map(([key, value]) => {

          if (key === 'phone') {
            // Put a space in the middle of the phone numeber ples
            return (
              <div key={key} className={'phone'}>
                <a href={`tel:${value}`}>{wrapNumber(value)}</a>
              </div>
            )
          }

          return (
            <div key={key} className={key}>
              {value}
            </div>
          )
      })}
      </div>
    </footer>
  </>
)

export default App
