import * as Types from './actionType';

const initailState = {
	productArr: [],
	totalPages: '',
	singleData: {},
	cart: [],
	order: [],
};
// come by desturcturing action.js
export const reducer = (state = initailState, { type, payload }) => {
	switch (type) {
		case Types.GET_PRODUCT_SUCCESS: {
			return {
				...state,
				productArr: payload.data,
				totalPages: payload.totalPages,
			};
		}

		case Types.Single_PRODUCT_SUCCESS: {
			return {
				...state,
				singleData: payload,
			};
		}

		case Types.GET_CART_SUCCESS: {
			return {
				...state,
				cart: [...state.cart, payload],
			};
		}

		case Types.ORDER_PRODUCT_SUCCESS: {
			return {
				...state,
				order: [...state.order, payload],
			};
		}

		default:
			return state;
	}
};
