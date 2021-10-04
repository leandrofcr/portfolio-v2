import About from 'components/sections/about';
import Experience from 'components/sections/experience';
import Header from 'components/sections/header';
import Welcome from 'components/sections/hero';

export default function Home() {
  return (
    <main>
      <Header />
      <Welcome />
      <About />
      <Experience />
    </main>
  );
}
