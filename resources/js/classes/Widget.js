class Widget
{
    constructor(object)
    {
        this.object = object;
    }

    setName(name)
    {
        this.name = this.object.querySelector(".cucumber-name");
        this.name.innerHTML = name;
    }

    setShortDescription(description)
    {
        this.description = this.object.querySelector(".cucumber-description");
        this.description.innerHTML = description;
    }

    setImage(imageURL)
    {
        this.image = this.object.querySelector(".cucumber-image");
        this.image.innerHTML = `<img src="${imageURL}"/>`;
    }
}