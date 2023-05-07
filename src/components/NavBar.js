import './Navbar.css'
export default function NavBar({changeHandler, page}) {

    return(
        <div className='navbar'>
            <div className ={`nav-item${page === 'About'? ' active' : ''}`}
                 onClick={() => changeHandler('About')}
            >About</div>
            <div className ={`nav-item${page === 'Expertise'? ' active' : ''}`}
                 onClick={() => changeHandler('Expertise')}
            >Expertise</div>
            <div className ={`nav-item${page === 'Projects'? ' active' : ''}`}
                 onClick={() => changeHandler('Projects')}
            >Projects</div>
        </div>
    )
}