import {lineTypeList} from './data';

const linetypelist = lineTypeList;
var mydata = [];

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
    var childData = mydata[parentRowID] || [];
    var childGridID = parentRowID + "_table",
        childGridPagerID = parentRowID + "_pager";
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
        formatter: 'select',
        edittype: 'select',
        editoptions: {
            value: mediumTypes.reduce((prev,curr) => (`${prev};${curr.MEDIUM_TYPE_CODE}:${curr.MEDIUM_TYPE}`),'').slice(1),
            dataInit: function (elem) {
                var v = $(elem).val();
                var options = lineTypeList.filter(val => val.MEDIUM_TYPE_CODE === v).reduce((prev,curr) => (`${prev};${curr.LINE_TYPE_CODE}:${curr.LINE_TYPE}`),'').slice(1);
                // to have short list of options which corresponds to the country
                // from the row we have to change temporary the column property
                $('#' + childGridID).setColProp('bw', { editoptions: { value: options}});
            },
            dataEvents: [
                {
                    type: 'change',
                    fn: function(e) {
                        // To be able to save the results of the current selection
                        // the value of the column property must contain at least
                        // the current selected 'State'. So we have to reset
                        // the column property to the following
                        //grid.setColProp('State', { editoptions:{value: statesOfCountry[v]} });
                        //grid.setColProp('State', { editoptions: { value: states} });
                        resetStatesValues();

                        // build 'State' options based on the selected 'Country' value
                        var mediumCode =$(e.target).val();
                        var filteredLineTypes = lineTypeList.filter(val => (val.MEDIUM_TYPE_CODE === mediumCode));
                        var newOptions = filteredLineTypes.reduce((prev,curr) => (
                            `${prev}<option role="option" value="${curr.LINE_TYPE_CODE}" >
                                ${curr.LINE_TYPE}
                            </option>`
                        ),'');

                        // for (var stateId in sc) {
                        //     if (sc.hasOwnProperty(stateId)) {
                        //         newOptions += '<option role="option" value="' +
                        //                       stateId + '">' +
                        //                       states[stateId] + '</option>';
                        //     }
                        // }
                        // inline editing
                        var row = $(e.target).closest('tr.jqgrow');
                        var rowId = row.attr('id');
                        $("select#" + rowId + "_bw", row[0]).html(newOptions);
                    }
                }
            ]
        }
    },{
        name: 'bw',
        label: 'Bandwidth',
        sortable: false,
        classes: 'selectCentered',
        editable: true,
        formatter: 'select',
        edittype: 'select',
        editoptions: {
            value: linetypelist.reduce((prev,curr) => (`${prev};${curr.LINE_TYPE_CODE}:${curr.LINE_TYPE}`),'').slice(1)
        }
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

    $('#' + parentRowID).append('<table id=' + childGridID + '></table><div id=' + childGridPagerID + ' class=scroll></div>');

    var resetStatesValues = function () {
        $('#' + childGridID).setColProp('bw', { editoptions: { value: linetypelist.reduce((prev,curr) => (`${prev};${curr.LINE_TYPE_CODE}:${curr.LINE_TYPE}`),'')} });
    };

    var lastSel = -1;
    $('#' + childGridID).jqGrid({
        datatype: 'local',
        data: childData,
        colModel: columns,
        onSelectRow: function (id) {
            if (id && id !== lastSel) {
                if (lastSel != -1) {
                    resetStatesValues();
                    $('#' + childGridID).restoreRow(lastSel);
                }
                lastSel = id;
            }
        },
        ondblClickRow: function (id, ri, ci) {
            if (id && id !== lastSel) {
                $('#' + childGridID).restoreRow(lastSel);
                lastSel = id;
            }
            resetStatesValues();
            $('#' + childGridID).editRow(id, true, null, null, 'clientArray', null,function (rowid, response) {  // aftersavefunc
                var options = lineTypeList
                    .filter(val => val.MEDIUM_TYPE_CODE === id)
                    .reduce((prev,curr) => (
                        `${prev};${curr.LINE_TYPE_CODE}:${curr.LINE_TYPE}`)
                        ,''
                    )
                    .slice(1);
                $('#' + childGridID).setColProp('bw', { editoptions: { value: options} });
                //save data
                //mydata[parentRowID] = $('#' + childGridID).jqGrid('getGridParam','data');
                saveData(childGridID,parentRowID)
            });
            return;
        },
        afterInsertRow: function(){
           //save data
           //mydata[parentRowID] = $('#' + childGridID).jqGrid('getGridParam','data');
           saveData(childGridID,parentRowID);
        },
        editurl: 'clientArray',
        pgbuttons:false,
        pginput: false,
        // loadonce: true,
        styleUI: 'Bootstrap',
        pager: '#' + childGridPagerID
    });
    $('#' + childGridID).navGrid('#' + childGridPagerID,{ edit: false, add: false, del: false, search: false, refresh: false, view: false, position: "left", cloneToTop: true });
    $('#' + childGridID).navButtonAdd('#' + childGridPagerID,parametersAdd);
    $('#' + childGridID).navButtonAdd('#' + childGridPagerID,parametersDel);

}
function saveData(childGridID,parentRowID){
    mydata[parentRowID] = $('#' + childGridID).jqGrid('getGridParam','data');

}

initTables();


