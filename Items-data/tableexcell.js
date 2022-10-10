$(async function() {
    let method="GetItemCrossReference/"
    let parameter="C*114"
   // let employees;
    let { data } = await axios.get("http://18.143.151.180/ItemCrossRef.dll/datasnap/rest/TItemCrossRef/"+method+parameter)
    let back = data.result[0]
    console.log(back);
    $("#gridContainer").dxDataGrid({
        dataSource: back,
        keyExpr: "cust_num",
        selection: {
            mode: 'form',
        },
        export: {
            enabled: true,
            allowExportSelectedData: true,
        },
        editing: {
            mode: 'popup',
            allowUpdating: true,
            allowAdding: true,
            allowDeleting: true,
            popup: {
              title: 'Employee Info',
              showTitle: true,
              width: 700,
              height: 525,
            },
        },
        searchPanel: {
            visible: true,
            highlightCaseSensitive: true,
            },
        paging: { enabled: false },
        groupPanel: { visible: true },
            grouping: {
            autoExpandAll: false,
            },
            allowColumnReordering: true,
            rowAlternationEnabled: true,
            showBorders: true,
        columns: [
      {
        dataField: 'cust_num',
        groupIndex: 0,
       // allowExporting: true
      },
      {
        dataField: 'cust_item',
        groupIndex: 0,
       // allowExporting: true
      },
     ],
     
        
        onSelectionChanged(selectItem){
            const data = selectItem.selectedRowsData[0];
            if(data){
                document.getElementById('codeitem').value = data.cust_num;
                document.getElementById('typeitem').value = data.cust_item;
            }
        },
    });

});


