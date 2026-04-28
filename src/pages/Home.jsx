import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import Chatbot from '../components/ChatBot';

// localStorage.setItem(
//   'cart',
//   JSON.stringify([
//     { name: 'Nike Air Max', price: 1000000 },
//     { name: 'Adidas Runner', price: 800000 },
//   ])
// );

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductList />
      <Chatbot />
    </>
  );
}

export default Home;