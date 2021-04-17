import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carrusel.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [

	{
		src: './imagenes/banner-neomito.png',
		caption: 'Slide 1'
	},

	{
		src: './imagenes/banner-talgidi.png',
		caption: 'Slide 2'
	},

	{
		src: './imagenes/banner-blackdrops.png',
		caption: 'Slide 3'
	},

	{
		src: './imagenes/banner-hamparteplayers.png',
		caption: 'Slide 4'
	},

	{
		src: './imagenes/banner-jurisconsulta.png',
		caption: 'Slide 5'
	},

	{
		src: './imagenes/banner-vescis.png',
		caption: 'Slide 6'
	},
];

const Carrusel = (props) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	}

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	}

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	}

	const slides = items.map((item) => {
		return (
			<CarouselItem
			onExiting={() => setAnimating(true)}
			onExited={() => setAnimating(false)}
			key={item.src}
			>
			<img className="carrusel" src={item.src} alt={item.altText} width="100%" height="auto"/>
			<CarouselCaption />
			 </CarouselItem>
		);
	});

	return (
		<Carousel
		activeIndex={activeIndex}
		next={next}
		previous={previous}
		>
		<CarouselIndicators className="vista" items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
		{slides}
		<CarouselControl className="carrusel" direction="prev" directionText="Previous" onClickHandler={previous} />
		<CarouselControl className="carrusel" direction="next" directionText="Next" onClickHandler={next} />
		</Carousel>
	);
		
}

export default Carrusel;