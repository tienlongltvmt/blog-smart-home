
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const BrandsPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Brands - Stuffeus</title>
        <meta name="description" content="Discover the premium brands we partner with at Stuffeus." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-20">
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6 animate-fade-up">Our Brands</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Explore our curated collection of premium home transformation brands.
                </p>
                <p className="text-lg text-gray-500">
                  We're working on this page. Please check back soon!
                </p>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BrandsPage;
