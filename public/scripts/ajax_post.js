$('document').ready(()=>{
    $('form').on('submit',(e)=>{
        e.preventDefault();
        $.ajax({
            url:"/",
            method:"POST",
            data:$('form').serialize(),
            success:()=>{
                alert('Dat hang thanh cong');
            }
        })
    })
})
