import React from "react";
import "../styles/terminal.css";

export const Terminal = (props: any) => {
  const addTab = () => {
    const newTabs = [...props.allTabs];
    newTabs?.push({
      icon: "loading",
      title: "README.md",
      showClose: true,
      content: "# Getting Started with Create React App\n" +
          "\n" +
          "This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\n" +
          "\n" +
          "## Available Scripts\n" +
          "\n" +
          "In the project directory, you can run:\n" +
          "\n" +
          "### `yarn start`\n" +
          "\n" +
          "Runs the app in the development mode.\\\n" +
          "Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\n" +
          "\n" +
          "The page will reload if you make edits.\\\n" +
          "You will also see any lint errors in the console.\n" +
          "\n" +
          "### `yarn test`\n" +
          "\n" +
          "Launches the test runner in the interactive watch mode.\\\n" +
          "See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.\n" +
          "\n" +
          "### `yarn build`\n" +
          "\n" +
          "Builds the app for production to the `build` folder.\\\n" +
          "It correctly bundles React in production mode and optimizes the build for the best performance.\n" +
          "\n" +
          "The build is minified and the filenames include the hashes.\\\n" +
          "Your app is ready to be deployed!\n" +
          "\n" +
          "See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.\n" +
          "\n" +
          "### `yarn eject`\n" +
          "\n" +
          "**Note: this is a one-way operation. Once you `eject`, you can’t go back!**\n" +
          "\n" +
          "If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.\n" +
          "\n" +
          "Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.\n" +
          "\n" +
          "You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.\n" +
          "\n" +
          "## Learn More\n" +
          "\n" +
          "You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).\n" +
          "\n" +
          "To learn React, check out the [React documentation](https://reactjs.org/).\n",
    });
    props.setAllTabs(newTabs);
  };
  return (
    <div className="terminal absolute whitespace-normal">
      Terminal
      <button onClick={addTab}>add tab</button>
    </div>
  );
};
