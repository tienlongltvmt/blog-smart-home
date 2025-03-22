
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { Button } from "@/components/ui/button";

const BrandsPage = () => {
  // Mảng thương hiệu mẫu
  const brands = [
    {
      id: 1,
      name: "Moderno",
      logo: "https://placehold.co/200x80/ededed/333?text=Moderno",
      description: "Contemporary furniture and home decor for modern living spaces.",
      featured: true
    },
    {
      id: 2,
      name: "LuxeLight",
      logo: "https://placehold.co/200x80/ededed/333?text=LuxeLight",
      description: "Premium lighting solutions for every room in your home.",
      featured: true
    },
    {
      id: 3,
      name: "EcoHabitat",
      logo: "https://placehold.co/200x80/ededed/333?text=EcoHabitat", 
      description: "Sustainable and eco-friendly home products for conscious living.",
      featured: true
    },
    {
      id: 4,
      name: "TechHome",
      logo: "https://placehold.co/200x80/ededed/333?text=TechHome",
      description: "Smart home technologies that enhance convenience and efficiency.",
      featured: true
    },
    {
      id: 5,
      name: "ArtisanCraft",
      logo: "https://placehold.co/200x80/ededed/333?text=ArtisanCraft",
      description: "Handcrafted home accessories from skilled artisans worldwide.",
      featured: false
    },
    {
      id: 6,
      name: "Organico",
      logo: "https://placehold.co/200x80/ededed/333?text=Organico",
      description: "Organic textiles and materials for a healthier living environment.",
      featured: false
    },
    {
      id: 7,
      name: "UrbanLoft",
      logo: "https://placehold.co/200x80/ededed/333?text=UrbanLoft",
      description: "Space-saving solutions for urban apartments and small spaces.",
      featured: false 
    },
    {
      id: 8,
      name: "VintageRevival",
      logo: "https://placehold.co/200x80/ededed/333?text=VintageRevival",
      description: "Classic designs reinterpreted for contemporary lifestyles.",
      featured: false
    }
  ];

  // Lọc các thương hiệu nổi bật
  const featuredBrands = brands.filter(brand => brand.featured);
  // Tất cả các thương hiệu
  const allBrands = brands;

  return (
    <>
      <Helmet>
        <title>Our Brands - Stuffeus</title>
        <meta name="description" content="Discover the premium brands we partner with at Stuffeus." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6 animate-fade-up">Our Partner Brands</h1>
                <p className="text-xl text-gray-600 mb-8">
                  We've partnered with the best brands in the industry to bring you exceptional quality
                  and innovative designs for your home transformation journey.
                </p>
              </div>
            </div>
          </section>
          
          {/* Featured Brands */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-10 text-center">Featured Brands</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {featuredBrands.map(brand => (
                  <div key={brand.id} className="flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden">
                    <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-6">
                      <img 
                        src={brand.logo} 
                        alt={`${brand.name} logo`} 
                        className="max-w-full h-auto"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-bold mb-3">{brand.name}</h3>
                      <p className="text-gray-600 mb-4">{brand.description}</p>
                      <Button variant="outline" size="sm">Learn More</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* All Brands */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-10 text-center">All Partner Brands</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {allBrands.map(brand => (
                  <div key={brand.id} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`} 
                      className="max-w-full h-auto mx-auto mb-4"
                    />
                    <h3 className="font-semibold">{brand.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Become a Partner */}
          <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Become a Partner Brand</h2>
                <p className="text-lg opacity-90 mb-8">
                  Are you a brand looking to reach more customers? Partner with Stuffeus
                  to showcase your products to our engaged audience of home enthusiasts.
                </p>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                  Contact Our Partnership Team
                </Button>
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
