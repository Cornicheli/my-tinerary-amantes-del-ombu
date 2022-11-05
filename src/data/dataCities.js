// git import Slider from "../componentes/Slider/Slider";

function EventsCarousel() {
 let cities = [
        {
            id: 'city1',
            name: 'Amsterdam',
            continent: 'Europa',
            photo:'https://media.traveler.es/photos/61375f04ea50dbd37eade9a7/master/w_1920%2Cc_limit/213200.jpg',
            population: 2000000,
            userdId: 'admin1',
        },
        {
            id: 'city2',
            name: 'Budapest',
            continent: 'Europa',
            photo:'https://media.traveler.es/photos/61375f04ea50dbd37eade9a6/master/w_1920%2Cc_limit/213213.jpg',
            population: 17000,
            userdId: 'admin3',
        },    
        {
            id: 'city3',
            name: 'Beijing',
            continent: 'Europa',
            photo:'https://media.traveler.es/photos/61375f03ea50dbd37eade9a3/master/w_1920%2Cc_limit/213176.jpg',
            population: 230000,
            userdId: 'admin3',
        },
        {
            id: 'city4',
            name: 'Bergen',
            continent: 'Europa',
            photo:   'https://media.traveler.es/photos/61375f04f00fb1ba8d86679e/master/w_1920%2Cc_limit/213177.jpg',
            population: 10000,
            userdId: 'admin1',
        },
        {
            id: 'city5',
            name: 'Beirut',
            continent: 'Europa',
            photo:'https://media.traveler.es/photos/61375f0332d932c80fcb80f5/master/w_1920%2Cc_limit/111206.jpg',
            population: 400000,
            userdId: 'admin4',
        },
        {
            id: 'city6',
            name: 'Brujas',
            continent: 'Europa',
            photo:'https://media.traveler.es/photos/61375f03d7c7024f9175dbef/master/w_1920%2Cc_limit/213211.jpg',
            population: 1600,
            userdId: 'admin2',
        },
        {
            id: 'city7',
            name: 'Barcelona',
            continent: 'Europa',
            photo:'https://media.traveler.es/photos/61375f03ba2a75fcba4bdd3b/master/w_1920%2Cc_limit/213172.jpg',
            population: 230000,
            userdId: 'admin2',
        },
        {
            id: 'city8',
            name: 'Buenos Aires',
            continent: 'Europa',
            photo:'https://media.traveler.es/photos/61375f0472cad4b2dbd5d0d2/master/w_1920%2Cc_limit/213180.jpg',
            population: 10000,
            userdId: 'admin4',
        },    {
            id: 'city9',
            name: 'Ciudad Del Cabo',
            continent: 'Europa',
            photo:'https://media.traveler.es/photos/61375f04c4f3d957866678a5/master/w_1920%2Cc_limit/213190.jpg',
            population: 1900000,
            userdId: 'admin1',
        },    {
            id: 'city10',
            name: 'Cartagena',
            continent: 'Europa',
            photo:'https://media.traveler.es/photos/61375f04c4f3d957866678a8/master/w_1920%2Cc_limit/213216.jpg',
            population: 2000000,
            userdId: 'admin2',
        },    {
            id: 'city11',
            name: 'Chefchaouen',
            continent: 'Europa',
            photo:'https://media.traveler.es/photos/61375f04030de94d067fbfd0/master/w_1920%2Cc_limit/213219.jpg',
            population: 2100000,
            userdId: 'admin3',
        },
        {
            id: 'city12',
            name: 'Chiang Mai',
            continent: 'Europa',
            photo:'https://media.traveler.es/photos/61375f0432d932c80fcb80f9/master/w_1920%2Cc_limit/213175.jpg',
            population: 2200000,
            userdId: 'admin4',
        },

    ] 
    return (<Slider cities={cities} range={4} text='Popular Events'/>)  
}
export default EventsCarousel
//intercalar cities y hoteles con filter o includes o  crear otro carrusel

// puedo usar varios usestate para varias cosas