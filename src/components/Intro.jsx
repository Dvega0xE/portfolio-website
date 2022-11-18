import React from 'react';

function Intro(){
	return(
		<div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
			<img src="/assets/profile.jpg" width="400" heights="650px"></img>
			<h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Diego Vega</h1>
			<p className="text-base md:text-xl mb-3 font-medium">Software Engineer</p>
			<p className="text-sm max-w-xl mb-6 font-bold">
			I'm a recent Computer Science graduate from the University of California, Riverside looking for his first entry-level job or any open internships. Some of my areas of expertise are Object-Oriented programming with a strong focus on C++ and Python, as well as Data Analysis. My projects range from game development/VR, embedded/parallel systems, web development, and cyber security/networks.
			<br />
			Additionally, I have a strong background in Physics and Mathematics since I tutored college level courses that ranged from Calculus to Linear Algebra, and Thermodynamics to Electro-Magnetism.
			</p>
		</div>
   )
}

export default Intro;