"use strict";

var nodeTypeList = [],
    masterCardList = [],
    lineTypeList =  JSON.parse('[{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"2Mb-Sync","LINE_TYPE_CODE":"2MB_SYNC"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"2Mhz-Sync","LINE_TYPE_CODE":"2MHZ_SYNC"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - 10Mbps Ethernet","LINE_TYPE_CODE":"ETH"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - 16Mbps","LINE_TYPE_CODE":"E16"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - 2XTS","LINE_TYPE_CODE":"2XTS"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - 6XTS","LINE_TYPE_CODE":"6XTS"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - 8Mbps","LINE_TYPE_CODE":"E8"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - 8XTS","LINE_TYPE_CODE":"8XTS"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - E1","LINE_TYPE_CODE":"E1"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - E2","LINE_TYPE_CODE":"E2"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - E3","LINE_TYPE_CODE":"E3"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - E4","LINE_TYPE_CODE":"E4"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - FE - 100Mbps Ethernet","LINE_TYPE_CODE":"FE"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - GE - 1Gbps Ethernet","LINE_TYPE_CODE":"GE"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - STM1","LINE_TYPE_CODE":"STM1_UC"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - STM1ch","LINE_TYPE_CODE":"STM1"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - TS","LINE_TYPE_CODE":"DS0"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"FastEthernet-Sync","LINE_TYPE_CODE":"FE_SYNC"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Dynamic Capacity - Full Packet Configuration","LINE_TYPE_CODE":"DYNAMIC_FULL_PACKET"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Dynamic Capacity - Hybrid Configuration","LINE_TYPE_CODE":"DYNAMIC_HYBRID"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 100Mbps Ethernet","LINE_TYPE_CODE":"100MBPS-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 10XE1","LINE_TYPE_CODE":"10-2-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 15XE1","LINE_TYPE_CODE":"15-2-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 16XE1","LINE_TYPE_CODE":"16-E1-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 17XE1","LINE_TYPE_CODE":"17-E1-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 1XE1","LINE_TYPE_CODE":"1XE1-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 1xSTM1","LINE_TYPE_CODE":"STM1-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 200Mbps Ethernet","LINE_TYPE_CODE":"200MBPS-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 22XE1","LINE_TYPE_CODE":"22XE1-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 2XE1","LINE_TYPE_CODE":"2-E1-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 2xSTM1","LINE_TYPE_CODE":"2XSTM1-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 32XE1","LINE_TYPE_CODE":"32-2-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 35XE1","LINE_TYPE_CODE":"35-2-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 46XE1","LINE_TYPE_CODE":"46-E1-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 4XE1","LINE_TYPE_CODE":"4-E1-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 50Mbps Ethernet","LINE_TYPE_CODE":"50MBPS-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 75XE1","LINE_TYPE_CODE":"75-2-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 80XE1","LINE_TYPE_CODE":"80-2-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 8XE1","LINE_TYPE_CODE":"8-E1-MW"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"2.5GE - 2.5Gbps Ethernet","LINE_TYPE_CODE":"2.5XGE-OPT"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"FC-FICON-4G","LINE_TYPE_CODE":"FC-FICON-4G"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"OUT-1","LINE_TYPE_CODE":"OUT-1"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"OUT-2","LINE_TYPE_CODE":"OUT-2"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"OUT-3","LINE_TYPE_CODE":"OUT-3"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - 100GE - 100Gbps Ethernet","LINE_TYPE_CODE":"100XGE-OPT"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - 10GE - 10Gbps Ethernet","LINE_TYPE_CODE":"10XGE-OPT"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - 1xOTU1-ODU1","LINE_TYPE_CODE":"OTU1-ODU1"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - 1xOTU2-ODUflex","LINE_TYPE_CODE":"OTU2-ODU_FLEX"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - 40GE - 40Gbps Ethernet","LINE_TYPE_CODE":"40XGE-OPT"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - 40XLAMBDA WDM Line","LINE_TYPE_CODE":"40XLAMBDA"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - 50GE - 50Gbps Ethernet","LINE_TYPE_CODE":"50XGE-OPT"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - 80XLAMBDA WDM Line","LINE_TYPE_CODE":"80XLAMBDA"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - 8XLAMBDA WDM Line","LINE_TYPE_CODE":"8XLAMBDA"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - FC10G","LINE_TYPE_CODE":"FC10G"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - FC128G","LINE_TYPE_CODE":"FC128G"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - FC16G","LINE_TYPE_CODE":"FC16G"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - FC1G","LINE_TYPE_CODE":"FC1G"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - FC2G","LINE_TYPE_CODE":"FC2G"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - FC32G","LINE_TYPE_CODE":"FC32G"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - FC4G","LINE_TYPE_CODE":"FC4G"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - FC8G","LINE_TYPE_CODE":"FC8G"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - FE - 100Mbps Ethernet","LINE_TYPE_CODE":"FE-OPT"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - GE - 1Gbps Ethernet","LINE_TYPE_CODE":"GE-OPT"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - ODU0","LINE_TYPE_CODE":"ODU0"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - ODU1","LINE_TYPE_CODE":"ODU1"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - ODU2","LINE_TYPE_CODE":"ODU2"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - ODU2E","LINE_TYPE_CODE":"ODU2E"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - ODU3","LINE_TYPE_CODE":"ODU3"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - ODU3E2","LINE_TYPE_CODE":"ODU3E2"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - ODU4","LINE_TYPE_CODE":"ODU4"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - ODUflex","LINE_TYPE_CODE":"ODU_FLEX"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU1-1xODUflex","LINE_TYPE_CODE":"OTU1-ODU_FLEX"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU1-2xODU0","LINE_TYPE_CODE":"OTU1-ODU0"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU2-1xODU2","LINE_TYPE_CODE":"OTU2-ODU2"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU2-4xODU1","LINE_TYPE_CODE":"OTU2-ODU1"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU2-8xODU0","LINE_TYPE_CODE":"OTU2-ODU0"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU2E-1xODU2E","LINE_TYPE_CODE":"OTU2E-ODU2E"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU2E-1xODUflex","LINE_TYPE_CODE":"OTU2E-ODU_FLEX"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU3-16xODU1","LINE_TYPE_CODE":"OTU3-ODU1"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU3-1xODU3","LINE_TYPE_CODE":"OTU3-ODU3"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU3-1xODUflex","LINE_TYPE_CODE":"OTU3-ODU_FLEX"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU3-32xODU0","LINE_TYPE_CODE":"OTU3-ODU0"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU3-4xODU2","LINE_TYPE_CODE":"OTU3-ODU2"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU3E2-1xODU3E2","LINE_TYPE_CODE":"OTU3E2-ODU3E2"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU3E2-1xODUflex","LINE_TYPE_CODE":"OTU3E2-ODU_FLEX"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU3E2-4xODU2E","LINE_TYPE_CODE":"OTU3E2-ODU2E"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU4-10xODU2","LINE_TYPE_CODE":"OTU4-ODU2"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU4-2xODU3","LINE_TYPE_CODE":"OTU4-ODU3"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU4-40xODU1","LINE_TYPE_CODE":"OTU4-ODU1"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU4-80xODU0","LINE_TYPE_CODE":"OTU4-ODU0"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU4-ODU4","LINE_TYPE_CODE":"OTU4-ODU4"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU4-ODUflex","LINE_TYPE_CODE":"OTU4-ODU_FLEX"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - STM1","LINE_TYPE_CODE":"STM1_OPT_UC"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - STM1ch","LINE_TYPE_CODE":"STM1-OPT"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"STM16","LINE_TYPE_CODE":"STM16CH"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"STM256","LINE_TYPE_CODE":"STM256CH"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"STM4","LINE_TYPE_CODE":"STM4CH"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"STM64","LINE_TYPE_CODE":"STM64CH"}]'),
    vendorOptions;

function createNewCard(tableName, nameOfElement) {
    // Vendor
    var get1 = vendorOptions ? jQuery.done : jQuery.post("php/reports/newReferences/GetAllHardwareVendors.php", {
        userID: vR.userInfo.userID
    }, function(results) {
        var vendorArray = null;
        try {
            vendorArray = JSON.parse(results);
            vendorOptions = "<option disabled selected hidden value>Vendor</option>";
            for (var i = 0; i < vendorArray.length; i++) {
                vendorOptions += '<option value="' + vendorArray[i].VENDOR_CODE + '">' + vendorArray[i].DISPLAY_TEXT + '</option>';
            }
        } catch (error) {
            vR.handleError("GetAllHardwareVendors", error, results);
        }
    });

    var get2 = masterCardList.length ? jQuery.done : jQuery.post("php/reports/newReferences/GetAllMasterCard.php",{
        userID: vR.userInfo.userID
    }, function (data){
        masterCardList = parseData(data);
    });

    var get3 = nodeTypeList.length ? jQuery.done : jQuery.post("php/reports/newReferences/GetAllNodeType.php",{
        userID: vR.userInfo.userID
    }, function (data){
        nodeTypeList = parseData(data);
    });
    var get4 = lineTypeList.length ? jQuery.done : jQuery.post("php/reports/newReferences/GetAllLineType.php",{
        userID: vR.userInfo.userID
    }, function (data){
        lineTypeList = parseData(data);
    });

    $.when(get1,get2,get3,get4).fail(vR.handleAjaxFailure);
    $.when(get1,get2,get3,get4).done(function() {
        dpUI.loading.stop();
        $('.btn-success').prop("disabled", false);
        var submitDlg = bootbox.dialog({
            message: newCardForm(vendorOptions),
            // '<div class="cardRefWizard">' +
            //     '<div id="createNewElement" class="card-form">' +
            //         //Vendor
            //         '<div class="form-group"><div class="input-group"><span class="input-group-addon" data-toggle="tooltip" data-placement="bottom" title="Vendor"><i class="far fa-handshake fa-fw"></i></span>' +
            //             '<select required id="catalogVendor" class="form-control dropDown">' + vendorOptions + '</select></div>' +
            //         '</div>' +
            //         //Card Type Name (No spaces, no characters)
            //         '<div class="form-group"><div class="input-group"><span class="input-group-addon" data-toggle="tooltip" data-placement="bottom" title="Card Type Name"><i class="fa fa-tag fa-fw"></i></span>' +
            //             '<input id="cardTypeName" type="text" class="form-control" placeholder="Card Type Name" /></div>' +
            //         '</div>' +
            //         //Num. Slots
            //         '<div class="form-group"><div class="input-group"><span class="input-group-addon" data-toggle="tooltip" data-placement="bottom" title="Num. Slots"><i class="fa fa-list-ol fa-fw"></i></span>' +
            //             '<select required id="numSlots" type="text" class="form-control dropDown">' + numSlotsOptions + '</select></div>' +
            //         '</div>' +
            //         //Description
            //         '<div class="form-group"><div class="input-group"><span class="input-group-addon" data-toggle="tooltip" data-placement="bottom" title="Description"><i class="fa fa-bars fa-fw"></i></span>' +
            //             '<textarea id="description" type="text" class="form-control rounded-0" placeholder="Description" rows="2" style="min-height: 34px; resize: vertical;"> </textarea></div>' +
            //         '</div>' +
            //         //Master/Slave
            //         '<div class="form-group"><div class="input-group"><span class="input-group-addon" data-toggle="tooltip" data-placement="bottom" title="Master/Slave"><i class="fas fa-exchange-alt fa-fw"></i></span>' +
            //             '<select required id="masterSlave" class="form-control dropDown">' + masterSlaveOptions + '</select></div>' +
            //         '</div>' +
            //         //Master Card (only if slave)
            //         '<div class="form-group"><div class="input-group"><span class="input-group-addon" data-toggle="tooltip" data-placement="bottom" title="Master/Slave"><i class="fas fa-exchange-alt fa-fw"></i></span>' +
            //             '<select required id="masterCard" class="form-control dropDown" multiple="multiple">' + masterCardOptions + '</select></div>' +
            //         '</div>' +
            //         //Card Flags
            //         '<div class="form-group"><div class="input-group"><span class="input-group-addon" data-toggle="tooltip" data-placement="bottom" title="Card Flags"><i class="fa fa-flag fa-fw"></i></span>' +
            //             '<select required id="cardFlags" class="form-control dropDown">' + cardFlagsOptions + '</select></div>' +
            //         '</div>' +
            //     '</div>' +
            //     '<div class="card-selection"></div>' +
            //     '<div class="card-selection"></div>' +
            //     '<div class="card-bottom"></div>' +
            // '</div>',
            title: 'Create new ' + nameOfElement + ' reference',
            className: 'bootbox-dialog',
            //size: 'large',
            buttons: {
                confirm: {
                    label: 'Create',
                    className: 'btn-success',
                    callback: function () {
                        var catalogID = $('#catalogID').val(),
                            catalogDescription = $('#catalogDescription').val(),
                            catalogType = $('#catalogType').val(),
                            catalogLayer = $('#catalogLayer').val(),
                            catalogVendor = $('#catalogVendor').val()
                            ;
                        
                        if (catalogID == "" || catalogDescription == "" || catalogType == "" || catalogLayer == "" || catalogVendor == null) {
                            var submitDlg = bootbox.dialog({
                                message: "All fields are mandatory.",
                                title: "Mandatory fieds",
                                className: 'bootbox-dialog',
                                size: 'small',
                                buttons: { error: { label: "OK", className: "btn-danger", callback: function () { } } }
                            });
                            submitDlg.init(function () {
                                showBackdrop(submitDlg);
                            });
                            return false;
                        }
                        
                        //Escape quote characters.
                        catalogID = vR.escapeQuotes(catalogID);
                        catalogDescription = vR.escapeQuotes(catalogDescription);
                        catalogType = vR.escapeQuotes(catalogType);
                        catalogLayer = vR.escapeQuotes(catalogLayer);
    
                        // Check that the catalogID is not in use for that vendor (this is also checked in the DB).
                        var idInUse = false;
                        for (var i = 0; i < vR.reports.data[nameOfElement].length; i++) {
                            if (vR.reports.data[nameOfElement][i].Vendor === catalogVendor) {
                                if (vR.reports.data[nameOfElement][i].ID === catalogID) {
                                    idInUse = true;
                                    break;
                                }
                            }
                        }
    
                        if (idInUse) {
                            var submitDlg = bootbox.dialog({
                                message: "ID <strong>" + catalogID + "</strong> is already in use for vendor " + catalogVendor + ".",
                                title: "ID Error",
                                className: 'bootbox-dialog',
                                size: 'small',
                                buttons: { error: { label: "OK", className: "btn-danger", callback: function () { } } }
                            });
                            submitDlg.init(function () {
                                showBackdrop(submitDlg);
                            });
                            return false;
                        } else {
                            dpUI.loading.start("Loading ...");
                            $('.btn-success').prop("disabled", true);
                            jQuery.post("php/reports/newReferences/AddCatalog.php", {
                                userID: vR.userInfo.userID,
                                catalogID: catalogID,
                                catalogDescription: catalogDescription,
                                catalogType: catalogType,
                                catalogLayer: catalogLayer,
                                catalogVendor: catalogVendor
                            }, function (results) {
                                var parsedResults = null;
                                dpUI.loading.stop();
                                $('.btn-success').prop("disabled", false);
                                try {
                                    parsedResults = JSON.parse(results);
                                    if (parsedResults.resultCode == 0) {
                                        // ELEMENT CREATED.
                                        var newElementCreatedMessage = nameOfElement + " <strong>" + catalogID + "</strong> of vendor " + catalogVendor + " has been successfully created.";
                                        var submitDlg = bootbox.dialog({
                                            message: newElementCreatedMessage,
                                            title: nameOfElement + " created",
                                            className: 'bootbox-dialog',
                                            size: 'small',
                                            buttons: { error: { label: "OK", className: "btn-success", callback: function () { } } }
                                        });
                                        // Update table.
                                        vR.reports.generateHardwareReport(tableName);
                                    } else {
                                        // Element couldn't be created.
                                        var submitDlg = bootbox.dialog({
                                            message:  nameOfElement + " cannot be created. Please, try again or contact an administrator.",
                                            title: nameOfElement + " Creation Error",
                                            className: 'bootbox-dialog',
                                            size: 'small',
                                            buttons: { error: { label: "OK", className: "btn-danger", callback: function () { } } }
                                        });
                                    }
                                    submitDlg.init(function () {
                                        showBackdrop(submitDlg);
                                    });
                                    $("#createCatalog-submitDlg").modal('hide');
                                    return false;
                                } catch (error) {
                                    vR.handleError("AddNewCatalog", error, results);
                                    dpUI.loading.stop();
                                    $('.btn-success').prop("disabled", false);
                                }
                            }).fail(vR.handleAjaxFailure);

                            //prevent dialog from closing
                            return false;
                        }
                    }
                },
                cancel: {
                    label: 'Cancel',
                    className: 'btn-danger'
                }
            }
        });
        submitDlg.on("shown.bs.modal", function () {
            submitDlg.attr("id", "createCatalog-submitDlg");
            // $('#masterCard').multiselect();

            onMasterSlaveCheckboxesClick();
            onVendorChange();

            showNodeTypeList(filteredNodeTypeList());
            showMasterCardList(masterCardList);

            initTables();

            // Draggable Bootstrap Modal.
            $("#editPhysConn-submitDlg").draggable({
                handle: ".modal-header"
            });
        });
    });
}

function parseData(data){
    var parsedResults = [];
    try {
        parsedResults = JSON.parse(data);
    } catch (error) {
        
    }
    return parsedResults;
}
function initTables(){
    var lastSel;
    // var parametersAdd = {
    //     caption:'',
    //     buttonicon:"glyphicon-plus",
    //     onClickButton: addRow,
    //     position: "last",
    //     title:"New Port",
    //     // id : "",
    //     // cursor: "pointer"
    // },
    // parametersDel = {
    //     caption:'',
    //     buttonicon:"glyphicon-minus",
    //     onClickButton: delRow,
    //     position: "last",
    //     title:"Delete Port",
    //     // id : "",
    //     // cursor: "pointer"
    // },
    var columns = [{
        name: 'portNo',
        label: 'Port #',
        sortable: false,
        classes: 'selectCentered',
    },{
        name: 'portID',
        label: 'Port ID',
        sortable: false,
        editable: true,
        edittype: 'text',
        classes: 'selectCentered',
    },{
        name: 'equiped',
        label: 'Equipped',
        formatter:'checkbox',
        formatoptions : {
            disabled : false
        },
        sortable: false,
        classes: 'selectCentered',

    }];
    $('#portDefTab_table').jqGrid({
        datatype: 'local',
        colModel: columns,
        onSelectRow: function(id){
            if(id && id!==lastSel){
                jQuery('#portDefTab_table').jqGrid('restoreRow',lastSel);
                lastSel=id;
            }
            jQuery('#portDefTab_table').jqGrid('editRow', id, {keys:  true, url: 'clientArray'} );
            },
        height: '300px',
        styleUI: 'Bootstrap',
        //page: 1,
        pgbuttons:false,
        pginput: false,
        // loadonce: true,
        subGrid: true,
        subGridRowExpanded: showChildBWTable,
        subGridOptions : {
            plusicon: "glyphicon-plus",
            minusicon: "glyphicon-minus",
            openicon: "glyphicon-chevron-right"
        },
        pager: '#portDefTab_pager'
    });
    $('#portDefTab_table')
    .navGrid('#portDefTab_pager',{
        edit: false,
        add: true,
        addtitle: 'New Port',
        addfunc: addRow,
        del: true,
        deltitle: 'Delete Port',
        delfunc: delRow,
        search: false,
        refresh: false,
        view: false,
        position: "left",
        cloneToTop: true });
    // $("#portDefTab_table").jqGrid('navGrid',"#portDefTab_pager").jqGrid('navButtonAdd',"#portDefTab_pager",parametersAdd);
    // $("#portDefTab_table").jqGrid('navGrid',"#portDefTab_pager").jqGrid('navButtonAdd',"#portDefTab_pager",parametersDel);
    // $('#portDefTab_table').navButtonAdd('#portDefTab_pager',parametersAdd);
    // $('#portDefTab_table').navButtonAdd('#portDefTab_pager',parametersDel);


}
function addRow() {
    var rowids = $('#portDefTab_table').jqGrid('getDataIDs');
    var newrowid = rowids.length ? parseInt(rowids.slice(-1)) + 1 : 1;
    var data = {
        portNo: newrowid,
        portID: newrowid,
        equiped: 'true'
    };
    $('#portDefTab_table').jqGrid('addRowData', newrowid, data);
}
function delRow() {
    var rowids = $('#portDefTab_table').jqGrid('getDataIDs');
    var lastrowid = rowids.length ? rowids.slice(-1) : 0;
    $('#portDefTab_table').jqGrid('delRowData',lastrowid);
}
function addSubGridRow(){
    var rowids = $('#' + this.id).jqGrid('getDataIDs');
    var newrowid = rowids.length ? parseInt(rowids.slice(-1)) + 1 : 1;
    var data = {
        physmedia: lineTypeList[0].MEDIUM_TYPE_CODE,
        bw: lineTypeList[0].LINE_TYPE_CODE,
        allowed: 'true'
    };
    $('#' + this.id).jqGrid('addRowData', newrowid, data);
}
function delSubGridRow(){
    var rowids = $('#' + this.id).jqGrid('getDataIDs');
    var lastrowid = rowids.length ? rowids.slice(-1) : 0;
    $('#' + this.id).jqGrid('delRowData',lastrowid);
}
function showChildBWTable(parentRowID, parentRowKe){
    var childGridID = parentRowID + "_table",
        childGridPagerID = parentRowID + "_pager";

    $('#' + parentRowID).append('<table id=' + childGridID + '></table><div id=' + childGridPagerID + ' class=scroll></div>');
    var mediumTypes = lineTypeList.map(
        value => ({
            MEDIUM_TYPE: value.MEDIUM_TYPE,
            MEDIUM_TYPE_CODE: value.MEDIUM_TYPE_CODE
        })
    ).filter((value,index,array) => (index == 0 ? value : value.MEDIUM_TYPE != array[--index].MEDIUM_TYPE));
    var parametersAdd = {
        caption:'',
        buttonicon:"glyphicon-plus",
        onClickButton: addSubGridRow,
        position: "last",
        title:"New Port",
        // id : "",
        // cursor: "pointer"
    },
    parametersDel = {
        caption:'',
        buttonicon:"glyphicon-minus",
        onClickButton: delSubGridRow,
        position: "last",
        title:"Delete Port",
        // id : "",
        // cursor: "pointer"
    },
    columns = [{
        name: 'physmedia',
        label: 'Physical Media',
        sortable: false,
        classes: 'selectCentered',
        editable: true,
        edittype: 'select',
        editoptions: {
            value: mediumTypes.reduce((prev,curr) => (`${prev};${curr.MEDIUM_TYPE_CODE}:${curr.MEDIUM_TYPE}`),'').slice(1)
        }
        // 'cellEdit' : true,
        // 'cellsubmit' : 'clientArray'
        // formatter: function (cellvalue, options, rowObject){
            
        //     var select = [
        //         '<select id="dfafafa" class="form-control input-sm dropDown" onChange="console.log(\'Changed\');">',
        //         mediumTypes.map(value => (`<option value="${value.MEDIUM_TYPE_CODE}">${value.MEDIUM_TYPE}</option>`)).join(''),
        //         '</select>'
        //     ].join('');
        //     $('#dfafafa').on('change', () => {console.log('Changed!!!')});
        //     return select;

        //     // return [
        //     //     '<select class="form-control input-sm dropDown">',
        //     //     mediumTypes.map(value => (`<option value="${value.MEDIUM_TYPE_CODE}">${value.MEDIUM_TYPE}</option>`)).join(''),
        //     //     '</select>'
        //     // ].join('');
        // }
    },{
        name: 'bw',
        label: 'Bandwidth',
        sortable: false,
        classes: 'selectCentered',
        editable: true,
        edittype: 'select',
        editoptions: {
            value: lineTypeList.reduce((prev,curr) => (`${prev};${curr.LINE_TYPE_CODE}:${curr.LINE_TYPE}`),'').slice(1)
        }

        // formatter: function (cellvalue, options, rowObject){
        //      var lineTypes = lineTypeList.filter(value => (value.MEDIUM_TYPE_CODE === rowObject.physmedia))
        //     return [
        //         '<select class="form-control input-sm dropDown">',
        //         lineTypes.map(value => (`<option value="${value.LINE_TYPE_CODE}">${value.LINE_TYPE}</option>`)).join(''),
        //         '</select>'
        //     ].join('');
        // }
    },{
        name: 'allowed',
        label: 'Allowed',
        formatter:'checkbox',
        classes: 'selectCentered',
        formatoptions : {
            disabled : false
        },
        sortable: false
    }];
    $('#' + childGridID).jqGrid({
        datatype: 'local',
        colModel: columns,
        cellEdit: true,
        cellsubmit: 'clientArray',
        // onSelectRow: function(id){
        //     if(id && id!==lastSel){
        //        jQuery('#portDefTab_table').jqGrid('restoreRow',lastSel);
        //        lastSel=id;
        //     }
        //     jQuery('#portDefTab_table').jqGrid('editRow', id, {keys:  true, url: 'clientArray'} );
        //   },
        // onCellSelect: function (rowid,iCol,cellcontent,objectEvent){
        //     console.log(rowid + ': ou yea');
        // },
        pgbuttons:false,
        pginput: false,
        loadonce: true,
        styleUI: 'Bootstrap',
        pager: '#' + childGridPagerID
    });
    $('#' + childGridID).navGrid('#' + childGridPagerID,{ edit: false, add: false, del: false, search: false, refresh: false, view: false, position: "left", cloneToTop: true });
    $('#' + childGridID).navButtonAdd('#' + childGridPagerID,parametersAdd);
    $('#' + childGridID).navButtonAdd('#' + childGridPagerID,parametersDel);

}

initTables();


