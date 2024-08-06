import { QuestionarioPayload, JudgeAuthPayload, AdminAuthPayload, JudgeAuthResponse } from "@/entities/questionario";
import { TimesEngFuturo } from "@/entities/Times";
import { APIError, RawResponse } from "@/entities/Response";
import { apiV1 } from "@/libs/axios";
import parseResponseData from "@/utils/parseResponseData";
import { useMutation, UseMutationOptions, useQuery } from "@tanstack/react-query";
import { keyListJudges, keyListTeams } from "./keys";
import { JudgeEngFut } from "@/entities/Judges";

export const usePostVote = (
  options?: UseMutationOptions<QuestionarioPayload, APIError, { data: QuestionarioPayload, id: string }>
) => {
  return useMutation<QuestionarioPayload, APIError, { data: QuestionarioPayload, id: string }>(
    ({ data, id }) =>
      apiV1
        .post<RawResponse<QuestionarioPayload>>(`/vote/compute/${id}`, data)
        .then(parseResponseData),
    options
  );
};

export const useAuthenticateJudge = (
  options?: UseMutationOptions<JudgeAuthPayload, APIError, JudgeAuthPayload>
) => {
  return useMutation<JudgeAuthPayload, APIError, JudgeAuthPayload>(
    ( data ) =>
      apiV1
        .post<RawResponse<JudgeAuthResponse>>(`/vote/verify`, data)
        .then(parseResponseData),
    options
  );
};

export const useAuthenticateAdmin = (
  options?: UseMutationOptions<AdminAuthPayload, APIError, AdminAuthPayload>
) => {
  return useMutation<AdminAuthPayload, APIError, AdminAuthPayload>(
    ( data ) =>
      apiV1
        .post<RawResponse<AdminAuthPayload>>(`/vote/verify`, data)
        .then(parseResponseData),
    options
  );
};

export const useUncomputeVote = (
  options?: UseMutationOptions<JudgeAuthPayload, APIError, { data: QuestionarioPayload, id: string }>
) => {
  return useMutation<JudgeAuthPayload, APIError, { data: QuestionarioPayload, id: string }>(
    ( {data, id} ) =>
      apiV1
        .post<RawResponse<JudgeAuthPayload>>(`/admin/uncompute/${id}`, data)
        .then(parseResponseData),
    options
  );
};

export const useListTeams = () => {
  return useQuery(keyListTeams(), () =>
    apiV1.get<RawResponse<TimesEngFuturo[]>>(`/admin/teams/`).then(parseResponseData)
  );
};

export const useListJudges = () => {
  return useQuery(keyListJudges(), () =>
    apiV1.get<RawResponse<JudgeEngFut[]>>(`/admin/judges/`).then(parseResponseData)
  );
};