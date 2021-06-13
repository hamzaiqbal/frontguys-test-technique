import { ApiResponseType } from 'src/app/shared-module/enums';

export interface IApiReponse {
	response: ApiResponseType;
}

export interface IApiReponseError extends IApiReponse {
	error: string;
}
