import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Meme from './components/Meme/Meme'

function App() {


  return (
    <div className={styles.container}>
      <Navbar />
      <Meme />
    </div>
  )
}

export default App
