## Simple Calculator Application
### Overview
The project aims to create a straightforward calculator application with basic arithmetic functions. This involves building a browser-based interface using React.js and Next.js for the frontend, while utilizing a Node.js server with Nest.js for the backend. The application allows users to perform calculations adhering to the order of operations (PEMDAS) and offers authentication features for registration and login.

### Backend - available on https://vialcalculator.fly.dev
- [Nest.js](https://nestjs.com/) - A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- [Prisma](https://www.prisma.io/) - A modern database toolkit for TypeScript and Node.js.
- [Passport](http://www.passportjs.org/) - A popular authentication middleware for Node.js.
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) - A library to help you hash passwords.
- [SQLite](https://www.sqlite.org/) - A self-contained, serverless, and zero-configuration SQL database engine.

### Frontend - available on https://vial-calculator.vercel.app
- [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Next.js](https://nextjs.org/) - A framework for server-rendered React applications.
- [Emotion](https://emotion.sh/docs/introduction) - A library for writing CSS styles with JavaScript.
- [Material-UI](https://mui.com/) - A popular React UI framework.
- [Radix UI](https://radix-ui.com/react) - A collection of high-quality accessibility primitives for building custom UI components.
- [axios](https://axios-http.com/) - A promise-based HTTP client for the browser and Node.js.
- [js-cookie](https://github.com/js-cookie/js-cookie) - A simple, lightweight JavaScript API for handling browser cookies.
- [mathjs](https://mathjs.org/) - A comprehensive mathematics library for JavaScript.
- [styled-components](https://styled-components.com/) - A library for styling React components.

### Deployment
- Backend - [Fly.io](https://fly.io/) - A platform for deploying and operating applications globally.
- Frontend - [Vercel](https://vercel.com/) - A platform for deploying web applications with ease.

## UI Design - available [here](https://www.figma.com/file/xCvik2CMzJMsWh29Qh94FT/Vial-Calculator?type=design&node-id=0%3A1&mode=design&t=1eRU6OiSGramDsxg-1)
- [Figma](https://www.figma.com/) - A collaborative design tool for creating UI and UX designs.

### Next Steps

Although the initial version of the application is functional, there are a few areas that weren't fully addressed due to time constraints:

- **Improved Test Coverage**: Currently, the tests primarily focus on snapshots. Expanding the test suite to cover more scenarios, including edge cases and user interactions, would enhance the application's stability and maintainability.

- **Responsiveness**: The frontend currently lacks full responsiveness across different screen sizes and devices. Implementing responsive design principles will ensure that the application looks and works well on various devices.

- **Enhanced User Session Management**: While user authentication and sessions have been implemented, there's room for improvement. Enhancing session management, handling session timeouts, and incorporating proper error handling would enhance the user experience.




