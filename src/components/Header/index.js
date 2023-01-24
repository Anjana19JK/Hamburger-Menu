import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import {GiHamburgerMenu} from 'react-icons/gi'
import 'reactjs-popup/dist/index.css'

const Header = () => (
  <div>
    <img
      src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
      alt="website logo"
    />
    <div>
      <Popup
        modal
        trigger={
          <button type="button" data-testid="hamburgerIconButton">
            <GiHamburgerMenu />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <div>
              <button
                type="button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose />
              </button>
              <div>
                <AiFillHome />
                <h1>Home</h1>
              </div>
              <div>
                <BsInfoCircleFill />
                <h1>About</h1>
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
