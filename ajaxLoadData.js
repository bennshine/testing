$(document).ready(function () {
    ajaxGet();

    // DO GET
    async function ajaxGet() {
        $.ajax({
            type: "GET",
            url: window.location + "api/dashboard/all",
            
            success: function (result) {
                function getColor(percentage) {
                    const percent = parseInt(percentage.split('%')[0]);

                    if (percent >= 81 && percent <= 100) {
                        return '#ff4444c2';
                    } else if (percent >= 41 && percent <= 80) {
                        return 'orange';
                    } else {
                        return 'green';
                    };
                }
                result.forEach((volprice, i) => {
                  
                    const volpriceRow = `<div class="col-md-3">
                    <div class="card shadow mb-4">
                    <!-- Card Header - Dropdown -->
                    <div class="colora">
                        <h6 class="m-0 font-weight-bold text-primary">SN:${volprice.ServerName} | <b style="color:red">IP: ${volprice.IP}</b></h6>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div id="Sarah_chart_div" class="chart"></div>
                        </div>
                    </div>
                    <div class="row" style="padding: 20px;">
                    ${volprice.Disks.map((disk, i) => {
                        return (i % 4 == 3 || i == 0) ? '<div class="col-md-6" ><div class="text-xs font-weight-bold text-info text-uppercase mb-1">'+disk.DriveLetter+'</div><div class="progress"><div class="progress-bar progress-bar-striped active"  role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:'+disk.FreeSpacePerc+';background:'+getColor(disk.FreeSpacePerc)+' !important;">'+disk.FreeSpacePerc+'</div></div></div>'  :'<div class="col-md-6" ><div class="text-xs font-weight-bold text-info text-uppercase mb-1">'+disk.DriveLetter+'</div><div class="progress"><div class="progress-bar progress-bar-striped active"  role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:'+disk.FreeSpacePerc+';background:'+getColor(disk.FreeSpacePerc)+' !important;">'+disk.FreeSpacePerc+'</div></div></div>';
                    }).join("")}
                    </div>
                        <div class="card-footer" style=" font-size: 13px; ">
                        <table class="table">
                            <thead onclick="osinfoT(this, ${i})">
                                <th class="table" colspan="2" style="border-radius: 10px;background: linear-gradient(45deg, #3949AB, #2962FF);text-align: center;cursor: pointer;">Server OS Info</th>
                            </thead>
                        </table>
                        <table class="table"  style=" padding:10px; display:none;" id="osinfo${i}" style=" font-size: 13px!important; ">
                            <thead  class="thead-dark">
                                <th class="table-primary" >OS Name</th>
                                <td>${volprice.OSName}</td>
                            </thead>
                            <thead>
                                <th  class="table-success">OS Version</th>
                                <td>${volprice.OSVersion}</td>
                            </thead>
                            <thead>
                                <th class="table-warning">OS Architecture</th>
                                <td>${volprice.OSArchitecture}</td>
                            </thead>
                        </table>
                        <table class="table"  onclick="cpuram(this, ${i})">
                            <thead>
                                <th class="table-warning" colspan="4"  style="border-radius: 10px;background: linear-gradient(45deg, #2ca961, #2ed88a) !important;text-align: center;cursor: pointer;">Server CPU and RAM Info</th>
                            </thead>
                        </table>
                        <table class="table"  style=" padding:10px; display:none;" id="cpuram${i}">
                            <thead  class="thead-dark">
                                <th class="table-primary" colspan="4">CPU Name</th>
                            </thead>
                            <tbody  class="thead-dark">
                            ${volprice.CPUs.map(s => {
                                return '<tr><td colspan="4">'+s.CPUName+'</td></tr>'
                            })}
                            <thead  class="thead-dark">
                                <th  class="table-success">CPU Status</th>
                                <th  class="table-success">CPU Count(L)</th>
                                <th  class="table-success">CPU Count(P)</th>
                            </thead>
                            ${volprice.CPUs.map(s => {
                                return '<tr><td >'+s.CPUStatus+'</td><td>'+s.LogicalProcessors+'</td><td>'+s.PhysicalCores+'</td></tr>'
                            })}      
                            <thead  class="thead-dark" >
                                <th class="table-primary"  colspan="4">Total RAM</th>
                            </thead>
                            <td>${volprice.TotalRAM}</td>           
                            </tbody>
  
                        <table class="table" onclick="rdpsections(this, ${i})" >
                            <thead>
                                <th class="table-danger" colspan="5" style="border-radius: 10px;background: linear-gradient(45deg, #e52d27, #b31217) !important;text-align: center;cursor: pointer;"><a >RDP Sections</a></th>
                            </thead>
                        </table>
                        <table class="table"  style=" padding:10px; display:none;" id="rdpsections${i}">
                
                            <thead  class="thead-dark">
                                <tr>
                                    <th class="table-primary">Section Name</th>
                                    <th class="table-primary">User Name</th>
                                    <th class="table-primary">State</th>
                                    <th class="table-primary">Machine ID</th>
                                    <th class="table-primary">Full Name</th>
                                </tr>
                                ${volprice.Sessions.map(s => {
                        return '<tr><td>'+s.SessionID+'</td><td>'+s.UserName+'</td><td>'+s.SessionState+'</td><td>'+s.MachineID+'</td><td>'+s.FullUserName+'</td></tr>'
                    }).join('')}
                                
                            </thead>
                        </table>
                        <table class="table" onclick="services(this, ${i})" >
                            <thead>
                                <th class="table-danger" colspan="5" style="border-radius: 10px;background: linear-gradient(45deg, #9f43c5, #6d556c) !important;text-align: center;cursor: pointer;"><a >Services</a></th>
                            </thead>
                        </table>
                        <table class="table"  style=" padding:10px; display:none;" id="services${i}">
                            <thead  class="thead-dark">
                                <th colspan="4">Service Name</th>
                                <th colspan="4">Run As User</th>
                            </thead>
                            <tbody  class="thead-dark">
  
                            </tbody>
                        </table>
                        <table class="table" >
                            <thead>
                                <button type="button" class="btn btn-primary" style="font-size: 12px;border-radius: 10px;background: linear-gradient(45deg, #5c6b4e, #5c6d55) !important;text-align: center;cursor: pointer;width: 100%;padding: 13px;border: none;font-weight: 700;" data-toggle="modal" data-target="#exampleModal">
                                    Scheduled Task
                                  </button>                                            
                                </thead>
                        </table>
                
                          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content" style="width:700px;">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="exampleModalLabel">Scheduled Task</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                    <table class="table">
                                        <thead class="thead-light">
                                            <th>Task Name</th>
                                            <th>Task Folder</th>
                                            <th>Enabled</th>
                                            <th>Last Run Time</th>
                                            <th>Next Run Time</th>
                                            <th>Missed Runs</th>
                                            <th>Run As User</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                              </div>
                            </div>
                          </div>
                    </div>
                </div> 
					        	</div>`;
                    $("#shit").append(volpriceRow);
                    //Append newDiv to Popovercontent

                });


            },

            error: function (e) {
                alert("ERROR: ", e);
                console.log("ERROR: ", e);
            }
        });

      
    }
})
