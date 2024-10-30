// 프로젝트의 타입 정의
export default interface Project {
  project_id: number;
  title: string;
  description: string;
  created_by: string;
  imageUrl?: string;
  goal_amount: number;
  current_amount: number;
  status: any;
  start_date: string;
  end_date: string;
  type: string;
  title_img: string;
}
export type ProjectDetail = {
  data: DetailProps;
};
export type DetailProps = {
  created_by: string;
  current_amount: number;
  description: string;
  end_date: string;
  goal_amount: string;
  project_id: number;

  start_date: string;
  status: string;
  title: string;
  type: string;
  title_img: string;
};
