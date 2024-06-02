# chakra-sso-dashboard

I need a React-based website built using @chakra-ui/react and react-icons/fa that fulfills the following requirements:

1. Single Sign-On (SSO) Integration
SSO Provider: OneLogin
Company Details:
Company Name: Acme Corp
SSO Configuration Details:
Client ID: abc123
Client Secret: xyz789
Redirect URI: https://acme-corp.com/callback

2. Data Source
Data Source: OpenMetadata
API Endpoint: https://api.openmetadata.acme-corp.com
Authentication Details: API Key: 12345-abcde

3. Website Structure and Content

3.1. Home Page
Purpose: Provide a preview of a selection of dashboards with different classifications.
Dashboard Classifications: Sales, Marketing, Finance
Dashboard Data: Title, Description, Last Updated, Owner

3.2. Training Videos Tab
Purpose: Display a collection of training videos.
Video Data Source: my personal laptop
Video Fields: Title, Description, Duration

3.3. Glossary Tab
Purpose: Display a glossary of terms.
Glossary Data Source: OpenMetadata
Glossary Fields: Term, Definition, Category

3.4. Support Tab
Purpose: Provide personalized support links and text.
Support Content:
Links: Help Center, Contact Us
Text: For any issues, please reach out to our support team at support@acme-corp.com.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/chakra-sso-dashboard.git
cd chakra-sso-dashboard
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
