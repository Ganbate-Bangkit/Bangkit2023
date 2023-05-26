//default imput pada slider bernilai 0
let talentInputs = {
    copywriting: 0,
    design: 0,
    internasional: 0,
    nasional: 0,
    entertainment: 0,
    gaming: 0,
    tech: 0,
    finance: 0,
    health: 0,
    sport: 0,
}

//untuk menampilkan nilai pada slider sesuai perubahan dari user. 
//slider Role Talent 
document.getElementById("range-slider-copywriting").addEventListener("input", function () {
    talentInputs.copywriting = this.value;
    document.getElementById("output-copywriting").textContent = this.value;
});

document.getElementById("range-slider-design").addEventListener("input", function () {
    talentInputs.design = this.value;
    document.getElementById("output-design").textContent = this.value;
});

//slider Level Talent
document.getElementById("range-slider-internasional").addEventListener("input", function () {
    talentInputs.internasional = this.value;
    document.getElementById("output-internasional").textContent = this.value;
});

document.getElementById("range-slider-nasional").addEventListener("input", function () {
    talentInputs.nasional = this.value;
    document.getElementById("output-nasional").textContent = this.value;
});

//slider Skills Talent
document.getElementById("range-slider-entertainment").addEventListener("input", function () {
    talentInputs.entertainment = this.value;
    document.getElementById("output-entertainment").textContent = this.value;
});

document.getElementById("range-slider-gaming").addEventListener("input", function () {
    talentInputs.gaming = this.value;
    document.getElementById("output-gaming").textContent = this.value;
});

document.getElementById("range-slider-tech").addEventListener("input", function () {
    talentInputs.tech = this.value;
    document.getElementById("output-tech").textContent = this.value;
});
document.getElementById("range-slider-finance").addEventListener("input", function () {
    talentInputs.finance = this.value;
    document.getElementById("output-finance").textContent = this.value;
});

document.getElementById("range-slider-health").addEventListener("input", function () {
    talentInputs.health = this.value;
    document.getElementById("output-health").textContent = this.value;
});

document.getElementById("range-slider-sport").addEventListener("input", function () {
    talentInputs.sport = this.value;
    document.getElementById("output-sport").textContent = this.value;
});

//Connect ke back-end
document.querySelector('.btn-submit-form').addEventListener('click', async function () {
    await axios.post('ini isi localhost server', talentInputs);
});