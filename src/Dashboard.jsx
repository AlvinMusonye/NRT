import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./components/ui/card";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen p-6">
      <header className="flex flex-col md:flex-row items-center justify-between mb-10">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-4 cursor-pointer">
            <img src="/logo.png" alt="NRT Logo" className="h-12" />
            <h1 className="text-2xl sm:text-3xl font-bold">Northern Rangelands <strong className="text-yellow-500">Trust</strong></h1>
          </div>
          
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>

    
        <nav
          className={`flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0 ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#showcase" className="hover:underline">
            Showcase
          </a>
          <a href="#contact" className="hover:underline">
            Donate
          </a>
        </nav>
      </header>

      <section className="relative text-center py-20">
        <img
          src="/Serengeti National Park, Tanzania.jpeg"
          alt="Scenic"
          className="w-full h-[400px] object-cover"
        />

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.0 }}
            className="text-6xl font-extrabold mb-4 drop-shadow-lg"
          >
            Transforming Lives, Conserving Nature
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl max-w-xl mx-auto drop-shadow-md"
          >
            NRT aids communities.
          </motion.p>
        </motion.div>
      </section>

      
      <section id="about" className="py-16 flex flex-col md:flex-row items-center">
        <div className="text-section max-w-2xl mb-8 md:mb-0 md:mr-8">
          <h3 className="text-2xl font-bold mb-6">About</h3>
          <p className="text-gray-600">
            Northern Rangelands Trust (NRT) is a Kenyan non-profit organization founded in 2004 to
            support community-led conservation. It emerged from the success of the Lewa Wildlife
            Conservancy, which demonstrated that local communities could successfully combine
            wildlife protection with sustainable livelihoods. The first community conservancy, Il
            Ngwesi, was formed by locals inspired by Lewa’s model.
            <br />
            
            NRT was created to unite and support these conservancies through training,
            fundraising, governance, and strategic guidance. Today, it supports 45 member community
            conservancies across northern and coastal Kenya, and parts of Uganda, covering over 15
            million acres and protecting multiple endangered species.
            <br />
          
            Through its Community Conservancy Model, NRT empowers indigenous communities by
            providing basic services, promoting peace, and creating income-generating projects like
            BeadWORKS and the Northern Kenya Rangelands Carbon Project (NKRCP)—the world’s largest
            soil carbon removal project. Since 2015, it has funded 181 development projects with
            over 522 million shillings.
            <br />
          
            Though NRT and Lewa are now separate entities, they remain closely partnered, operating
            a joint wildlife protection system with national authorities.
            <br />
          
            <strong>Mission:</strong> Build resilient conservancies that transform lives, promote
            peace, and conserve resources.
            <br />
            <strong>Vision:</strong> Resilient communities and ecosystems.
            <br />
            <strong>Core Values:</strong> Community ownership, social justice, human rights, good
            governance, environmental stewardship, and equitable benefit sharing.
          </p>
        </div>
        <div className="image-section w-full md:w-1/2">
          <img src="/nrt image.jpeg" alt="Northern Rangelands Trust" className="w-full" />
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="py-16 sm:grid-cols-1">
        <h3 className="text-2xl font-bold mb-6">Showcase</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-4">
              <img
                src="/411d0a33-c283-47b4-94fa-e01adead4a28.jpeg"
                alt="Animals"
                className="rounded-2xl mb-4"
              />
              <h4 className="text-xl font-semibold">Community-Led Conservation Model</h4>
              <p className="text-sm text-gray-600">
                Highlight how NRT empowers indigenous communities to manage their own conservancies,
                blending wildlife protection with sustainable livelihoods. The success of Il Ngwesi
                is a great example.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <img
                src="/c56cea62-400d-40a0-85cc-57f012ed4e85.jpeg"
                alt="BeadWORKS"
                className="rounded-2xl mb-4"
              />
              <h4 className="text-xl font-semibold">Innovative Economic Initiatives</h4>
              <p className="text-sm text-gray-600">
                Showcase income-generating projects like BeadWORKS (women’s artisan crafts) and the
                Northern Kenya Rangelands Carbon Project (NKRCP)—the largest soil carbon removal
                project globally.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <img
                src="/270752d9-2373-4e5b-8850-bf4fa7ce830c.jpeg"
                alt="Masaai community"
                className="rounded-2xl mb-4 h-64"
              />
              <h4 className="text-xl font-semibold">Peacebuilding and Development Impact</h4>
              <p className="text-sm text-gray-600">
                Emphasize NRT’s role in promoting peace among pastoralist communities and its
                significant investment in development, with 181 projects funded totaling over 522
                million KES since 2015.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Support Our Mission</h3>
        <p className="text-gray-600 mb-6">Your donations support community-led conservation.</p>
        <button className="bg-yellow-500 text-white rounded p-3 cursor-pointer hover:bg-yellow-600 transition">
          Donate
        </button>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Northern Rangelands Trust. All rights reserved.
      </footer>
    </div>
  );
}
