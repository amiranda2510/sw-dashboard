const Header = () => {
  return (
    <header>
      <div className="flex items-center space-x-4 mx-6">
        <img src="src/assets/logo.png" alt="Gym Management Logo" className="my-3" />
        <div className="self-stretch w-px bg-gray-500/20" />
        <h1 className="ml-2 my-3 sm:text-lg md:text-xl">Gym Management Dashboard</h1>
      </div>
    </header>
  )
}

export default Header;