String.prototype.hashCode = function() {
  var hash = 0,
    i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}
$(document).ready(function() {
    $("#loginButton").click(function(){
        $("#id01").show();
      /*
      $.ajax({
          url: "Access-Control-Allow-Origin:http://localhost:8080/"
      }).then(function(data) {
         $('#reverse').append(data.any);
         $('.greeting-content').append(data.any);
         
      });
      */
    });

    $("#loginbtn").click(async function (e) {
        let method = "AuthenticateJSON/"
        //let method = "ReverseString/"
        let pwd = 'mypassword'
        pwd = pwd.hashCode();
        let parameter=JSON.stringify({UserName:'sa',UserPassword:pwd});
        console.log('Password: '+pwd)
        let { data } = await axios.post("http://18.143.151.180/userdll.dll/datasnap/rest/TUser/"+method, parameter)
        console.log('data =', data)
        //let back = data
        //console.log(back)
      });

  });


function hidepopup()
  {
  $("#loginform").fadeOut();
  $("#loginform").css({"visibility":"hidden","display":"none"});
  }
    var Snow = function (options) {
      document.getElementById(options.id).style.position = "fixed";
      document.getElementById(options.id).style.top = 0;
      document.getElementById(options.id).style.left = 0;
      document.getElementById(options.id).style.right = 0;
      document.getElementById(options.id).style.bottom = 0;
      document.getElementById(options.id).style.zIndex = 1000;
      document.getElementById(options.id).style.pointerEvents = "none";

      //create canvas
      this.canvas = document.createElement("canvas"); //add random number to change canvas id
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      document.getElementById(options.id).appendChild(this.canvas);

      //get theme
      var theme = "default"
      if (options.theme == "colors" || options.theme == "blues" || options.theme == "watermelon" || options.theme == "berry" || options.theme == "pastel") {
        theme = options.theme;
      }

      //change size
      var min = 2;
      var max = 7;
      if (!isNaN(options.min_size)) {
        min = options.min_size;
      }
      if (!isNaN(options.max_size)) {
        max = options.max_size;
      }

      //snowflake list
      this.snowflakes = []
      for (let i = 0; i < 250; i++) {
        this.snowflakes[i] = new Snowflake(this.canvas, theme, min, max);
        this.snowflakes[i].show();
      }

      function random(min, max) {
        return Math.random() * (max - min) + min;
      }

      //boolean is snow is true or false
      this.go = false;
      this.snowfall = function () {
        requestAnimationFrame(() => this.snowfall());

        if (this.go) {
          //clear canvas
          const context = this.canvas.getContext('2d');
          context.clearRect(0, 0, this.canvas.width, this.canvas.height);

          //update snowflakes
          for (var i = 0; i < 250; i++) {
            this.snowflakes[i].update();
            this.snowflakes[i].show();

            if (this.snowflakes[i].y > this.canvas.height) {
              this.snowflakes[i].y = random(-20, -200);
            }
          }
        }
      }

      this.snowfall();

      this.start = function () {
        this.go = true;
      }

      this.stop = function () {
        this.go = false;
      }
    }

    //snowflakes to use in snow
    var Snowflake = function (canvas, theme, min, max) {
      //snowflake elements
      this.radius = random(min, max);
      this.x = random(0, canvas.width);
      this.y = random(-20, -800);
      this.Vy = random(1, 2)
      //set default
      this.color = "#FFF"
      //apply theme     
        this.color =
        "hsla(" +
        random(0, 360) +
        "," +
        random(40, 80) +
        "%," +
        random(60, 80) +
        "%)";
      
      this.canvas = canvas;

      this.show = function () {
        var ctx = this.canvas.getContext("2d");
        ctx.beginPath();       
        ctx.arc(this.x, this.y, this.radius * 1, 0, 2 * Math.PI);

        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
        
      }

      this.update = function () {
        this.y += this.Vy;
      }

      function random(min, max) {
        return Math.random() * (max - min) + min;
      }
    }

    window.onload = function () {
      //create new snow
      var snow = new Snow({
        id: 'snow',
        theme: 'pastel',
        min_size: 1,
        max_size: 5
      });
      snow.start();
    }


    $(() => {
      const treeListData = $.map(tasks, (task) => {
        task.Task_Assigned_Employee = null;
        $.each(employees, (_, employee) => {
          if (employee.ID === task.Task_Assigned_Employee_ID) {
            task.Task_Assigned_Employee = employee;
          }
        });
        return task;
      });
    
      $('#tasks').dxTreeList({
        dataSource: treeListData,
        keyExpr: 'Task_ID',
        parentIdExpr: 'Task_Parent_ID',
        columnAutoWidth: false,
        wordWrapEnabled: true,
        showBorders: true,
        focusedRow:true,
        expandedRowKeys: [1, 1],
        selectedRowKeys: [1, 1],
        autoExpandAll:true,
        searchPanel: {
          visible: true,
          width: 200,
        },onRowClick(e) {
          navClick(e);
        },
        headerFilter: {
          visible: true,
        },
        selection: {
          mode: 'single',
        },
        columnChooser: {
          enabled: false,
        },
        columns: [{
          dataField: 'Task_Subject',
          caption:'Main Menu',
          width: 200,
        }],
      });

      function UrlExists(url)
      {
          var http = new XMLHttpRequest();
          http.open('HEAD', url, false);
          http.send();
          return http.status!=404;
      }

      function navClick(e)
      {
        let linkPage = './'+e.data.Task_Subject+'/index'
        linkPage= linkPage.replace(' ','-')
        linkPage= linkPage.replace(' ','-')
        let url = linkPage+'.htm'
        if (UrlExists(url))
        {
          document.getElementById("masterContainer").innerHTML='<object class="width-100" type="text/html" data="'+url+'" ></object>';
        } else if (UrlExists(linkPage+'.html'))
        {
          url = linkPage+'.html'
          document.getElementById("masterContainer").innerHTML='<object class="width-100" type="text/html" data="'+url+'" ></object>';
        } else
        {
          document.getElementById("masterContainer").innerHTML='<object class="width-100" type="text/html" data="./notfound/notfound.htm" ></object>';
        }  
      }      
    });

    