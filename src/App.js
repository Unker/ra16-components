import s from './App.module.css'
import ShopItemFunc from './ShopItemFunc'
import ShopItemClass from './ShopItemClass'
import item from './res/item'

function App() {
  return (
    <>
      <div className={s.container}>
        <div className={s['background-element']}></div>
        <div className={s['highlight-window']}>
          <div className={s['highlight-overlay']}></div>
        </div>
        <div className={s.window}>
          <ShopItemFunc item={item} />
        </div>
        <div></div>
        <div className={s['highlight-window']}>
          <div className={s['highlight-overlay']}></div>
        </div>
        <div className={s.window}>
          <ShopItemClass item={item} />
        </div>
      </div>
    </>
  );
}

export default App;
