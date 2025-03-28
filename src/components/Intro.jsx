import React from 'react';

function Intro(){
	return(
		<div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
			<img src="/assets/profile.JPG" width="1200" heights="630px"></img>
			<h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Diego Vega</h1>
			<p className="text-base md:text-xl mb-2 font-medium">Software Engineer</p>
			<p className="text-sm max-w-xl mb-4 font-normal">
			I'm a Computer Science graduate from the University of California, Riverside looking for a job or open internship in the Tech Industry. 
			A few areas of my expertise range from Full-Stack development, Data Analysis, Game Development and Network Systems. 
			In the meantime, I am currently learning iOS development and Cyber Security for fun while working on side projects using either Rust or Go.
			<br />
			Furthermore, I have a strong background in Physics and Mathematics since I tutored college level courses that ranged from Calculus to Linear Algebra, and Thermodynamics to Electro-Magnetism.
			</p>
		</div>
   )
}

export default Intro;
