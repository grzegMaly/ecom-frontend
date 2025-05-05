import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "../store/actions";

export const useProductFilter = () => {

    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const params = new URLSearchParams();

        const currentPage = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
        params.set("pageNumber", currentPage - 1);
        const sortOrder = searchParams.get("sortBy") || "asc";
        const categoryParams = searchParams.get("category") || null;
        if (categoryParams) {
            params.set("category", categoryParams);
        }

        const keyword = searchParams.get("keyword") || null;
        if (keyword) {
            params.set("keyword", keyword);
        }

        params.set("sortBy", "price");
        params.set("sortOrder", sortOrder);

        const queryString = params.toString();

        dispatch(fetchProducts(queryString))
    }, [dispatch, searchParams]);
};