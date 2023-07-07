import { Link } from 'react-router-dom';
import style from './landing.module.css';
const Landing = () => {
    
    
    return (
        <div className={style.body} > 
            <img className={style.img} src="https://fontmeme.com/images/Pokemon-Logo.jpg" alt="pokemon" />
            <p className={style.p}>Aplication created by:  
                <a href="https://github.com/JavierSosaAdm">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZmlsbDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTt0cmFuc2Zvcm06IDttc0ZpbHRlcjo7Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjAyNiAyYy01LjUwOSAwLTkuOTc0IDQuNDY1LTkuOTc0IDkuOTc0IDAgNC40MDYgMi44NTcgOC4xNDUgNi44MjEgOS40NjUuNDk5LjA5LjY3OS0uMjE3LjY3OS0uNDgxIDAtLjIzNy0uMDA4LS44NjUtLjAxMS0xLjY5Ni0yLjc3NS42MDItMy4zNjEtMS4zMzgtMy4zNjEtMS4zMzgtLjQ1Mi0xLjE1Mi0xLjEwNy0xLjQ1OS0xLjEwNy0xLjQ1OS0uOTA1LS42MTkuMDY5LS42MDUuMDY5LS42MDUgMS4wMDIuMDcgMS41MjcgMS4wMjggMS41MjcgMS4wMjguODkgMS41MjQgMi4zMzYgMS4wODQgMi45MDIuODI5LjA5MS0uNjQ1LjM1MS0xLjA4NS42MzUtMS4zMzQtMi4yMTQtLjI1MS00LjU0Mi0xLjEwNy00LjU0Mi00LjkzIDAtMS4wODcuMzg5LTEuOTc5IDEuMDI0LTIuNjc1LS4xMDEtLjI1My0uNDQ2LTEuMjY4LjA5OS0yLjY0IDAgMCAuODM3LS4yNjkgMi43NDIgMS4wMjFhOS41ODIgOS41ODIgMCAwIDEgMi40OTYtLjMzNiA5LjU1NCA5LjU1NCAwIDAgMSAyLjQ5Ni4zMzZjMS45MDYtMS4yOTEgMi43NDItMS4wMjEgMi43NDItMS4wMjEuNTQ1IDEuMzcyLjIwMyAyLjM4Ny4wOTkgMi42NC42NC42OTYgMS4wMjQgMS41ODcgMS4wMjQgMi42NzUgMCAzLjgzMy0yLjMzIDQuNjc1LTQuNTUyIDQuOTIyLjM1NS4zMDguNjc1LjkxNi42NzUgMS44NDYgMCAxLjMzNC0uMDEyIDIuNDEtLjAxMiAyLjczNyAwIC4yNjcuMTc4LjU3Ny42ODcuNDc5QzE5LjE0NiAyMC4xMTUgMjIgMTYuMzc5IDIyIDExLjk3NCAyMiA2LjQ2NSAxNy41MzUgMiAxMi4wMjYgMnoiPjwvcGF0aD48L3N2Zz4=" alt="github"></img>
                
                <span>JAVIER SOSA</span>
                </a>
            </p>
            <Link to='/home'>
                <button className={style.welcome} >WELCOME!!</button>
            </Link>
            
        </div>
    )
};

export default Landing;