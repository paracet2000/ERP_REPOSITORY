$(() => {
  getCustomerData();
  const customerGrid =$('#dvCustomerGrid').dxDataGrid({
    dataSource: customerGridData,
    keyExpr: 'ID',
    focusedRowEnabled: true,
    rowAlternationEnabled:true,
    columnFixing: {enabled: true},
    export:{
      enabled:true
    , allowExportSelectedData: true
    },
    columns: [
       {dataField:'Cust_Code', allowFixing: true}
      ,{dataField:'Cust_Name'}
      ,{dataField:'Cust_Head_Office'}
      ,{dataField:'Cust_Tax'}
    ],
    showBorders: true,
    groupPanel:{
      visible:true,
      emptyPanelText:"วางคอมลัมน์ตรงนี้"
    },
    allowColumnReordering: true,
    showBorders: true,
    grouping: {
      autoExpandAll: false,
      
    },
    searchPanel: {
      visible: true,
      placeholder:"ค้นหา"
    },
    remoteOperations: { groupPaging: true },
    scrolling: {
      mode: 'virtual',
    },paging:{
      pageSize:5,
    },
    onExporting: function(e) { 
      var workbook = new ExcelJS.Workbook(); 
      var worksheet = workbook.addWorksheet('Main sheet'); 
      DevExpress.excelExporter.exportDataGrid({ 
          worksheet: worksheet, 
          component: e.component,
          customizeCell: function(options) {
              var excelCell = options;
              excelCell.font = { name: 'Arial', size: 12 };
              excelCell.alignment = { horizontal: 'left' };
          } 
      }).then(function() {
          workbook.xlsx.writeBuffer().then(function(buffer) { 
              saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx'); 
          }); 
      }); 
      e.cancel = true; 
  }
  })  
});

$(function() {
  $("#tabCustomerMasterPanel").dxTabPanel({
    loop: true,
    animationEnabled: false,
    swipeEnabled: true,
    selectedIndex: 0,
    onSelectionChanged: function(e) {
        const selectedTab = e.addedItems[0].title;
        //tabSwitcherRadioGroup.option("value", selectedTab)
    },items:[{
      title:"ลูกค้า"
      ,icon:"group"
      ,template: function(data,index,element){
        const formDiv = $("<div style='padding:15px'>")
        formDiv.dxForm({
          formData: customerGridData[0],
          items:["custNo","custName","documentDate"],
        });
        formDiv.appendTo(element);
      }   
    },{
      title:"รายละเอียดอื่นๆ"
      ,icon:"comment"
    
    }]
  }).dxTabPanel("instance");
});

const customerData = {
  custName: "John Heart",
  custNo: "C0001",
  documentDate: new Date(2012, 4, 13),
  officeNumber: 901
};

const customerGridData = [];
function getCustomerData(){
  $.ajax({
      type:'get',
      dataType:"json",
      url:'http://18.143.151.180/ItemCrossRef.dll/datasnap/rest/Tcustomer/GetBySQLCommand/Select top 10 * from Customer',
      success: function(data){
        customerGridData = data[0]
      },
      error: function(error){
          console.log(error);
      }
  })
}