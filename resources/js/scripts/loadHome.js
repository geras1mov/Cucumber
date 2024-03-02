async function loadHome()
{
    const main = document.querySelector(".main");
    main.innerHTML = Page.getHome();
    main.classList.remove("cucumber");

    let cucumbers = [
        new Widget(document.getElementById("cucubmer_0")),
        new Widget(document.getElementById("cucubmer_1")),
        new Widget(document.getElementById("cucubmer_2")),
        new Widget(document.getElementById("cucubmer_3"))
    ];
    const cucumbers_data = new Data("cucumbers");
    let data = [];

    for (let i = 0; i < cucumbers.length; i++)
    {
        data[i] = await cucumbers_data.find(i.toString(), ['image', 'name', 'short_description']);
        cucumbers[i].setImage(data[i][0]);
        cucumbers[i].setName(data[i][1]);
        cucumbers[i].setShortDescription(data[i][2]);
    }
}