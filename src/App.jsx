import Navbar from './components/Navbar';
import Hero from './components/Hero';
import styles from './style';

function App() {
  return (
    <section className="w-full overflow-hidden bg-primary font-poppins">
      <header
        className={`${styles.paddingX} ${styles.flexCenter} ${styles.boxWidth}`}
      >
        <Navbar />
      </header>
      <main className="container mx-auto flex items-center justify-center text-white">
        <Hero />
      </main>
    </section>
  );
}

export default App;
