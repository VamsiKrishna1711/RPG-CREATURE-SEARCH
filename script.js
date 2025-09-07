const charSearch = document.getElementById('search-input');
const buttn = document.getElementById('search-button');
const cretName = document.getElementById('creature-name');
const cretId = document.getElementById('creature-id');
const cretWeight = document.getElementById('weight');
const cretHeight = document.getElementById('height');
const cretType = document.getElementById('types');
const cretHp = document.getElementById('hp');
const cretAtck = document.getElementById('attack');
const cretDefenc = document.getElementById('defense');
const cretSpecAtk = document.getElementById('special-attack');
const cretSpecDefenc = document.getElementById('special-defense');
const cretSpeed = document.getElementById('speed');

buttn.addEventListener('click', async () => {
    const query = charSearch.value.trim().toLowerCase();
    if (!query) return;

    const url = `https://rpg-creature-api.freecodecamp.rocks/api/creature/${query}`;

    try {
        const res = await fetch(url);
        if (!res.ok) {
            alert("Creature not found");
            return;
        }

        const data = await res.json();
        displayCreature(data);
    } catch (err) {
        alert("Creature not found");
    }
});

function displayCreature(data) {
    // clear types before adding new ones
    cretType.innerHTML = "";

    cretName.textContent = data.name.toUpperCase();
    cretId.textContent = `#${data.id}`;
    cretWeight.textContent = `Weight: ${data.weight}`;
    cretHeight.textContent = `Height: ${data.height}`;

    data.types.forEach(t => {
        const span = document.createElement("span");
        span.textContent = t.name.toUpperCase();
        cretType.appendChild(span);
    });

    // stats
    data.stats.forEach(stat => {
        switch (stat.name) {
            case "hp":
                cretHp.textContent = stat.base_stat;
                break;
            case "attack":
                cretAtck.textContent = stat.base_stat;
                break;
            case "defense":
                cretDefenc.textContent = stat.base_stat;
                break;
            case "special-attack":
                cretSpecAtk.textContent = stat.base_stat;
                break;
            case "special-defense":
                cretSpecDefenc.textContent = stat.base_stat;
                break;
            case "speed":
                cretSpeed.textContent = stat.base_stat;
                break;
        }
    });
}
