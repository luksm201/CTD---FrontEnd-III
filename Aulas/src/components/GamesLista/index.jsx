import "./style.scss"

export function GamesLista(props) {

    return (

        <li className="games-lista-item-component">
            <img src={props.item.picture} />
            <h1>{props.item.name}</h1>
            <p>{props.item.plataforms[0]}</p>
            <span className="categories">{props.item.categories.map(
                (category, index) => {
                    return <a key={index}>{category}</a>
                }
            )}</span>
            <p>{props.item.price}</p>
        </li>

    )

}