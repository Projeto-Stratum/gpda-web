export interface QuestionarioPayload {
    q1_1: string;
    q1_2: string;
    q1_3: string;
    q2_1: string;
    q2_2: string;
    q2_3: string;
    q3_1: string;
    q3_2: string;
    q3_3: string;
}

export type QuestaoType = {
    id: string;
    pergunta: string;
};


interface Questionario {
    dor: QuestaoType[];
    solucao: QuestaoType[];
    apresentacao: QuestaoType[];
}

export interface AvaliacaoResponse { 
    message: string;
}

export interface JudgeAuthPayload {
    name: string;
}

export interface JudgeAuthResponse {
    name: string;
    status: string;
}

export interface AdminAuthPayload {
    username: string;
    password: string;
}

  