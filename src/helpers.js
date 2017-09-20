export function buildActionCreator(actionType, actionCreatorWithoutType) {
	if (process.env.NODE_ENV === 'development') {
		const isTypeSerializable = _.isString(actionType);
		if (!isTypeSerializable) {
			throw new Error('Action type should be a string!');
		}

		throwIfDefinedAndNotFunction(actionCreatorWithoutType, actionType);
	}

	const perfixedActionType = `@ROKZ_UI/${actionType}`;

	const actionCreator = (...args) =>
		Object.assign(
			{ type: perfixedActionType },
			!_.isUndefined(actionCreatorWithoutType) &&
			actionCreatorWithoutType(...args),
		);

	actionCreator.toString = () => perfixedActionType;

	return actionCreator;
}

export function createReducer(initialState, reducerMap) {
	return (state = initialState, action) => {
		const reducer = reducerMap[action.type];

		return reducer
			? reducer(state, action.payload, action.meta)
			: state;
	};
}