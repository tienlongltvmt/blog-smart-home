
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Stuffeus</title>
        <meta name="description" content="Learn about Stuffeus and our mission to transform homes and lifestyles." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-20">
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6 animate-fade-up">About Stuffeus</h1>
                <p className="text-xl text-gray-600 mb-8">
                  We're passionate about helping people transform their living spaces.
                </p>
                <p className="text-lg text-gray-500">
                  We're working on our about page. Please check back soon!
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

export default AboutPage;
