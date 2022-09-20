const Navbar = () => {
    return (
        <nav style={{ backgroundColor: 'red'}}>
          <h1>Ecommerce</h1>
          <div>
            <button onClick={() => console.log('hola')}>Celulares</button>
            <button>Tablets</button>
          </div>
        </nav>
    )
}

export default Navbar