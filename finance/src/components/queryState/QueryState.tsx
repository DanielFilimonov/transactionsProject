import { ReactNode } from "react";
import { ApiError, getErrorMessage } from "../../api/apiError";

interface IQueryStateProps {
	isLoading: boolean;
	isError: boolean;
	error?: ApiError;
	loadingText?: string;
	errorText?: string;
	children: ReactNode;
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

	return <>{children}</>;
};

export default QueryState;
