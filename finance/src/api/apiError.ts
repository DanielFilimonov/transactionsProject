import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export type ApiError = FetchBaseQueryError | SerializedError | undefined;

const isFetchBaseQueryError = (
	error: ApiError,
): error is FetchBaseQueryError => {
	return typeof error === "object" && error !== null && "status" in error;
};

const extractServerMessage = (data: unknown): string | undefined => {
	if (typeof data === "object" && data !== null && "error" in data) {
		const { error } = data as { error: unknown };
		return typeof error === "string" ? error : undefined;
	}
	return undefined;
};

const fetchBaseQueryStatusMessages: Record<string, string> = {
	FETCH_ERROR: "Нет соединения с сервером",
	PARSING_ERROR: "Не удалось обработать ответ сервера",
	TIMEOUT_ERROR: "Сервер не отвечает",
	CUSTOM_ERROR: "Произошла ошибка запроса",
};

export const getErrorMessage = (error: ApiError): string => {
	if (isFetchBaseQueryError(error)) {
		const serverMessage = extractServerMessage(error.data);
		if (serverMessage) return serverMessage;

		if (typeof error.status === "string") {
			return fetchBaseQueryStatusMessages[error.status] ?? "Произошла ошибка запроса";
		}

		return `Ошибка запроса (${error.status})`;
	}

	return error?.message ?? "Произошла неизвестная ошибка";
};
