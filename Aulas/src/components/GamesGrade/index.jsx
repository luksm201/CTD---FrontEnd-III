import "./style.scss"

export function SextaAulaItem(props) {

    return (

        <li className="sexta-aula-item-component">
            <img src={props.item.picture} />
            <h1>{props.item.name}</h1>
            <p>{props.item.plataforms[0]}</p>
            <span className="categories">{props.item.categories.map(
                category => {
                    return <a>{category}</a>
                }
            )}</span>
            <p>{props.item.price}</p>
        </li>

    )

}