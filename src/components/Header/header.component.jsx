import React from 'react';
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'

const Header = ({ currentUser }) => (
    <div className="header">
        <Link to="/" className="logo-container"><Logo className="logo" /></Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to=".contact">CONTACT</Link>
            {currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGNI IN</Link>
            }
        </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
}); //this object returned is merged as props that means our Header can use it as props..


export default connect(mapStateToProps)(Header);
