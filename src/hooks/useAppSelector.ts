import { RootState } from "@reduxjs/toolkit/dist/query/core/apiState";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector