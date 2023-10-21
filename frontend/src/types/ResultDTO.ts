export interface ResultDTO<TEntity>{
    success: boolean,
    errors: string[],
    data: TEntity | undefined
}

export const initialResultDTO = {
    success: false,
    errors: [],
    data: undefined
}