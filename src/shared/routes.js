import Home from "./Home/Home.jsx";
import News from "./News/News.jsx";

const routes =  [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/news',
        component: News
    }
];

export default routes;