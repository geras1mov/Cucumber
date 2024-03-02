class Page
{
    static pageType = "index";
    static pageId = 0;
    
    static setPageType(type)
    {
        Page.pageType = type;
    }

    static setPageId(id)
    {
        Page.pageId = id;
    }

    static getPageType()
    {
        return Page.pageType;
    }

    static getPageId()
    {
        return Page.pageId;
    }

    static getHome()
    {
        return `<div class="widget" id="cucubmer_0">
        <div class="cucumber-image"></div>
        <div class="cucumber-name"></div>
        <div class="cucumber-description"></div>
        <div class="cucumber-button-wrapper">
            <button class="cucumber-button" id="cucumber_0">Прочитать</button>
        </div>
    </div>
    <div class="widget" id="cucubmer_1">
        <div class="cucumber-image"></div>
        <div class="cucumber-name"></div>
        <div class="cucumber-description"></div>
        <div class="cucumber-button-wrapper">
            <button class="cucumber-button" id="cucumber_1">Прочитать</button>
        </div>
    </div>
    <div class="widget" id="cucubmer_2">
        <div class="cucumber-image"></div>
        <div class="cucumber-name"></div>
        <div class="cucumber-description"></div>
        <div class="cucumber-button-wrapper">
            <button class="cucumber-button" id="cucumber_2">Прочитать</button>
        </div>
    </div>
    <div class="widget" id="cucubmer_3">
        <div class="cucumber-image"></div>
        <div class="cucumber-name"></div>
        <div class="cucumber-description"></div>
        <div class="cucumber-button-wrapper">
            <button class="cucumber-button" id="cucumber_3">Прочитать</button>
        </div>
    </div>`
    }

    static getCucumber()
    {
        return `<div class="div" id="div_0">
        <div class="big-image"></div>
        <div class="name-and-short">
            <div class="name"></div>
            <div class="short-description"></div>
        </div>
        <div class="home-button-wrapper">
            <button class="home-button" id="home"><i class="fa-solid fa-house" id="home"></i></button>
        </div>
        </div>
    <div class="div" id="div_1">
        <div class="description"></div>
    </div>`
    }
}