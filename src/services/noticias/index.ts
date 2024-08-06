import { Cep } from "@/entities/Cep";
import { RawResponse } from "@/entities/Response";
import { apiSpaceX } from "@/libs/axios";
import parseResponseData from "@/utils/parseResponseData";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { ApiError } from "next/dist/server/api-utils";
import { keyGetNoticias, keyGetRockets, keyGetShips } from "./keys";
import { RocketInfo } from "@/entities/Rocket";

interface EventDetails {
  details: string;
  event_date_unix: number;
  event_date_utc: string;
  flight_number: null | number;
  id: number;
  links: {
    article: string | null;
    reddit: string | null;
    wikipedia: string;
  };
  title: string;
}

export const useGetNoticiasSpaceX = () => {
  return useQuery(keyGetNoticias(), () =>
    apiSpaceX
      .get<RawResponse<EventDetails[]>>(`/history`)
      .then(parseResponseData)
  );
};

export const useGetRocketsSpaceX = () => {
  return useQuery(keyGetRockets(), () =>
    apiSpaceX.get<RawResponse<RocketInfo[]>>(`/rockets`).then(parseResponseData)
  );
};

export const useGetShips = () => {
  return useQuery(keyGetShips(), () =>
    apiSpaceX.get<RawResponse<any[]>>(`/ships`).then(parseResponseData)
  );
};
