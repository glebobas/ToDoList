export type addTodoTypes<P = {}> = {
    open: boolean;
    props?: P;
}
export type portalPropsType = {
    text: string | null
    mode: string | null;
}