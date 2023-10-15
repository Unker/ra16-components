import cn from 'classnames'
import s from './StoreFunc.module.css'

const ShopItemFunc = (item) => {
  return (
    <>
      <div className={s['main-content']}>
        <h2>{item.brand}</h2>
        <h1>Leonard coat</h1>
        <h3>Minimalistic coat in cotton-blend</h3>
        <div className={s.description}>
          Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.
        </div>
        <div className={cn(s['highlight-window'], s.mobile)}>
          <div className={s['highlight-overlay']}></div>
        </div>
        <div className={s.divider}></div>
        <div className={s['purchase-info']}>
          <div className={s.price}>£399.00</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    </>
  )
}

export default ShopItemFunc;
