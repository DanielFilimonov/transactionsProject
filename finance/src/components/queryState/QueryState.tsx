import { ReactNode } from "react";
import { ApiError, getErrorMessage } from "../../api/apiError";

export interface IQueryState {
	isLoading: boolean;
	isError: boolean;
	error?: ApiError;
	loadingText?: string;
	errorText?: string;
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
	children,
}: IQueryStateProps) => {
	if (isLoading) {
		return <p>{loadingText}</p>;
	}

	if (isError) {
		return <p>{errorText ?? getErrorMessage(error)}</p>;
	}

	return <>{children ?? null}</>;
};

export default QueryState;
