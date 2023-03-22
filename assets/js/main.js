const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        img: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg',
    },
]
console.log(team);
const rowEl = document.querySelector('.row')
for (let i = 0; i < team.length; i++) {
    const thisteam = team[i];
    console.log(thisteam);
    console.log(thisteam.nome);
    console.log(thisteam.ruolo);
    console.log(thisteam.img);
    const markup = `
    <div class="col">
        <div class="card">
            <img src="./assets/img/${thisteam.img}" alt="" class="card-img-top">
            <div class="card-body">
                <h3>
                    ${thisteam.nome} 
                </h3>
                <p>
                    ${thisteam.ruolo}
                </p>
            </div>
            
        </div>
    </div>`
    rowEl.innerHTML += markup
}

