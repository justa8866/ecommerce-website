import ShopMen from '../../assets/shopMens.jpg'
import ShopWomen from '../../assets/shopWomens.jpg'
import './styles.scss'

export const Directory = () => {
  return (
    <section className='directory'>
    <div className='wrap'>
      <div
        className='item'
        style={{
          backgroundImage: `url(${ShopWomen})`
        }}
      >
        <a href="#" >
          Shop Womens
        </a>
      </div>
      <div
        className='item'
        style={{
          backgroundImage: `url(${ShopMen})`
        }}
      >
        <a href="#" >
          Shop Mens
        </a>
      </div>
    </div>
  </section>
  )
}
