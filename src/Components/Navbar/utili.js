export const handleMenuClick = (item, setMenuIcon) => {
    setMenuIcon(false)
    if (item === "HOME") {
        document.documentElement.scrollTop = 0;
    } else if (item === "FEATURES") {
        document.documentElement.scrollTop = 811;
    } else if (item === "GALLERY") {
        document.documentElement.scrollTop = 5939;
    } else if (item === "PRICING") {
        document.documentElement.scrollTop = 6879;
    } else if (item === "CONTACT") {
        document.documentElement.scrollTop = 8208;
    }
};

export const handleDownloadBtnClicked = (setMenuIcon) => {
    setMenuIcon(false)
    document.documentElement.scrollTop = 8108;
};

export const scroll = (setStickyNav, setActiveMenu) => {
    window.addEventListener("scroll", (e) => {
        setActiveMenu(false)
        const scroll = document.documentElement.scrollTop;
        if (scroll > 20) {
            setStickyNav(true);
        } else {
            setStickyNav(false);
        }
        if (scroll < 500) {
            setActiveMenu("HOME");
            document.title = 'Home'
        }
        if (scroll > 500 && scroll < 5539) {
            document.title = 'FEATURES'
            setActiveMenu("FEATURES");
        }
        if (scroll > 5539 && scroll < 6779) {
            document.title = 'GALLERY'
            setActiveMenu("GALLERY");
        }
        if (scroll > 6779 && scroll < 8108) {
            document.title = 'PRICING'
            setActiveMenu("PRICING");
        }
        if (scroll > 8108) {
            document.title = 'CONTACT'
            setActiveMenu("CONTACT");
        }
    });

}

export const handleMenuIconClick = (setMenuIcon, menuIcon) => {
    setMenuIcon(!menuIcon)
}