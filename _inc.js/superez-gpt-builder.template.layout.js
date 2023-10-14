
// BEGIN -> make AI rows
var prompts = {};
prompts['page-title'] = {
    'prompt': 'Just show the page title. Create a title in less than 5 to 7 words. Write a clear and easy to say title. Show me a short and catchy page title for the context:',
    'revise prompt': "Rewrite the content to improve the page title. The context is:\r\n{CONTEXT}\r\n\r\nThe content to revise is:\r\n{CONTENT}\r\n"
};
prompts['page-keywords'] = {
    'prompt': 'Just show the keywords. Separate keywords by commas. Show at least 5 keywords arranged by most relevant to least. For the context:',
    'revise prompt': "Rewrite the content to improve the keywords. The context is:\r\n{CONTEXT}\r\n\r\nThe content to revise is:\r\n{CONTENT}\r\n"
};
prompts['page-tags'] = {
    'prompt': 'Just show the generated tags. Separate tags by commas. Do not number. 5 tags arranged by most relevant to least. For the context:',
    'revise prompt': "Rewrite the content to improve the tags. The context is:\r\n{CONTEXT}\r\n\r\nThe content to revise is:\r\n{CONTENT}\r\n"
};
prompts['page-description'] = {
    'prompt': 'Just show the meta description text and nothing else. A page meta description for the context:',
    'revise prompt': "Rewrite the content to improve the meta description. The context is:\r\n{CONTEXT}\r\n\r\nThe content to revise is:\r\n{CONTENT}\r\n"
};
prompts['page-content'] = {
    'prompt': 'Just show the content. Show me a few paragraphs from a webpage based on this context:',
    'revise prompt': "Rewrite the content to improve the page content. The context is:\r\n{CONTEXT}\r\n\r\nThe content to revise is:\r\n{CONTENT}\r\n"
};

var fields = [
    {
        'full_name': 'page title',
        'fld_name': 'page-title',
        'prompt': prompts['page-title'],
        'max_tokens': 45,
        'temp': 0.6,
        'options': { 'use_textarea': true }
    },
    {
        'full_name': 'page keywords',
        'fld_name': 'page-keywords',
        'prompt': prompts['page-keywords'],
        'max_tokens': 45,
        'temp': 0.1,
        'options': { 'use_textarea': true }
    },
    {
        'full_name': 'page tags',
        'fld_name': 'page-tags',
        'prompt': prompts['page-tags'],
        'max_tokens': 45,
        'temp': 0.1,
        'options': { 'use_textarea': true }
    },
    {
        'full_name': 'page description',
        'fld_name': 'page-description',
        'prompt': prompts['page-description'],
        'max_tokens': 128,
        'temp': 0.1,
        'options': { 'use_textarea': true }
    },
    {
        'full_name': 'page content',
        'fld_name': 'page-content',
        'prompt': prompts['page-content'],
        'max_tokens': 2000,
        'temp': 0.7,
        'options': { 'use_textarea': true }
    }
];
// END -> make AI rows