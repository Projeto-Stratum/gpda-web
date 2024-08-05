import { QuestionarioPayload } from "@/entities/questionario";
import { TimesEngFuturo } from "@/entities/Times";
import { APIError, RawResponse } from "@/entities/Response";
import { apiV1 } from "@/libs/axios";
import parseResponseData from "@/utils/parseResponseData";
import { useMutation, UseMutationOptions, useQuery } from "@tanstack/react-query";
import { keyListTeams } from "./keys";

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

export const useListTeams = () => {
  return useQuery(keyListTeams(), () =>
    apiV1.get<RawResponse<TimesEngFuturo[]>>(`/admin/teams/`).then(parseResponseData)
  );
};