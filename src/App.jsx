import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Phone, MessageCircle, Home, MapPin, CheckCircle, Heart, Star, ArrowLeft, ArrowRight } from 'lucide-react'
import './App.css'

// Importar imagens
import fachada from './assets/images/fachada-principal.jpg'
import fachadaLateral from './assets/images/fachada-lateral.jpg'
import sala from './assets/images/sala.jpg'
import cozinha from './assets/images/cozinha.jpg'
import quarto1 from './assets/images/quarto1.jpg'
import quarto2 from './assets/images/quarto2.jpg'
import banheiro from './assets/images/banheiro.jpg'
import quintal from './assets/images/quintal.jpg'
import img04 from './assets/images/IMG-20250822-WA0004.jpg'
import img08 from './assets/images/IMG-20250822-WA0008.jpg'
import img09 from './assets/images/IMG-20250822-WA0009.jpg'
import img14 from './assets/images/IMG-20250822-WA0014.jpg'
import img15 from './assets/images/IMG-20250822-WA0015.jpg'
import img17 from './assets/images/IMG-20250822-WA0017.jpg'
import img18 from './assets/images/IMG-20250822-WA0018.jpg'
import img19 from './assets/images/IMG-20250822-WA0019.jpg'
import img20 from './assets/images/IMG-20250822-WA0020.jpg'
import img98ad0d8b from './assets/images/ImagemdoWhatsAppde2025-08-22à(s)10.04.31_98ad0d8b.jpg'
import img9ab31ad2 from './assets/images/ImagemdoWhatsAppde2025-08-22à(s)10.04.31_9ab31ad2.jpg'

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const images = [
    { src: fachada, alt: 'Fachada principal da casa' },
    { src: fachadaLateral, alt: 'Fachada lateral da casa' },
    { src: sala, alt: 'Sala de estar' },
    { src: cozinha, alt: 'Cozinha' },
    { src: quarto1, alt: 'Quarto 1' },
    { src: quarto2, alt: 'Quarto 2' },
    { src: banheiro, alt: 'Banheiro' },
    { src: quintal, alt: 'Quintal' },
    { src: img04, alt: 'Imagem 04' },
    { src: img08, alt: 'Imagem 08' },
    { src: img09, alt: 'Imagem 09' },
    { src: img14, alt: 'Imagem 14' },
    { src: img15, alt: 'Imagem 15' },
    { src: img17, alt: 'Imagem 17' },
    { src: img18, alt: 'Imagem 18' },
    { src: img19, alt: 'Imagem 19' },
    { src: img20, alt: 'Imagem 20' },
    { src: img98ad0d8b, alt: 'Imagem WhatsApp 98ad0d8b' },
    { src: img9ab31ad2, alt: 'Imagem WhatsApp 9ab31ad2' }
  ]

   const whatsappNumber = "554396079849"
  const whatsappMessage = "Olá! Tenho interesse na casa do programa Minha Casa Minha Vida em Alvorada do Sul. Gostaria de mais informações!"

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-800">Heitor Braz Imóveis</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#inicio" className="text-gray-600 hover:text-green-600 transition-colors">Início</a>
              <a href="#imoveis" className="text-gray-600 hover:text-green-600 transition-colors">Imóveis</a>
              <a href="#contato" className="text-gray-600 hover:text-green-600 transition-colors">Contato</a>
            </nav>
            <Button onClick={openWhatsApp} className="bg-green-600 hover:bg-green-700">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${fachada})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            🏡 A CHANCE DE TER SUA CASA PRÓPRIA CHEGOU!
          </h2>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Em Alvorada do Sul, casas novinhas te esperando pelo Minha Casa Minha Vida!
          </p>
          <Button 
            onClick={openWhatsApp}
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="h-6 w-6 mr-3" />
            Fale no WhatsApp
          </Button>
        </div>
      </section>

      {/* Detalhes do Imóvel */}
      <section id="imoveis" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Galeria de Imagens */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={images[currentImageIndex].src} 
                  alt={images[currentImageIndex].alt}
                  className="w-full h-96 object-cover transition-transform duration-500"
                />
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
                >
                  <ArrowLeft className="h-6 w-6 text-gray-800" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
                >
                  <ArrowRight className="h-6 w-6 text-gray-800" />
                </button>
              </div>
              <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Detalhes */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                ✨ Detalhes do imóvel:
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-lg text-gray-700">2 quartos aconchegantes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-lg text-gray-700">Sala e cozinha bem distribuídas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-lg text-gray-700">Banheiro, lavanderia e garagem</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-lg text-gray-700">Casa com laje, toda murada, quintal espaçoso e corredor lateral</span>
                </div>
              </div>
              <div className="mt-8">
                <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
                  <MapPin className="h-5 w-5 mr-2" />
                  Alvorada do Sul - PR
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            🎯 O melhor de tudo:
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Financiamento Facilitado</h4>
                <p className="text-gray-600">Financiamento facilitado pelo Minha Casa Minha Vida</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Documentação Grátis</h4>
                <p className="text-gray-600">Documentação 100% GRÁTIS – você não gasta com papelada!</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Entrada Flexível</h4>
                <p className="text-gray-600">Aceitamos carro, moto ou FGTS como parte da entrada</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Contato */}
      <section id="contato" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            💬 Chame no WhatsApp ou inbox para saber mais ou agendar uma visita!
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={openWhatsApp}
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
            >
              <MessageCircle className="h-6 w-6 mr-3" />
              Conversar no WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-green-600 text-green-600 hover:bg-green-50"
              onClick={() => window.open(`tel:+${whatsappNumber}`, '_self')}
            >
              <Phone className="h-6 w-6 mr-3" />
              (43) 9607-9849
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-4">
            📍 Realize o sonho da casa própria em Alvorada do Sul – a hora é agora!
          </p>
          <p className="text-xl font-semibold mb-2">Heitor Braz</p>
          <Button 
            variant="ghost" 
            onClick={openWhatsApp}
            className="text-green-400 hover:text-green-300"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            WhatsApp: (43) 9607-9849
          </Button>
        </div>
      </footer>

      {/* Botão WhatsApp Fixo */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg z-50 transform hover:scale-110 transition-all duration-300"
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </button>
    </div>
  )
}

export default App

