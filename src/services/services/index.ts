import { RawResponse } from "@/entities/Response";
import { apiV1 } from "@/libs/axios";
import parseResponseData from "@/utils/parseResponseData";
import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from "@tanstack/react-query";
import { keyGetService, keyListService } from "./keys";
import { AxiosError } from "axios";
import { ServiceModel } from "@/entities/ServiceModel";

export const useListService = () => {
  return useQuery(keyListService(), () =>
    apiV1.get<RawResponse<ServiceModel[]>>(`/services/`).then(parseResponseData)
  );
};

export const useGetService = (id: number) => {
  return useQuery(
    keyGetService(id),
    () =>
      apiV1
        .get<RawResponse<ServiceModel>>(`/services/${id}`)
        .then(parseResponseData),
    {
      enabled: Boolean(id),
    }
  );
};

export const useCreateService = (
  options?: UseMutationOptions<ServiceModel, AxiosError, ServiceModel>
) => {
  return useMutation<ServiceModel, AxiosError, ServiceModel>(
    (data) =>
      apiV1
        .post<RawResponse<ServiceModel>>(`/services/`, data)
        .then(parseResponseData),
    options
  );
};

export const useUpdateService = (
  options?: UseMutationOptions<ServiceModel, AxiosError, ServiceModel>
) => {
  return useMutation<ServiceModel, AxiosError, ServiceModel>(
    (data) =>
      apiV1
        .put<RawResponse<ServiceModel>>(`/services/${data._id}`, data)
        .then(parseResponseData),
    options
  );
};

export const useDeleteService = (
  options?: UseMutationOptions<
    ServiceModel,
    AxiosError,
    // DeleteUserExchangeProps,
    ServiceModel
  >
) => {
  return useMutation<ServiceModel, AxiosError, ServiceModel>(
    ({ _id }) =>
      apiV1
        .delete<RawResponse<ServiceModel>>(`/services/${_id}`)
        .then(parseResponseData),
    options
  );
};
