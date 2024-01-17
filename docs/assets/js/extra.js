function iconlink()
{
    const content = document.querySelector(".md-content");    
    if (!content) {        
        return;
    }

    const links = content.querySelectorAll("a");
            
    for (const link of links) {
                                
        const href = link.getAttribute("href");
        if (href && href.startsWith("http") && link.hostname !== location.hostname)
        {
            link.target = "_blank";
            link.rel = "noopener";
            
            const img = document.createElement("img");            
            img.src = "https://www.google.com/s2/favicons?domain=" + href;
            img.className = "icon-link";
            img.width = 16;
            img.height = 16;
            
            link.parentNode.insertBefore(img, link);
        }
    }
}

document$.subscribe(function() {
    iconlink();    
})