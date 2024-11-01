import CustomeButton from "./CustomeButton"



const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Fine, Book, or Rent a Car -- Quickly & Easily!</h1>
        <p className="hero__subtitle">Streamline your car rental experience with our effortless booking process.</p>

        <CustomeButton />
      </div>
    </div>
  )
}

export default Hero