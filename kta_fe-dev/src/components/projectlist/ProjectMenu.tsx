import { Link } from "react-router-dom";

const ProjectMenu = () => {
    return (<nav className="flex justify-center space-x-10">
        <Link to="/projects/all" className="font-medium px-3 py-5 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">All</Link>
        <Link to="/projects/promotion" className="font-medium px-3 py-5 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Promotion</Link>
        <Link to="/projects/event" className="font-medium px-3 py-5 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Event</Link>
        <Link to="/projects/goods" className="font-medium px-3 py-5 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Goods</Link>
        <Link to="/projects/etc" className="font-medium px-3 py-5 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Etc</Link>
    </nav>)
};

export default ProjectMenu;

