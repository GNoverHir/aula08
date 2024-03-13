import "./style.css"

const SearchBar = () => {
    return(

        <div className="searchBar">
            <input type="search" placeholder="Pesquisar loja" />
            <a href="#">Descobrir</a>
            <a href="#">Navegar</a>
            <a href="#">Novidades</a>
        </div>

    )
}

export default SearchBar;