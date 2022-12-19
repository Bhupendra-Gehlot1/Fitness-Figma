import React from 'react'
import about_2 from '../assets/images/about_2.png.webp'

const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-7xl font-bold leading-9 text-black-700 pb-6">About Us</h1>
                    <p className="font-normal text-xl leading-6 text-black-300 ">We are a next-generation software platform dedicated to making it easy for fitness figmas to manage their fitness in one place.</p>
                    <p className="font-normal text-xl leading-6 text-black-200 mt-3">Whether you're a beginning exerciser who needs help getting started or someone who wants to add some spice to your fitness routine, our Fitness Figma offers a variety of movements to choose from. Browse through total-body exercises or movements that target more specific areas of the body. Each comes with a detailed description and photos to help ensure proper form.</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-8/12 h-full" style={{marginLeft:'100px'}} src={about_2} alt="A group of People" />
                </div>
            </div>
        </div>
  )
}

export default About