import React from 'react';
import cn from 'classnames'
import s from './ShopItemClass.module.css'

class ShopItemClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)

    this.item = props.item;
  }
  render() {
    console.log(this.item)
    const item = this.item;
    return (
      <>
        <div className={s['main-content']}>
          <h2>{item.brand}</h2>
          <h1>{item.title}</h1>
          <h3>{item.description}</h3>
          <div className={s.description}>{item.descriptionFull}</div>
          <div className={cn(s['highlight-window'], s.mobile)}>
            <div className={s['highlight-overlay']}></div>
          </div>
          <div className={s.divider}></div>
          <div className={s['purchase-info']}>
            <div className={s.price}>{item.currency}{item.price}</div>
            <button>Добавить в корзину</button>
          </div>
        </div>
      </>
    )
  }
}

export default ShopItemClass;
