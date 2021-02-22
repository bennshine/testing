$(document).ready(function () {
  ajaxGet();
  ajaxGet1();

  // DO GET
  async function ajaxGet() {
    $.ajax({
      type: 'GET',
      url: '/api/gbprices',

      success: function (result) {
        // $.each(result, function(i, gbprice){
        //     const gbpriceRow = `<li class="simple-slider-element ${i}">
        //             <div>
        //                 <div class="widget-title">Next Job Run</div>
        //                 <div class="widget-title">${gbprice.Market}</div>
        //                 <div class="widget-int">${gbprice.NextScheduledRun}</div>
        //             </div>
        //         </li>`;
        //     $('#testing').append(gbpriceRow);

        // });
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
						<td > ${gbprice.Market}</td>' +
						<td> ${gbprice.LastReceived} </td>
						<td> ${gbprice.InclusivePeriod}</td>
						<td> ${gbprice.NextScheduledRun}</td>
						<td>
							<a  class="hide-button-background" 
							    tabindex="0"
                                data-placement="right"
                                role="button"
                                data-html="true"
                                data-toggle="popover"
                                data-trigger="focus"
								id='gd-price-btn-${i}' 
								data-toggle="popover" 
								title="Run History" 
								data-content="<b>From</b><br>${gbprice.RunHistory}</br><br><b>Inclusive Periods</b></br>${gbprice.InclusivePeriod}"><i class="fa fa-info-circle fa-2x"></i>

					
							</a>
								
                        </td>
						<td><a href=${gbprice.Information}><i class="fa fa-globe fa-2x fa-spin"></i></a></td>'
						</tr>`;
          $('#customerTable tbody').append(gbpriceRow);
          //Append newDiv to Popovercontent

          $('[data-toggle="popover"]').popover();
        });
      },

      error: function (e) {
        alert('ERROR: ', e);
        console.log('ERROR: ', e);
      },
    });

    $.ajax({
      type: 'GET',
      url: '/api/volprices/1/7',

      success: function (result) {
        $.each(result, function (i, volprice) {
          const volpriceRow = `<tr>
						<td> ${volprice.Market}</td>' +
						<td> ${volprice.LastReceived} </td>
						<td> ${volprice.InclusivePeriod}</td>
						<td> ${volprice.NextScheduledRun}</td>
						<td>
							<a  class="hide-button-background" 
							    tabindex="0"
                                data-placement="right"
                                role="button"
                                data-html="true"
                                data-toggle="popover"
                                data-trigger="focus"
								id='gd-price-btn-${i}' 
								data-toggle="popover" 
								title="Run History" 
								data-content="<b>From</b><br>${volprice.RunHistory}</br><br><b>Inclusive Periods</b></br>${volprice.InclusivePeriod}"><i class="fa fa-info-circle fa-2x"></i>

					
							</a>
								
                        </td>
						<td><a href=${volprice.Information}><i class="fa fa-globe fa-2x fa-spin"></i></a></td>'
						</tr>`;
          $('#meteoTable tbody').append(volpriceRow);
          //Append newDiv to Popovercontent

          $('[data-toggle="popover"]').popover();
        });
      },

      error: function (e) {
        alert('ERROR: ', e);
        console.log('ERROR: ', e);
      },
    });
    $.ajax({
      type: 'GET',
      url: '/api/volprices/2/7',

      success: function (result) {
        $.each(result, function (i, volprice1) {
          const volprice1Row = `<tr>
						<td> ${volprice1.Market}</td>' +
						<td> ${volprice1.LastReceived} </td>
						<td> ${volprice1.InclusivePeriod}</td>
						<td> ${volprice1.NextScheduledRun}</td>
						<td>
							<a  class="hide-button-background" 
							    tabindex="0"
                                data-placement="right"
                                role="button"
                                data-html="true"
                                data-toggle="popover"
                                data-trigger="focus"
								id='gd-price-btn-${i}' 
								data-toggle="popover" 
								title="Run History" 
								data-content="<b>From</b><br>${volprice1.RunHistory}</br><br><b>Inclusive Periods</b></br>${volprice1.InclusivePeriod}"><i class="fa fa-info-circle fa-2x"></i>

					
							</a>
								
                        </td>
						<td><a href=${volprice1.Information}><i class="fa fa-globe fa-2x fa-spin"></i></a></td>'
						</tr>`;
          $('#meteoTable2 tbody').append(volprice1Row);
          //Append newDiv to Popovercontent

          $('[data-toggle="popover"]').popover();
        });
      },

      error: function (e) {
        alert('ERROR: ', e);
        console.log('ERROR: ', e);
      },
    });
    $.ajax({
      type: 'GET',
      url: '/api/volprices/3/6',

      success: function (result) {
        $.each(result, function (i, volprice2) {
          const volprice2Row = `<tr>
						<td> ${volprice2.Market}</td>' +
						<td> ${volprice2.LastReceived} </td>
						<td> ${volprice2.InclusivePeriod}</td>
						<td> ${volprice2.NextScheduledRun}</td>
						<td>
							<a  class="hide-button-background" 
							    tabindex="0"
                                data-placement="right"
                                role="button"
                                data-html="true"
                                data-toggle="popover"
                                data-trigger="focus"
								id='gd-price-btn-${i}' 
								data-toggle="popover" 
								title="Run History" 
								data-content="<b>From</b><br>${volprice2.RunHistory}</br><br><b>Inclusive Periods</b></br>${volprice2.InclusivePeriod}"><i class="fa fa-info-circle fa-2x"></i>

					
							</a>
								
                        </td>
						<td><a href=${volprice2.Information}><i class="fa fa-globe fa-2x fa-spin"></i></a></td>'
						</tr>`;
          $('#meteoTable3 tbody').append(volprice2Row);
          //Append newDiv to Popovercontent

          $('[data-toggle="popover"]').popover();
        });
      },

      error: function (e) {
        alert('ERROR: ', e);
        console.log('ERROR: ', e);
      },
    });

    $.ajax({
      type: 'GET',
      url: '/api/eirgridprices',

      success: function (result) {
        // $.each(result, function(i, eirgridprice){
        //     const eirgridpriceRow = `<li class="simple-slider-element ${i}">
        //             <div>
        //                 <div class="widget-title">Next Job Run</div>
        //                 <div class="widget-title">${eirgridprice.Market}</div>
        //                 <div class="widget-int">${eirgridprice.NextScheduledRun}</div>
        //             </div>
        //         </li>`;
        //     $('#testing1').append(eirgridpriceRow);

        // });
        let spliderRef = $('#splide__list2');
        console.log(result);
        let content = '';
        let paginator = '';
        result.forEach((eirgridprice, i) => {
          content += ` 
                    <li class="splide__slide">
                            <div class="">
                                <div class="widget-title">Next Job Run</div>
                                <div class="widget-title">${eirgridprice.Market}</div>
                                <div class="widget-int">${eirgridprice.NextScheduledRun}</div>
                            </div> 
                    </li>
        	    `;
        });
        spliderRef.html(content);
        new Splide('#splide2', {
          type: 'loop',
          autoplay: true,
          arrows: true,
        }).mount();
        $.each(result, function (i, eirgridprice) {
          const eirgridpriceRow = `<tr>
                    
						<td> ${eirgridprice.Market}</td>' +
						<td> ${eirgridprice.LastReceived} </td>
						<td> ${eirgridprice.InclusivePeriod}</td>
						<td> ${eirgridprice.NextScheduledRun}</td>
						<td>
							<a  class="hide-button-background" 
							    tabindex="0"
                                data-placement="right"
                                role="button"
                                data-html="true"
                                data-toggle="popover"
                                data-trigger="focus"
								id='gd-price-btn-${i}' 
								data-toggle="popover" 
								title="Run History" 
								data-content="<b>From</b><br>${eirgridprice.RunHistory}</br><br><b>Inclusive Periods</b></br>${eirgridprice.InclusivePeriod}"><i class="fa fa-info-circle fa-2x"></i>

					
							</a>
								
                        </td>
						<td><a href=${eirgridprice.Information}><i class="fa fa-globe fa-2x fa-spin"></i></a></td>'
						</tr>`;
          $('#eirgridTable tbody').append(eirgridpriceRow);
          //Append newDiv to Popovercontent

          $('[data-toggle="popover"]').popover();
        });

        $.each(result, function (i, eirgridprice) {
          const eirgridpriceRow =
            '<div>' +
            '<div class="widget-subtitle" style="background: orange; width: 80%; border-radius: 10px; color: white; padding: 2px;">' +
            '' +
            eirgridprice.Market +
            ' received at ' +
            eirgridprice.LastReceived +
            '' +
            '</div>';
          $('#successfullJobs').append(eirgridpriceRow);
        });
      },

      error: function (e) {
        alert('ERROR: ', e);
        console.log('ERROR: ', e);
      },
    });

    $.ajax({
      type: 'GET',
      url: '/api/semoreportsprices',

      success: function (result) {
        let spliderRef = $('#splide__list3');
        console.log(result);
        let content = '';
        let paginator = '';
        result.forEach((semoreportsprice, i) => {
          content += ` 
                    <li class="splide__slide">
                            <div class="">
                                <div class="widget-title">Next Job Run</div>
                                <div class="widget-title">${semoreportsprice.Market}</div>
                                <div class="widget-int">${semoreportsprice.NextScheduledRun}</div>
                            </div> 
                    </li>
        	    `;
        });
        spliderRef.html(content);
        new Splide('#splide3', {
          type: 'loop',
          autoplay: true,
          arrows: true,
        }).mount();
        $.each(result, function (i, semoreportsprice) {
          const semoreportspriceRow = `<tr>
						<td> ${semoreportsprice.Market}</td>' +
						<td> ${semoreportsprice.LastReceived} </td>
						<td> ${semoreportsprice.InclusivePeriod}</td>
						<td> ${semoreportsprice.NextScheduledRun}</td>
						<td>
							<a  class="hide-button-background" 
							    tabindex="0"
                                data-placement="right"
                                role="button"
                                data-html="true"
                                data-toggle="popover"
                                data-trigger="focus"
								id='gd-price-btn-${i}' 
								data-toggle="popover" 
								title="Run History" 
								data-content="<b>From</b><br>${semoreportsprice.RunHistory}</br><br><b>Inclusive Periods</b></br>${semoreportsprice.InclusivePeriod}"><i class="fa fa-info-circle fa-2x"></i>

					
							</a>
								
                        </td>
						<td><a href=${semoreportsprice.Information}><i class="fa fa-globe fa-2x fa-spin"></i></a></td>'
						</tr>`;
          $('#semoreportspriceTable tbody').append(semoreportspriceRow);
          //Append newDiv to Popovercontent

          $('[data-toggle="popover"]').popover();
        });

        $.each(result, function (i, semoreportsprice) {
          const semoreportspriceRow =
            '<div>' +
            '<div class="widget-subtitle" style="background: orange; width: 80%; border-radius: 10px; color: white; padding: 2px;">' +
            '' +
            semoreportsprice.Market +
            ' received at ' +
            semoreportsprice.LastReceived +
            '' +
            '</div>';
          $('#successfullJobs').append(semoreportspriceRow);
        });
      },

      error: function (e) {
        alert('ERROR: ', e);
        console.log('ERROR: ', e);
      },
    });

    $.ajax({
      type: 'GET',
      url: '/api/webscrapperprices',

      success: function (result) {
        let spliderRef = $('#splide__list4');
        console.log(result);
        let content = '';
        let paginator = '';
        result.forEach((semoreportsprice, i) => {
          content += ` 
                    <li class="splide__slide">
                            <div class="">
                                <div class="widget-title">Next Job Run</div>
                                <div class="widget-title">${semoreportsprice.Market}</div>
                                <div class="widget-int">${semoreportsprice.NextScheduledRun}</div>
                            </div> 
                    </li>
        	    `;
        });
        spliderRef.html(content);
        new Splide('#splide4', {
          type: 'loop',
          autoplay: true,
          arrows: true,
        }).mount();
        $.each(result, function (i, webscrapperprice) {
          const webscrapperpriceRow = `<tr>
						<td> ${webscrapperprice.Market}</td>' +
						<td> ${webscrapperprice.LastReceived} </td>
						<td> ${webscrapperprice.InclusivePeriod}</td>
						<td> ${webscrapperprice.NextScheduledRun}</td>
						<td>
							<a  class="hide-button-background" 
							    tabindex="0"
                                data-placement="right"
                                role="button"
                                data-html="true"
                                data-toggle="popover"
                                data-trigger="focus"
								id='gd-price-btn-${i}' 
								data-toggle="popover" 
								title="Run History" 
								data-content="<b>From</b><br>${webscrapperprice.RunHistory}</br><br><b>Inclusive Periods</b></br>${webscrapperprice.InclusivePeriod}"><i class="fa fa-info-circle fa-2x"></i>

					
							</a>
								
                        </td>
						<td><a href=${webscrapperprice.Information}><i class="fa fa-globe fa-2x fa-spin"></i></a></td>'
						</tr>`;
          $('#webscrapperpricesTable tbody').append(webscrapperpriceRow);
          //Append newDiv to Popovercontent

          $('[data-toggle="popover"]').popover();
        });

        $.each(result, function (i, webscrapperprice) {
          const webscrapperpriceRow =
            '<div>' +
            '<div class="widget-subtitle" style="background: orange; width: 80%; border-radius: 10px; color: white; padding: 2px;">' +
            '' +
            webscrapperprice.Market +
            ' received at ' +
            webscrapperprice.LastReceived +
            '' +
            '</div>';
          $('#successfullJobs').append(webscrapperpriceRow);
        });
      },

      error: function (e) {
        alert('ERROR: ', e);
        console.log('ERROR: ', e);
      },
    });

    $.ajax({
      type: 'GET',
      url: '/api/ppbmeteredprices',

      success: function (result) {
        $.each(result, function (i, ppbmeteredprice) {
          const ppbmeteredpriceRow = `<tr>
						<td> ${ppbmeteredprice.Market}</td>' +
						<td> ${ppbmeteredprice.LastReceived} </td>
						<td> ${ppbmeteredprice.InclusivePeriod}</td>
						<td> ${ppbmeteredprice.NextScheduledRun}</td>
						<td>
							<a  class="hide-button-background" 
							    tabindex="0"
                                data-placement="right"
                                role="button"
                                data-html="true"
                                data-toggle="popover"
                                data-trigger="focus"
								id='gd-price-btn-${i}' 
								data-toggle="popover" 
								title="Run History" 
								data-content="<b>From</b><br>${ppbmeteredprice.RunHistory}</br><br><b>Inclusive Periods</b></br>${ppbmeteredprice.InclusivePeriod}"><i class="fa fa-info-circle fa-2x"></i>

					
							</a>
								
                        </td>
						<td><a href=${ppbmeteredprice.Information}><i class="fa fa-globe fa-2x fa-spin"></i></a></td>'
						</tr>`;
          $('#ppbpriceTable tbody').append(ppbmeteredpriceRow);
          //Append newDiv to Popovercontent

          $('[data-toggle="popover"]').popover();
        });

        $.each(result, function (i, ppbmeteredprice) {
          const ppbmeteredpriceRow =
            '<div>' +
            '<div class="widget-subtitle" style="background: orange; width: 80%; border-radius: 10px; color: white; padding: 2px;">' +
            '' +
            ppbmeteredprice.Market +
            ' received at ' +
            ppbmeteredprice.LastReceived +
            '' +
            '</div>';
          $('#successfullJobs').append(ppbmeteredpriceRow);
        });
      },

      error: function (e) {
        alert('ERROR: ', e);
        console.log('ERROR: ', e);
      },
    });

    $.ajax({
      type: 'GET',
      url: '/api/enappsysprices',

      success: function (result) {
        $.each(result, function (i, enappsysprice) {
          const enappsyspriceRow = `<tr>
						<td> ${enappsysprice.Market}</td>' +
						<td> ${enappsysprice.LastReceived} </td>
						<td> ${enappsysprice.InclusivePeriod}</td>
						<td> ${enappsysprice.NextScheduledRun}</td>
						<td>
							<a  class="hide-button-background" 
							    tabindex="0"
                                data-placement="right"
                                role="button"
                                data-html="true"
                                data-toggle="popover"
                                data-trigger="focus"
								id='gd-price-btn-${i}' 
								data-toggle="popover" 
								title="Run History" 
								data-content="<b>From</b><br>${enappsysprice.RunHistory}</br><br><b>Inclusive Periods</b></br>${enappsysprice.InclusivePeriod}"><i class="fa fa-info-circle fa-2x"></i>

					
							</a>
                        </td>
						<td><a href=${enappsysprice.Information}><i class="fa fa-globe fa-2x fa-spin"></i></a></td>'
						</tr>`;
          $('#enappsyspriceTable tbody').append(enappsyspriceRow);
          //Append newDiv to Popovercontent

          $('[data-toggle="popover"]').popover();
        });

        $.each(result, function (i, enappsysprice) {
          const enappsyspriceRow =
            '<div>' +
            '<div class="widget-subtitle" style="background: orange; width: 80%; border-radius: 10px; color: white; padding: 2px;">' +
            '' +
            enappsysprice.Market +
            ' received at ' +
            enappsysprice.LastReceived +
            '' +
            '</div>';
          $('#successfullJobs').append(enappsyspriceRow);
        });
      },

      error: function (e) {
        alert('ERROR: ', e);
        console.log('ERROR: ', e);
      },
    });

    $.ajax({
      type: 'GET',
      url: '/api/semopxprices',

      success: function (result) {
        let spliderRef = $('#splide__list6');
        console.log(result);
        let content = '';
        let paginator = '';
        result.forEach((semoreportsprice, i) => {
          content += ` 
                    <li class="splide__slide">
                            <div class="">
                                <div class="widget-title">Next Job Run</div>
                                <div class="widget-title">${semoreportsprice.Market}</div>
                                <div class="widget-int">${semoreportsprice.NextScheduledRun}</div>
                            </div> 
                    </li>
        	    `;
        });
        spliderRef.html(content);
        new Splide('#splide6', {
          type: 'loop',
          autoplay: true,
          arrows: true,
        }).mount();

        $.each(result, function (i, semopxprice) {
          const semopxpriceRow = `<tr>
						<td> ${semopxprice.Market}</td>' +
						<td> ${semopxprice.LastReceived} </td>
						<td> ${semopxprice.InclusivePeriod}</td>
						<td> ${semopxprice.NextScheduledRun}</td>
						<td>
							<a  class="hide-button-background" 
							    tabindex="0"
                                data-placement="right"
                                role="button"
                                data-html="true"
                                data-toggle="popover"
                                data-trigger="focus"
								id='gd-price-btn-${i}' 
								data-toggle="popover" 
								title="Run History" 
								data-content="<b>From</b><br>${semopxprice.RunHistory}</br><br><b>Inclusive Periods</b></br>${semopxprice.InclusivePeriod}"><i class="fa fa-info-circle fa-2x"></i>

					
							</a>
								
                        </td>
						<td><a href=${semopxprice.Information}><i class="fa fa-globe fa-2x fa-spin"></i></a></td>'
						</tr>`;
          $('#semopxpriceTable tbody').append(semopxpriceRow);
          //Append newDiv to Popovercontent

          $('[data-toggle="popover"]').popover();
        });

        $.each(result, function (i, semopxprice) {
          const semopxpriceRow =
            '<div>' +
            '<div class="widget-subtitle" style="background: orange; width: 80%; border-radius: 10px; color: white; padding: 2px;">' +
            '' +
            semopxprice.Market +
            ' received at ' +
            semopxprice.LastReceived +
            '' +
            '</div>';
          $('#successfullJobs').append(semopxpriceRow);
        });
      },

      error: function (e) {
        alert('ERROR: ', e);
        console.log('ERROR: ', e);
      },
    });

    $.ajax({
      type: 'GET',
      url: '/api/volprices',

      success: function (result) {
        let spliderRef = $('#splide__list5');
        console.log(result);
        let content = '';
        let paginator = '';
        result.forEach((semoreportsprice, i) => {
          content += ` 
                    <li class="splide__slide">
                            <div class="">
                                <div class="widget-title">Next Job Run</div>
                                <div class="widget-title">${semoreportsprice.Market}</div>
                                <div class="widget-int">${semoreportsprice.NextScheduledRun}</div>
                            </div> 
                    </li>
        	    `;
        });
        spliderRef.html(content);
        new Splide('#splide5', {
          type: 'loop',
          autoplay: true,
          arrows: true,
        }).mount();
      },

      error: function (e) {
        alert('ERROR: ', e);
        console.log('ERROR: ', e);
      },
    });
    $.ajax({
      type: 'GET',
      url: '/api/HCDataVis/Qlik',

      success: function (result) {
        $.each(result, function (i, datavis) {
          const datavisRow = `<tr>
                        <td>${datavis.WorkSpace}</td>
                        <td><a  href="${datavis.DashboardReport}" target="_blank">${datavis.DashboardReport}</a></td>
                        <td>${datavis.Description}</td>
                        <td>${datavis.Access}</td>
                        <td><a  class="btn btn-primary" href="files/${datavis.DataFlow}" target="_blank">View</a></td>						
                        <td> 
                        <form action="http://localhost:8088/api/HCDataVis/delete" method="POST">
                            <input type="hidden" name="id" class="form-control" value="${datavis.iD}">
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editqlik${datavis.iD}">Edit</button> |
                                <input type="submit" class="btn btn-danger" value="Delete">
                            </form>
                        </td>
						</tr>`;
          $('#qliktable tbody').append(datavisRow);
          //Append newDiv to Popovercontent

          $('[data-toggle="popover"]').popover();
        });

        $.each(result, function (i, datavis) {
          const editdatavisRow = `<div id="editqlik${datavis.iD}" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <form action="http://localhost:8088/api/HCDataVis/update" method="post">
                                <input type="hidden" name="id" class="form-control" value="${datavis.iD}" required>
                                <input type="hidden" name="ReportType" class="form-control" value="${datavis.ReportType}" required>

                                <div class="modal-header">						
                                    <h4 class="modal-title">Edit Data</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div class="modal-body">					
                                    <div class="form-group">
                                        <label>WorkSpace</label>
                                        <input type="text" name="WorkSpace" class="form-control" value="${datavis.WorkSpace}" required>
                                    </div>
                                    <div class="form-group">
                                        <label>Dashboard Report</label>
                                        <input type="text"  name="DashboardReport" class="form-control" value="${datavis.DashboardReport}"required>
                                    </div>
                                    <div class="form-group">
                                        <label>Description</label>
                                        <textarea class="form-control"  name="Description" required>${datavis.Description}</textarea>
                                    </div>
                                    <div class="form-group">
                                        <label>Access </label>
                                        <input type="text" class="form-control"  name="Access" value="${datavis.Access}"required>
                                    </div>	
                                    <div class="form-group">
                                        <label>Data Flow </label>
                                        <input type="text" class="form-control"  name="DataFlow" value="${datavis.DataFlow}"required>
                                    </div>		
                                </div>
                                <div class="modal-footer">
                                    <input type="submit" class="btn btn-info" value="Save">
                                </div>
                            </form>
                        </div>
                    </div>
                
                    </div>`;
          $('#modalqlik').append(editdatavisRow);
          //Append newDiv to Popovercontent

          $('[data-toggle="popover"]').popover();
        });
      },
      // <td><input class="btn btn-primary" type=button onClick="location.href='\\enr-hvh-mtl-02\inetpub\wwwroot\EnergiaDashboardB\files\PowerBIDataFlow.vsd'" value='View'></td>

      error: function (e) {
        alert('ERROR: ', e);
        console.log('ERROR: ', e);
      },
    });
    $.ajax({
      type: 'GET',
      url: '/api/HCDataVis/PowerBi',

      success: function (result) {
        $.each(result, function (i, datavis) {
          const datavisRow = `<tr>
                        <td>${datavis.WorkSpace}</td>
                        <td><a  href="${datavis.DashboardReport}" target="_blank">${datavis.DashboardReport}</a></td>
                        <td>${datavis.Description}</td>
                        <td>${datavis.Access}</td>
                        <td><a  class="btn btn-primary" href="files/${datavis.DataFlow}" target="_blank">View</a></td>						
                        <td> 
                        <form action="http://localhost:8088/api/HCDataVis/delete" method="POST">
                            <input type="hidden" name="id" class="form-control" value="${datavis.iD}">
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editpowerbi${datavis.iD}">Edit</button> |
                                <input type="submit" class="btn btn-danger" value="Delete">
                            </form>
                        </td>
						</tr>`;
          $('#powerbitable tbody').append(datavisRow);
          //Append newDiv to Popovercontent

          $('[data-toggle="popover"]').popover();
        });

        $.each(result, function (i, datavis) {
          const editdatavisRow = `<div id="editpowerbi${datavis.iD}" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <form action="http://localhost:8088/api/HCDataVis/update" method="post">
                                <input type="hidden" name="id" class="form-control" value="${datavis.iD}" required>
                                <input type="hidden" name="ReportType" class="form-control" value="${datavis.ReportType}" required>

                                <div class="modal-header">						
                                    <h4 class="modal-title">Edit Data</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div class="modal-body">					
                                    <div class="form-group">
                                        <label>WorkSpace</label>
                                        <input type="text" name="WorkSpace" class="form-control" value="${datavis.WorkSpace}" required>
                                    </div>
                                    <div class="form-group">
                                        <label>Dashboard Report</label>
                                        <input type="text"  name="DashboardReport" class="form-control" value="${datavis.DashboardReport}"required>
                                    </div>
                                    <div class="form-group">
                                        <label>Description</label>
                                        <textarea class="form-control"  name="Description" required>${datavis.Description}</textarea>
                                    </div>
                                    <div class="form-group">
                                        <label>Access </label>
                                        <input type="text" class="form-control"  name="Access" value="${datavis.Access}"required>
                                    </div>	
                                    <div class="form-group">
                                        <label>Data Flow </label>
                                        <input type="text" class="form-control"  name="DataFlow" value="${datavis.DataFlow}"required>
                                    </div>		
                                </div>
                                <div class="modal-footer">
                                    <input type="submit" class="btn btn-info" value="Save">
                                </div>
                            </form>
                        </div>
                    </div>
                
                    </div>`;
          $('#modalpowerbi').append(editdatavisRow);
          //Append newDiv to Popovercontent

          $('[data-toggle="popover"]').popover();
        });
      },
      // <td><input class="btn btn-primary" type=button onClick="location.href='\\enr-hvh-mtl-02\inetpub\wwwroot\EnergiaDashboardB\files\PowerBIDataFlow.vsd'" value='View'></td>

      error: function (e) {
        alert('ERROR: ', e);
        console.log('ERROR: ', e);
      },
    });
    $.ajax({
      type: 'GET',
      url: '/api/HCDataVis/SSRS',

      success: function (result) {
        $.each(result, function (i, datavis) {
          const datavisRow = `<tr>
                        <td>${datavis.WorkSpace}</td>
                        <td><a  href="${datavis.DashboardReport}" target="_blank">${datavis.DashboardReport}</a></td>
                        <td>${datavis.Description}</td>
                        <td>${datavis.Access}</td>
                        <td><a  class="btn btn-primary" href="files/${datavis.DataFlow}" target="_blank">View</a></td>						
                        <td> 
                        <form action="http://localhost:8088/api/HCDataVis/delete" method="POST">
                            <input type="hidden" name="id" class="form-control" value="${datavis.iD}">
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editssrs${datavis.iD}">Edit</button> |
                                <input type="submit" class="btn btn-danger" value="Delete">
                            </form>
                        </td>
						</tr>`;
          $('#ssrstablea tbody').append(datavisRow);
          //Append newDiv to Popovercontent

          $('[data-toggle="popover"]').popover();
        });

        $.each(result, function (i, datavis) {
          const editdatavisRow = `<div id="editssrs${datavis.iD}" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <form action="http://localhost:8088/api/HCDataVis/update" method="post">
                                <input type="hidden" name="id" class="form-control" value="${datavis.iD}" required>
                                <input type="hidden" name="ReportType" class="form-control" value="${datavis.ReportType}" required>

                                <div class="modal-header">						
                                    <h4 class="modal-title">Edit Data</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div class="modal-body">					
                                    <div class="form-group">
                                        <label>WorkSpace</label>
                                        <input type="text" name="WorkSpace" class="form-control" value="${datavis.WorkSpace}" required>
                                    </div>
                                    <div class="form-group">
                                        <label>Dashboard Report</label>
                                        <input type="text"  name="DashboardReport" class="form-control" value="${datavis.DashboardReport}"required>
                                    </div>
                                    <div class="form-group">
                                        <label>Description</label>
                                        <textarea class="form-control"  name="Description" required>${datavis.Description}</textarea>
                                    </div>
                                    <div class="form-group">
                                        <label>Access </label>
                                        <input type="text" class="form-control"  name="Access" value="${datavis.Access}"required>
                                    </div>	
                                    <div class="form-group">
                                        <label>Data Flow </label>
                                        <input type="text" class="form-control"  name="DataFlow" value="${datavis.DataFlow}"required>
                                    </div>		
                                </div>
                                <div class="modal-footer">
                                    <input type="submit" class="btn btn-info" value="Save">
                                </div>
                            </form>
                        </div>
                    </div>
                
                    </div>`;
          $('#modalssrs').append(editdatavisRow);
          //Append newDiv to Popovercontent

          $('[data-toggle="popover"]').popover();
        });
      },
      // <td><input class="btn btn-primary" type=button onClick="location.href='\\enr-hvh-mtl-02\inetpub\wwwroot\EnergiaDashboardB\files\PowerBIDataFlow.vsd'" value='View'></td>

      error: function (e) {
        alert('ERROR: ', e);
        console.log('ERROR: ', e);
      },
    });
    $.ajax({
      type: 'GET',
      url: '/api/HCDataVis/SSRS',

      success: function (result) {
        $.each(result, function (i, datavis) {
          const datavisRow = `<tr>
                        <td>${datavis.WorkSpace}</td>
                        <td><a  href="${datavis.DashboardReport}" target="_blank">${datavis.DashboardReport}</a></td>
                        <td>${datavis.Description}</td>
                        <td>${datavis.Access}</td>
                        <td><a  class="btn btn-primary" href="files/${datavis.DataFlow}" target="_blank">View</a></td>						
                        <td> 
                        <form action="http://localhost:8088/api/HCDataVis/delete" method="POST">
                            <input type="hidden" name="id" class="form-control" value="${datavis.iD}">
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editssrs${datavis.iD}">Edit</button> |
                                <input type="submit" class="btn btn-danger" value="Delete">
                            </form>
                        </td>
						</tr>`;
          $('#admin tbody').append(datavisRow);
          //Append newDiv to Popovercontent

          $('[data-toggle="popover"]').popover();
        });

        $.each(result, function (i, datavis) {
          const editdatavisRow = `<div id="editssrs${datavis.iD}" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <form action="http://localhost:8088/api/HCDataVis/update" method="post">
                                <input type="hidden" name="id" class="form-control" value="${datavis.iD}" required>
                                <input type="hidden" name="ReportType" class="form-control" value="${datavis.ReportType}" required>

                                <div class="modal-header">						
                                    <h4 class="modal-title">Edit Data</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div class="modal-body">					
                                    <div class="form-group">
                                        <label>WorkSpace</label>
                                        <input type="text" name="WorkSpace" class="form-control" value="${datavis.WorkSpace}" required>
                                    </div>
                                    <div class="form-group">
                                        <label>Dashboard Report</label>
                                        <input type="text"  name="DashboardReport" class="form-control" value="${datavis.DashboardReport}"required>
                                    </div>
                                    <div class="form-group">
                                        <label>Description</label>
                                        <textarea class="form-control"  name="Description" required>${datavis.Description}</textarea>
                                    </div>
                                    <div class="form-group">
                                        <label>Access </label>
                                        <input type="text" class="form-control"  name="Access" value="${datavis.Access}"required>
                                    </div>	
                                    <div class="form-group">
                                        <label>Data Flow </label>
                                        <input type="text" class="form-control"  name="DataFlow" value="${datavis.DataFlow}"required>
                                    </div>		
                                </div>
                                <div class="modal-footer">
                                    <input type="submit" class="btn btn-info" value="Save">
                                </div>
                            </form>
                        </div>
                    </div>
                
                    </div>`;
          $('#modalssrs').append(editdatavisRow);
          //Append newDiv to Popovercontent

          $('[data-toggle="popover"]').popover();
        });
      },
      // <td><input class="btn btn-primary" type=button onClick="location.href='\\enr-hvh-mtl-02\inetpub\wwwroot\EnergiaDashboardB\files\PowerBIDataFlow.vsd'" value='View'></td>

      error: function (e) {
        alert('ERROR: ', e);
        console.log('ERROR: ', e);
      },
    });
  }
});
