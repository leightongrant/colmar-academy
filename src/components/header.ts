import logo from "/images/ic-logo.svg";
import onCampus from "/images/ic-on-campus.svg";
import online from "/images/ic-online.svg";
import login from "/images/ic-login.svg";
const header = `
    <header>
        <div id='logo'>
            <img src='${logo}' alt='logo'>
            <img class='nav-icon' src='${onCampus}' alt='on campus icon'>
            <img class='nav-icon' src='${online}' alt='online icon'>
            <img class='nav-icon' src='${login}' alt='login icon'>
            <p>COLMAR<span>ACADEMY</span></p>
        </div>
        <nav>
            <ul>
                <li><a href="#">On campus</a></li>
                <li><a href="#">Online</a></li>
                <li><a href="#">Companies</a></li>
                <li><a href="#">Sign in</a></li>
            </ul>
        </nav>
    </header>`;
export default header;
