# n8n AI Text Checker

## Overview
The n8n AI Text Checker project is designed to validate text entries in a Google Sheet by checking for spelling errors and verifying that the text starts with a capital letter. This project utilizes n8n workflows and AI agents to automate the validation process, making it easy to maintain and extend with additional checks in the future.

## Project Structure
```
n8n-ai-text-checker
├── workflows
│   └── text_validation_workflow.json
├── ai_agents
│   ├── spell_check_agent
│   │   ├── agent.ts
│   │   └── config.ts
│   └── capitalization_agent
│       ├── agent.ts
│       └── config.ts
├── src
│   ├── utils
│   │   └── helpers.ts
│   └── types
│       └── index.ts
├── credentials
│   └── google_sheets_credentials.json
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd n8n-ai-text-checker
   ```

2. **Install Dependencies**
   Ensure you have Node.js and npm installed. Then run:
   ```bash
   npm install
   ```

3. **Configure Google Sheets Credentials**
   Update the `credentials/google_sheets_credentials.json` file with your Google Sheets API credentials.

4. **Configure AI Agents**
   Modify the configuration files in `ai_agents/spell_check_agent/config.ts` and `ai_agents/capitalization_agent/config.ts` to include any necessary API keys or settings.

## Usage
- The main workflow for text validation is defined in `workflows/text_validation_workflow.json`. You can import this workflow into your n8n instance to start using it.
- The `SpellCheckAgent` and `CapitalizationAgent` can be extended to include additional checks as needed. Simply add new methods to the respective agent classes.

## Extending the Project
To add more checks in the future:
1. Create a new agent in the `ai_agents` directory.
2. Implement the necessary logic in the `agent.ts` file.
3. Update the workflow to include the new agent.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.