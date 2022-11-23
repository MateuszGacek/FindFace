export function checkProfileData(data) {
	const user = {
		first_name: data.first_name || 'No name',
		image_url:
			data.image_url ||
			'https://i.pinimg.com/280x280_RS/9e/36/c8/9e36c8ae6b12cd6cec3b1de2591da9e4.jpg',
		last_name: data.last_name || 'No surname',
		uuid: data.uuid,
	};
	return user;
}
