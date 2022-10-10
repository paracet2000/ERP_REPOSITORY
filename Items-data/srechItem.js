function selectDrop(){
    $.ajax({
        type:'get',
        dataType:"json",
        url:'http://18.143.151.180/ItemCrossRef.dll/datasnap/rest/TItemCrossRef/GetItemCrossReference/C*114',
        success: function(data){
            let text = "";
            data.result[0].forEach(myFunction)
            document.getElementById("um-text").innerHTML = "<select>"+text+"</select>";
            function myFunction(item){
                text += "<option>"+ item.u_m + "</option>";
               // console.log(text);
            }
        },
        error: function(error){
            console.log(error);
        }
    })
}