
// set our projects models for the AI ROW template to reference for models <select>
function model_dropdown_html(selected = 'gpt-3.5-turbo-16k') {
    var models = ['gpt-3.5-turbo-16k', 'gpt-3.5-turbo-instruct', 'gpt-4', 'gpt-4-32k'];

    var html = "<select class='model-dropdown'>";
    $.each(models, function(index, model) {
        var selected_html = '';
        if (model == selected)
            selected_html = 'selected';
        html += "<option value='" + model + "' " + selected_html + ">" + model + "</option>";
    });
    html += "</select>";
    return html;
}

// AI ROW TEMPLATE
function make_field(full_name, fld_name, prompts, max_tokens = 45, temp = 0.7, options = []) {
    var html = "";
    html += "<div class='gpt-field' fld='" + fld_name + "'>";

    html += "<div class='d-label'><div class='label'>" + full_name + ":</div></div>";

    html += "<div class='d-prompt'>";
    html += "<div class='label'>prompt:</div>";
    html += "<textarea class='the-prompt' rows='5' cols='50'>" + prompts["prompt"] + "</textarea>";
    html += "<div class='label'>revise prompt:</div>";
    html += "<textarea class='the-revise-prompt' rows='5' cols='50'>" + prompts["revise prompt"] + "</textarea>";
    html += "</div><!-- d-prompt -->";

    html += "<div class='d-output'><div class='label'>output:</div>";

    // if option['use_textarea'] use a textarea
    if (options['use_textarea'] && options['use_textarea'] == true)
        html += "<textarea class='the-output' placeholder='" + fld_name + "' rows='5' cols='50'></textarea>";
    else
        html += "<input type='text' class='the-output' placeholder='" + fld_name + "' />";

    html += "</div><!-- d-output -->";

    html += "<div class='d-config'><div class='label'>configuration:</div>";

    html += model_dropdown_html();

    // add label
    html += "<label for='max-tokens'>max tokens:</label>";
    html += "<input type='text' size=4 value='" + max_tokens + "' class='max-tokens' />";
    html += "<label for='temp'>temp:</label>";
    html += "<input class='temp' type='range' min='0.0' max='1.0' step='0.1' value='" + temp + "'>";

    // buttons
    html += "<button class='btn get-btn' fld='" + fld_name + "'>get " + full_name + "</button>";
    html += "<button class='btn revise-btn' fld='" + fld_name + "'>revise " + full_name + "</button>";

    html += "</div><!-- d-config -->";

    html += "</div><!-- gpt-field -->";
    return html;
}

function draw_fields(fields, container)
{
    $(container).html('');
    $.each(fields, function(index, field) {
        var html = make_field(field['full_name'], field['fld_name'], field['prompt'], field['max_tokens'], field['temp'], field['options']);
        $(container).append(html);
    });
}