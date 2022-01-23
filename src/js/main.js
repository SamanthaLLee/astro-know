var astronaut = null
var throttle_in_effect = false

const set_astronaut = async function (a, b) {
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
    document.getElementById('name').innerHTML = astronaut['name']
    document.getElementById('summary').innerHTML = astronaut['bio']
    document.getElementById('image').src = astronaut['profile_image']

    // if (typeof elem !== 'undefined' && elem !== null) {
    //     console.log(astronaut['name'])
    //     elem;
    // }
}

const hide_prompt = async function () {
    console.log("eyay")
    document.getElementById('default').hidden = true
    document.getElementById('container').hidden = false
    set_astronaut()
}

document.getElementById('default').hidden = false
document.getElementById('container').hidden = true