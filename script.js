document.addEventListener('DOMContentLoaded', function() {
    console.log("الموقع جاهز!");
    
    // مثال على إضافة تفاعل باستخدام jQuery
    $('footer').on('click', function() {
        alert("شكراً لزيارة الموقع!");
    });
});
