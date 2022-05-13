const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <h2 className="text-3xl font-semibold">Arindam</h2>
      <nav className="text-md flex space-x-10">
        <p>Products</p>
        <p>Template</p>
        <p>Blog</p>
        <p>Pricing</p>
      </nav>
      <div>
        <button className="px-8 py-2">Sign In</button>
        <button className="rounded-md bg-[#F57059] px-8 py-2 text-white">
          Start free
        </button>
      </div>
    </header>
  )
}

export default Header
