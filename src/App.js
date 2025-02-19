import './App.css';

import { Header, Footer, Testimonial } from './containers';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
