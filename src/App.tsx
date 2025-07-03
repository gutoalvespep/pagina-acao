import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [onlineCount, setOnlineCount] = useState(2851);

  const fakeNames = [
    'Luciana M. acabou de comprar!',
    'Carlos S. acabou de comprar!',
    'Juliana R. acabou de comprar!',
    'Ana P. acabou de comprar!',
    'Pedro L. acabou de comprar!',
    'Mariana K. acabou de comprar!',
    'Roberto F. acabou de comprar!',
    'Camila T. acabou de comprar!',
    'Fernando J. acabou de comprar!',
    'Beatriz M. acabou de comprar!',
    'Diego R. acabou de comprar!',
    'Fernanda S. acabou de comprar!',
  ];

  useEffect(() => {
    const showFakePopup = () => {
      const randomName = fakeNames[Math.floor(Math.random() * fakeNames.length)];
      setPopupMessage(randomName);
      setShowPopup(true);
      
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    };

    // Show first popup after 3 seconds
    const initialTimer = setTimeout(showFakePopup, 3000);
    
    // Then show popup every 7-12 seconds
    const interval = setInterval(() => {
      showFakePopup();
    }, Math.random() * 5000 + 7000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  // Simulate dynamic online count
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    window.open('https://acaodeouro.com.br/campanha/4k-pra-voce?utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=&subid=jLj6865bff68dba0f56d48b2ad0&sid2=&subid2=&subid3=&subid4=&subid5=&xcod=jLj6865bff68dba0f56d48b2ad0hQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR&sck=jLj6865bff68dba0f56d48b2ad0hQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Fake Popup */}
      {showPopup && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 z-50 animate-slide-in">
          <div className="bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <span className="font-semibold text-sm">{popupMessage}</span>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md mx-auto text-center space-y-6">
          {/* Main Image - Reduced to half size */}
          <div className="w-1/4 aspect-square rounded-2xl overflow-hidden shadow-2xl mx-auto">
            <img 
              src="/public/WhatsApp Image 2025-07-03 at 00.51.01.jpeg" 
              alt="Imagem principal" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Online Count */}
          <div className="flex items-center justify-center space-x-2 text-green-400">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-lg font-bold">
              {onlineCount.toLocaleString()} pessoas estão acessando esta página agora.
            </span>
          </div>

          {/* Main CTA Button */}
          <div className="space-y-3">
            <button 
              onClick={handleButtonClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-black text-xl py-4 px-8 rounded-xl transition-all duration-300 animate-pulse-strong shadow-lg shadow-green-500/50 hover:shadow-green-500/70 transform hover:scale-105"
            >
              👉 PARTICIPE AQUI
            </button>
            
            {/* Arrow Text */}
            <div className="flex items-center justify-center space-x-2 text-white">
              <ChevronUp className="w-5 h-5 animate-bounce" />
              <span className="font-bold text-lg">
                CLIQUE AQUI PARA PARTICIPAR
              </span>
              <ChevronUp className="w-5 h-5 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Legal */}
      <div className="bg-gray-800 px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {/* Policy Links */}
          <div className="flex justify-between items-center mb-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Termos e Condições
            </a>
          </div>

          {/* Legal Disclaimer */}
          <div className="text-[8px] text-gray-700 leading-tight">
            <p>
              Este site não é afiliado ao Facebook, Meta ou qualquer entidade do grupo Meta. Após você sair da plataforma do Facebook/Meta, toda a responsabilidade passa a ser do nosso site. Fazemos todos os esforços para apresentar claramente as informações do produto, incluindo provas reais e resultados de clientes. Não vendemos seu e-mail nem qualquer informação para terceiros. Também não praticamos spam. Se você tiver qualquer dúvida, fique à vontade para entrar em contato pelo nosso e-mail. Atendemos de segunda a sexta, das 9h às 18h, e respondemos todas as mensagens por ordem de chegada. Os resultados apresentados em relação ao serviço foram avaliados e comprovados por nossos clientes reais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;