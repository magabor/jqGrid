var countries = { '1': 'US', '2': 'UK' };
var states = { '1': 'Alabama', '2': 'California', '3': 'Florida', '4': 'Hawaii', '5': 'London', '6': 'Oxford' };
var statesOfCountry = {
    1: { '1': 'Alabama', '2': 'California', '3': 'Florida', '4': 'Hawaii' },
    2: { '5': 'London', '6': 'Oxford' }
};
var mydata = [
    { id: '0', Country: '1', State: '1', Name: "Louise Fletcher" },
    { id: '1', Country: '1', State: '3', Name: "Jim Morrison" },
    { id: '2', Country: '2', State: '5', Name: "Sherlock Holmes" },
    { id: '3', Country: '2', State: '6', Name: "Oscar Wilde" }
];

var lastSel = -1;
var grid = jQuery("#list");
var resetStatesValues = function () {
    grid.setColProp('State', { editoptions: { value: states} });
};
grid.jqGrid({
    data: mydata,
    datatype: 'local',
    colModel: [
        { name: 'Name', width: 200 },
        { name: 'Country', width: 100, editable: true, formatter: 'select',
            edittype: 'select', editoptions: {
                value: countries,
                dataInit: function (elem) {
                    var v = $(elem).val();
                    // to have short list of options which corresponds to the country
                    // from the row we have to change temporary the column property
                    grid.setColProp('State', { editoptions: { value: statesOfCountry[v]} });
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
                            var v = parseInt($(e.target).val(), 10);
                            var sc = statesOfCountry[v];
                            var newOptions = '';
                            for (var stateId in sc) {
                                if (sc.hasOwnProperty(stateId)) {
                                    newOptions += '<option role="option" value="' +
                                                  stateId + '">' +
                                                  states[stateId] + '</option>';
                                }
                            }

                            // populate the new
                            if ($(e.target).is('.FormElement')) {
                                // form editing
                                var form = $(e.target).closest('form.FormGrid');
                                $("select#State.FormElement", form[0]).html(newOptions);
                            } else {
                                // inline editing
                                var row = $(e.target).closest('tr.jqgrow');
                                var rowId = row.attr('id');
                                $("select#" + rowId + "_State", row[0]).html(newOptions);
                            }
                        }
                    }
                ]
            }
        },
        {
            name: 'State', width: 100, editable: true, formatter: 'select',
            edittype: 'select', editoptions: { value: states }
        }
    ],
    onSelectRow: function (id) {
        if (id && id !== lastSel) {
            if (lastSel != -1) {
                resetStatesValues();
                grid.restoreRow(lastSel);
            }
            lastSel = id;
        }
    },
    ondblClickRow: function (id, ri, ci) {
        if (id && id !== lastSel) {
            grid.restoreRow(lastSel);
            lastSel = id;
        }
        resetStatesValues();
        grid.editRow(id, true, null, null, 'clientArray', null,
                        function (rowid, response) {  // aftersavefunc
                            grid.setColProp('State', { editoptions: { value: states} });
                        });
        return;
    },
    editurl: 'clientArray',
    sortname: 'Name',
    height: '100%',
    viewrecords: true,
    rownumbers: true,
    sortorder: "desc",
    pager: '#pager',
    caption: "Demonstrate dependend select/dropdown lists (edit on double-click)"
}).jqGrid('navGrid','#pager', 
          { edit: true, add: true, del: false, search: false, refresh: false },
          { // edit options
              recreateForm:true,
              onClose:function() {
                  resetStatesValues();
              }
          },
          { // add options
              recreateForm:true,
              onClose:function() {
                  resetStatesValues();
              }
          });