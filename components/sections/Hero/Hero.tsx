import HeroAnimation from "./Animation/HeroAnimation"

const Hero = () => {
  return (
    <div>

    <div id="hero-panel" className="panel w-full h-screen bg-red-800 flex justify-center items-center">
          <p className="hero-text text-5xl">Hero Section</p>
      </div>

      <HeroAnimation/>
    </div>
  )
}

export default Hero
