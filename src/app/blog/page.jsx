import CardList from '@/components/cardlist/CardList'
import styles from './blogPage.module.css'
import Menu from '@/components/Menu/Menu'

const Blogpage = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Style BLog</h1>
        <div className={styles.content}>
            <CardList />
            <Menu />
        </div>
    </div>
  )
}

export default Blogpage