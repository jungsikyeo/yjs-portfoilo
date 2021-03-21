import React, { useEffect, useRef, useState } from "react";
import "./styles/App.css";
import "./styles/codicon.css";
import "./styles/tailwind.css";
import "./styles/theme.css";
import "react-slidedown/lib/slidedown.css";
import { MenuBar } from "./pages/menu-bar";
import { Explorer } from "./pages/explorer";
import { Footer } from "./pages/footer";
import { Contents } from "./pages/contents";
import { Terminal } from "./pages/terminal";

const contentTabs: any[] = [
  {
    icon: "warning",
    title: "README.md",
    showClose: true,
    content:
      "# Hello World! 🙋🏻‍♂️ [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fjungsikyeo%2Fhit-counter&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)\n" +
      "\n" +
      "<div align=center>\n" +
      " \n" +
      "![header](https://capsule-render.vercel.app/api?type=waving&color=auto&height=150&section=header&text=JungsikYeo&fontSize=80&animation=fadeIn)\n" +
      "\n" +
      "## I am a Full-Stack Architecture. (Frontend & Backend Developer / DBA)\n" +
      "<br/>\n" +
      "\n" +
      "\n" +
      "</div>\n" +
      "\n" +
      "### My Skills\n" +
      "- Frontend Develop Skills\n" +
      " \n" +
      "   [![React Badge](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black)](https://ko.reactjs.org/) [![Vuejs Badge](https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=Vue.js&logoColor=white)](https://vuejs.org/) [![Javascript Badge](https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=black)](https://ko.wikipedia.org/wiki/Javascript/) [![Typescript Badge](https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=TypeScript&logoColor=white)](https://www.typescriptlang.org/) [![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white)](https://ko.wikipedia.org/wiki/HTML5) [![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white)](https://ko.wikipedia.org/wiki/CSS) [![Tailwindcss Badge](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat-square&logo=Tailwind%20CSS&logoColor=white&link=https://tailwindcss.com/)](https://tailwindcss.com/)\n" +
      "\n" +
      "- Backend Develop Skills\n" +
      "\n" +
      "   [![Java Badge](https://img.shields.io/badge/Java-007396?style=flat-square&logo=Java&logoColor=white)](https://java.com/ko/) [![Spring Badge](https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=Spring&logoColor=white)](https://spring.io/) [![NestJS Badge](https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=NestJS&logoColor=white)](https://nestjs.com/) [![NodeJS Badge](https://img.shields.io/badge/NodeJS-339933?style=flat-square&logo=Node.JS&logoColor=white)](https://nodejs.org/) [![Python Badge](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=white)](https://www.python.org/) [![Flask Badge](https://img.shields.io/badge/Flask-000000?style=flat-square&logo=Flask&logoColor=white)](https://flask.palletsprojects.com/) [![GraphQL Badge](https://img.shields.io/badge/GraphQL-E10098?style=flat-square&logo=GraphQL&logoColor=white)](https://graphql.org/) [![RabbitMQ Badge](https://img.shields.io/badge/RabbitMQ-FF6600?style=flat-square&logo=RabbitMQ&logoColor=white)](https://rabbitmq.com/) \n" +
      "\n" +
      "- DB for Development Skills \n" +
      "\n" +
      "   [![Oracle Badge](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=Oracle&logoColor=white)](https://www.oracle.com/) [![MongoDB Badge](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white)](https://www.mongodb.com/) [![PostgreSQL Badge](https://img.shields.io/badge/PostgreSQL-336791?style=flat-square&logo=PostgreSQL&logoColor=white)](https://www.postgresql.org/)\n" +
      "\n" +
      "- DBA\n" +
      "\n" +
      "   [![Oracle Badge](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=Oracle&logoColor=white)](https://www.oracle.com/)\n" +
      "\n" +
      "- DevOps\n" +
      "\n" +
      "   [![Docker Badge](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white)](https://docker.com) [![Github Badge](https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white)](https://github.com/) [![Jenkins Badge](https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=Jenkins&logoColor=white)](https://www.jenkins.io/) [![Netlify Badge](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=Netlify&logoColor=white)](https://www.netlify.com/) [![Heroku Badge](https://img.shields.io/badge/Heroku-430098?style=flat-square&logo=Heroku&logoColor=white)](https://www.heroku.com/) \n" +
      "\n" +
      "- OS\n" +
      "\n" +
      "   [![Redhat Badge](https://img.shields.io/badge/Redhat-EE0000?style=flat-square&logo=Red%20hat&logoColor=white)](https://www.redhat.com/ko) [![Ubuntu Badge](https://img.shields.io/badge/Ubuntu-E95420?style=flat-square&logo=Ubuntu&logoColor=white)](https://ubuntu.com/) [![Windows Badge](https://img.shields.io/badge/Windows-0078D6?style=flat-square&logo=Windows&logoColor=white)](https://www.microsoft.com/ko-kr/windows)\n" +
      "\n" +
      "- IDE\n" +
      "   \n" +
      "   [![Intellij Badge](https://img.shields.io/badge/IntelliJ%20IDEA-000000?style=flat-square&logo=IntelliJ%20IDEA&logoColor=white)](https://www.jetbrains.com/idea/) [![VSCode Badge](https://img.shields.io/badge/VSCode-007ACC?style=flat-square&logo=Visual%20Studio%20Code&logoColor=white)](https://code.visualstudio.com/)\n" +
      "\n" +
      "### Work of company\n" +
      "- DBA\n" +
      "- DevOps\n" +
      "- SRE (with [![Datadog Badge](https://img.shields.io/badge/Datadog-632CA6?style=flat-square&logo=Datadog&logoColor=white)](https://grafana.com/) [![Prometheus Badge](https://img.shields.io/badge/Prometheus-E6522C?style=flat-square&logo=Prometheus&logoColor=white)](https://prometheus.io/) [![Grafana Badge](https://img.shields.io/badge/Grafana-F46800?style=flat-square&logo=Grafana&logoColor=white)](https://grafana.com/))\n" +
      "- Team Communication (with [![Jira Badge](https://img.shields.io/badge/Jira-0052CC?style=flat-square&logo=Jira&logoColor=white)](https://www.atlassian.com/software/jira) [![Confluence Badge](https://img.shields.io/badge/Confluence-172B4D?style=flat-square&logo=Confluence&logoColor=white)](https://www.atlassian.com/software/confluence) [![Gitlab Badge](https://img.shields.io/badge/Gitlab-FCA121?style=flat-square&logo=Gitlab&logoColor=black)](https://about.gitlab.com/))\n" +
      "\n" +
      "\n" +
      "### Interest\n" +
      "- Toy Projects\n" +
      "- Public Cloud ([![AWS Badge](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=Amazon%20AWS&logoColor=white)](https://aws.amazon.com/ko/) [![GCP Badge](https://img.shields.io/badge/GCP-4285F4?style=flat-square&logo=Google%20Cloud&logoColor=white)](https://cloud.google.com/) [![OCI Badge](https://img.shields.io/badge/OCI-F80000?style=flat-square&logo=Oracle&logoColor=white)](https://www.oracle.com/kr/cloud/))\n" +
      "- Personal NAS (with [![Synology Badge](https://img.shields.io/badge/Synology-B5B5B6?style=flat-square&logo=Synology&logoColor=black)](https://www.oracle.com/kr/cloud/))\n" +
      "- MSA Architecture & SiteMesh & Istio\n" +
      "- Container Orchestration ([![Kubernetes Badge](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=Kubernetes&logoColor=white)](https://kubernetes.io))\n" +
      "- Pictures & Snapshot (with [![Instagram Badge](https://img.shields.io/badge/-Instagram-dd2a7b?style=flat-square&logo=instagram&logoColor=white&link=https://instagram.com/1985yjs/)](https://instagram.com/1985yjs/))\n" +
      "\n" +
      "### License\n" +
      "- ProDS for Data Science (from [![SDS Badge](https://img.shields.io/badge/SamsungSDS-1428A0?style=flat-square&logo=Samsung&logoColor=white)](https://www.samsungsds.com/)) \n" +
      "- Advanced for Software Programming Test (from [![SDS Badge](https://img.shields.io/badge/SamsungSDS-1428A0?style=flat-square&logo=Samsung&logoColor=white)](https://www.samsungsds.com/))\n" +
      "\n" +
      "##\n" +
      "\n" +
      "[![jungsik's GitHub stats](https://github-readme-stats.vercel.app/api?username=jungsikyeo&show_icons=true)](https://github.com/jungsikyeo/)\n" +
      "[![jungsik's github stats](https://github-readme-stats.vercel.app/api/top-langs/?username=jungsikyeo&show_icons=true&hide_border=true&title_color=004386&icon_color=004386&layout=compact)](https://github.com/jungsikyeo/)\n" +
      "\n" +
      "<div align=center>\n" +
      "  \n" +
      "[![Facebook Badge](https://img.shields.io/badge/-Facebook-1877f2?style=flat-square&logo=facebook&logoColor=white)](https://www.facebook.com/jeongsik.yeo/) \n" +
      "[![Instagram Badge](https://img.shields.io/badge/-Instagram-dd2a7b?style=flat-square&logo=instagram&logoColor=white&link=https://instagram.com/1985yjs/)](https://instagram.com/1985yjs/) \n" +
      "[![Gmail Badge](https://img.shields.io/badge/-Gmail-d14836?style=flat-square&logo=Gmail&logoColor=white&link=mailto:saeminam@gmail.com)](mailto:saeminam@gmail.com)\n" +
      "\n" +
      "\n" +
      "![footer](https://capsule-render.vercel.app/api?type=waving&color=auto&height=150&section=footer)\n" +
      "\n" +
      "</div>\n",
  },
  {
    icon: "warning",
    title: "README.md",
    showClose: true,
    content:
      "# Getting Started with Create React App\n" +
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
  },
  {
    icon: "warning",
    title: "TIMELINE.md",
    showClose: true,
    content:
      "{\n" +
      '"name": "Unisoft Online Exam",\n' +
      '"url": "",\n' +
      '"description": "Full featured examination management system",\n' +
      '"client": "Thien An Information Technology Company",\n' +
      '"achievement": "Being used in 2 universities even before the official launch",\n' +
      '"duration": "4 months (2020 Mar - now)",\n' +
      '"teamSize": 1,\n' +
      '"roles": [\n' +
      '"Solo developer",\n' +
      '"Backend development",\n' +
      '"Frontend development",\n' +
      '"UI/UX desgign",\n' +
      '"Software architect",\n' +
      '"Database design"\n' +
      "],\n" +
      '"techs": [\n' +
      '"Typesript",\n' +
      '"Node.js",\n' +
      '"Nest.js",\n' +
      '"Vue.js",\n' +
      '"Typeorm",\n' +
      '"Jest",\n' +
      '"SCSS",\n' +
      '"Tailwindcss",\n' +
      '"SQL Server",\n' +
      '"Redis",\n' +
      '"Websocket",\n' +
      '"Windows server",\n' +
      '"IIS",\n' +
      '"Git"\n' +
      "],\n" +
      '"features": [\n' +
      '"Question bank management",\n' +
      '"Exam paper bank management",\n' +
      '"Exam, Exam result, Room, Supervisor management",\n' +
      '"Student, Class, Falcuty, Specialization management",\n' +
      '"Admin, Role, Department management",\n' +
      '"Dynamic authorization",\n' +
      '"View logs and history",\n' +
      '"Import from or export to different file format",\n' +
      '"Manage exam participation in real-time",\n' +
      '"Security enhancement, cheating annihilation",\n' +
      '"Ability to integrate with existing system"\n' +
      "]\n" +
      "}",
  },
  {
    icon: "warning",
    title: "README.md",
    showClose: true,
    content:
      "```javascript\n" +
      "javascript = () => {\n" +
      "}\n" +
      "```\n" +
      "\n" +
      "" +
      "`javascript = () => {\n" +
      "}`\n" +
      "\n" +
      "***ABC***\n" +
      "***ABC***\n" +
      "***ABC***\n" +
      "***ABC***\n" +
      "\n" +
      "**CDE**\n" +
      "\n" +
      "~~vvv~~",
  },
];

function App() {
  let theme = localStorage.getItem("theme");
  if (!theme) {
    theme = "dark";
    localStorage.setItem("theme", theme);
  }
  document.documentElement.setAttribute("data-theme", theme);

  const onThemeHandler = async (e: any) => {
    const changeThemeId = e.currentTarget.id;
    localStorage.setItem("theme", changeThemeId);
    await document.documentElement.classList.add("theme-transition");
    await document.documentElement.setAttribute("data-theme", changeThemeId);
    await window.setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 1500);
  };

  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const headers = {
      Accept: "application/vnd.github.nightshade-preview+json",
      Authorization: `Token ${process.env.REACT_APP_GITHUB_PAT}`,
    };
    const url = "https://api.github.com/users/jungsikyeo/repos";
    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  const menuList: { [index: string]: any } = {
    menuRecentProjects: false,
    menuTechSkills: false,
    menuTimeline: false,
    menuLicense: false,
    menuExtensions: false,
    menuGithub: false,
    menuAboutMe: true,
    menuSettings: false,
  };
  const [menuState, setMenuState] = useState(menuList);
  const [toggleState, setToggleSate] = useState(menuList);
  const onMenuHandler = async (e: any) => {
    const newMenuState = { ...menuState };
    const newToggleState = { ...toggleState };
    const activeMenu = e.currentTarget.id;
    for (let key in newMenuState) {
      if (key === activeMenu) {
        await (newMenuState[key] = true);
        await (newToggleState[key] = !newToggleState[key]);
      } else {
        await (newMenuState[key] = false);
        await (newToggleState[key] = false);
      }
    }
    await setMenuState(newMenuState);
    await setToggleSate(newToggleState);
    await onExplorerMenuHandler();
  };

  const [allTabs, setAllTabs] = useState(contentTabs);

  const explorerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const handleDrag = (movementX: number, movementY: number) => {
    const contentPanel = contentRef.current;
    const terminalPanel = terminalRef.current;
    if (!contentPanel || !terminalPanel) {
      return;
    }
    const {
      y: terminalY,
    } = terminalPanel.getBoundingClientRect();
    const top = terminalY + movementY;

    if(top < 200) {
      return;
    }

    if (top > 200 && document.body.offsetHeight - 60 > top) {
      terminalPanel.style.top = `${terminalY + movementY}px`;
      terminalPanel.style.height = `calc(100% - ${terminalY + movementY}px)`;
      contentPanel.style.height = `${terminalY + movementY}px`;
    }
  };

  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<{
      width: number;
      height: number;
    }>({
      width: 0,
      height: 0,
    });

    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const explorerPanel = explorerRef.current;
    const contentPanel = contentRef.current;
    const terminalPanel = terminalRef.current;
    if (!explorerPanel || !contentPanel || !terminalPanel) {
      return;
    }

    if (window.innerHeight <= 300) {
      terminalPanel.style.display = "none";
      contentPanel.style.height = `100%`;
    } else {
      terminalPanel.style.display = "block";
      terminalPanel.style.height = "30%";
      terminalPanel.style.top = "70%";
      contentPanel.style.height = "70%";
    }

    if (contentPanel.clientWidth <= 700) {
      explorerPanel.style.left = "-200px";
      terminalPanel.style.width = "calc(100% - 48px)";
      terminalPanel.style.left = "48px";
      contentPanel.style.width = "calc(100% - 48px)";
      contentPanel.style.left = "48px";
    } else {
      explorerPanel.style.left = "48px";
      terminalPanel.style.width = "";
      terminalPanel.style.left = "";
      contentPanel.style.width = "";
      contentPanel.style.left = "";
    }

    return windowSize;
  };

  const size = useWindowSize();
  const [explorerViewState, setExplorerViewState] = useState(true);
  useEffect(() => {
    const explorerPanel = explorerRef.current;
    if (!explorerPanel) {
      return;
    }
    if (+explorerPanel.style.left.replaceAll("px", "") < 0) {
      setExplorerViewState(false);
    } else {
      explorerPanel.style.transform = "";
      explorerPanel.style.transition = "";
      setExplorerViewState(true);
    }
  }, [size]);
  const onExplorerMenuHandler = () => {
    const explorerPanel = explorerRef.current;
    if (!explorerPanel) {
      return;
    }
    if (!explorerViewState) {
      explorerPanel.style.transform = "translateX(248px)";
      explorerPanel.style.transition = "all .5s ease";
    }
  };

  return (
    <div
      className="w-full h-screen select-none"
      style={{
        fontSize: "13px",
        lineHeight: "1.4em",
        zIndex: 1,
        minWidth: "500px",
        minHeight: "522px",
      }}
    >
      <div
        className="w-full"
        style={{
          top: "0px",
          height: "calc(100% - 22px)",
        }}
      >
        <div
          className="w-full absolute whitespace-normal"
          style={{
            top: "0px",
            height: "calc(100% - 22px)",
          }}
        >
          <div
            className="w-full h-full relative whitespace-nowrap"
            style={{ minHeight: "500px" }}
          >
            <MenuBar
              onThemeHandler={onThemeHandler}
              onMenuHandler={onMenuHandler}
              menuState={menuState}
              toggleState={toggleState}
            />
            <Explorer
              onMenuHandler={onMenuHandler}
              menuState={menuState}
              toggleState={toggleState}
              explorerViewState={explorerViewState}
              repos={repos}
              explorerRef={explorerRef}
            />
            <Contents
              allTabs={allTabs}
              setAllTabs={setAllTabs}
              contentRef={contentRef}
            />
            <Terminal
              allTabs={allTabs}
              setAllTabs={setAllTabs}
              terminalRef={terminalRef}
              handleDrag={handleDrag}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
