$(document).ready(function(){
$('#btnOk').click(function(){

});
selectDrop();

/**ซ้อนแสดง text from */
$('input[name="showHideTextbox"]').on('click',function(){
    if($(this).val() === 'show'){
        $('#input1').show();
    }else{
        $('#input1').val('').hide();
    }
});
});