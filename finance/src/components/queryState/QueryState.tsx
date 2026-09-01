import { ReactNode } from "react";
import { ApiError, getErrorMessage } from "../../api/apiError";

export interface IQueryState {
	isLoading: boolean;
	isError: boolean;
	error?: ApiError;
	loadingText?: string;
	errorText?: string;
	isDataEmpty?: boolean;
	dataEmpty?: string;
}

interface IQueryStateProps extends IQueryState {
	children?: ReactNode;
}

const QueryState = ({
	isLoading,
	isError,
	error,
	loadingText = "Данные загружаются...",
	errorText,
	isDataEmpty,
	dataEmpty = "Данных нет",
	children,
}: IQueryStateProps) => {
	if (isLoading) {
		return <p>{loadingText}</p>;
	}

	if (isError) {
		return <p>{errorText ?? getErrorMessage(error)}</p>;
	}

	if (isDataEmpty) {
		return <p>{dataEmpty}</p>;
	}
	return <>{children ?? null}</>;
};

export default QueryState;
