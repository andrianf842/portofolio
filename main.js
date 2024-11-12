function toggleDetail(e) {
    const target = $(e.target)

    if ($(target).hasClass("active")) {
        $(target).html("more info").removeClass("active")}
        else{
         $(e.target).html("Less info").addClass("active")}

    const item = $(e.target).parents(".about-exp-item")

    const detail = $(item).children(".about-exp-item-detail")

    
    $(detail).slideToggle()
    
}