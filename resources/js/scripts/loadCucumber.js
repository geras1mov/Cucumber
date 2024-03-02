async function loadCucumber()
{
    const main = document.querySelector(".main");
    main.innerHTML = Page.getCucumber();
    main.classList.add("cucumber");
    
    const cucumber = new Cucumber(document.querySelector(".main"));
    const cucumbers = new Data("cucumbers");
    const cucumbers_data = await cucumbers.find(Page.getPageId(), ["name", "short_description", "description", "image"]);
    
    cucumber.setName(cucumbers_data[0]);
    cucumber.setShortDescription(cucumbers_data[1]);
    cucumber.setDescription(cucumbers_data[2]);
    cucumber.setImage(cucumbers_data[3]);
    
}