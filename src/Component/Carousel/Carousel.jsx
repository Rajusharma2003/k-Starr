import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AliceCarousel from "react-alice-carousel";
import { useRef } from "react";
import CarouselCard from '../Carousel/CarouselCard';

// Import AliceCarousel CSS
import 'react-alice-carousel/lib/alice-carousel.css';



const carouselData = [
      { image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid",
       description: 'The infrared cooktop heats up almost instantly and cooks food evenly. It’s a game-changer for quick and efficient meals. Highly recommended!',
        name: "Arjun Mehta" 
      },
      { image: "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid",
       description: 'I love how fast and consistent the infrared cooktop is. It saves time and energy, making meal preparation a breeze. Definitely worth the investment!',
        name: "Tushar Kapoor" 
      },
      { image: "https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid",
       description: 'This infrared cooktop delivers excellent heat distribution and is very easy to clean. It’s perfect for busy kitchens and enhances cooking efficiency',
        name: "Karan Rao" 
      },
      { image: "https://img.freepik.com/premium-photo/man-with-glasses-blue-jacket-with-word-it_1249303-7405.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid",
       description: 'The infrared cooktop is incredibly efficient, providing fast and even heating. It’s a fantastic addition to my kitchen for quick and hassle-free cooking!',
        name: "Sameer Bansal" 
      },
      { image: "https://img.freepik.com/premium-photo/man-with-beard-glasses-wearing-shirt-that-says-word_1249303-7394.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid",
       description: 'The infrared cooktop is superb for fast and precise cooking. It heats up quickly and maintains consistent temperatures, making it a must-have for any kitchen.',
        name: "Sahil Kapoor" 
      },
      { image: "https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid",
       description: 'I’m impressed with how quickly the infrared cooktop reaches the desired temperature. It’s perfect for preparing meals efficiently and is easy to clean!"', 
       name: "Aman Rathi" 
      },

];

const Carousel = () => {
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 4 },
  };

  const items = carouselData.map((data, index) => (
    <CarouselCard 
      key={index} 
      image={data.image}  
      description={data.description} 
      name={data.name}
    />
  ));

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  return (
    <div className="relative px-4 lg:px-8 mx-auto ml-5 mr-5">
      <div className="relative">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          responsive={responsive}
          disableDotsControls={true}  
          infinite={true}     
          disableButtonsControls
          autoPlay
          animationDuration={2000}
        />

        <div className="absolute inset-y-0 left-0 flex items-center">
          <button 
            onClick={slidePrev} 
            className="bg-gray-300 text-black p-2 rounded-full"
          >
            <ChevronLeftIcon />
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center">
          <button 
            onClick={slideNext} 
            className="bg-gray-300 text-black p-2 rounded-full"
          >
            <ChevronLeftIcon className="rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
