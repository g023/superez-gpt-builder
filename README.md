# SuperEZ-GPT Builder

SuperEZ-GPT Builder is a powerful and user-friendly jQuery AI Content Building Assistant that simplifies the process of generating content for webpages, social media, and other platforms. By leveraging the capabilities of HTML, jQuery, and the OpenAI GPT API, this tool allows you to effortlessly create high-quality content with minimal effort.

## Features

- **Easy Content Generation**: With SuperEZ-GPT Builder, you can generate content using various AI settings, such as temperature, maximum tokens, prompts, revising prompts.

- **Customizable Prompts**: Tailor your prompts to automatically generate titles, page descriptions, keywords, tags, and more. This feature saves you time and effort by automating the content creation process.

- **Local Execution**: SuperEZ-GPT Builder can be run locally on your machine, eliminating the need for an internet server. This makes it easy to access this application from a variety of devices.

- **Prompt Management**: Save and load your prompts to files or cookies, allowing you to easily reuse and modify them for future content generation tasks. This feature enhances productivity and streamlines your workflow.

- **Content Preservation**: Save and load your content generations to files, enabling you to store and access your generated content whenever needed. This functionality ensures that your content is easily stored and readily available.

- **Flexible API Key Management**: The OpenAI API key is stored in a local variable and can be set via the footer on page load. This allows you to easily manage and update your API key without modifying the code.

- **Customizable Generation Settings**: Adjust the max tokens, temperature, and model used for each prompt to fine-tune the content generation process according to your specific requirements. This level of customization ensures that you get the desired output.

- **Asynchronous Prompt Sending**: Prompts are sent asynchronously, ensuring smooth and efficient content generation. A cooldown of 5 seconds is implemented between sends from a single button, in an attempt to prevent potential API rate limit issues.

- **Contextual Generation**: The context given in the floating header bar is appended to a prompt for generation. This feature allows you to provide additional context to the AI model, resulting in more accurate and contextually relevant content.

- **Tag-Based Access**: The context (`.the-context`) and the generated content (`.the-output`) can be accessed in the revision prompt using the tags `{CONTEXT}` and `{CONTENT}` respectively. This enables you to easily reference and manipulate the generated content as needed.

- **Extensibility**: SuperEZ-GPT Builder provides the flexibility to add or remove fields in the `superez-gpt-builder.template.layout.js` file. This allows you to customize the tool to suit your specific requirements and preferences.

## Usage

1. Run superez-gpt-builder.html in your browser. (Uses a jQuery CDN)
2. Set your OpenAI API key in the footer of your HTML file.
3. Customize the prompts, max tokens, temperature, and model as needed.
4. Run the program locally and start generating content effortlessly.

## License

SuperEZ-GPT Builder is licensed under the BSD 3-Clause License.

## Version

1.0
