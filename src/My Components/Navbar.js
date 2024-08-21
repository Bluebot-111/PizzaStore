import { Link } from "react-router-dom"
function Navbar()
{
    return(
      <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#0000ff' }}> 
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ color: '#ffffff' }}> 
            Toony's Diner
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" style={{ color: '#ffffff' }}> 
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Features/" style={{ color: '#ffffff' }}> 
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Pricing/" style={{ color: '#ffffff' }}> 
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
    
    )
}

export default Navbar



