import './style.scss'
import youtubeImage from './../../assets/images/youtube-home.png'
import batataGif from './../../assets/images/batata.gif'
import { GamesLista } from '../../components/GamesLista'

export function SteamGames() {

    const newGames = [
        {
            name: 'Hollow Knight',
            plataforms: ['windows'],
            categories: ['Metroidvania', 'Souls-like', 'Platformer2D'],
            price: '20,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg'
        },
        {
            name: "Don't Starve",
            plataforms: ['windows'],
            categories: ['SurvivalOpen', 'World Survival', 'CraftCrafting'],
            price: '30,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/219740/header.jpg'
        },
        {
            name: 'Cult of the Lamb',
            plataforms: ['windows'],
            categories: ['Horror', 'Cute', 'Roguelike'],
            price: '45,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/1313140/header.jpg'
        }
    ]

    return (
        <div className='quarta-aula-component'>

            <h1 className='main-title'>New Games</h1>

            <ul className='components-finded'>

                {
                    newGames.map(
                        (component, index) => {
                            return (
                                <GamesLista
                                    key={index}
                                    item={component}
                                />
                            )
                        }
                    )
                }

            </ul>

        </div>
    )

}