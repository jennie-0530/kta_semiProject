import { Link } from "react-router-dom"
import { formatDate, getFundingState, getProgress } from "../../util/projectUtils";
import Project from '../../types/project';

interface ProjectItemProps {
    project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {

    const progress = getProgress(project);

    return (<Link
        to={`/projects/detail/${project.project_id}`}
        key={project.project_id}
        className='border border-gray-200 rounded-lg shadow-lg mb-6 p-4 flex cursor-pointer'
    >
        <div className='flex-shrink-0 mr-6'>
            {/* <h2 className='text-md font-bold'>{project.created_by}</h2> */}
            <img
                src={project.title_img || "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fsolid-part-6%2F128%2Fimage_icon-512.png&type=sc960_832"}
                alt={project.title}
                className='object-cover'
                style={{ width: '150px', height: '150px' }}
            />
        </div>
        <div className='flex-grow'>
            <h3 className='text-2xl mt-4 font-semibold'>{project.title}</h3>
            <p className='text-gray-600 mt-2 my-2'>{project.type}</p>
            <p className='my-2'>
                <strong>{formatDate(project.start_date)}</strong> 부터{' '}
                <strong>{formatDate(project.end_date)}</strong> 까지
            </p>
            <p className='my-2 text-lg font-bold'>
                {getFundingState(project.status)}
            </p>

            {/* progress bar */}
            <div className='w-full bg-gray-300 rounded-full h-5 relative'>
                <div
                    className='bg-blue-500 h-5 rounded-full'
                    style={{ width: `${Math.min(progress, 100)}%` }}
                ></div>
                <span className='absolute inset-0 text-center text-white text-sm font-bold'>
                    {progress}%
                </span>
            </div>
        </div>
    </Link>)
}

export default ProjectItem;