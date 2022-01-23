const example1 = { "count": 1, "next": null, "previous": null, "results": [{ "id": 384, "url": "https://ll.thespacedevs.com/2.2.0/astronaut/384/?format=json", "name": "Sidney M. Gutierrez", "status": { "id": 2, "name": "Retired" }, "type": { "id": 2, "name": "Government" }, "date_of_birth": "1951-06-27", "date_of_death": null, "nationality": "American", "bio": "Sidney McNeill Gutierrez is a former NASA astronaut.", "twitter": null, "instagram": null, "wiki": "https://en.wikipedia.org/wiki/Sidney_M._Gutierrez", "agency": { "id": 44, "url": "https://ll.thespacedevs.com/2.2.0/agencies/44/?format=json", "name": "National Aeronautics and Space Administration", "featured": true, "type": "Government", "country_code": "USA", "abbrev": "NASA", "description": "The National Aeronautics and Space Administration is an independent agency of the executive branch of the United States federal government responsible for the civilian space program, as well as aeronautics and aerospace research. NASA have many launch facilities but most are inactive. The most commonly used pad will be LC-39B at Kennedy Space Center in Florida.", "administrator": "Administrator: Bill Nelson", "founding_year": "1958", "launchers": "Space Shuttle | SLS", "spacecraft": "Orion", "parent": null, "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_images/national2520aeronautics2520and2520space2520administration_image_20190207032448.jpeg" }, "profile_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/sidney2520m.2520gutierrez_image_20181202133521.jpg", "profile_image_thumbnail": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/default/cache/47/a9/47a9b732f165dd0611515d1487b441a1.jpg", "last_flight": "1994-04-04T11:05:00Z", "first_flight": "1991-06-05T13:24:51Z" }] }
const example2 = { "count": 1, "next": null, "previous": null, "results": [{ "id": 372, "url": "https://ll.thespacedevs.com/2.2.0/astronaut/372/?format=json", "name": "Franklin Chang Diaz", "status": { "id": 2, "name": "Retired" }, "type": { "id": 2, "name": "Government" }, "date_of_birth": "1950-04-05", "date_of_death": null, "nationality": "American", "bio": "Franklin Ramon Chang Diaz is a Costa Rican Chinese American mechanical engineer, physicist, former NASA astronaut. He is the founder and current CEO of Ad Astra Rocket Company as well as a member of Cummins' board of directors. He became an American citizen in 1977. He is of Chinese (paternal side) and Costa Rican Spanish (maternal side) descent. He is a veteran of seven Space Shuttle missions, tieing the record, as of 2018 for the most spaceflights (a record set by Jerry L. Ross). He was the third Latin American, but the first Latin American immigrant NASA Astronaut selected to go into space. Chang Diaz is a member of the NASA Astronaut Hall of Fame.", "twitter": null, "instagram": null, "wiki": "https://en.wikipedia.org/wiki/Franklin_Chang_D%C3%ADaz", "agency": { "id": 44, "url": "https://ll.thespacedevs.com/2.2.0/agencies/44/?format=json", "name": "National Aeronautics and Space Administration", "featured": true, "type": "Government", "country_code": "USA", "abbrev": "NASA", "description": "The National Aeronautics and Space Administration is an independent agency of the executive branch of the United States federal government responsible for the civilian space program, as well as aeronautics and aerospace research. NASA have many launch facilities but most are inactive. The most commonly used pad will be LC-39B at Kennedy Space Center in Florida.", "administrator": "Administrator: Bill Nelson", "founding_year": "1958", "launchers": "Space Shuttle | SLS", "spacecraft": "Orion", "parent": null, "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_images/national2520aeronautics2520and2520space2520administration_image_20190207032448.jpeg" }, "profile_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/franklin2520chang2520d25c325adaz_image_20181202120659.jpg", "profile_image_thumbnail": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/default/cache/f6/b1/f6b1f3b48c87edd2b366a5baa6cc3100.jpg", "last_flight": "2002-06-05T21:22:49Z", "first_flight": "1986-01-12T11:55:00Z" }] }
const examples = [example1, example2]
var astronaut = null
var throttle_in_effect = false

const start = async function (a, b) {
    if (throttle_in_effect) {
        const random = Math.floor(Math.random() * names.length);
        const url = "https://ll.thespacedevs.com/2.2.0/astronaut/?format=json&search=" + names[random]
        try {
            const req = await fetch(url);
            const json = await req.json();
            console.log(json);
            astronaut = json['results'][0]
        } catch (e) {
            console.error(e);
        }
    } else {
        const random = Math.floor(Math.random() * examples.length);
        astronaut = examples[random]['results'][0]
    }


    update_details()


}

const update_details = async function () {
    console.log(astronaut['name'])
    // console.log(examples[random]['results'][0]['bio'])
    // console.log(examples[random]['results'][0]['wiki'])
    // console.log(examples[random]['results'][0]['profile_image'])
    document.getElementById('name').innerHTML = astronaut['name']
    document.getElementById('summary').innerHTML = astronaut['bio']
    document.getElementById('image').src = astronaut['profile_image']

    // if (typeof elem !== 'undefined' && elem !== null) {
    //     console.log(astronaut['name'])
    //     elem;
    // }
}


start();