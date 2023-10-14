function get_all_data()
{
    var data = {};
    $('.gpt-field').each(function() {
        var fld_name = $(this).attr('fld');
        var val = $(this).find('.the-output').val();
        data[fld_name] = val;
    });
    return data;
}

function load_all_data(data)
{
    $('.gpt-field').each(function() {
        var fld_name = $(this).attr('fld');
        var val = data[fld_name];
        $(this).find('.the-output').val(val);
    });
}


// download content
$(function() {
    $('#save-data-btn').on('click', function() {

        var data = get_all_data();

        // download the data
        var data = JSON.stringify(data, null, 4);
        console.log('data', data);
        var filename = 'content.json';
        var blob = new Blob([data], {type: 'text/json'});

        if(window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(blob, filename);
        } else { 
            var elem = window.document.createElement('a');
            elem.href = window.URL.createObjectURL(blob);
            elem.download = filename;        
            document.body.appendChild(elem);
            elem.click();        
            document.body.removeChild(elem);
        }
    });
});

// upload content
$(function() {
    $('#load-data-btn').on('click', function() {
        var file = $('#load-data-file').prop('files')[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            var data = JSON.parse(e.target.result);
            load_all_data(data);
            console.log('data', data);
        }
        reader.readAsText(file);
    });
});

