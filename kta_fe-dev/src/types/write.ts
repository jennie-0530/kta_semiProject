export interface WriteProps {
  body: WriteBodyProps;
}

export type WriteBodyProps = {
  id?: number;
  title: string;
  amount: string;
  category: string;
  content: string;
  startDate: Date;
  endDate: Date;
  titleImg: string;
};
