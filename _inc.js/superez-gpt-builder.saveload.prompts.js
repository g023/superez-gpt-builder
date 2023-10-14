    // fetch all prompts and revised prompts
    // the-prompt, the-revise-prompt 
    function get_all_prompts()
    {
        var prompts = {};
        $('.gpt-field').each(function() {
            var fld_name = $(this).attr('fld');
            var prompt = $(this).find('.the-prompt').val();
            var revise_prompt = $(this).find('.the-revise-prompt').val();
            prompts[fld_name] = {
                'prompt': prompt,
                'revise prompt': revise_prompt
            };
        });

        console.log('prompts', prompts);
        return prompts;
    }

    function load_all_prompts(prompts)
    {
        $('.gpt-field').each(function() {
            var fld_name = $(this).attr('fld');
            var prompt = prompts[fld_name]['prompt'];
            var revise_prompt = prompts[fld_name]['revise prompt'];
            $(this).find('.the-prompt').val(prompt);
            $(this).find('.the-revise-prompt').val(revise_prompt);
        });
    }
    
    // save prompts to file
    $(function() {
        $('#download-prompts-result').on('click', function() {

            var data = get_all_prompts();

            // download the data
            var data = JSON.stringify(data, null, 4);
            console.log('data', data);
            var filename = 'prompts.json';
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

    // load prompts from file
    $(function() {
        $('#load-prompts-btn').on('click', function() {
            var file = $('#load-prompts-file').prop('files')[0];
            var reader = new FileReader();
            reader.onload = function(e) {
                var data = JSON.parse(e.target.result);
                load_all_prompts(data);
                console.log('data', data);
            }
            reader.readAsText(file);
        });
    });

    // save prompts to cookie
    $(function() {
        $('.btn-save-to-cookie').on('click', function() {
            var data = get_all_prompts();
            create_cookie('prompts', JSON.stringify(data), null);
        });
    });

    // load prompts from cookie
    $(function() {
        $('.btn-load-from-cookie').on('click', function() {
            var data = get_cookie('prompts');
            data = JSON.parse(data);
            load_all_prompts(data);
        });
    });

    
