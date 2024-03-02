document.addEventListener("click", (e) => {
    const id = e.target.id;
    
    if (id.startsWith("cucumber_"))
    {
        Page.setPageType("cucumber");
        Page.setPageId(id.slice(-1));
        loadCucumber();
    }
    if (id === "home")
    {
        Page.setPageType("index");
        Page.setPageId("0");
        loadHome();
    }
});