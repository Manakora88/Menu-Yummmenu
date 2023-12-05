import { useState } from 'react'
import Title from './Title'
import { menu } from './data'
import Menu from './Menu'
import Categories from './Categories'
import SlickCarousel from './SlickCarousel'

const allCategories = [
  'całe menu',
  ...new Set(menu.map((item) => item.category)),
]

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)
  const filterItems = (category) => {
    if (category === 'całe menu') {
      setMenuItems(menu)
      return
    }
    const newItems = menu.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className="menu">
        <Title text="Nasze menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
      <section className="opinions">
        <Title text="Wasze opinie" />
        <SlickCarousel />
      </section>
    </main>
  )
}
export default App
