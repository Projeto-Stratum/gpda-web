import { AvaliacaoResponse, QuestionarioPayload } from "@/entities/questionario";
import { RawResponse } from "@/entities/Response";
import { apiV1 } from "@/libs/axios";
import parseResponseData from "@/utils/parseResponseData";
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { ApiError } from "next/dist/server/api-utils";

export const usePostVote = (
  options?: UseMutationOptions<QuestionarioPayload, ApiError, { data: QuestionarioPayload, id: string }>
) => {
  return useMutation<QuestionarioPayload, ApiError, { data: QuestionarioPayload, id: string }>(
    ({ data, id }) =>
      apiV1
        .post<RawResponse<QuestionarioPayload>>(`/vote/compute/${id}`, data)
        .then(parseResponseData),
    options
  );
};