
interface BaseInterface {
    name: string;
    created_at: string;
    updated_at: string;
}
  
export interface JudgeEngFut extends BaseInterface {
[key: `team_${number}`]: number;
}