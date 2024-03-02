var pageType = "index";

document.addEventListener("DOMContentLoaded", () => 
{
    switch (pageType) {
        case "index":
            loadHome();
            break;
    
        case "cucumber":
            loadCucumber();
            break;

        default:
            break;
    }
});