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

function onFormSubmit(e){
    e.preventDefault()

    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")

    if (!$(email).val()) {
        alert("email is required")
    }else if(!$(subject).val()){
        alert('subject is required')
    }else if(!$(message).val()){
        alert("message is required")
    }else{
        alert("form submitted")
        $(email).val("")
        $(subject).val("")
        $(message).val("")
        
    }
}