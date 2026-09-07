/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookApiResponse } from '../models/BookApiResponse';
import type { BookResponse } from '../models/BookResponse';
import type { CreateBookRequest } from '../models/CreateBookRequest';
import type { Page_BookResponse_ } from '../models/Page_BookResponse_';
import type { UpdateBookRequest } from '../models/UpdateBookRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BookControllerService {
    /**
     * getAllBooks
     * @returns Page_BookResponse_ OK
     * @throws ApiError
     */
    public static getAllBooksUsingGet({
        category,
        page,
        sort,
    }: {
        /**
         * category
         */
        category?: 'AI' | 'APP' | 'CERTIFICATION_CAREER' | 'COMPUTER_LANGUAGE' | 'DATA_ANALYSIS_SECURITY' | 'ETC' | 'FRONTEND' | 'GAME' | 'LECTURE_TEXTBOOK' | 'MATH_ELECTRONICS',
        /**
         * page
         */
        page?: number,
        /**
         * sort
         */
        sort?: 'CREATED_AT' | 'RENT_TIME' | 'TITLE',
    }): CancelablePromise<Page_BookResponse_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/book/all',
            query: {
                'category': category,
                'page': page,
                'sort': sort,
            },
        });
    }
    /**
     * searchBooksFromAPI
     * @returns BookApiResponse OK
     * @throws ApiError
     */
    public static searchBooksFromApiUsingGet({
        query,
        page,
    }: {
        /**
         * query
         */
        query: string,
        /**
         * page
         */
        page?: number,
    }): CancelablePromise<Array<BookApiResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/book/naver/search',
            query: {
                'page': page,
                'query': query,
            },
        });
    }
    /**
     * addBook
     * @returns any OK
     * @throws ApiError
     */
    public static addBookUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: CreateBookRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/book/new',
            body: request,
        });
    }
    /**
     * searchBooks
     * @returns Page_BookResponse_ OK
     * @throws ApiError
     */
    public static searchBooksUsingGet({
        keyword,
        search,
        category,
        page,
        sort,
    }: {
        /**
         * keyword
         */
        keyword: string,
        /**
         * search
         */
        search: 'AUTHOR' | 'TAG' | 'TITLE' | 'TITLE_OR_AUTHOR',
        /**
         * category
         */
        category?: 'AI' | 'APP' | 'CERTIFICATION_CAREER' | 'COMPUTER_LANGUAGE' | 'DATA_ANALYSIS_SECURITY' | 'ETC' | 'FRONTEND' | 'GAME' | 'LECTURE_TEXTBOOK' | 'MATH_ELECTRONICS',
        /**
         * page
         */
        page?: number,
        /**
         * sort
         */
        sort?: 'CREATED_AT' | 'RENT_TIME' | 'TITLE',
    }): CancelablePromise<Page_BookResponse_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/book/search',
            query: {
                'category': category,
                'keyword': keyword,
                'page': page,
                'search': search,
                'sort': sort,
            },
        });
    }
    /**
     * getBook
     * @returns BookResponse OK
     * @throws ApiError
     */
    public static getBookUsingGet({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BookResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/book/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * updateBook
     * @returns any OK
     * @throws ApiError
     */
    public static updateBookUsingPut({
        id,
        request,
    }: {
        /**
         * id
         */
        id: number,
        /**
         * request
         */
        request: UpdateBookRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/book/{id}',
            path: {
                'id': id,
            },
            body: request,
        });
    }
    /**
     * deleteBook
     * @returns any OK
     * @throws ApiError
     */
    public static deleteBookUsingDelete({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/book/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * borrowBook
     * @returns any OK
     * @throws ApiError
     */
    public static borrowBookUsingPost({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/book/{id}/borrow',
            path: {
                'id': id,
            },
        });
    }
    /**
     * returnBook
     * @returns any OK
     * @throws ApiError
     */
    public static returnBookUsingPost({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/book/{id}/return',
            path: {
                'id': id,
            },
        });
    }
}
