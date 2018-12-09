export function setHeaderImageUrl(url) {
	return dispatch => new Promise(
		(resolve, reject) => {
			return resolve(
				dispatch(
					{
						type: 'UI_HEADER_IMAGE_URL_SET',
						data: url
					}
				)
			)
		}
	)
}