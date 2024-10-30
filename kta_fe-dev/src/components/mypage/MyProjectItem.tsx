import { useState } from 'react';
import { Link } from "react-router-dom";
import { formatDate, getFundingState, getProgress } from "../../util/projectUtils";
import Project from '../../types/project';
import { projectStatusModifyApi } from '../../api/requests/projectApi';

interface ProjectItemProps {
    project: Project;
}

const MyProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
    const [status, setStatus] = useState(project.status); // 프로젝트 상태 관리
    const userId = sessionStorage.getItem("user_id");

    const progress = getProgress(project);

    const handleStatusChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = e.target.value;
        setStatus(newStatus); // 상태 업데이트

        // API 호출
        try {
            await projectStatusModifyApi(project.project_id.toString(), newStatus);
            console.log(`프로젝트 상태 변경 : "${newStatus}"`);
        } catch (error) {
            console.error('프로젝트 상태 변경 중 오류 발생:', error);
        }
    };

    return (
        <div className='border border-gray-200 rounded-lg shadow-lg mb-6 p-4 flex justify-between items-center'>
            {/* 프로젝트 정보 부분 */}
            <Link
                to={`/projects/detail/${project.project_id}`}
                key={project.project_id}
                className='flex items-center flex-grow'
            >
                <div className='flex-shrink-0 mr-6'>
                    {/* <h2 className='text-md font-bold text-center'>{project.created_by}</h2> */}
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
                        {getFundingState(status)}
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
            </Link>

            {/* 상태 변경 select 박스 */}

            {// eslint-disable-next-line
                userId == project.created_by ? <div className='flex flex-col items-center border border-gray-300 rounded-lg p-4'>
                    <label htmlFor='status' className='mb-2 text-xl font-bold'>
                        상태 변경
                    </label>
                    <select
                        id='status'
                        value={status}
                        onChange={handleStatusChange}
                        className='border border-gray-300 rounded-lg p-2 w-32'
                    >
                        {/* <option value="pending">심사중</option> */}
                        <option value="ongoing">진행중</option>
                        <option value="completed">종료됨</option>
                        <option value="failed">취소됨</option>
                    </select>
                </div> : ""}
        </div>
    );
};

export default MyProjectItem;
