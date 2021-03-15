async function ajaxGet() {
    //Start market name
    $.ajax({
      type: 'GET',
      url: '/api/gbprices',

      success: function (result) {

        let spliderRef = $('#splide__list1');
        console.log(result);
        let content = '';
        let paginator = '';
        result.forEach((gbprice, i) => {
          content += ` 
                    <li class="splide__slide">
                            <div class="">
                                <div class="widget-title">Next Job Run</div>
                                <div class="widget-title">${gbprice.Market}</div>
                                <div class="widget-int">${gbprice.NextScheduledRun}</div>
                            </div> 
                    </li>
                `;
        });
        spliderRef.html(content);
        new Splide('#splide1', {
          type: 'loop',
          autoplay: true,
          arrows: true,
        }).mount();


        $.each(result, function (i, gbprice) {
          const gbpriceRow = `<tr>
                        <td> ${gbprice.Market}</td>' +
                        <td> ${gbprice.LastReceived} </td>
                        <td> ${gbprice.InclusivePeriod}</td>
                        <td> ${gbprice.NextScheduledRun}</td>
                        <td><a href="" data-toggle="modal" data-target="#gbpriceinfo"><i class="fa fa-info-circle fa-2x"></i></a></td>
                        <td><a href=${gbprice.Information}><img src="wikiicon.png" width=20px></a></td>'
                        </tr>`;
          $('#customerTable tbody').append(gbpriceRow);
        });
        $.each(result, function (i, gbprice) {
          const gbpriceRow = `<tr>
                          <td > ${gbprice.Market}</td>' +
                          <td> ${gbprice.LastReceived} </td>
                          <td> ${gbprice.InclusivePeriod}</td>
                          <td> ${gbprice.NextScheduledRun}</td>
                          <td><a href="" data-toggle="modal" data-target="#gbpriceinfo"><i class="fa fa-info-circle fa-2x"></i></a></td>
                          <td><a href=${gbprice.Information} target="_blank"><img src="wikiicon.png" width=20px></a></td>'
                          <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editlinkgb${gbprice.iD}">Edit</button></td>
                        </tr>`;
          $('#gbpricesa tbody').append(gbpriceRow);

        });
        result.forEach((gbprice, i) => {
        // $.each(result, function (i, gbprice) {
          const runninginfoRow = `<div id="gbpriceinfo" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                          <table class="table">
                              <thead>
                                  <tr>
                                      <th>Loaded Date</th>
                                      <th>From</th>
                                      <th>To</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                        //put that table here 

                                        ${gbprice.RunTimes.map(s => {
                                            return '<tr><td colspan="4">'+s.LoadDate+'</td><td colspan="4">'+s.From+'</td><td colspan="4">'+s.To+'</td></tr>'
                                        }).join('')}
                                    </tr>
                              </tbody>
                          </table>
                        </div>
                    </div>
                
                    </div>`;
          $('#gbpriceinfom').append(runninginfoRow);
          });
          $.each(result, function (i, gbprice) {
            const editlinkRow = `<div id="editlinkgb${gbprice.iD}" class="modal fade">
            <div class="modal-dialog">
              <div class="modal-content">
                  <form action="http://localhost:8088/api/HCDataVis/update" method="post">
                      <input type="hidden" name="id" class="form-control" value="${gbprice.iD}" required>
  
                      <div class="modal-header">						
                          <h4 class="modal-title">Edit Data</h4>
                          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      </div>
                      <div class="modal-body">					
                          <div class="form-group">
                              <label>Information</label>
                              <input type="text" name="Information" class="form-control" value="${gbprice.iD}" required>
                          </div>
  
                      </div>
                      <div class="modal-footer">
                          <input type="submit" class="btn btn-info" value="Save">
                      </div>
                  </form>
              </div>
            </div>
    
                  
                      </div>`;
            $('#editlink').append(editlinkRow);
          });
      },

      error: function (e) {
        alert('ERROR: ', e);
        console.log('ERROR: ', e);
      },
    });