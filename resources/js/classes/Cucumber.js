class Cucumber
{
    constructor(object)
    {
        this.object = object;
    }

    setImage(imageURL)
    {
        this.name = this.object.querySelector(".big-image");
        this.name.innerHTML = `<img src="${imageURL}"/>`;
    }

    setName(name)
    {
        this.image = this.object.querySelector(".name");
        this.image.innerHTML = name;
    }

    setShortDescription(shortDescription)
    {
        this.shortDescription = this.object.querySelector(".short-description");
        this.shortDescription.innerHTML = shortDescription;
    }

    setDescription(description)
    {
        this.description = this.object.querySelector(".description");
        this.description.innerHTML = description;
    }
}