$(document).ready(function(){
    $("#form-sub"),validate({
        rules:{
        name:{
            required:true,
            minlength:4

        }
    }

    })
})