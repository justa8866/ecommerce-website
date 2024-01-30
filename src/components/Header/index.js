import './styles.scss'
import Logo from '../../assets/logo.png'

export const Header = () => {
  return (
    <header className='header'>
      <div className='wrap'>
        <div className='logo'>
          <img src={Logo} alt='SipleTut Logo' />
        </div>
      </div>
    </header>
  )
}
