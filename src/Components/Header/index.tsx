import "./style.css"
import globe from "../../assets/globe.png"
import user from "../../assets/user.png"


const Header = () => {

    return(

        <header className="epicHeader">
            <div className="rightSide">
                <nav>
                    <ul>
                        <li><img width={35} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/882px-Epic_Games_logo.svg.png" alt="" /></li>
                        <li><h1>STORE</h1></li>
                        <li>Distribuição</li>
                        <li>Suporte</li>
                        <li>Unreal Engine</li>
                    </ul>
                </nav>
            </div>

            <div className="leftSide">
                <img width={20} height={20} src={globe} alt="" />
                <img width={30} height={30} src={user} alt="" />
                <button>Download</button>
            </div>
        </header>

    )
}

export default Header;