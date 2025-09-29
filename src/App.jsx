import Layout from './components/Layout/Layout';
import About from './components/Pages/About/About';
import Video from './components/Pages/About/Video';

import Contact from './components/Pages/Contact/Contact';
import Projects from './components/Pages/Projects/Projects';
import Work from './components/Pages/Work/Work';

const App = () => {
  return (
    <Layout>
      <Video />
      <About />
      <Work />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default App;
